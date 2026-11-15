import type { ResponsiveImage } from '../../../types/caseStudy'

import polishHomepageImage640 from './polish-homepage-640.webp'
import polishHomepageImage1280 from './polish-homepage-1280.webp'
import polishHomepageImage1920 from './polish-homepage-1920.webp'
import polishHomepageImage2560 from './polish-homepage-2560.webp'

export const polishHomepageImage: ResponsiveImage = {
  src: polishHomepageImage2560,
  srcset: [
    { src: polishHomepageImage640, width: 640 },
    { src: polishHomepageImage1280, width: 1280 },
    { src: polishHomepageImage1920, width: 1920 },
    { src: polishHomepageImage2560, width: 2560 },
  ],
  width: 2560,
  height: 1418,
}
