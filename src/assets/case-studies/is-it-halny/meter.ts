import type { ResponsiveImage } from '../../../types/caseStudy'

import meterImage640 from './meter-640.webp'
import meterImage1280 from './meter-1280.webp'
import meterImage1920 from './meter-1920.webp'
import meterImage2560 from './meter-2560.webp'

export const meterImage: ResponsiveImage = {
  src: meterImage2560,
  srcset: [
    { src: meterImage640, width: 640 },
    { src: meterImage1280, width: 1280 },
    { src: meterImage1920, width: 1920 },
    { src: meterImage2560, width: 2560 },
  ],
  width: 2560,
  height: 750,
}
