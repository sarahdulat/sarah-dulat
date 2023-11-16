<template>
  <div id="app">
    <Hero />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Skills,
    Contact,
    Footer
  }
}
</script>
