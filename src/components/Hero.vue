<template>
  <section class="sherbert">
    <div class="container">
      <h5 class="animated hero-fade">
        Started with GeoCities now I'm here.
      </h5>
      <div class="animated hero-fade delay1 no-wrap">
        <h4 class="mb-l">Hi there, my name is</h4>
        <h1 class="mt-0">Sarah Dulat.</h1>
      </div>
      <h5 class="animated hero-fade delay2">
        I am a product-minded <strong>frontend software engineer</strong> seeking a senior frontend role. Former designer
        turned developer who loves good UI/UX, clean architecture and VueJS.
      </h5>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped lang="scss">
section {
  color: var(--color-white);
  height: 100svh;
  min-height: 400px;

  .container {
    padding: 25px 30% 100% 50px;
  }

  h5 {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
    font-weight: 100;
    max-width: 70ch;
  }

  a {
    color: var(--color-white);
  }

  a:hover {
    color: var(--color-white-hover);
  }
}
</style>
