<template>
  <div id="app">
    <Navbar />
    <main>
      <Hero />
      <!-- <Work /> -->
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Work from './components/Work.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Work,
    Footer
  }
}
</script>

<style scoped lang="scss">
#app {
  margin: 0 10%;
}
</style>
