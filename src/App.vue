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
:global(:root) {
  --page-padding: max(24px, calc((100vw - 1296px) / 2));
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 80px;
  --space-9: 96px;
  --space-10: 112px;
  --space-11: 128px;
  --space-12: 160px;
  --font-label: 16px;
  --font-body: 20px;
  --font-body-large: 22px;
  --font-project-title: 32px;
  --font-contact-title: 36px;
  --font-link: 20px;
}

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

@media (max-width: 768px) {
  :global(:root) {
    --font-label: 13px;
    --font-body: 17px;
    --font-body-large: 18px;
    --font-project-title: 24px;
    --font-contact-title: 28px;
    --font-link: 18px;
  }
}
</style>
