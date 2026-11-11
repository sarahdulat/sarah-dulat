import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('portfolio home', () => {
  it('renders the homepage content and both projects', () => {
    const wrapper = mount(App)

    expect(wrapper.get('h1').text()).toContain(
      'Sarah Dulat-Boussaid — Design Engineer. I design what I build.',
    )
    expect(wrapper.findAll('.project-card')).toHaveLength(2)
    expect(wrapper.text()).toContain('The Skin Routine')
    expect(wrapper.text()).toContain('Jest Halny?')
  })

  it('links the primary navigation to homepage sections', () => {
    const wrapper = mount(App)
    const navigationLinks = wrapper.findAll('nav a')

    expect(navigationLinks.map((link) => link.attributes('href'))).toEqual([
      '#work',
      '#about',
      '#contact',
    ])
    expect(wrapper.find('#work').exists()).toBe(true)
    expect(wrapper.find('#about').exists()).toBe(true)
    expect(wrapper.find('#contact').exists()).toBe(true)
  })

  it('gives every orange call to action a real destination', () => {
    const wrapper = mount(App)
    const callsToAction = wrapper.findAll('.text-link, .project-link')

    expect(callsToAction).toHaveLength(4)
    expect(callsToAction.every((link) => Boolean(link.attributes('href')))).toBe(true)
    expect(wrapper.find('a[href="mailto:hello@sarahdulat.com"]').exists()).toBe(true)
  })
})
