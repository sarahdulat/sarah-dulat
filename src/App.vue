<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Work />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Work from './components/Work.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Work,
    Skills,
    Contact,
    Footer
  }
}
</script>
