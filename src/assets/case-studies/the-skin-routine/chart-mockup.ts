import type { ResponsiveImage } from '../../../types/caseStudy'

import chartMockupImage640 from './chart-mockup-640.webp'
import chartMockupImage1280 from './chart-mockup-1280.webp'
import chartMockupImage1920 from './chart-mockup-1920.webp'

export const chartMockupImage: ResponsiveImage = {
  src: chartMockupImage1920,
  srcset: [
    { src: chartMockupImage640, width: 640 },
    { src: chartMockupImage1280, width: 1280 },
    { src: chartMockupImage1920, width: 1920 },
  ],
  width: 1920,
  height: 1604,
}
