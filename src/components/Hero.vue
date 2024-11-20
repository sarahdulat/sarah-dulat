<template>
  <section>
    <h5>
      As a designer/developer hybrid with over a decade of experience in startups and scaleups, I specialize in bridging
      the gap between design and development. My expertise lies in owning the full lifecycle of design systems and
      beyond, ensuring seamless integration and execution.
    </h5>
    <div>
      <Button variant="primary" value="sarah@sarahdulat.com">Email<i class="bi bi-envelope pl-m"></i>
      </Button>
      <a href="https://www.linkedin.com/in/sarahdulat/" target="_blank">
        <Button variant="outline">Let's Connect<i class="bi bi-linkedin pl-m"></i></Button>
      </a>
    </div>
  </section>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Hero',
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
section {
  width: 75%;
}
</style>
