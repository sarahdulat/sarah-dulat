import type { ResponsiveImage } from '../../../types/caseStudy'

import halnyHeroImage640 from './halny-hero-640.webp'
import halnyHeroImage1280 from './halny-hero-1280.webp'
import halnyHeroImage1920 from './halny-hero-1920.webp'
import halnyHeroImage2560 from './halny-hero-2560.webp'

export const halnyHeroImage: ResponsiveImage = {
  src: halnyHeroImage2560,
  srcset: [
    { src: halnyHeroImage640, width: 640 },
    { src: halnyHeroImage1280, width: 1280 },
    { src: halnyHeroImage1920, width: 1920 },
    { src: halnyHeroImage2560, width: 2560 },
  ],
  width: 2560,
  height: 1418,
}
