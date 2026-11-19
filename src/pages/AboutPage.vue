<script lang="ts">
import { defineComponent } from 'vue'

import mountains1200 from '../assets/about/mountains-1200.webp'
import mountains480 from '../assets/about/mountains-480.webp'
import mountains800 from '../assets/about/mountains-800.webp'
import portrait480 from '../assets/about/portrait-480.webp'
import portrait800 from '../assets/about/portrait-800.webp'
import ContactSection from '../components/ContactSection.vue'
import InteriorHero from '../components/InteriorHero.vue'
import PortfolioLink from '../components/PortfolioLink.vue'

export default defineComponent({
  name: 'AboutPage',
  components: {
    ContactSection,
    InteriorHero,
    PortfolioLink,
  },
  data() {
    return {
      mountains1200,
      mountainsSrcset: `${mountains480} 480w, ${mountains800} 800w, ${mountains1200} 1200w`,
      portrait800,
      portraitSrcset: `${portrait480} 480w, ${portrait800} 800w`,
    }
  },
})
</script>

<template>
  <main id="top" class="about-page">
    <InteriorHero labelledby="about-title">
      <p class="section-label">About</p>
      <h1 id="about-title">Design and engineering, together.</h1>
      <p class="about-description">
        I’m a design engineer with 12+ years of experience across design and front-end development.
        I bring a design-first perspective to engineering, creating intuitive, accessible interfaces
        that balance aesthetics with functionality.
      </p>
    </InteriorHero>

    <article class="about-story">
      <section aria-labelledby="about-me-heading">
        <h2 id="about-me-heading">About me</h2>
        <div class="about-story__entry">
          <div class="about-story__copy">
            <p>
              I’ve been designing and building websites since I was 12, back when that meant
              creating bitmap graphics in MS Paint, publishing pages on GeoCities, and using HTML,
              inline CSS, and copied-and-pasted JavaScript to make it snow on the page or have stars
              follow your cursor.
            </p>
            <p>
              Even then, I was equally interested in how websites looked and how they worked.
              There’s something incredibly satisfying about writing code and immediately seeing it
              come to life on screen. That instant feedback and freedom to experiment and iterate is
              still one of my favorite things about development.
            </p>
            <figure class="about-figure about-figure--portrait">
              <img :src="portrait800" :srcset="portraitSrcset" sizes="(max-width: 768px) 100vw, 32vw" width="800"
                height="1200" loading="lazy" alt="Sarah Dulat-Boussaid seated indoors" />
            </figure>
            <p>
              I’m a first-generation American, born and raised in Chicago. I studied Art &amp; Art
              History at DePaul University, choosing art over computer science because I wanted to
              stay close to the creative side of the web.
            </p>
            <p>
              After college, I moved to New York City, where I spent nine years building my career.
              I started in graphic and production design before completing a coding bootcamp in 2016
              and landing my first professional front-end development role at Reorg.
            </p>
            <p>
              Every role since has embraced both sides of my background. Eventually, I realized I
              didn’t have to choose between being a designer and a developer. The title Design
              Engineer finally gave a name to what I’d been doing all along.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-i-work-heading">
        <h2 id="how-i-work-heading">How I work</h2>
        <div class="about-story__copy">
          <p>
            I like to understand the problem before jumping into a solution. One of my greatest
            strengths is asking good questions, which is why I love a project kickoff. I want to
            understand the bigger picture, challenge assumptions, and make sure we’re solving the
            right problem.
          </p>
          <p>
            I particularly enjoy taking complicated data, workflows, or content and finding the
            clearest, most intuitive way to communicate it to users.
          </p>
          <p>
            I ask a lot of questions upfront so I can move confidently once it’s time to build. I
            have strong opinions, but I believe good ideas should hold up to scrutiny, including my
            own. I welcome thoughtful feedback and ground my design decisions in user needs,
            evidence, and established principles like those found in
            <PortfolioLink href="https://lawsofux.com/" variant="utility" external
              aria-label="Laws of UX (opens in a new tab)">
              Laws of UX</PortfolioLink>.
          </p>
          <p>
            The work is about more than completing a ticket. Design consistency, intuitive user
            flows, technical feasibility, and the final implementation all matter to me. I believe
            in shipping thoughtful MVPs and knowing what can wait for phase two.
          </p>
          <p>
            I thrive in small, collaborative teams that value autonomy, ownership, and action. I
            enjoy helping shape a product, making decisions, and seeing ideas through from concept
            to production.
          </p>
        </div>
      </section>

      <section aria-labelledby="beyond-screen-heading">
        <h2 id="beyond-screen-heading">Beyond the screen</h2>
        <div class="about-story__entry about-story__entry--with-image">
          <div class="about-story__copy">
            <p>
              When the pandemic opened the door to remote work, I took the opportunity to travel.
              Along the way, I met the man who is now my husband. We settled briefly in Berlin
              before moving to Basel, Switzerland, where we’re now raising our son.
            </p>
            <p>
              Becoming a mother has been the greatest honor of my life and a whole new adventure.
            </p>
            <p>
              Outside of work and motherhood, I love traveling, practicing yoga and Pilates, and
              building whatever project comes to mind, just for fun. Sometimes, it feels like a
              superpower.
            </p>
          </div>
          <figure class="about-figure about-figure--travel">
            <img :src="mountains1200" :srcset="mountainsSrcset" sizes="(max-width: 768px) 100vw, 32vw" width="1200"
              height="1600" loading="lazy" alt="Sarah at a mountain viewpoint at sunset" />
          </figure>
        </div>
      </section>
    </article>

    <section class="about-details" aria-label="Expertise and tools">
      <div>
        <h2>Expertise</h2>
        <ul>
          <li>Product Design &amp; UX</li>
          <li>Front-End Engineering</li>
          <li>Design Systems</li>
          <li>Prototyping &amp; Interaction</li>
          <li>Accessibility</li>
        </ul>
      </div>
      <div>
        <h2>Tools</h2>
        <ul>
          <li>Vue</li>
          <li>TypeScript</li>
          <li>Figma</li>
        </ul>
      </div>
    </section>

    <ContactSection />
  </main>
