<script lang="ts">
import { defineComponent } from 'vue'

import AmbientGlow from '../components/AmbientGlow.vue'
import ContactSection from '../components/ContactSection.vue'
import PortfolioLink from '../components/PortfolioLink.vue'

export default defineComponent({
  name: 'AboutPage',
  components: {
    AmbientGlow,
    ContactSection,
    PortfolioLink,
  },
})
</script>

<template>
  <main id="top" class="about-page">
    <section class="about-hero" aria-labelledby="about-title">
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
      <div class="about-intro">
        <p class="section-label">About</p>
        <h1 id="about-title">Design and engineering, together.</h1>
        <p>
          I’m a design engineer with 12+ years of experience across design and front-end
          development. I bring a design-first perspective to engineering, creating intuitive,
          accessible interfaces that balance aesthetics with functionality.
        </p>
      </div>
    </section>

    <section class="about-details" aria-label="Expertise and tools">
      <div>
        <h2>Expertise</h2>
        <ul>
          <li>Product Design &amp; UX</li>
          <li>Front-End Engineering</li>
          <li>Design Systems</li>
          <li>Prototyping &amp; Interaction</li>
          <li>Accessibility</li>
        </ul>
      </div>
      <div>
        <h2>Tools</h2>
        <ul>
          <li>Vue</li>
          <li>TypeScript</li>
          <li>Figma</li>
        </ul>
      </div>
    </section>

    <ContactSection />
  </main>
</template>

<style scoped>
.about-hero {
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

.about-intro {
  max-width: 800px;
  margin-top: var(--space-9);
}

.section-label,
h2 {
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
  font-size: clamp(40px, 4.5vw, 64px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.05;
}

.about-intro > p:last-child {
  max-width: 680px;
  margin: 0;
  font-size: var(--font-body-large);
  line-height: 1.45;
}

.about-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-7);
  margin: 0 var(--page-padding);
  padding: var(--space-8) 0 var(--space-11);
  border-top: 1px solid var(--color-border);
}

.about-details ul {
  margin: var(--space-5) 0 0;
  padding: 0;
  font-size: var(--font-body);
  line-height: 1.55;
  list-style: none;
}

@media (max-width: 768px) {
  .about-hero {
    min-height: auto;
    padding: var(--space-5) var(--page-padding) var(--space-9);
  }

  .about-intro {
    margin-top: var(--space-8);
  }

  .page-header {
    align-items: flex-start;
  }

  h1 {
    margin: var(--space-3) 0;
    font-size: 36px;
  }

  .about-details {
    grid-template-columns: 1fr;
    gap: var(--space-7);
    padding: var(--space-7) 0 var(--space-9);
  }
}
</style>
