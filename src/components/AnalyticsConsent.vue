<script lang="ts">
import { defineComponent } from 'vue'

import {
  analyticsPreferencesEvent,
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
  data() {
    return {
      isVisible: getAnalyticsConsent() === null,
    }
  },
  mounted() {
    window.addEventListener(analyticsPreferencesEvent, this.openPreferences)
  },
  beforeUnmount() {
    window.removeEventListener(analyticsPreferencesEvent, this.openPreferences)
  },
  methods: {
    openPreferences() {
      this.isVisible = true
    },
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
    class="analytics-consent"
    role="dialog"
    aria-labelledby="analytics-consent-title"
    aria-describedby="analytics-consent-description"
  >
    <div>
      <h2 id="analytics-consent-title">Optional analytics</h2>
      <p id="analytics-consent-description">
        I’d like to use Google Analytics to understand where visitors are coming from. It will only
        load if you allow it. Read the
        <PortfolioLink href="/privacy" variant="utility">Privacy Policy</PortfolioLink>.
      </p>
    </div>
    <div class="analytics-consent__actions">
      <button type="button" class="analytics-consent__button" @click="declineAnalytics">
        Decline
      </button>
      <button
        type="button"
        class="analytics-consent__button analytics-consent__button--primary"
        @click="allowAnalytics"
      >
        Allow analytics
      </button>
    </div>
  </aside>
</template>

<style scoped>
.analytics-consent {
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

.analytics-consent__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  justify-content: flex-end;
}

.analytics-consent__button {
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: 0;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  font-size: 14px;
  cursor: pointer;
}

.analytics-consent__button--primary {
  border-color: var(--color-heading);
  background: var(--color-heading);
  color: var(--color-background);
}

@media (max-width: 768px) {
  .analytics-consent {
    right: var(--space-2);
    bottom: var(--space-2);
    left: var(--space-2);
    grid-template-columns: 1fr;
    gap: var(--space-2);
    padding: var(--space-2);
  }

  .analytics-consent__actions {
    justify-content: flex-start;
  }
}
</style>
