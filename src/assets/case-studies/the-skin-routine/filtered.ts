import type { ResponsiveImage } from '../../../types/caseStudy'

import filteredImage640 from './filtered-640.webp'
import filteredImage1280 from './filtered-1280.webp'
import filteredImage1920 from './filtered-1920.webp'
import filteredImage2560 from './filtered-2560.webp'

export const filteredImage: ResponsiveImage = {
  src: filteredImage2560,
  srcset: [
    { src: filteredImage640, width: 640 },
    { src: filteredImage1280, width: 1280 },
    { src: filteredImage1920, width: 1920 },
    { src: filteredImage2560, width: 2560 },
  ],
  width: 2560,
  height: 1418,
}
