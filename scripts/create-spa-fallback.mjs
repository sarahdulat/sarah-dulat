import { copyFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const outputDirectory = path.join(process.cwd(), 'dist')

await copyFile(path.join(outputDirectory, 'index.html'), path.join(outputDirectory, '404.html'))

console.log('Generated dist/404.html for client-side routes')
