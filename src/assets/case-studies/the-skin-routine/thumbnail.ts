import type { ResponsiveImage } from '../../../types/caseStudy'

import thumbnailImage640 from './thumbnail-640.webp'
import thumbnailImage1280 from './thumbnail-1280.webp'
import thumbnailImage1920 from './thumbnail-1920.webp'

export const thumbnailImage: ResponsiveImage = {
  src: thumbnailImage1920,
  srcset: [
    { src: thumbnailImage640, width: 640 },
    { src: thumbnailImage1280, width: 1280 },
    { src: thumbnailImage1920, width: 1920 },
  ],
  width: 1920,
  height: 1488,
}
