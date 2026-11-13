import type { CaseStudy } from '../../types/caseStudy'
import { clustersImage } from '../../assets/case-studies/the-skin-routine/clusters'
import { filteredImage } from '../../assets/case-studies/the-skin-routine/filtered'
import { googleSheetImage } from '../../assets/case-studies/the-skin-routine/google-sheet'
import { homepageImage } from '../../assets/case-studies/the-skin-routine/homepage'
import { reviewImage } from '../../assets/case-studies/the-skin-routine/review'
import { thumbnailImage } from '../../assets/case-studies/the-skin-routine/thumbnail'

export const theSkinRoutine: CaseStudy = {
  slug: 'the-skin-routine',
  title: 'The Skin Routine',
  eyebrow: 'Personal project · Product design · Front-end development · Vue · TypeScript · D3',
  summary:
    'An interactive skincare guide designed and built around the idea that the best routine is one that fits your life.',
  thumbnail: {
    image: thumbnailImage,
    alt: 'The Skin Routine homepage showing routines plotted by cost and time commitment',
  },
  liveUrl: 'https://www.theskinroutine.com',
  heroFigure: {
    alignment: 'center',
    width: 'full',
    image: homepageImage,
    label: 'Homepage screenshot placeholder',
    accessibleLabel:
      'The Skin Routine homepage showing the routine chart and Sarah’s selected routine',
    caption: 'The Skin Routine homepage and interactive routine finder',
  },
  blocks: [
    {
      type: 'copy',
      heading: 'From spreadsheet to interactive chart',
      paragraphs: [
        'The Skin Routine started with a familiar conversation. Friends and family would ask about my skincare routine, I would enthusiastically explain every step and product, and eventually someone would ask me to write it all down.',
      ],
    },
    {
      type: 'figure',
      label: 'Original Google Sheet placeholder',
      alignment: 'right',
      width: 'medium',
      image: googleSheetImage,
      accessibleLabel:
        'The original Google Sheet showing Sarah’s detailed morning and evening skincare routines and product recommendations',
      caption: 'The detailed spreadsheet that inspired a more flexible way to explore routines',
    },
    {
      type: 'copy',
      paragraphs: [
        'My first solution was an exhaustive Google Sheet. It contained products, instructions, alternatives, and links, but it also raised new questions: What if someone had less time, a smaller budget, or different skin concerns?',
        'The vision was very clear, I imagined a four-quadrant chart that plotted routines by cost and time commitment. Instead of scrolling through endless recommendations, visitors could compare their options at a glance, choose a routine that fit their life, and explore its steps beside the chart.',
      ],
    },
    {
      type: 'copy',
      offset: true,
      heading: 'Designing for ease of use',
      paragraphs: [
        'The chart was the starting point, but the interface became more crowded as I added routines. Celebrity routines revealed an unexpected pattern: many landed in the expensive, low-time-commitment corner, while my own, more completely documented routine became an outlier.',
        'Filters and keyword search help visitors narrow the field by concern, product, or person without losing the broader overview. The chart scales down on smaller screens so the same mental model carries across devices.',
      ],
    },
    {
      type: 'figure',
      label: 'Filtered routine chart placeholder',
      alignment: 'center',
      width: 'large',
      image: filteredImage,
      accessibleLabel:
        'The routine chart filtered to people in their 20s with acne-prone skin, with Sabrina Carpenter’s routine selected',
      caption:
        'Filters and keyword search help visitors narrow a crowded chart to routines that fit their needs',
    },
    {
      type: 'copy',
      heading: 'Handling complexity',
      paragraphs: [
        "I built custom proximity-based clustering around the points' rendered positions. When routines appear close together, they collapse into an interactive group that opens a popover for individual selection.",
        'The distance threshold adapts to the available space, preserving more individual points on desktop while grouping more aggressively on mobile. It was a useful reminder that an interface designed around a small dataset has to evolve with its content.',
      ],
    },
    {
      type: 'figure',
      alignment: 'right',
      width: 'medium',
      label: 'Responsive cluster interaction placeholder',
      image: clustersImage,
      accessibleLabel:
        'A close-up of clustered routine points with a popover listing three individual routines',
      caption: 'Nearby routines group responsively, then expand into a popover for selection',
    },
    {
      type: 'copy',
      offset: true,
      heading: 'Building a connected experience',
      paragraphs: [
        'Celebrity routines helped populate the early chart and introduced a playful, curiosity-driven way to explore skincare. As the site grew, I added product reviews and connected them to related routines. Reviews link back to routines, while routines surface relevant reviews, giving visitors more than one path through the content.',
      ],
    },
    {
      type: 'figure',
      label: 'Reviews and related routines placeholder',
      alignment: 'left',
      width: 'large',
      image: reviewImage,
      accessibleLabel:
        'A product review page with featured products, related routines, and the review archive',
      caption:
        'Product reviews and routines link to one another to create a connected browsing experience',
    },
    {
      type: 'copy',
      paragraphs: [
        'I designed and developed the project from concept to launch using Vue, TypeScript, and D3. It also gave me space to explore Playwright and to build the interface with scoped CSS, choosing tools and patterns that suited the product rather than following a trend.',
      ],
    },
    {
      type: 'copy',
      heading: 'An ongoing experiment',
      paragraphs: [
        'One area I would like to revisit is the underlying product data. Products currently exist independently inside routines; centralizing them would make it easier to connect every review, compare products, and show all the routines in which each product appears.',
        'The Skin Routine is an ongoing experiment in turning the way I think about skincare into something other people can explore. What began as a spreadsheet became an exercise in information architecture, data visualization, and responsive interaction design. It is the kind of project I enjoy most: identifying a problem, designing an experience around it, and building the solution myself.',
      ],
    },
  ],
}
