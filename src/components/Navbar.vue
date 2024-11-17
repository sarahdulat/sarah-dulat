<template>
  <nav>
    <div>
      <h1 class="m-0 color-primary">Sarah Dulat-Boussaid</h1>
      <h4 class="m-0">Design Engineer</h4>
      <h5 class="m-0">
        <a href="#" class="pr-m">Blog</a>
        <a href="#">Resume</a>
      </h5>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped lang="scss">
nav {
  padding: 30px;
  text-transform: uppercase;
  font-family: var(--font-family-bebas-neue);

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    width: 100%;
  }
}
</style>