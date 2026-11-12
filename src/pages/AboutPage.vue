<script lang="ts">
import { defineComponent } from 'vue'

import ContactSection from '../components/ContactSection.vue'
import InteriorHero from '../components/InteriorHero.vue'

export default defineComponent({
  name: 'AboutPage',
  components: {
    ContactSection,
    InteriorHero,
  },
})
</script>

<template>
  <main id="top" class="about-page">
    <InteriorHero labelledby="about-title">
      <p class="section-label">About</p>
      <h1 id="about-title">Design and engineering, together.</h1>
      <p class="about-description">
        I’m a design engineer with 12+ years of experience across design and front-end development.
        I bring a design-first perspective to engineering, creating intuitive, accessible interfaces
        that balance aesthetics with functionality.
      </p>
    </InteriorHero>

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

.about-description {
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
