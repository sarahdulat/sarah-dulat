<template>
  <section class="sherbert">
    <div class="container">
      <h2 class="animated hero-fade">
        Started with GeoCities now I'm here.
      </h2>
      <h1 class="animated hero-fade delay1 no-wrap">
        Hi there, my name is<br />
        <span class="name">Sarah Dulat</span>.
      </h1>
      <h2 class="animated hero-fade delay2">
        I am a product-minded <strong>frontend software engineer</strong> seeking a senior frontend role. Former designer
        turned developer who loves good UI/UX, clean architecture and VueJS.
      </h2>
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
  color: rgba(255, 255, 255, 0.9);
  height: 100svh;
  min-height: 400px;

  .container {
    padding: 25px 30% 100% 50px;
  }

  h2 {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
    line-height: 40px;
    font-weight: 100;
  }

  a {
    color: rgba(255, 255, 255, 0.9);
  }

  a:hover {
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
