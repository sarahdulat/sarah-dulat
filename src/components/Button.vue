<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: "primary"
    },
  },
  computed: {
    buttonClass() {
      return `btn btn-${this.variant}`;
    },
  },
}
</script>

<style scoped lang="scss">
button {
  padding: var(--space-lg);
}
</style>
