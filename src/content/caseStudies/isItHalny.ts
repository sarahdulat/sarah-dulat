import type { CaseStudy } from '../../types/caseStudy'
import { halny1902Image } from '../../assets/case-studies/is-it-halny/halny-1902'
import { halnyHeroImage } from '../../assets/case-studies/is-it-halny/halny-hero'
import { meterImage } from '../../assets/case-studies/is-it-halny/meter'
import { meterSketchImage } from '../../assets/case-studies/is-it-halny/meter-sketch'
import { polishHomepageImage } from '../../assets/case-studies/is-it-halny/polish-homepage'
import { stationMapImage } from '../../assets/case-studies/is-it-halny/station-map'

export const isItHalny: CaseStudy = {
  slug: 'jest-halny',
  title: 'Is it Halny?',
  eyebrow:
    'Personal project · Product design · Front-end development · React · OpenWeather API · i18n',
  summary:
    'An informal weather indicator exploring the signals that distinguish the Halny from an ordinary windy day.',
  thumbnail: {
    image: halnyHeroImage,
    alt: 'Is it Halny interface showing a maybe result over the Giewont mountain range',
  },
  liveUrl: 'https://jest-halny.vercel.app/en',
  heroFigure: {
    alignment: 'center',
    width: 'full',
    image: halnyHeroImage,
    label: 'Is it Halny interface',
    accessibleLabel:
      'Is it Halny interface showing a maybe result and six weather conditions over the Giewont mountain range',
    caption: 'The finished Is it Halny weather indicator',
  },
  blocks: [
    {
      type: 'copy',
      heading: 'What makes it Halny?',
      paragraphs: [
        'The Halny is a warm, dry, and gusty föhn wind that descends the northern side of the Tatra Mountains in Poland. It typically arrives from the south, raising the temperature while lowering humidity, and can bring abrupt gusts and changes in atmospheric pressure.',
        'Whenever the wind picked up or the clouds over the mountains looked suspicious, my family would ask, “Jest halny?”—is it Halny? I wanted to understand what distinguishes a Halny event from an ordinary windy day. A research paper examining two historic events showed that there is no single definition; meteorologists instead look for a combination of wind, temperature, humidity, pressure, and cloud signals.',
      ],
      links: [
        {
          label: 'Read the research paper',
          href: 'https://aerapa.conference.ubbcluj.ro/2015/PDF/15_SLIWINSKA_CIARANEK_109_116.pdf',
        },
      ],
    },
    {
      type: 'figure',
      label: 'Historic Halny cloud photograph',
      alignment: 'center',
      width: 'small',
      image: halny1902Image,
      accessibleLabel:
        'A historic black-and-white photograph of a dramatic Halny cloud formation above a snowy mountain village',
      caption:
        'The distinctive cloud formation associated with Halny over the Tatra Mountains, photographed c. 1902 by Stanisław Ignacy Witkiewicz (1885–1939). Source: Tatra Museum in Zakopane',
    },
    {
      type: 'copy',
      heading: 'Turning weather into an indicator',
      paragraphs: [
        'I translated the research into six equally weighted conditions: a sharp change in air pressure, wind arriving from the south, gusts above 72 km/h, sustained wind above 36 km/h, rising temperature, and falling humidity.',
        'The project pulls current weather data from the OpenWeather API for both Zakopane (857 m) and Kasprowy Wierch (1,991 m). Some conditions use one station, while others compare the town with the mountain peak.',
      ],
    },
    {
      type: 'figure',
      label: 'Halny weather station diagram',
      alignment: 'center',
      width: 'medium',
      image: stationMapImage,
      accessibleLabel:
        'Topographic cross-section showing warm wind traveling north over Kasprowy Wierch at 1,991 meters and descending into Zakopane at 857 meters, with the weather conditions checked at each station',
      caption:
        'The project compares readings from mountain and valley weather stations as warm air crosses the Tatras and descends toward Zakopane',
    },
    {
      type: 'copy',
      offset: true,
      paragraphs: [
        'The indicator counts how many conditions match: zero to two matches suggest it is probably not Halny, three or four produce a maybe, and five or six produce a yes. A day can be windy but coming from the wrong direction, or warm and southerly without the characteristic gusts, so most of the signals need to align.',
      ],
    },
    {
      type: 'figure',
      label: 'Halny condition meter',
      alignment: 'center',
      width: 'large',
      image: meterImage,
      accessibleLabel:
        'The Halny meter showing two matching conditions on the left, four non-matching conditions on the right, and an overall result of no',
      caption:
        'Matching conditions move left and remain in color while non-matches move right and recede',
    },
    {
      type: 'copy',
      heading: 'Simplifying the interface',
      paragraphs: [
        'My first sketch used a half-moon meter to communicate the likelihood of Halny, followed by six separate cards explaining the conditions behind it. Because the meter and cards communicated much of the same information, the layout felt repetitive and used more vertical space than necessary.',
        'I combined them into a horizontal sliding indicator in which the arrangement of the tiles communicates the result as well as the underlying measurements. Matching conditions move left and remain in color, while non-matches move right and recede. This made the verdict understandable at a glance without hiding the data behind it.',
      ],
      sideFigure: {
        image: meterSketchImage,
        label: 'Early meter sketch',
        accessibleLabel:
          'Hand-drawn interface sketch with a semicircular Halny likelihood meter above six individual weather condition cards',
        caption:
          'The first concept separated the overall likelihood meter from six individual condition cards',
      },
    },
    {
      type: 'copy',
      heading: 'Building the experience',
      paragraphs: [
        'After working primarily with Vue, I built the project in React to learn its component model through a complete product. The experience gave me a practical understanding of how React applications are structured and the confidence to use the framework professionally.',
        'I initially styled the project with Tailwind, then moved to scoped CSS when component-level styles made the interface easier to read and maintain.',
        'To root the design in the landscape, the title sits behind the silhouette of Giewont, echoing the cloud formations associated with Halny. A language control switches the entire interface between Polish and English, while i18n keeps the translations centralized and consistent.',
      ],
    },
    {
      type: 'figure',
      label: 'Polish Is it Halny interface',
      alignment: 'right',
      width: 'large',
      image: polishHomepageImage,
      accessibleLabel:
        'Polish-language Is it Halny interface showing a maybe result and six translated weather conditions',
      caption: 'The complete interface can be viewed in Polish or English',
    },
    {
      type: 'copy',
      offset: true,
      heading: 'What I would improve',
      paragraphs: [
        'This is an informal indicator rather than a meteorological instrument. I tested its outcomes with mocked data, but not against historical events, and the six conditions are equally weighted for clarity rather than scientific accuracy. That means the model can return “maybe” even when neither wind-speed condition is met. In a future version, I would treat sustained wind and strong gusts as prerequisites.',
        'I would then test the revised scoring against historical Halny events, account for Halny’s greater frequency in colder months, and show previous measurements beside current values. That would make changes in pressure, temperature, and humidity visible instead of showing only the result of each comparison.',
      ],
    },
  ],
}
