<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PortfolioHome',
})
</script>

<template>
  <div class="site-shell">
    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-glow" aria-hidden="true">
          <span class="glow glow-coral"></span>
          <span class="glow glow-lavender"></span>
          <span class="glow glow-gold"></span>
        </div>
        <header class="site-header">
          <h1 id="hero-title">
            Sarah Dulat-Boussaid — Design Engineer. I design what I build. Product design to
            front-end engineering, from concept to production.
          </h1>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a><span aria-hidden="true">/</span><a href="#about">About</a
            ><span aria-hidden="true">/</span><a href="#contact">Contact</a>
          </nav>
        </header>
      </section>

      <section id="work" class="section work-section" aria-labelledby="work-heading">
        <h2 id="work-heading" class="section-heading">Selected work</h2>
        <div class="project-grid">
          <article class="project-card">
            <div
              class="project-placeholder"
              role="img"
              aria-label="The Skin Routine project image coming soon"
            >
              <span>Image coming soon</span>
            </div>
            <h3>The Skin Routine</h3>
            <p>A personal project exploring skincare with a D3 chart of routines to choose from.</p>
            <a
              class="project-link"
              href="https://www.theskinroutine.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit The Skin Routine"
              ><span aria-hidden="true">→</span></a
            >
          </article>

          <article class="project-card">
            <div
              class="project-placeholder"
              role="img"
              aria-label="Jest Halny project image coming soon"
            >
              <span>Image coming soon</span>
            </div>
            <h3>Jest Halny?</h3>
            <p>
              A personal project exploring weather data to determine whether the Halny wind is
              blowing.
            </p>
            <a
              class="project-link"
              href="mailto:hello@sarahdulat.com?subject=Jest%20Halny"
              aria-label="Ask Sarah about Jest Halny"
              ><span aria-hidden="true">→</span></a
            >
          </article>
        </div>
      </section>

      <section id="about" class="section about-section" aria-label="About and expertise">
        <div class="about-copy">
          <h2 class="section-heading">About</h2>
          <p>
            I’m a design engineer with 12+ years of experience across design and front-end
            development. I bring a design-first perspective to engineering, creating intuitive,
            accessible interfaces that balance aesthetics with functionality.
          </p>
          <a
            class="text-link"
            href="https://www.linkedin.com/in/sarahdulat/"
            target="_blank"
            rel="noopener noreferrer"
            >More about me <span aria-hidden="true">→</span></a
          >
        </div>

        <div class="expertise">
          <h2 class="section-heading">Expertise</h2>
          <ul class="expertise-list">
            <li>Product Design &amp; UX</li>
            <li>Front-End Engineering</li>
            <li>Design Systems</li>
            <li>Prototyping &amp; Interaction</li>
            <li>Accessibility</li>
          </ul>
          <p class="tools" aria-label="Tools: Vue, TypeScript, Figma">
            <span>Vue</span><span>/</span><span>TypeScript</span><span>/</span><span>Figma</span>
          </p>
        </div>
      </section>

      <section id="contact" class="contact-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Have something in mind?</h2>
        <div class="contact-copy">
          <p>I’m open to full-time opportunities, freelance projects, and collaborations.</p>
          <a class="text-link" href="mailto:hello@sarahdulat.com"
            >Let’s Talk <span aria-hidden="true">→</span></a
          >
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  min-width: 320px;
  background: #fcf8f6;
  color: #36373b;
  font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.45;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}

:global(a) {
  color: inherit;
}

:global(::selection) {
  background: #f8c5b8;
  color: #28292c;
}

.site-shell {
  width: 100%;
  overflow: clip;
}

.site-header {
  position: relative;
  z-index: 2;
  max-width: 1160px;
}

nav {
  display: flex;
  gap: 0.55rem;
  align-items: center;
  margin-top: 30px;
  font-size: clamp(0.95rem, 1.25vw, 1.12rem);
}

nav a {
  position: relative;
  text-decoration: none;
}

