<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import type { ProjectThumbnail } from '../types/caseStudy'
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
    thumbnail: {
      type: Object as PropType<ProjectThumbnail>,
      default: undefined,
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
    <img
      v-if="thumbnail"
      class="project-media project-thumbnail"
      :src="thumbnail.image.src"
      :srcset="thumbnail.image.srcset.map((source) => `${source.src} ${source.width}w`).join(', ')"
      sizes="(max-width: 768px) calc(100vw - 48px), 624px"
      :width="thumbnail.image.width"
      :height="thumbnail.image.height"
      :alt="thumbnail.alt"
      loading="lazy"
      decoding="async"
    />
    <div
      v-else
      class="project-media project-placeholder"
      role="img"
      :aria-label="`${title} project image coming soon`"
    >
      <span>Image coming soon</span>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <PortfolioLink
      class="project-link"
      :href="href"
      variant="utility"
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

.project-media {
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 24px;
}

.project-thumbnail {
  display: block;
  height: auto;
}

.project-placeholder {
  display: grid;
  place-items: center;
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
  .project-media {
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
