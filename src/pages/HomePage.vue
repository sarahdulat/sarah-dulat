<script lang="ts">
import { defineComponent } from 'vue'

import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import HeroSection from '../components/HeroSection.vue'
import SelectedWork from '../components/SelectedWork.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    AboutSection,
    ContactSection,
    HeroSection,
    SelectedWork,
  },
})
</script>

<template>
  <main id="top">
    <HeroSection />
    <SelectedWork />
    <AboutSection />
    <ContactSection />
  </main>
</template>
