<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type GlowPlacement = 'hero' | 'footer'

export default defineComponent({
  name: 'AmbientGlow',
  props: {
    placement: {
      type: String as PropType<GlowPlacement>,
      default: 'hero',
    },
  },
})
</script>

<template>
  <div class="ambient-glow" :class="`ambient-glow--${placement}`" aria-hidden="true">
    <span class="glow glow-coral"></span>
    <span class="glow glow-lavender"></span>
    <span class="glow glow-gold"></span>
  </div>
</template>

<style scoped>
.ambient-glow {
  position: absolute;
  z-index: -1;
  pointer-events: none;
}

.ambient-glow--hero {
  top: 20%;
  right: -10vw;
  bottom: -5%;
  left: 26%;
}

.glow {
  position: absolute;
  display: block;
  border-radius: 50%;
  filter: blur(56px);
  opacity: 0.72;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.glow-coral {
  top: 5%;
  left: 5%;
  width: min(52vw, 752px);
  height: min(42vw, 608px);
  background: radial-gradient(ellipse at center, var(--color-glow-coral), transparent 69%);
  animation: coral-drift 28s ease-in-out infinite alternate;
}

.glow-lavender {
  top: -5%;
  right: 0;
  width: min(44vw, 640px);
  height: min(40vw, 576px);
  background: radial-gradient(ellipse at center, var(--color-glow-lavender), transparent 69%);
  animation: lavender-drift 34s ease-in-out infinite alternate;
}

.glow-gold {
  right: 15%;
  bottom: -10%;
  width: min(42vw, 608px);
  height: min(34vw, 496px);
  background: radial-gradient(ellipse at center, var(--color-glow-gold), transparent 70%);
  animation: gold-drift 31s ease-in-out infinite alternate;
}

.ambient-glow--footer {
  top: 0;
  right: 38%;
  bottom: -55%;
  left: -18vw;
}

.ambient-glow--footer .glow {
  filter: blur(64px);
  opacity: 0.4;
}

.ambient-glow--footer .glow-coral {
  top: 8%;
  left: 0;
  width: min(58vw, 768px);
  height: min(36vw, 480px);
}

.ambient-glow--footer .glow-lavender {
  top: 24%;
  right: 2%;
  width: min(42vw, 560px);
  height: min(30vw, 400px);
}

.ambient-glow--footer .glow-gold {
  right: 8%;
  bottom: -12%;
  width: min(46vw, 608px);
  height: min(30vw, 400px);
}

@keyframes coral-drift {
  to {
    transform: translate3d(5%, -4%, 0) scale(1.04);
  }
}

@keyframes lavender-drift {
  to {
    transform: translate3d(-6%, 5%, 0) scale(0.97);
  }
}

@keyframes gold-drift {
  to {
    transform: translate3d(-4%, -6%, 0) scale(1.05);
  }
}

@media (max-width: 768px) {
  .ambient-glow--hero {
    top: 24%;
    right: -74%;
    bottom: -3%;
    left: -2%;
  }

  .ambient-glow--hero .glow {
    filter: blur(40px);
  }

  .ambient-glow--hero .glow-coral {
    top: 18%;
    left: 0;
    width: 118vw;
    height: 92vw;
  }

  .ambient-glow--hero .glow-lavender {
    top: -4%;
    right: -8%;
    width: 96vw;
    height: 88vw;
  }

  .ambient-glow--hero .glow-gold {
    right: 12%;
    bottom: -3%;
    width: 104vw;
    height: 78vw;
  }

  .ambient-glow--footer {
    top: 18%;
    right: -25%;
    bottom: -35%;
    left: -58%;
  }

  .ambient-glow--footer .glow {
    filter: blur(48px);
    opacity: 0.34;
  }

  .ambient-glow--footer .glow-coral {
    width: 130vw;
    height: 92vw;
  }

  .ambient-glow--footer .glow-lavender,
  .ambient-glow--footer .glow-gold {
    width: 105vw;
    height: 75vw;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }

  .glow {
    transform: none !important;
    will-change: auto;
  }
}
</style>
