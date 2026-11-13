import { describe, expect, it, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import AboutPage from '../pages/AboutPage.vue'
import CaseStudyPage from '../pages/CaseStudyPage.vue'
import HomePage from '../pages/HomePage.vue'

describe('portfolio home', () => {
  it('renders the homepage content and both projects', () => {
    const wrapper = mount(HomePage)

    expect(wrapper.get('h1').text()).toContain(
      'Sarah Dulat-Boussaid — Design Engineer. I design what I build.',
    )
    expect(wrapper.findAll('.project-card')).toHaveLength(2)
    expect(wrapper.text()).toContain('The Skin Routine')
    expect(wrapper.text()).toContain('Is it Halny?')
  })

  it('links the primary navigation to homepage sections', () => {
    const wrapper = mount(HomePage)
    const navigationLinks = wrapper.findAll('nav a')

    expect(navigationLinks.map((link) => link.attributes('href'))).toEqual([
      '#work',
      '/about',
      '#contact',
    ])
    expect(wrapper.find('#work').exists()).toBe(true)
    expect(wrapper.find('#about').exists()).toBe(true)
    expect(wrapper.find('#contact').exists()).toBe(true)
  })

  it('gives every orange call to action a real destination', () => {
    const wrapper = mount(HomePage)
    const callsToAction = wrapper.findAll('.portfolio-link--cta')

    expect(callsToAction).toHaveLength(3)
    expect(callsToAction.every((link) => Boolean(link.attributes('href')))).toBe(true)
    expect(wrapper.find('a[href="/case-studies/the-skin-routine"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/case-studies/jest-halny"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/about"]').exists()).toBe(true)
  })

  it('uses normalized link variants throughout the page', () => {
    const wrapper = mount(HomePage)

    expect(wrapper.findAll('.portfolio-link--nav')).toHaveLength(3)
    expect(wrapper.findAll('.portfolio-link--cta')).toHaveLength(3)
    expect(wrapper.findAll('.portfolio-link--utility')).toHaveLength(3)
  })

  it('reuses the ambient glow in the hero and footer', () => {
    const wrapper = mount(HomePage)

    expect(wrapper.findAll('.ambient-glow')).toHaveLength(2)
    expect(wrapper.find('.ambient-glow--footer').exists()).toBe(true)
  })

  it('provides useful secondary footer actions', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
    const wrapper = mount(HomePage)

    expect(wrapper.find('a[href="https://www.linkedin.com/in/sarahdulat/"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/SarahDulat-Resume.pdf"]').exists()).toBe(true)

    await wrapper.get('button[aria-label="Copy hello@sarahdulat.com"]').trigger('click')

    expect(writeText).toHaveBeenCalledWith('hello@sarahdulat.com')
    expect(wrapper.get('button[aria-label="Email copied"]').text()).toContain(
      'hello@sarahdulat.com',
    )
    expect(wrapper.get('.copy-tooltip').classes()).toContain('copy-tooltip--visible')
    expect(wrapper.get('.copy-status').text()).toBe('Email copied')
  })

  it('renders the internal about page', () => {
    const wrapper = mount(AboutPage)
    const navigationLinks = wrapper.findAll('nav a')

    expect(wrapper.get('h1').text()).toBe('Design and engineering, together.')
    expect(wrapper.text()).toContain('12+ years of experience')
    expect(wrapper.text()).toContain('Product Design & UX')
    expect(wrapper.find('a[href="/"]').exists()).toBe(true)
    expect(navigationLinks.map((link) => link.attributes('href'))).toEqual([
      '/#work',
      '/about',
      '#contact',
    ])
  })

  it('renders the Skin Routine case study with responsive images and placeholders', () => {
    const wrapper = mount(CaseStudyPage, {
      props: { slug: 'the-skin-routine' },
    })

    expect(wrapper.get('h1').text()).toBe('The Skin Routine')
    expect(wrapper.find('.case-study-article').exists()).toBe(true)
    expect(wrapper.text()).toContain('From spreadsheet to interactive chart')
    expect(wrapper.text()).toContain('Handling complexity')
    expect(wrapper.text()).toContain('An ongoing experiment')
    expect(wrapper.findAll('figure')).toHaveLength(5)
    expect(wrapper.findAll('.project-image')).toHaveLength(5)
    expect(wrapper.findAll('.image-placeholder')).toHaveLength(0)
    expect(wrapper.get('.project-image').attributes('srcset')).toContain('640w')
    expect(wrapper.get('.project-image').attributes('srcset')).toContain('2560w')
    expect(wrapper.get('.project-image').attributes('loading')).toBe('eager')
    expect(
      wrapper
        .findAll('.project-image')
        .slice(1)
        .every((image) => image.attributes('loading') === 'lazy'),
    ).toBe(true)
    expect(wrapper.find('.editorial-figure--align-right').exists()).toBe(true)
    expect(wrapper.find('.editorial-figure--width-medium').exists()).toBe(true)
    expect(wrapper.find('a[href="https://www.theskinroutine.com"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/case-studies/jest-halny"]').text()).toContain('Is it Halny?')
  })

  it('cycles from the second case study back to the first project', () => {
    const wrapper = mount(CaseStudyPage, {
      props: { slug: 'jest-halny' },
    })

    expect(wrapper.find('a[href="/case-studies/the-skin-routine"]').text()).toContain(
      'The Skin Routine',
    )
  })
})
