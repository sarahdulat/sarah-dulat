<script lang="ts">
import { defineComponent } from 'vue'

import { caseStudies } from '../content/caseStudies'
import type { ProjectThumbnail } from '../types/caseStudy'
import ProjectCard from './ProjectCard.vue'

interface Project {
  title: string
  description: string
  href: string
  linkLabel: string
  thumbnail?: ProjectThumbnail
  external?: boolean
}

export default defineComponent({
  name: 'SelectedWork',
  components: {
    ProjectCard,
  },
  data(): { projects: Project[] } {
    return {
      projects: caseStudies.map((caseStudy) => ({
        title: caseStudy.title,
        description: caseStudy.summary,
        href: `/case-studies/${caseStudy.slug}`,
        linkLabel: 'View case study',
        thumbnail: caseStudy.thumbnail,
      })),
    }
  },
})
</script>

<template>
  <section id="work" class="work-section" aria-labelledby="work-heading">
    <h2 id="work-heading">Selected work</h2>
    <div class="project-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :href="project.href"
        :link-label="project.linkLabel"
        :thumbnail="project.thumbnail"
        :external="project.external"
      />
    </div>
  </section>
</template>

<style scoped>
.work-section {
  padding: var(--space-5) var(--page-padding) var(--space-11);
  scroll-margin-top: var(--space-4);
}

h2 {
  margin: 0;
  font-size: var(--font-label);
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-7);
}

@media (max-width: 768px) {
  .work-section {
    padding-bottom: var(--space-9);
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
    margin-top: var(--space-5);
  }
}
</style>
