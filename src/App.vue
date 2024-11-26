<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <Work />
    </main>
    <Availability />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Work from './components/Work.vue'
import Availability from './components/Availability.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Work,
    Availability,
    Footer
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 0 15%;
  padding-bottom: var(--space-xl);
}
</style>
