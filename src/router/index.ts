import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'

import { caseStudies, getCaseStudy } from '../content/caseStudies'
import AboutPage from '../pages/AboutPage.vue'
import CaseStudyPage from '../pages/CaseStudyPage.vue'
import HomePage from '../pages/HomePage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const siteName = 'Sarah Dulat-Boussaid'
const defaultTitle = `${siteName} — Design Engineer`
const defaultDescription =
  'Sarah Dulat-Boussaid is a design engineer bringing thoughtful product design and front-end engineering together.'

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function setCanonicalUrl(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }

  element.href = url
}

function getSlug(route: RouteLocationNormalized) {
  const slug = route.params.slug
  return Array.isArray(slug) ? slug[0] : slug
}

function updatePageMetadata(route: RouteLocationNormalized) {
  const slug = getSlug(route)
  const caseStudy = slug ? getCaseStudy(slug) : undefined
  const isNotFound = route.name === 'not-found' || (route.name === 'case-study' && !caseStudy)
  const defaultImage = caseStudies[0]?.thumbnail

  let title = defaultTitle
  let description = defaultDescription
  let image = defaultImage?.image.src
  let imageAlt = defaultImage?.alt
  let type = 'website'

  if (route.name === 'about') {
    title = `About — ${siteName}`
    description =
      'Learn about Sarah Dulat-Boussaid’s experience across product design, front-end engineering, design systems, accessibility, and interaction design.'
  } else if (caseStudy) {
    title = `${caseStudy.title} Case Study — ${siteName}`
    description = caseStudy.summary
    image = caseStudy.thumbnail?.image.src ?? image
    imageAlt = caseStudy.thumbnail?.alt ?? imageAlt
    type = 'article'
  } else if (isNotFound) {
    title = `Page Not Found — ${siteName}`
    description = 'The requested page could not be found.'
  }

  const canonicalUrl = new URL(route.path, window.location.origin).toString()
  const imageUrl = image ? new URL(image, window.location.origin).toString() : undefined

  document.title = title
  setMetaTag('name', 'description', description)
  setMetaTag('name', 'robots', isNotFound ? 'noindex, follow' : 'index, follow')
  setMetaTag('property', 'og:title', title)
  setMetaTag('property', 'og:description', description)
  setMetaTag('property', 'og:type', type)
  setMetaTag('property', 'og:url', canonicalUrl)
  setMetaTag('name', 'twitter:card', 'summary_large_image')
  setMetaTag('name', 'twitter:title', title)
  setMetaTag('name', 'twitter:description', description)

  if (imageUrl) {
    setMetaTag('property', 'og:image', imageUrl)
    setMetaTag('name', 'twitter:image', imageUrl)
  }

  if (imageAlt) {
    setMetaTag('property', 'og:image:alt', imageAlt)
    setMetaTag('name', 'twitter:image:alt', imageAlt)
  }

  setCanonicalUrl(canonicalUrl)
}

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
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0 }
  },
})

router.afterEach(updatePageMetadata)

export default router
