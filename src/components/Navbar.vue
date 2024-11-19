<template>
  <nav>
    <div class="wrapper">
      <div class="logo">
        <h2 class="m-0 pr-xl color-primary">Sarah Dulat-Boussaid</h2>
        <h5 class="m-0">Design Engineer</h5>
      </div>
      <h6 class="m-0">
        <a href="#" class="mr-m">Blog</a>
        <a href="#">Resume<i class="bi bi-arrow-down"></i></a>
      </h6>
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
  font-family: var(--font-family-bebas-neue);
  color: var(--color-dark);

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid var(--color-text-body);
    width: 100%;
  }

  .logo {
    display: flex;
    align-items: baseline;
  }

  i {
    font-weight: 800;
  }

  a {
    border-bottom: 2px solid var(--color-dark);
  }
}
</style>