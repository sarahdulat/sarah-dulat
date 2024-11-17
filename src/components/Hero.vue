<template>
  <section>
    <div class="container">
      <h5>
        I am a product-minded <strong>frontend software engineer</strong> seeking a senior frontend role. Former
        designer
        turned developer who loves good UI/UX, clean architecture and VueJS.
      </h5>
      <div>
        <Button variant="primary">Contact</Button>
        <Button variant="primary">Let's Connect</Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Hero'
}
</script>

<style scoped lang="scss">
section {
  color: var(--color-white);

  .container {
    padding: 25px 30% 100vh 50px;
  }

  h5 {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
    font-weight: 100;
    max-width: 70ch;
  }
}
</style>
