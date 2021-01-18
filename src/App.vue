<template>
  <div id="app">
    <Hero />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        Hero,
        About,
        Skills,
        Contact,
        Footer
    },
    created () {

    },
    computed: {

    },
    methods: {

    },
    destroyed () {

    }
}
</script>
