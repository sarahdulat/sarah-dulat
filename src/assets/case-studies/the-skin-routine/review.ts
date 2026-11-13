import type { ResponsiveImage } from '../../../types/caseStudy'

import reviewImage640 from './review-640.webp'
import reviewImage1280 from './review-1280.webp'
import reviewImage1920 from './review-1920.webp'
import reviewImage2560 from './review-2560.webp'

export const reviewImage: ResponsiveImage = {
  src: reviewImage2560,
  srcset: [
    { src: reviewImage640, width: 640 },
    { src: reviewImage1280, width: 1280 },
    { src: reviewImage1920, width: 1920 },
    { src: reviewImage2560, width: 2560 },
  ],
  width: 2560,
  height: 1419,
}
