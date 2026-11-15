import type { ResponsiveImage } from '../../../types/caseStudy'

import stationMapImage640 from './station-map-640.webp'
import stationMapImage1280 from './station-map-1280.webp'

export const stationMapImage: ResponsiveImage = {
  src: stationMapImage1280,
  srcset: [
    { src: stationMapImage640, width: 640 },
    { src: stationMapImage1280, width: 1280 },
  ],
  width: 1280,
  height: 853,
}
