<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

import ContactSection from '../components/ContactSection.vue'
import EditorialFigure from '../components/EditorialFigure.vue'
import InteriorHero from '../components/InteriorHero.vue'
import PortfolioLink from '../components/PortfolioLink.vue'

interface CaseStudy {
  title: string
  summary: string
  liveUrl?: string
  figmaUrl?: string
}

type CaseStudySlug = 'the-skin-routine' | 'jest-halny'

const caseStudyOrder: CaseStudySlug[] = ['the-skin-routine', 'jest-halny']

const caseStudies: Record<CaseStudySlug, CaseStudy> = {
  'the-skin-routine': {
    title: 'The Skin Routine',
    summary: 'A personal project exploring skincare with a D3 chart of routines to choose from.',
    liveUrl: 'https://www.theskinroutine.com',
  },
  'jest-halny': {
    title: 'Jest Halny?',
    summary:
      'A personal project exploring weather data to determine whether the Halny wind is blowing.',
    liveUrl: 'https://jest-halny.vercel.app/en',
  },
}

export default defineComponent({
  name: 'CaseStudyPage',
  components: {
    ContactSection,
    EditorialFigure,
    InteriorHero,
    PortfolioLink,
  },
  props: {
    slug: {
      type: String as PropType<CaseStudySlug>,
      required: true,
    },
  },
  computed: {
    caseStudy(): CaseStudy {
      return (
        caseStudies[this.slug] ?? {
          title: 'Case study',
          summary: 'This case study is currently being documented.',
        }
      )
    },
    nextProject(): { slug: CaseStudySlug; title: string } {
      const currentIndex = caseStudyOrder.indexOf(this.slug)
      const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % caseStudyOrder.length : 0
      const slug = caseStudyOrder[nextIndex] ?? 'the-skin-routine'

      return {
        slug,
        title: caseStudies[slug].title,
      }
    },
  },
})
</script>

<template>
  <main id="top" class="case-study-page">
    <InteriorHero labelledby="case-study-title">
      <PortfolioLink class="back-link" href="/#work" variant="utility">Back to selected work</PortfolioLink>
      <p class="section-label">Case study</p>
      <h1 id="case-study-title">{{ caseStudy.title }}</h1>
      <p class="summary">{{ caseStudy.summary }}</p>
      <div class="intro-links">
        <PortfolioLink v-if="caseStudy.liveUrl" :href="caseStudy.liveUrl" variant="utility" icon="external" external>
          Visit live site</PortfolioLink>
        <!-- <span v-else>Live site link coming soon</span> -->
        <PortfolioLink v-if="caseStudy.figmaUrl" :href="caseStudy.figmaUrl" variant="utility" icon="external" external>
          View designs in Figma</PortfolioLink>
        <!-- <span v-else>Figma link coming soon</span> -->
      </div>
    </InteriorHero>

    <EditorialFigure variant="hero" label="Opening project image coming soon"
      :accessible-label="`${caseStudy.title} opening case study image coming soon`"
      :caption="`Opening view of ${caseStudy.title}`" />

    <article class="case-study-article" aria-label="Case study notes">
      <div class="article-copy">
        <p>
          This page will become a more informal walkthrough of the project: what first made the idea
          interesting, where the work became complicated, and how design and implementation
          influenced each other.
        </p>
        <p>
          The finished version can begin with the thought or observation that started the project,
          then move naturally between the product, the interface, and the code rather than treating
          them as separate phases.
        </p>
      </div>

      <EditorialFigure label="Project detail image coming soon" accessible-label="Project detail image coming soon"
        caption="An early detail, reference, or moment from the work" />

      <div class="article-copy article-copy--offset">
        <p>
          Rather than documenting a perfect linear process, these notes can include experiments,
          discarded directions, interface details, and technical decisions beside the images they
          relate to.
        </p>
        <p>
          This is also a place to explain where designing in code changed the direction of the work,
          or where a visual decision created an interesting engineering constraint.
        </p>
      </div>

      <EditorialFigure variant="inset" label="Process image coming soon" accessible-label="Process image coming soon"
        caption="A prototype, interaction, or implementation detail" />

      <div class="article-copy">
        <p>
          The closing thoughts can reflect on what changed during the project, what still feels
          unresolved, and what I would explore next. It does not need to force the work into a neat
          conclusion.
        </p>
      </div>

      <EditorialFigure label="Final project image coming soon" accessible-label="Final project image coming soon"
        :caption="`A final view or detail from ${caseStudy.title}`" />
    </article>

    <section class="next-project" aria-labelledby="next-project-label">
      <p id="next-project-label" class="section-label">Next project</p>
      <PortfolioLink class="next-project-link" :href="`/case-studies/${nextProject.slug}`" variant="cta" icon="arrow">
        {{ nextProject.title }}
      </PortfolioLink>
    </section>

    <ContactSection />
  </main>
</template>

<style scoped>
.section-label {
  margin: 0;
  font-size: var(--font-label);
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

h1 {
  max-width: 880px;
  margin: var(--space-4) 0;
  color: var(--color-heading);
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1;
}

.summary {
  max-width: 680px;
  margin: 0 0 var(--space-6);
  font-size: var(--font-body-large);
  line-height: 1.45;
}

.intro-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
  align-items: center;
}

.intro-links>span {
  color: var(--color-text-muted);
  font-size: 16px;
}

.back-link {
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.case-study-article {
  margin: 0 var(--page-padding);
  padding-bottom: var(--space-11);
}

.article-copy {
  max-width: 680px;
  margin: 0 0 var(--space-8);
}

.article-copy--offset {
  margin-left: 16%;
}

.article-copy p {
  margin: 0 0 var(--space-4);
  font-size: var(--font-body-large);
  line-height: 1.5;
}

.next-project {
  margin: 0 var(--page-padding);
  padding: var(--space-8) 0 var(--space-11);
  text-align: right;
}

.next-project-link {
  margin-top: var(--space-4);
  margin-left: auto;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 500;
  letter-spacing: -0.015em;
}

@media (max-width: 768px) {
  h1 {
    margin: var(--space-3) 0;
    font-size: 40px;
  }

  .case-study-article {
    padding-bottom: var(--space-3);
  }

  .article-copy,
  .article-copy--offset {
    margin-right: 0;
    margin-bottom: var(--space-7);
    margin-left: 0;
  }

  .next-project {
    padding: var(--space-7) 0 var(--space-9);
  }
}
</style>
