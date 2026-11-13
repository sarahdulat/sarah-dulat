<script lang="ts">
import { defineComponent } from 'vue'

import CaseStudyTemplate from '../components/CaseStudyTemplate.vue'
import { caseStudies, getCaseStudy, missingCaseStudy } from '../content/caseStudies'
import type { CaseStudy } from '../types/caseStudy'

export default defineComponent({
  name: 'CaseStudyPage',
  components: {
    CaseStudyTemplate,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    caseStudy(): CaseStudy {
      return getCaseStudy(this.slug) ?? missingCaseStudy
    },
    nextProject(): CaseStudy {
      const currentIndex = caseStudies.findIndex((caseStudy) => caseStudy.slug === this.slug)
      const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % caseStudies.length : 0

      return caseStudies[nextIndex] ?? caseStudies[0] ?? missingCaseStudy
    },
  },
})
</script>

<template>
  <CaseStudyTemplate :case-study="caseStudy" :next-project="nextProject" />
</template>
