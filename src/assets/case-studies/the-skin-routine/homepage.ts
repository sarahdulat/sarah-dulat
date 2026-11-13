import type { ResponsiveImage } from '../../../types/caseStudy'

import homepageImage640 from './homepage-640.webp'
import homepageImage1280 from './homepage-1280.webp'
import homepageImage1920 from './homepage-1920.webp'
import homepageImage2560 from './homepage-2560.webp'

export const homepageImage: ResponsiveImage = {
  src: homepageImage2560,
  srcset: [
    { src: homepageImage640, width: 640 },
    { src: homepageImage1280, width: 1280 },
    { src: homepageImage1920, width: 1920 },
    { src: homepageImage2560, width: 2560 },
  ],
  width: 2560,
  height: 1418,
}
