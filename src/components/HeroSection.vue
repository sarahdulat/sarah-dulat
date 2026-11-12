<script lang="ts">
import { defineComponent } from 'vue'

import AmbientGlow from './AmbientGlow.vue'
import PortfolioLink from './PortfolioLink.vue'

export default defineComponent({
  name: 'HeroSection',
  components: {
    AmbientGlow,
    PortfolioLink,
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
      <nav aria-label="Primary navigation">
        <PortfolioLink href="#work" variant="nav">Work</PortfolioLink
        ><span aria-hidden="true">/</span>
        <PortfolioLink href="/about" variant="nav">About</PortfolioLink
        ><span aria-hidden="true">/</span>
        <PortfolioLink href="#contact" variant="nav">Contact</PortfolioLink>
      </nav>
    </header>
  </section>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 2;
  max-width: 1160px;
}

nav {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 32px;
}

nav > span {
  color: var(--color-text-muted);
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
  font-size: clamp(24px, 2.5vw, 36px);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.34;
}

@media (max-width: 768px) {
  nav {
    gap: 16px;
    margin-top: 24px;
  }

  .hero {
    min-height: clamp(560px, calc(100svh - 72px), 768px);
    padding: 40px var(--page-padding) var(--space-8);
  }

  h1 {
    max-width: 34rem;
    font-size: clamp(21px, 6.2vw, 28px);
    line-height: 1.33;
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
