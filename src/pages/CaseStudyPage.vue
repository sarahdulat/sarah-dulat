<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

import AmbientGlow from '../components/AmbientGlow.vue'
import ContactSection from '../components/ContactSection.vue'
import PortfolioLink from '../components/PortfolioLink.vue'

interface CaseStudy {
  title: string
  summary: string
  liveUrl?: string
  figmaUrl?: string
}

const caseStudies: Record<string, CaseStudy> = {
  'the-skin-routine': {
    title: 'The Skin Routine',
    summary: 'A personal project exploring skincare with a D3 chart of routines to choose from.',
    liveUrl: 'https://www.theskinroutine.com',
  },
  'jest-halny': {
    title: 'Jest Halny?',
    summary:
      'A personal project exploring weather data to determine whether the Halny wind is blowing.',
  },
}

export default defineComponent({
  name: 'CaseStudyPage',
  components: {
    AmbientGlow,
    ContactSection,
    PortfolioLink,
  },
  props: {
    slug: {
      type: String as PropType<keyof typeof caseStudies>,
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
  },
})
</script>

<template>
  <main id="top" class="case-study-page">
    <section class="case-study-hero" aria-labelledby="case-study-title">
      <AmbientGlow />
      <header class="page-header">
        <PortfolioLink href="/" variant="nav">Sarah Dulat-Boussaid</PortfolioLink>
        <nav aria-label="Primary navigation">
          <PortfolioLink href="/#work" variant="nav">Work</PortfolioLink
          ><span aria-hidden="true">/</span
          ><PortfolioLink href="/about" variant="nav">About</PortfolioLink
          ><span aria-hidden="true">/</span
          ><PortfolioLink href="#contact" variant="nav">Contact</PortfolioLink>
        </nav>
      </header>

      <div class="case-study-intro">
        <p class="section-label">Case study</p>
        <h1 id="case-study-title">{{ caseStudy.title }}</h1>
        <p class="summary">{{ caseStudy.summary }}</p>
        <div class="intro-links">
          <PortfolioLink
            v-if="caseStudy.liveUrl"
            :href="caseStudy.liveUrl"
            variant="utility"
            icon="external"
            external
            >Visit live site</PortfolioLink
          >
          <span v-else>Live site link coming soon</span>
          <PortfolioLink
            v-if="caseStudy.figmaUrl"
            :href="caseStudy.figmaUrl"
            variant="utility"
            icon="external"
            external
            >View designs in Figma</PortfolioLink
          >
          <span v-else>Figma link coming soon</span>
        </div>
        <PortfolioLink class="back-link" href="/#work" variant="utility"
          >Back to selected work</PortfolioLink
        >
      </div>
    </section>

    <figure class="hero-figure">
      <div
        class="image-placeholder image-placeholder--hero"
        role="img"
        :aria-label="`${caseStudy.title} opening case study image coming soon`"
      >
        <span>Opening project image coming soon</span>
      </div>
      <figcaption>Opening view of {{ caseStudy.title }}</figcaption>
    </figure>

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

      <figure class="editorial-figure">
        <div class="image-placeholder" role="img" aria-label="Project detail image coming soon">
          <span>Project detail image coming soon</span>
        </div>
        <figcaption>An early detail, reference, or moment from the work</figcaption>
      </figure>

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

      <figure class="editorial-figure editorial-figure--inset">
        <div class="image-placeholder" role="img" aria-label="Process image coming soon">
          <span>Process image coming soon</span>
        </div>
        <figcaption>A prototype, interaction, or implementation detail</figcaption>
      </figure>

      <div class="article-copy">
        <p>
          The closing thoughts can reflect on what changed during the project, what still feels
          unresolved, and what I would explore next. It does not need to force the work into a neat
          conclusion.
        </p>
      </div>

      <figure class="editorial-figure">
        <div class="image-placeholder" role="img" aria-label="Final project image coming soon">
          <span>Final project image coming soon</span>
        </div>
        <figcaption>A final view or detail from {{ caseStudy.title }}</figcaption>
      </figure>
    </article>

    <ContactSection />
  </main>
</template>

<style scoped>
.case-study-hero {
  position: relative;
  min-height: 640px;
  padding: 72px var(--page-padding) var(--space-10);
  isolation: isolate;
}

.page-header {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  align-items: center;
}

nav {
  display: flex;
  gap: 8px;
  align-items: center;
}

nav > span {
  color: var(--color-text-muted);
}

.case-study-intro {
  max-width: 800px;
  margin-top: var(--space-9);
}

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
  margin-bottom: var(--space-4);
}

.intro-links > span {
  color: var(--color-text-muted);
  font-size: 16px;
}

.back-link {
  color: var(--color-text-muted);
}

.hero-figure {
  margin: 0 var(--page-padding) var(--space-11);
}

.image-placeholder {
  display: grid;
  min-height: 560px;
  place-items: center;
  border-radius: 24px;
  background: var(--color-placeholder);
  color: var(--color-placeholder-text);
}

.image-placeholder--hero {
  min-height: 640px;
}

.image-placeholder span {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

figcaption {
  margin-top: var(--space-2);
  color: var(--color-text-muted);
  font-size: 14px;
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

.editorial-figure {
  margin: 0 0 var(--space-11);
}

.editorial-figure--inset {
  max-width: 960px;
  margin-left: auto;
}

@media (max-width: 768px) {
  .case-study-hero {
    min-height: auto;
    padding: var(--space-5) var(--page-padding) var(--space-9);
  }

  .page-header {
    align-items: flex-start;
  }

  .case-study-intro {
    margin-top: var(--space-8);
  }

  h1 {
    margin: var(--space-3) 0;
    font-size: 40px;
  }

  .hero-figure {
    margin-bottom: var(--space-9);
  }

  .image-placeholder,
  .image-placeholder--hero {
    min-height: 360px;
    border-radius: 16px;
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

  .editorial-figure {
    margin-bottom: var(--space-9);
  }
}
</style>