nav > span {
  color: rgba(54, 55, 59, 0.62);
}

nav a::after {
  position: absolute;
  right: 0;
  bottom: -0.3rem;
  left: 0;
  height: 1px;
  background: currentColor;
  content: '';
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 180ms ease;
}

nav a:hover::after,
nav a:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

.hero {
  position: relative;
  min-height: clamp(610px, calc(100svh - 110px), 920px);
  padding: 74px max(6vw, calc((100vw - 1440px) / 2 + 64px)) 110px;
  isolation: isolate;
}

.hero-glow {
  position: absolute;
  z-index: -1;
  top: 15%;
  right: -10vw;
  bottom: -5%;
  left: 26%;
  pointer-events: none;
}

.glow {
  position: absolute;
  display: block;
  border-radius: 50%;
  filter: blur(52px);
  opacity: 0.72;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.glow-coral {
  top: 16%;
  left: 2%;
  width: min(52vw, 750px);
  height: min(42vw, 610px);
  background: radial-gradient(ellipse at center, rgba(245, 145, 119, 0.72), transparent 69%);
  animation: coral-drift 28s ease-in-out infinite alternate;
}

.glow-lavender {
  top: -6%;
  right: 0;
  width: min(44vw, 640px);
  height: min(40vw, 580px);
  background: radial-gradient(ellipse at center, rgba(188, 164, 234, 0.66), transparent 69%);
  animation: lavender-drift 34s ease-in-out infinite alternate;
}

.glow-gold {
  right: 17%;
  bottom: -8%;
  width: min(42vw, 610px);
  height: min(34vw, 500px);
  background: radial-gradient(ellipse at center, rgba(255, 215, 119, 0.68), transparent 70%);
  animation: gold-drift 31s ease-in-out infinite alternate;
}

@keyframes coral-drift {
  to {
    transform: translate3d(5%, -4%, 0) scale(1.04);
  }
}

@keyframes lavender-drift {
  to {
    transform: translate3d(-6%, 5%, 0) scale(0.97);
  }
}

@keyframes gold-drift {
  to {
    transform: translate3d(-4%, -6%, 0) scale(1.05);
  }
}

.section-heading {
  margin: 0;
  font-size: clamp(0.82rem, 1.35vw, 1.25rem);
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

h1 {
  max-width: 1160px;
  margin: 0;
  font-size: clamp(1.45rem, 2.55vw, 2.3rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.34;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 1.4rem;
  color: #ff664d;
  font-size: clamp(1.15rem, 2vw, 1.7rem);
  text-decoration: none;
}

.text-link > span[aria-hidden='true'] {
  font-size: 1.55em;
  line-height: 1;
  transition: transform 180ms ease;
}

a.text-link:hover > span[aria-hidden='true'],
a.text-link:focus-visible > span[aria-hidden='true'] {
  transform: translateX(0.35rem);
}

.section {
  padding-right: max(6vw, calc((100vw - 1440px) / 2 + 64px));
  padding-left: max(6vw, calc((100vw - 1440px) / 2 + 64px));
  scroll-margin-top: 2rem;
}

.work-section {
  padding-top: 42px;
  padding-bottom: 150px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4.2%;
  margin-top: 78px;
}

.project-card {
  min-width: 0;
}

.project-placeholder {
  display: grid;
  width: 100%;
  aspect-ratio: 1.55 / 1;
  place-items: center;
  overflow: hidden;
  border-radius: 28px;
  background: #d9d9d9;
  color: #6d6d6d;
}

.project-placeholder span {
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  opacity: 0;
  text-transform: uppercase;
  transition: opacity 180ms ease;
}

.project-placeholder:hover span,
.project-placeholder:focus-within span {
  opacity: 1;
}

.project-card h3 {
  margin: 52px 0 32px;
  color: #0e0e10;
  font-size: clamp(1.75rem, 3.05vw, 2.9rem);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.project-card > p {
  max-width: 440px;
  margin: 0;
  font-size: clamp(1.05rem, 1.85vw, 1.7rem);
  line-height: 1.35;
}

.project-link {
  display: inline-flex;
  margin: 42px 0 0;
  color: #ff664d;
  font-size: 2.75rem;
  line-height: 1;
  text-decoration: none;
  transition: transform 180ms ease;
}

.project-link:hover,
.project-link:focus-visible {
  transform: translateX(0.35rem);
}

.about-section {
  display: grid;
  grid-template-columns: 1.65fr 1fr;
  gap: 5.5%;
  padding-top: 30px;
  padding-bottom: 135px;
}

.about-copy {
  padding-right: 8%;
  border-right: 1px solid rgba(255, 102, 77, 0.55);
}

.about-copy > p {
  max-width: 790px;
  margin: 62px 0 75px;
  font-size: clamp(1.15rem, 2vw, 1.85rem);
  line-height: 1.38;
}

.expertise-list {
  margin: 62px 0 54px;
  padding: 0;
  font-size: clamp(1.1rem, 1.85vw, 1.7rem);
  line-height: 1.55;
  list-style: none;
}

.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem 1.25rem;
  margin: 0;
  font-size: clamp(0.85rem, 1.25vw, 1.1rem);
}

.contact-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.2%;
  margin-right: max(6vw, calc((100vw - 1440px) / 2 + 64px));
  margin-left: max(6vw, calc((100vw - 1440px) / 2 + 64px));
  padding: 80px 0 180px;
  border-top: 1px solid rgba(54, 55, 59, 0.65);
  scroll-margin-top: 2rem;
}

.contact-section h2 {
  margin: 0;
  font-size: clamp(2rem, 3.4vw, 3.1rem);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 1.1;
}

.contact-copy p {
  max-width: 540px;
  margin: 0 0 44px;
  font-size: clamp(1.15rem, 2.1vw, 1.9rem);
  line-height: 1.32;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

:focus-visible {
  outline: 2px solid #ff664d;
  outline-offset: 5px;
}

@media (max-width: 760px) {
  nav {
    gap: 0.45rem;
    margin-top: 22px;
    font-size: 0.92rem;
  }

  .hero {
    min-height: clamp(560px, calc(100svh - 70px), 760px);
    padding: 38px 6% 78px;
  }

  .hero-glow {
    top: 24%;
    right: -74%;
    bottom: -3%;
    left: -2%;
  }

  .glow {
    filter: blur(38px);
  }

  .glow-coral {
    top: 18%;
    left: 0;
    width: 118vw;
    height: 92vw;
  }

  .glow-lavender {
    top: -4%;
    right: -8%;
    width: 96vw;
    height: 88vw;
  }

  .glow-gold {
    right: 12%;
    bottom: -3%;
    width: 104vw;
    height: 78vw;
  }

  h1 {
    max-width: 34rem;
    font-size: clamp(1.3rem, 6.2vw, 1.75rem);
    line-height: 1.33;
  }

  .section {
    padding-right: 6%;
    padding-left: 6%;
  }

  .work-section {
    padding-bottom: 100px;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 85px;
    margin-top: 50px;
  }

  .project-placeholder {
    border-radius: 18px;
  }

  .project-card h3 {
    margin: 30px 0 18px;
  }

  .project-link {
    margin-top: 24px;
  }

  .about-section {
    grid-template-columns: 1fr;
    gap: 80px;
    padding-bottom: 95px;
  }

  .about-copy {
    padding-right: 0;
    padding-bottom: 75px;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 102, 77, 0.55);
  }

  .about-copy > p,
  .expertise-list {
    margin-top: 42px;
  }

  .about-copy > p {
    margin-bottom: 48px;
  }

  .contact-section {
    grid-template-columns: 1fr;
    gap: 45px;
    margin: 0 6%;
    padding: 65px 0 100px;
  }
}

@media (prefers-reduced-motion: reduce) {
  :global(html) {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .glow {
    transform: none !important;
    will-change: auto;
  }
}
</style>
