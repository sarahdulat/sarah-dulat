<script lang="ts">
import { defineComponent } from 'vue'

import PortfolioLink from './PortfolioLink.vue'

export default defineComponent({
  name: 'ProjectCard',
  components: {
    PortfolioLink,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    linkLabel: {
      type: String,
      required: true,
    },
    external: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<template>
  <article class="project-card">
    <div class="project-placeholder" role="img" :aria-label="`${title} project image coming soon`">
      <span>Image coming soon</span>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <PortfolioLink
      class="project-link"
      :href="href"
      variant="cta"
      :icon="external ? 'external' : 'arrow'"
      :external="external"
      :aria-label="linkLabel"
      >{{ linkLabel }}</PortfolioLink
    >
  </article>
</template>

<style scoped>
.project-card {
  min-width: 0;
}

.project-placeholder {
  display: grid;
  width: 100%;
  aspect-ratio: 1.55 / 1;
  place-items: center;
  overflow: hidden;
  border-radius: 24px;
  background: var(--color-placeholder);
  color: var(--color-placeholder-text);
}

.project-placeholder span {
  font-size: 12px;
  letter-spacing: 0.12em;
  opacity: 0;
  text-transform: uppercase;
  transition: opacity 180ms ease;
}

.project-placeholder:hover span,
.project-placeholder:focus-within span {
  opacity: 1;
}

h3 {
  margin: var(--space-4) 0 var(--space-2);
  color: var(--color-heading);
  font-size: var(--font-project-title);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

p {
  max-width: 480px;
  margin: 0;
  font-size: var(--font-body);
  line-height: 1.35;
}

.project-link {
  margin: var(--space-4) 0 0;
}

@media (max-width: 768px) {
  .project-placeholder {
    border-radius: 16px;
  }

  h3 {
    margin: var(--space-3) 0 var(--space-2);
  }

  .project-link {
    margin-top: var(--space-3);
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
