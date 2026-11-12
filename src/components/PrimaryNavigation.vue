<script lang="ts">
import { defineComponent } from 'vue'

import PortfolioLink from './PortfolioLink.vue'

export default defineComponent({
  name: 'PrimaryNavigation',
  components: {
    PortfolioLink,
  },
  props: {
    workHref: {
      type: String,
      default: '/#work',
    },
    aboutHref: {
      type: String,
      default: '/about',
    },
    contactHref: {
      type: String,
      default: '#contact',
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<template>
  <nav
    class="primary-navigation"
    :class="{ 'primary-navigation--compact': compact }"
    aria-label="Primary navigation"
  >
    <PortfolioLink :href="workHref" variant="nav">Work</PortfolioLink>
    <span aria-hidden="true">/</span>
    <PortfolioLink :href="aboutHref" variant="nav">About</PortfolioLink>
    <span aria-hidden="true">/</span>
    <PortfolioLink :href="contactHref" variant="nav">Contact</PortfolioLink>
  </nav>
</template>

<style scoped>
.primary-navigation {
  display: flex;
  gap: var(--space-4);
  align-items: center;
}

.primary-navigation--compact {
  gap: var(--space-2);
}

.primary-navigation > span {
  color: var(--color-text-muted);
}
</style>
