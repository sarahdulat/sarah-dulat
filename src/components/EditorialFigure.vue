<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { FigureAlignment, FigureWidth, ResponsiveImage } from '../types/caseStudy'

export default defineComponent({
  name: 'EditorialFigure',
  props: {
    label: {
      type: String,
      required: true,
    },
    accessibleLabel: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    image: {
      type: Object as PropType<ResponsiveImage>,
      default: undefined,
    },
    alignment: {
      type: String as PropType<FigureAlignment>,
      default: 'left',
    },
    width: {
      type: String as PropType<FigureWidth>,
      default: 'full',
    },
    hero: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imageSrcset(): string | undefined {
      return this.image?.srcset.map(({ src, width }) => `${src} ${width}w`).join(', ')
    },
    imageSizes(): string {
      const maximumWidths: Record<FigureWidth, number> = {
        small: 640,
        medium: 960,
        large: 1120,
        full: 1296,
      }
      const maximumWidth = maximumWidths[this.width]

      return `(max-width: ${maximumWidth + 48}px) calc(100vw - 48px), ${maximumWidth}px`
    },
  },
})
</script>

<template>
  <figure
    class="editorial-figure"
    :class="[
      `editorial-figure--align-${alignment}`,
      `editorial-figure--width-${width}`,
      { 'editorial-figure--hero': hero },
    ]"
  >
    <img
      v-if="image"
      class="project-image"
      :src="image.src"
      :srcset="imageSrcset"
      :sizes="imageSizes"
      :width="image.width"
      :height="image.height"
      :alt="accessibleLabel"
      :loading="hero ? 'eager' : 'lazy'"
      :fetchpriority="hero ? 'high' : undefined"
      decoding="async"
    />
    <div v-else class="image-placeholder" role="img" :aria-label="accessibleLabel">
      <span>{{ label }}</span>
    </div>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.editorial-figure {
  width: 100%;
  margin: 0 0 var(--space-11);
}

.editorial-figure--align-left {
  margin-right: auto;
  margin-left: 0;
}

.editorial-figure--align-center {
  margin-right: auto;
  margin-left: auto;
}

.editorial-figure--align-right {
  margin-right: 0;
  margin-left: auto;
}

.editorial-figure--width-small {
  max-width: 640px;
}

.editorial-figure--width-medium {
  max-width: 960px;
}

.editorial-figure--width-large {
  max-width: 1120px;
}

.editorial-figure--width-full {
  max-width: none;
}

.editorial-figure--hero {
  width: auto;
  max-width: none;
  margin-right: var(--page-padding);
  margin-left: var(--page-padding);
}

.image-placeholder {
  display: grid;
  min-height: 560px;
  place-items: center;
  border-radius: 24px;
  background: var(--color-placeholder);
  color: var(--color-placeholder-text);
}

.project-image {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--color-border);
  border-radius: 24px;
}

.editorial-figure--hero .image-placeholder {
  min-height: 640px;
}

.editorial-figure--width-small:not(.editorial-figure--hero) .image-placeholder {
  min-height: 420px;
}

.editorial-figure--width-medium:not(.editorial-figure--hero) .image-placeholder {
  min-height: 500px;
}

.image-placeholder span {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

figcaption {
  margin-top: var(--space-2);
  color: var(--color-text-muted);
  font-size: 14px;
}

@media (max-width: 768px) {
  .editorial-figure {
    margin-bottom: var(--space-9);
  }

  .image-placeholder,
  .editorial-figure--hero .image-placeholder {
    min-height: 360px;
    border-radius: 16px;
  }

  .project-image {
    border-radius: 16px;
  }
}
</style>
