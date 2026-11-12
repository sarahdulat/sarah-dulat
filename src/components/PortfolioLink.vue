<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type LinkVariant = 'nav' | 'cta' | 'utility'
type LinkIcon = 'none' | 'arrow' | 'external'

export default defineComponent({
  name: 'PortfolioLink',
  emits: ['click'],
  props: {
    href: {
      type: String,
      default: undefined,
    },
    variant: {
      type: String as PropType<LinkVariant>,
      default: 'cta',
    },
    icon: {
      type: String as PropType<LinkIcon>,
      default: 'none',
    },
    external: {
      type: Boolean,
      default: false,
    },
    button: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: undefined,
    },
  },
})
</script>

<template>
  <button
    v-if="button"
    class="portfolio-link"
    :class="`portfolio-link--${variant}`"
    type="button"
    :aria-label="ariaLabel"
    @click="$emit('click')"
  >
    <span class="portfolio-link__label">
      <slot />
    </span>
    <span v-if="icon === 'arrow'" class="portfolio-link__icon" aria-hidden="true">→</span>
    <span v-else-if="icon === 'external'" class="portfolio-link__icon" aria-hidden="true">↗</span>
  </button>
  <a
    v-else
    class="portfolio-link"
    :class="`portfolio-link--${variant}`"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel"
  >
    <span class="portfolio-link__label">
      <slot />
    </span>
    <span v-if="icon === 'arrow'" class="portfolio-link__icon" aria-hidden="true">→</span>
    <span v-else-if="icon === 'external'" class="portfolio-link__icon" aria-hidden="true">↗</span>
  </a>
</template>

<style scoped>
.portfolio-link {
  display: inline-flex;
  gap: 16px;
  align-items: center;
  width: fit-content;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  line-height: 1.35;
  text-decoration: none;
  cursor: pointer;
  transition: color 180ms ease;
}

.portfolio-link__label {
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
  transition: text-decoration-color 180ms ease;
}

.portfolio-link__icon {
  flex: none;
  line-height: 1;
  transition: transform 180ms ease;
}

.portfolio-link--nav {
  font-size: 18px;
  font-weight: 500;
}

.portfolio-link--nav .portfolio-link__label {
  text-decoration-color: transparent;
}

.portfolio-link--cta {
  gap: 16px;
  color: var(--color-accent);
  font-size: var(--font-link);
}

.portfolio-link--cta .portfolio-link__label {
  text-decoration-color: transparent;
}

.portfolio-link--cta .portfolio-link__icon {
  font-size: 1.45em;
}

.portfolio-link--utility {
  font-size: 16px;
}

.portfolio-link--utility .portfolio-link__label {
  text-decoration-color: var(--color-underline);
}

.portfolio-link--nav:hover,
.portfolio-link--nav:focus-visible,
.portfolio-link--utility:hover,
.portfolio-link--utility:focus-visible {
  color: var(--color-accent);
}

.portfolio-link--nav:hover .portfolio-link__label,
.portfolio-link--nav:focus-visible .portfolio-link__label,
.portfolio-link--cta:hover .portfolio-link__label,
.portfolio-link--cta:focus-visible .portfolio-link__label,
.portfolio-link--utility:hover .portfolio-link__label,
.portfolio-link--utility:focus-visible .portfolio-link__label {
  text-decoration-color: currentColor;
}

.portfolio-link--cta:hover .portfolio-link__icon,
.portfolio-link--cta:focus-visible .portfolio-link__icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .portfolio-link--nav {
    font-size: 15px;
  }

  .portfolio-link--utility {
    font-size: 15px;
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
