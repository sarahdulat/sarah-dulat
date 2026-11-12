<script lang="ts">
import { defineComponent } from 'vue'

import ProjectCard from './ProjectCard.vue'

interface Project {
  title: string
  description: string
  href: string
  linkLabel: string
  external?: boolean
}

export default defineComponent({
  name: 'SelectedWork',
  components: {
    ProjectCard,
  },
  data(): { projects: Project[] } {
    return {
      projects: [
        {
          title: 'The Skin Routine',
          description:
            'A personal project exploring skincare with a D3 chart of routines to choose from.',
          href: '/case-studies/the-skin-routine',
          linkLabel: 'View case study',
        },
        {
          title: 'Jest Halny?',
          description:
            'A personal project exploring weather data to determine whether the Halny wind is blowing.',
          href: '/case-studies/jest-halny',
          linkLabel: 'View case study',
        },
      ],
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
