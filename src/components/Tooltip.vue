<template>
  <div class="tooltip-wrapper" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <!-- The trigger element -->
    <slot name="trigger"></slot>

    <!-- The tooltip content -->
    <div v-if="isVisible" class="tooltip" :class="`tooltip-${position}`" :style="tooltipStyle">
      <slot name="content"></slot>
      <div class="tooltip-arrow" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TooltipComponent",
  props: {
    position: {
      type: String,
      default: "top", // top, bottom, left, or right
      validator: (value) => ["top", "bottom", "left", "right"].includes(value),
    },
  },
  data() {
    return {
      isVisible: false,
      tooltipStyle: {
        top: "0px",
        left: "0px",
      },
    };
  },
  methods: {
    showTooltip(event) {
      const triggerElement = event.currentTarget;
      if (!triggerElement) return;

      const rect = triggerElement.getBoundingClientRect();
      const offset = 10; // Space between tooltip and trigger
      let top = 0;
      let left = 0;

      switch (this.position) {
        case "top":
          top = rect.top - offset;
          left = rect.left + rect.width / 2;
          break;
        case "bottom":
          top = rect.bottom + offset;
          left = rect.left + rect.width / 2;
          break;
        case "left":
          top = rect.top + rect.height / 2;
          left = rect.left - offset;
          break;
        case "right":
          top = rect.top + rect.height / 2;
          left = rect.right + offset;
          break;
      }

      // Update tooltip style
      this.tooltipStyle = {
        top: `${top}px`,
        left: `${left}px`,
      };
      this.isVisible = true;
    },
    hideTooltip() {
      this.$emit("hideTooltip")
      this.isVisible = false;
    },
  },
});
</script>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: fixed;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 10;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

/* Tooltip arrows */
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.tooltip-top {
  transform: translate(-50%, -100%);
}

.tooltip-top .tooltip-arrow {
  bottom: -5px;
  left: 50%;
  border-width: 5px 5px 0 5px;
  border-color: #333 transparent transparent transparent;
  transform: translateX(-50%);
}

.tooltip-bottom {
  transform: translate(-50%, 0%);
}

.tooltip-bottom .tooltip-arrow {
  top: -5px;
  left: 50%;
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent #333 transparent;
  transform: translateX(-50%);
}

.tooltip-left {
  transform: translate(-100%, -50%);
}

.tooltip-left .tooltip-arrow {
  top: 50%;
  right: -5px;
  border-width: 5px 0 5px 5px;
  border-color: transparent transparent transparent #333;
  transform: translateY(-50%);
}

.tooltip-right {
  transform: translate(0%, -50%);
}

.tooltip-right .tooltip-arrow {
  top: 50%;
  left: -5px;
  border-width: 5px 5px 5px 0;
  border-color: transparent #333 transparent transparent;
  transform: translateY(-50%);
}
</style>
