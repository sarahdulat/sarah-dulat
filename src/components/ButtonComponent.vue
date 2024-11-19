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
      return `btn btn-${this.variant} no-wrap`;
    },
  },
}
</script>

<style scoped lang="scss">
.btn {
  padding: var(--space-l);
  margin-right: var(--space-l);
  border: none;
  font-family: Bebas Neue;
  font-size: var(--fontSize-m);
  width: 200px;
}

.btn-primary {
  color: var(--color-light);
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline {
  color: var(--color-primary);
  background-color: transparent;
  border: 2px solid var(--color-primary);
}
</style>
