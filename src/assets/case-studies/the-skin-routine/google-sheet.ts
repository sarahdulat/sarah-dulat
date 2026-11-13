import type { ResponsiveImage } from '../../../types/caseStudy'

import googleSheetImage640 from './google-sheet-640.webp'
import googleSheetImage1280 from './google-sheet-1280.webp'
import googleSheetImage1920 from './google-sheet-1920.webp'
import googleSheetImage2560 from './google-sheet-2560.webp'

export const googleSheetImage: ResponsiveImage = {
  src: googleSheetImage2560,
  srcset: [
    { src: googleSheetImage640, width: 640 },
    { src: googleSheetImage1280, width: 1280 },
    { src: googleSheetImage1920, width: 1920 },
    { src: googleSheetImage2560, width: 2560 },
  ],
  width: 2560,
  height: 1147,
}
