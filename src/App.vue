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
        let fadeInElements = document.getElementsByClassName('fade-in')
        document.addEventListener('scroll', this.handleScroll())
        this.handleScroll(fadeInElements)
        // console.log(fadeInElements)
    },
    methods: {
        handleScroll (e) {
            for (let i = 0; i < e.length; i++) {
                let elem = e[i]
                if (this.isElemVisible(elem)) {
                    elem.style.opacity = '1'
                    elem.style.transform = 'scale(1)'
                    e.splice(i, 1) // only allow it to run once
                }
            }
        },
        isElemVisible (el) {
            let rect = el.getBoundingClientRect()
            let elemTop = rect.top + 200 // 200 = buffer
            let elemBottom = rect.bottom
            return elemTop < window.innerHeight && elemBottom >= 0
        }
    },
    destroyed () {
        document.removeEventListener('scroll', this.handleScroll())
    }
}
</script>
