<script lang="ts">
import { defineComponent } from 'vue'

import PortfolioLink from './PortfolioLink.vue'

export default defineComponent({
  name: 'AboutSection',
  components: {
    PortfolioLink,
  },
})
</script>

<template>
  <section id="about" class="about-section" aria-label="About and expertise">
    <div class="about-copy">
      <h2>About</h2>
      <p>
        I’m a design engineer with 12+ years of experience across design and front-end development.
        I bring a design-first perspective to engineering, creating intuitive, accessible interfaces
        that balance aesthetics with functionality.
      </p>
      <PortfolioLink href="/about" variant="cta" icon="arrow">More about me</PortfolioLink>
    </div>

    <div class="expertise">
      <h2>Expertise</h2>
      <ul class="expertise-list">
        <li>Product Design &amp; UX</li>
        <li>Front-End Engineering</li>
        <li>Design Systems</li>
        <li>Prototyping &amp; Interaction</li>
        <li>Accessibility</li>
      </ul>
      <p class="tools" aria-label="Tools: Vue, TypeScript, Figma">
        <span>Vue</span><span>/</span><span>TypeScript</span><span>/</span><span>Figma</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: grid;
  grid-template-columns: 1.65fr 1fr;
  gap: var(--space-7);
  padding: var(--space-4) var(--page-padding) var(--space-11);
  scroll-margin-top: var(--space-4);
}

h2 {
  margin: 0;
  font-size: var(--font-label);
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.about-copy {
  padding-right: var(--space-7);
  border-right: 1px solid var(--color-border);
}

.about-copy > p {
  max-width: 600px;
  margin: var(--space-5) 0 var(--space-6);
  font-size: var(--font-body-large);
  line-height: 1.38;
}

.expertise-list {
  margin: var(--space-5) 0 var(--space-6);
  padding: 0;
  font-size: var(--font-body);
  line-height: 1.55;
  list-style: none;
}

.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin: 0;
  font-size: 16px;
}

@media (max-width: 768px) {
  .about-section {
    grid-template-columns: 1fr;
    gap: var(--space-7);
    padding-bottom: var(--space-9);
  }

  .about-copy {
    padding-right: 0;
    padding-bottom: var(--space-7);
    border-right: 0;
    border-bottom: 1px solid var(--color-border-accent);
  }

  .about-copy > p,
  .expertise-list {
    margin-top: var(--space-5);
  }

  .about-copy > p {
    margin-bottom: var(--space-6);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
  }
}
</style>
