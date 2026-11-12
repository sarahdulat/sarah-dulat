<script lang="ts">
import { defineComponent } from 'vue'

import PortfolioLink from './PortfolioLink.vue'
import PrimaryNavigation from './PrimaryNavigation.vue'

export default defineComponent({
  name: 'InteriorPageHeader',
  components: {
    PortfolioLink,
    PrimaryNavigation,
  },
})
</script>

<template>
  <header class="page-header">
    <PortfolioLink class="brand-link" href="/" variant="nav">Sarah Dulat-Boussaid</PortfolioLink>
    <PrimaryNavigation compact />
  </header>
</template>

<style scoped>
.page-header {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  align-items: center;
}

.brand-link {
  font-size: var(--font-brand);
  font-weight: var(--font-weight-brand);
  letter-spacing: var(--letter-spacing-brand);
  line-height: var(--line-height-brand);
}

@media (max-width: 768px) {
  .page-header {
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .page-header {
    flex-direction: column;
    gap: var(--space-3);
  }

  .primary-navigation {
    align-self: flex-end;
  }
}
</style>
