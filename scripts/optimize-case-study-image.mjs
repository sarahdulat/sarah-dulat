import { mkdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import sharp from 'sharp'

const TARGET_WIDTHS = [640, 1280, 1920, 2560]
const WEBP_OPTIONS = {
  effort: 6,
  quality: 84,
  smartSubsample: true,
}

const [inputPath, outputKey] = process.argv.slice(2)

if (!inputPath || !outputKey) {
  console.error('Usage: npm run optimize-image -- <input-file> <project-slug/image-name>')
  process.exit(1)
}

if (!/^[a-z0-9-]+\/[a-z0-9-]+$/.test(outputKey)) {
  console.error('The output key must look like project-slug/image-name.')
  process.exit(1)
}

const [projectSlug, imageName] = outputKey.split('/')
const projectRoot = process.cwd()
const outputDirectory = path.join(projectRoot, 'src', 'assets', 'case-studies', projectSlug)

const source = sharp(inputPath).rotate()
const metadata = await source.metadata()

if (!metadata.width || !metadata.height) {
  console.error('Could not determine the source image dimensions.')
  process.exit(1)
}

const widths = TARGET_WIDTHS.filter((width) => width <= metadata.width)

if (widths.length === 0) {
  widths.push(metadata.width)
}

await mkdir(outputDirectory, { recursive: true })

const variants = []

for (const width of widths) {
  const filename = `${imageName}-${width}.webp`
  const outputPath = path.join(outputDirectory, filename)
  const info = await source
    .clone()
    .resize({ width, withoutEnlargement: true })
    .webp(WEBP_OPTIONS)
    .toFile(outputPath)
  const fileStats = await stat(outputPath)

  variants.push({
    filename,
    width: info.width,
    height: info.height,
    bytes: fileStats.size,
  })
}

const largest = variants.at(-1)
const variableName = `${imageName.replace(/-([a-z0-9])/g, (_, character) => character.toUpperCase())}Image`
const imports = variants
  .map(({ filename, width }) => `import ${variableName}${width} from './${filename}'`)
  .join('\n')
const sources = variants
  .map(({ width }) => `    { src: ${variableName}${width}, width: ${width} },`)
  .join('\n')
const moduleContents = `import type { ResponsiveImage } from '../../../types/caseStudy'

${imports}

export const ${variableName}: ResponsiveImage = {
  src: ${variableName}${largest.width},
  srcset: [
${sources}
  ],
  width: ${largest.width},
  height: ${largest.height},
}
`

await writeFile(path.join(outputDirectory, `${imageName}.ts`), moduleContents, 'utf8')

for (const variant of variants) {
  console.log(
    `${variant.filename}: ${variant.width}×${variant.height}, ${Math.round(variant.bytes / 1024)} KB`,
  )
}

console.log(
  `Generated ${path.relative(projectRoot, path.join(outputDirectory, `${imageName}.ts`))}`,
)
