<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type FigureVariant = 'default' | 'hero' | 'inset'

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
    variant: {
      type: String as PropType<FigureVariant>,
      default: 'default',
    },
  },
})
</script>

<template>
  <figure class="editorial-figure" :class="`editorial-figure--${variant}`">
    <div class="image-placeholder" role="img" :aria-label="accessibleLabel">
      <span>{{ label }}</span>
    </div>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.editorial-figure {
  margin: 0 0 var(--space-11);
}

.editorial-figure--hero {
  margin-right: var(--page-padding);
  margin-left: var(--page-padding);
}

.editorial-figure--inset {
  max-width: 960px;
  margin-left: auto;
}

.image-placeholder {
  display: grid;
  min-height: 560px;
  place-items: center;
  border-radius: 24px;
  background: var(--color-placeholder);
  color: var(--color-placeholder-text);
}

.editorial-figure--hero .image-placeholder {
  min-height: 640px;
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
}
</style>
