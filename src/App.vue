<template>
  <div id="app">
    <Hero />
    <Work />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Work from './components/Work.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Work,
    Footer
  }
}
</script>
