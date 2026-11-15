export type FigureAlignment = 'left' | 'center' | 'right'
export type FigureWidth = 'small' | 'medium' | 'large' | 'full'

export interface ResponsiveImageSource {
  src: string
  width: number
}

export interface ResponsiveImage {
  src: string
  srcset: ResponsiveImageSource[]
  width: number
  height: number
}

export interface ProjectThumbnail {
  image: ResponsiveImage
  alt: string
}

export interface CaseStudyFigure {
  type: 'figure'
  label: string
  accessibleLabel: string
  caption: string
  image?: ResponsiveImage
  alignment?: FigureAlignment
  width?: FigureWidth
}

export interface CaseStudyCopy {
  type: 'copy'
  heading?: string
  paragraphs: string[]
  sideFigure?: Omit<CaseStudyFigure, 'type' | 'alignment' | 'width'>
  embed?: {
    src: string
    title: string
    caption?: string
    width: number
    height: number
  }
  links?: Array<{
    label: string
    href: string
  }>
  offset?: boolean
}

export type CaseStudyBlock = CaseStudyCopy | CaseStudyFigure

export interface CaseStudy {
  slug: string
  title: string
  eyebrow?: string
  summary: string
  thumbnail?: ProjectThumbnail
  liveUrl?: string
  figmaUrl?: string
  heroFigure: Omit<CaseStudyFigure, 'type'>
  blocks: CaseStudyBlock[]
}
