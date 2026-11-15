import type { CaseStudy } from '../../types/caseStudy'
import { isItHalny } from './isItHalny'
import { theSkinRoutine } from './theSkinRoutine'

export const caseStudies: CaseStudy[] = [theSkinRoutine, isItHalny]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}

export const missingCaseStudy: CaseStudy = {
  slug: 'case-study',
  title: 'Case study',
  summary: 'This case study is currently being documented.',
  heroFigure: {
    alignment: 'center',
    width: 'full',
    label: 'Opening project image coming soon',
    accessibleLabel: 'Opening case study image coming soon',
    caption: 'Opening project view',
  },
  blocks: [],
}
