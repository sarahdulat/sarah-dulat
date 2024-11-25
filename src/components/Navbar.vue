<template>
  <nav>
    <div class="wrapper">
      <div class="logo">
        <h2 class="m-0 pr-xl color-primary"><a href="/">Sarah Dulat-Boussaid</a></h2>
        <h5 class="m-0">Design Engineer</h5>
      </div>
      <h6 class="m-0">
        <a href="#" class="mr-m">Blog</a>
        <a href="/assets/SarahDulat-Resume.pdf">Resume<i class="bi bi-arrow-down"></i></a>
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
  font-family: var(--font-family-bebas-neue);
  color: var(--color-dark);
  margin: var(--space-xl) 15%;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: var(--space-m);
    border-bottom: 2px solid var(--color-dark);
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
    text-decoration: none;
  }

  h6 a {
    border-bottom: 2px solid var(--color-dark);

    &:hover {
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
    }
  }
}
</style>