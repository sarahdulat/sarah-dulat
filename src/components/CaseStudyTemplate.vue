<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

import type { CaseStudy } from '../types/caseStudy'
import ContactSection from './ContactSection.vue'
import EditorialFigure from './EditorialFigure.vue'
import InteriorHero from './InteriorHero.vue'
import PortfolioLink from './PortfolioLink.vue'

export default defineComponent({
  name: 'CaseStudyTemplate',
  components: {
    ContactSection,
    EditorialFigure,
    InteriorHero,
    PortfolioLink,
  },
  props: {
    caseStudy: {
      type: Object as PropType<CaseStudy>,
      required: true,
    },
    nextProject: {
      type: Object as PropType<CaseStudy>,
      required: true,
    },
  },
})
</script>

<template>
  <main id="top" class="case-study-page">
    <InteriorHero labelledby="case-study-title">
      <PortfolioLink class="back-link" href="/#work" variant="utility">
        Back to selected work
      </PortfolioLink>
      <p class="section-label">Case study</p>
      <h1 id="case-study-title">{{ caseStudy.title }}</h1>
      <p class="summary">{{ caseStudy.summary }}</p>
      <p v-if="caseStudy.eyebrow" class="project-meta">{{ caseStudy.eyebrow }}</p>
      <div class="intro-links">
        <PortfolioLink v-if="caseStudy.liveUrl" :href="caseStudy.liveUrl" variant="utility" icon="external" external>
          Visit live site
        </PortfolioLink>
        <PortfolioLink v-if="caseStudy.figmaUrl" :href="caseStudy.figmaUrl" variant="utility" icon="external" external>
          View designs in Figma
        </PortfolioLink>
      </div>
    </InteriorHero>

    <EditorialFigure hero :alignment="caseStudy.heroFigure.alignment" :width="caseStudy.heroFigure.width"
      :label="caseStudy.heroFigure.label" :accessible-label="caseStudy.heroFigure.accessibleLabel"
      :caption="caseStudy.heroFigure.caption" />

    <article class="case-study-article" :aria-label="`${caseStudy.title} case study`">
      <template v-for="(block, index) in caseStudy.blocks" :key="`${block.type}-${index}`">
        <div v-if="block.type === 'copy'" class="article-copy" :class="{ 'article-copy--offset': block.offset }">
          <h2 v-if="block.heading">{{ block.heading }}</h2>
          <p v-for="paragraph in block.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>

        <EditorialFigure v-else :alignment="block.alignment" :width="block.width" :label="block.label"
          :accessible-label="block.accessibleLabel" :caption="block.caption" />
      </template>
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

.project-meta {
  max-width: 760px;
  margin: 0 0 var(--space-3);
  color: var(--color-text-muted);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1.5;
  text-transform: uppercase;
}

.intro-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
  align-items: center;
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

.article-copy h2 {
  max-width: 620px;
  margin: 0 0 var(--space-4);
  color: var(--color-heading);
  font-size: clamp(30px, 3vw, 44px);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.1;
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
