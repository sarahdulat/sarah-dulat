import type { CaseStudy } from '../../types/caseStudy'

export const isItHalny: CaseStudy = {
  slug: 'jest-halny',
  title: 'Is it Halny?',
  summary:
    'A personal project exploring weather data to determine whether the Halny wind is blowing.',
  liveUrl: 'https://jest-halny.vercel.app/en',
  heroFigure: {
    alignment: 'center',
    width: 'full',
    label: 'Opening project image coming soon',
    accessibleLabel: 'Is it Halny? opening case study image placeholder',
    caption: 'Opening view of Is it Halny?',
  },
  blocks: [
    {
      type: 'copy',
      paragraphs: [
        'This page will become a more informal walkthrough of the project: what first made the idea interesting, where the work became complicated, and how design and implementation influenced each other.',
        'The finished version can begin with the thought or observation that started the project, then move naturally between the product, the interface, and the code rather than treating them as separate phases.',
      ],
    },
    {
      type: 'figure',
      label: 'Project detail image coming soon',
      alignment: 'left',
      width: 'large',
      accessibleLabel: 'Project detail image coming soon',
      caption: 'An early detail, reference, or moment from the work',
    },
    {
      type: 'copy',
      offset: true,
      paragraphs: [
        'Rather than documenting a perfect linear process, these notes can include experiments, discarded directions, interface details, and technical decisions beside the images they relate to.',
        'This is also a place to explain where designing in code changed the direction of the work, or where a visual decision created an interesting engineering constraint.',
      ],
    },
    {
      type: 'figure',
      label: 'Process image coming soon',
      alignment: 'center',
      width: 'medium',
      accessibleLabel: 'Process image coming soon',
      caption: 'A prototype, interaction, or implementation detail',
    },
    {
      type: 'copy',
      paragraphs: [
        'The closing thoughts can reflect on what changed during the project, what still feels unresolved, and what I would explore next. It does not need to force the work into a neat conclusion.',
      ],
    },
    {
      type: 'figure',
      label: 'Final project image coming soon',
      alignment: 'right',
      width: 'large',
      accessibleLabel: 'Final project image coming soon',
      caption: 'A final view or detail from Is it Halny?',
    },
  ],
}
