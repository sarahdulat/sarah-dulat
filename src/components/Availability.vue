<template>
  <div class="px-l py-m">
    <span>© {{ currentYear }} Sarah Dulat-Boussaid</span>
    <span>Based in Basel, Switzerland. <i class="bi bi-globe"></i> Available globally.</span>
    <span v-html="getAvailability"></span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      availability: 1
    }
  },
  computed: {
    getAvailability() {
      if (this.availability == 1) {
        return '<i class="bi bi-circle-fill"></i> Available for new projects.'
      } else if (this.availability == 0.5) {
        return '<i class="bi bi-circle-half"></i> Limited availability, email for more info.'
      } else if (this.availability == 0) {
        return '<i class="bi bi-slash-circle"></i> Not currently available for new projects, <a href="#">join the waitlist</a>.'
      }
    }
  }
}
</script>

<style scoped lang="scss">
div {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  overflow: visible;
  z-index: 99;
  background-color: var(--color-dark);
  border-top: 1px solid var(--color-light);
  height: 40px;
  color: var(--color-light);
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}
</style>
