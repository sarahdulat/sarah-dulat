<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

import AnalyticsConsent from './components/AnalyticsConsent.vue'

export default defineComponent({
  name: 'PortfolioApp',
  components: {
    AnalyticsConsent,
    RouterView,
  },
})
</script>

<template>
  <div class="site-shell">
    <RouterView />
    <AnalyticsConsent />
  </div>
</template>

<style scoped>
:global(:root) {
  --color-background: #fcf8f6;
  --color-text: #36373b;
  --color-heading: #0e0e10;
  --color-selection-text: #28292c;
  --color-accent: #ff664d;
  --color-accent-soft: #f8c5b8;
  --color-border: rgba(54, 55, 59, 0.65);
  --color-border-accent: rgba(255, 102, 77, 0.55);
  --color-text-muted: rgba(54, 55, 59, 0.62);
  --color-underline: rgba(54, 55, 59, 0.35);
  --color-placeholder: #d9d9d9;
  --color-placeholder-text: #6d6d6d;
  --color-glow-coral: rgba(245, 145, 119, 0.72);
  --color-glow-lavender: rgba(188, 164, 234, 0.66);
  --color-glow-gold: rgba(255, 215, 119, 0.68);
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
  --font-hero: clamp(24px, 2.5vw, 36px);
  --font-weight-hero: 800;
  --letter-spacing-hero: -0.025em;
  --line-height-hero: 1.34;
  --font-brand: clamp(20px, 1.8vw, 28px);
  --font-weight-brand: 700;
  --letter-spacing-brand: -0.02em;
  --line-height-brand: 1.3;
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
  background: var(--color-background);
  color: var(--color-text);
  font-family: 'Manrope Variable', Manrope, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.45;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

:global(a) {
  color: inherit;
}

:global(::selection) {
  background: var(--color-accent-soft);
  color: var(--color-selection-text);
}

:global(:focus-visible) {
  outline: 2px solid var(--color-accent);
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
    --font-hero: clamp(21px, 6.2vw, 28px);
    --line-height-hero: 1.33;
    --font-brand: clamp(18px, 5vw, 22px);
  }
}
</style>
