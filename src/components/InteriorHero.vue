<script lang="ts">
import { defineComponent } from 'vue'

import AmbientGlow from './AmbientGlow.vue'
import InteriorPageHeader from './InteriorPageHeader.vue'

export default defineComponent({
  name: 'InteriorHero',
  components: {
    AmbientGlow,
    InteriorPageHeader,
  },
  props: {
    labelledby: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <section class="interior-hero" :aria-labelledby="labelledby">
    <AmbientGlow />
    <InteriorPageHeader />
    <div class="interior-hero__content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.interior-hero {
  position: relative;
  min-height: 640px;
  padding: 72px var(--page-padding) var(--space-10);
  isolation: isolate;
}

.interior-hero__content {
  max-width: 800px;
  margin-top: var(--space-9);
}

@media (max-width: 768px) {
  .interior-hero {
    min-height: auto;
    padding: var(--space-5) var(--page-padding) var(--space-9);
  }

  .interior-hero__content {
    margin-top: var(--space-8);
  }
}
</style>
