<script lang="ts">
import { defineComponent } from 'vue'

import AmbientGlow from './AmbientGlow.vue'
import PrimaryNavigation from './PrimaryNavigation.vue'

export default defineComponent({
  name: 'HeroSection',
  components: {
    AmbientGlow,
    PrimaryNavigation,
  },
})
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <AmbientGlow />
    <header class="site-header">
      <h1 id="hero-title">
        Sarah Dulat-Boussaid — Design Engineer. I design what I build. From product design to
        front-end engineering, from concept to production.
      </h1>
      <PrimaryNavigation class="hero-navigation" work-href="#work" contact-href="#contact" />
    </header>
  </section>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 2;
  max-width: 1160px;
}

.hero-navigation {
  margin-top: 32px;
}

.hero {
  position: relative;
  min-height: clamp(544px, calc(100svh - 224px), 816px);
  padding: 72px var(--page-padding) var(--space-10);
  isolation: isolate;
}

h1 {
  max-width: 1160px;
  margin: 0;
  font-size: var(--font-hero);
  font-weight: var(--font-weight-hero);
  letter-spacing: var(--letter-spacing-hero);
  line-height: var(--line-height-hero);
}

@media (max-width: 768px) {
  .hero-navigation {
    margin-top: 24px;
  }

  .hero {
    min-height: clamp(560px, calc(100svh - 72px), 768px);
    padding: 40px var(--page-padding) var(--space-8);
  }

  h1 {
    max-width: 34rem;
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
