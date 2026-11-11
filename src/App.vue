<script lang="ts">
import { defineComponent } from 'vue'

import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import HeroSection from './components/HeroSection.vue'
import SelectedWork from './components/SelectedWork.vue'

export default defineComponent({
  name: 'PortfolioHome',
  components: {
    AboutSection,
    ContactSection,
    HeroSection,
    SelectedWork,
  },
})
</script>

<template>
  <div class="site-shell">
    <main id="top">
      <HeroSection />
      <SelectedWork />
      <AboutSection />
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  min-width: 320px;
  overflow-x: clip;
  background: #fcf8f6;
  color: #36373b;
  font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.45;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

:global(a) {
  color: inherit;
}

:global(::selection) {
  background: #f8c5b8;
  color: #28292c;
}

:global(:focus-visible) {
  outline: 2px solid #ff664d;
  outline-offset: 5px;
}

.site-shell {
  width: 100%;
  overflow: clip;
}

@media (prefers-reduced-motion: reduce) {
  :global(html) {
    scroll-behavior: auto;
  }
}
</style>
