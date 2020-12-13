<template>
  <div id="app">
    <Hero />
    <Work />
    <Skills />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Work from './components/Work.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Work,
    Skills,
    Footer
  }
}
</script>
