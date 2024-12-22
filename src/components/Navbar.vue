<template>
  <nav>
    <div class="wrapper">
      <h1 class="m-0 pr-xl"><a href="/">Sarah Dulat-Boussaid</a>
        <span class="ml-xl">Design Engineer</span>
      </h1>
      <div class="links m-0">
        <a href="#" class="mr-m">Blog</a>
        <a href="/assets/SarahDulat-Resume.pdf">Resume<i class="bi bi-arrow-down"></i></a>
      </div>
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
  font-family: var(--font-family-header);
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

  a {
    text-decoration: none;
  }

  h1 {
    color: var(--color-primary);
    font-size: var(--fontSize-3xl);
    line-height: var(--lineHeight-3xl);
    letter-spacing: var(--letterSpacing-3xl);
    font-weight: 300;

    span {
      color: var(--color-dark);
      font-size: var(--fontSize-l);
      line-height: var(--lineHeight-l);
      letter-spacing: var(--letterSpacing-l);
      font-weight: 300;
    }
  }

  .links a {
    font-size: var(--fontSize-m);
    line-height: var(--lineHeight-m);
    letter-spacing: var(--letterSpacing-m);
    font-weight: 300;
    border-bottom: 2px solid var(--color-dark);

    &:hover {
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
    }
  }
}
</style>