<template>
  <div id="app">
    <Header />
    <Hero />
    <Work />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Work from './components/Work.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Work
  }
}
</script>
