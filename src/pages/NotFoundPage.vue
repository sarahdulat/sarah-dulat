<script lang="ts">
import { defineComponent } from 'vue'

import ContactSection from '../components/ContactSection.vue'
import InteriorHero from '../components/InteriorHero.vue'
import PortfolioLink from '../components/PortfolioLink.vue'

export default defineComponent({
  name: 'NotFoundPage',
  components: {
    ContactSection,
    InteriorHero,
    PortfolioLink,
  },
})
</script>

<template>
  <main id="top" class="not-found-page">
    <InteriorHero labelledby="not-found-title">
      <p class="section-label">Error 404</p>
      <h1 id="not-found-title">Page not found.</h1>
      <p class="not-found-description">
        The page may have moved, or the address may be incorrect. You can return home or explore one
        of my case studies.
      </p>
      <div class="not-found-links" aria-label="Suggested pages">
        <PortfolioLink href="/" variant="utility" icon="arrow">Return home</PortfolioLink>
        <PortfolioLink href="/case-studies/the-skin-routine" variant="utility" icon="arrow">
          The Skin Routine
        </PortfolioLink>
        <PortfolioLink href="/case-studies/jest-halny" variant="utility" icon="arrow">
          Is it Halny?
        </PortfolioLink>
      </div>
    </InteriorHero>

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
  max-width: 720px;
  margin: var(--space-4) 0;
  color: var(--color-heading);
  font-size: clamp(48px, 7vw, 96px);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 1;
}

.not-found-description {
  max-width: 640px;
  margin: 0;
  font-size: var(--font-body-large);
  line-height: 1.45;
}

.not-found-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
  margin-top: var(--space-5);
}

@media (max-width: 768px) {
  h1 {
    margin: var(--space-3) 0;
    font-size: 48px;
  }

  .not-found-links {
    align-items: flex-start;
    flex-direction: column;
    margin-top: var(--space-4);
  }
}
</style>
