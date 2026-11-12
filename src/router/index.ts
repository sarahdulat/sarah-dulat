import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from '../pages/AboutPage.vue'
import CaseStudyPage from '../pages/CaseStudyPage.vue'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/case-studies/:slug',
      name: 'case-study',
      component: CaseStudyPage,
      props: true,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0 }
  },
})

export default router
