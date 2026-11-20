<script lang="ts">
import { defineComponent } from 'vue'

import {
  analyticsPreferencesVisible,
  getAnalyticsConsent,
  setAnalyticsConsent,
  trackPageView,
} from '../lib/analytics'
import PortfolioLink from './PortfolioLink.vue'

export default defineComponent({
  name: 'AnalyticsConsent',
  components: {
    PortfolioLink,
  },
  setup() {
    analyticsPreferencesVisible.value = getAnalyticsConsent() === null

    return {
      isVisible: analyticsPreferencesVisible,
    }
  },
  methods: {
    allowAnalytics() {
      setAnalyticsConsent('granted')
      this.isVisible = false
      trackPageView(`${window.location.pathname}${window.location.search}${window.location.hash}`)
    },
    declineAnalytics() {
      setAnalyticsConsent('denied')
      this.isVisible = false
    },
  },
})
</script>

<template>
  <aside
    v-if="isVisible"
    class="portfolio-preferences"
    role="dialog"
    aria-labelledby="preferences-title"
    aria-describedby="preferences-description"
  >
    <div>
      <h2 id="preferences-title">Optional analytics</h2>
      <p id="preferences-description">
        I’d like to use Google Analytics to understand where visitors are coming from. It will only
        load if you allow it. Read the
        <PortfolioLink href="/privacy" variant="utility">Privacy Policy</PortfolioLink>.
      </p>
    </div>
    <div class="portfolio-preferences__actions">
      <button type="button" class="portfolio-preferences__button" @click="declineAnalytics">
        Decline
      </button>
      <button
        type="button"
        class="portfolio-preferences__button portfolio-preferences__button--primary"
        @click="allowAnalytics"
      >
        Allow analytics
      </button>
    </div>
  </aside>
</template>

<style scoped>
.portfolio-preferences {
  position: fixed;
  right: var(--space-3);
  bottom: var(--space-3);
  left: var(--space-3);
  z-index: 20;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--space-4);
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-3);
  border: 1px solid var(--color-border);
  background: var(--color-background);
  box-shadow: 0 16px 48px rgba(54, 55, 59, 0.16);
}

h2 {
  margin: 0 0 var(--space-1);
  color: var(--color-heading);
  font-size: 18px;
  font-weight: 600;
}

p {
  max-width: 640px;
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
}

p :deep(.portfolio-link) {
  display: inline-flex;
  font-size: inherit;
  vertical-align: baseline;
}

.portfolio-preferences__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  justify-content: flex-end;
}

.portfolio-preferences__button {
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: 0;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
}

.portfolio-preferences__button--primary {
  border-color: var(--color-heading);
  background: var(--color-heading);
  color: var(--color-background);
}

@media (max-width: 768px) {
  .portfolio-preferences {
    right: var(--space-2);
    bottom: var(--space-2);
    left: var(--space-2);
    grid-template-columns: 1fr;
    gap: var(--space-2);
    padding: var(--space-2);
  }

  .portfolio-preferences__actions {
    justify-content: flex-start;
  }
}
</style>
