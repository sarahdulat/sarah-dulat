import type { ResponsiveImage } from '../../../types/caseStudy'

import clustersImage640 from './clusters-640.webp'
import clustersImage1280 from './clusters-1280.webp'

export const clustersImage: ResponsiveImage = {
  src: clustersImage1280,
  srcset: [
    { src: clustersImage640, width: 640 },
    { src: clustersImage1280, width: 1280 },
  ],
  width: 1280,
  height: 831,
}
