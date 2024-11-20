<template>
  <button ref="button" :class="buttonClass" @click="copy(value)">
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
    value: {
      type: String,
      default: ""
    },
  },
  computed: {
    buttonClass() {
      return `btn btn-${this.variant} no-wrap`;
    },
  },
  methods: {
    async copy(value) {
      try {
        await navigator.clipboard.writeText(value);
        alert('Copied');
      } catch ($e) {
        alert('Cannot copy');
      }
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  padding: var(--space-l);
  margin-right: var(--space-l);
  border: none;
  font-family: Bebas Neue;
  font-size: var(--fontSize-m);
  cursor: pointer;
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
