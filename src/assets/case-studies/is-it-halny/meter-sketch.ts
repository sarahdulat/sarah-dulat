import type { ResponsiveImage } from '../../../types/caseStudy'

import meterSketchImage640 from './meter-sketch-640.webp'
import meterSketchImage1280 from './meter-sketch-1280.webp'

export const meterSketchImage: ResponsiveImage = {
  src: meterSketchImage1280,
  srcset: [
    { src: meterSketchImage640, width: 640 },
    { src: meterSketchImage1280, width: 1280 },
  ],
  width: 1280,
  height: 2069,
}