</template>

<style scoped>
.section-label,
h2 {
  margin: 0;
  font-size: var(--font-label);
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

h1 {
  max-width: 720px;
  margin: var(--space-4) 0;
  color: var(--color-heading);
  font-size: clamp(40px, 4.5vw, 64px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.05;
}

.about-description {
  max-width: 680px;
  margin: 0;
  font-size: var(--font-body-large);
  line-height: 1.45;
}

.about-story {
  margin: 0 var(--page-padding);
  border-top: 1px solid var(--color-border);
}

.about-story section {
  display: grid;
  grid-template-columns: minmax(180px, 0.45fr) minmax(0, 1fr);
  gap: var(--space-7);
  padding: var(--space-9) 0;
  border-bottom: 1px solid var(--color-border);
}

.about-story__copy {
  max-width: 760px;
}

.about-story__entry--with-image {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 0.52fr);
  gap: var(--space-7);
  align-items: start;
}

.about-figure {
  margin: 0;
}

.about-figure--portrait {
  float: right;
  width: min(42%, 320px);
  margin: 0 0 var(--space-5) var(--space-7);
  aspect-ratio: 4 / 5;
  overflow: hidden;
}

.about-figure img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--color-border);
}

.about-figure--portrait img {
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.about-story__copy p {
  margin: 0 0 var(--space-5);
  font-size: var(--font-body);
  line-height: 1.65;
}

.about-story__copy p:last-child {
  margin-bottom: 0;
}

.about-story__copy :deep(.portfolio-link) {
  display: inline-flex;
  vertical-align: baseline;
}

.about-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-7);
  margin: 0 var(--page-padding);
  padding: var(--space-8) 0 var(--space-11);
}

.about-details ul {
  margin: var(--space-5) 0 0;
  padding: 0;
  font-size: var(--font-body);
  line-height: 1.55;
  list-style: none;
}

@media (max-width: 768px) {
  h1 {
    margin: var(--space-3) 0;
    font-size: 36px;
  }

  .about-details {
    grid-template-columns: 1fr;
    gap: var(--space-7);
    padding: var(--space-7) 0 var(--space-9);
  }

  .about-story section {
    grid-template-columns: 1fr;
    gap: var(--space-5);
    padding: var(--space-7) 0;
  }

  .about-story__entry--with-image {
    grid-template-columns: 1fr;
  }

  .about-figure--portrait {
    float: none;
    width: 100%;
    margin: 0 0 var(--space-5);
  }

  .about-figure--portrait,
  .about-figure--travel {
    max-width: 520px;
  }
}
</style>
