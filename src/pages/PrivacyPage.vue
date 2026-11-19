<script lang="ts">
import { defineComponent } from 'vue'

import ContactSection from '../components/ContactSection.vue'
import InteriorHero from '../components/InteriorHero.vue'
import PortfolioLink from '../components/PortfolioLink.vue'
import { openAnalyticsPreferences } from '../lib/analytics'

export default defineComponent({
  name: 'PrivacyPage',
  components: {
    ContactSection,
    InteriorHero,
    PortfolioLink,
  },
  methods: {
    openAnalyticsPreferences,
  },
})
</script>

<template>
  <main id="top" class="privacy-page">
    <InteriorHero labelledby="privacy-title">
      <p class="section-label">Legal</p>
      <h1 id="privacy-title">Privacy Policy</h1>
      <p class="privacy-intro">
        This policy explains what information is processed when you visit this portfolio and the
        choices available to you.
      </p>
      <p class="last-updated">Last updated: November 18, 2026</p>
    </InteriorHero>

    <article class="privacy-content">
      <section aria-labelledby="controller-heading">
        <h2 id="controller-heading">Who is responsible</h2>
        <div>
          <p>The controller responsible for this website is:</p>
          <address>
            Sarah Dulat-Boussaid<br />
            Basel, Switzerland<br />
            <PortfolioLink href="mailto:hello@sarahdulat.com" variant="utility">
              hello@sarahdulat.com
            </PortfolioLink>
          </address>
        </div>
      </section>

      <section aria-labelledby="hosting-heading">
        <h2 id="hosting-heading">Website hosting</h2>
        <div>
          <p>
            This website is hosted by GitHub Pages, a service provided by GitHub. When you visit a
            GitHub Pages site, GitHub logs information including your IP address for security
            purposes. GitHub may also process technical information such as your browser, device,
            operating system, referring page, requested pages, and the date and time of your visit.
          </p>
          <p>
            This processing is necessary to deliver and protect the website. GitHub controls the
            retention of its hosting and security logs. For more information, see the
            <PortfolioLink
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              variant="utility"
              external
            >
              GitHub Privacy Statement</PortfolioLink
            >.
          </p>
        </div>
      </section>

      <section aria-labelledby="analytics-heading">
        <h2 id="analytics-heading">Optional analytics</h2>
        <div>
          <p>
            With your consent, this website uses Google Analytics 4, provided by Google, to
            understand where visitors come from and which pages they view. Google Analytics does not
            load until you select “Allow analytics.” Declining does not affect your access to the
            website.
          </p>
          <p>Google Analytics may process:</p>
          <ul>
            <li>pages viewed, referral source, and approximate visit duration;</li>
            <li>approximate geographic location;</li>
            <li>browser, device, operating system, language, and screen information; and</li>
            <li>a randomly generated identifier stored in first-party analytics cookies.</li>
          </ul>
          <p>
            Google receives an IP address when the request is made and uses it to derive location
            and protect the service, but states that Google Analytics does not log or store
            individual IP addresses.
          </p>
          <p>
            The cookies <code>_ga</code> and <code>_ga_&lt;container-id&gt;</code> may remain for up
            to two years unless you remove them sooner. User- and event-level Analytics data may be
            retained for up to 14 months; aggregated reports may be kept longer.
          </p>
          <p>
            Google may process data in the United States and other countries. Learn more about
            <PortfolioLink
              href="https://policies.google.com/technologies/partner-sites"
              variant="utility"
              external
            >
              how Google uses information from partner sites</PortfolioLink
            >.
          </p>
          <p>
            You can withdraw or give consent at any time using
            <PortfolioLink
              href="?analytics=settings"
              variant="utility"
              @click.prevent="openAnalyticsPreferences"
            >
              Analytics settings</PortfolioLink
            >. Withdrawing consent stops further Analytics collection and removes Analytics cookies
            accessible to this website.
          </p>
        </div>
      </section>

      <section aria-labelledby="preferences-heading">
        <h2 id="preferences-heading">Consent preference</h2>
        <div>
          <p>
            Your analytics choice is stored locally in your browser so the site can remember it.
            This preference is necessary to respect your choice and is not shared with Google. It
            remains until you change it, clear your browser storage, or use a different browser or
            device.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-data-heading">
        <h2 id="contact-data-heading">Contacting me</h2>
        <div>
          <p>
            This website does not contain a contact form. If you contact me by email, I process the
            information you provide only to respond, discuss potential work, or maintain our
            professional correspondence. I retain it only for as long as reasonably necessary for
            those purposes or to meet applicable legal obligations.
          </p>
        </div>
      </section>

      <section aria-labelledby="links-heading">
        <h2 id="links-heading">External links</h2>
        <div>
          <p>
            This portfolio links to third-party websites such as LinkedIn and project resources.
            Those services receive information only when you choose to visit them and apply their
            own privacy policies.
          </p>
        </div>
      </section>

      <section aria-labelledby="rights-heading">
        <h2 id="rights-heading">Your rights</h2>
        <div>
          <p>
            Depending on the law that applies to you, you may have the right to request access to,
            correction of, or deletion of your personal data; to object to or restrict processing;
            to receive certain data in a portable format; and to withdraw consent at any time.
          </p>
          <p>
            To make a request, email
            <PortfolioLink href="mailto:hello@sarahdulat.com" variant="utility">
              hello@sarahdulat.com</PortfolioLink
            >. You may also contact the
            <PortfolioLink href="https://www.edoeb.admin.ch/en" variant="utility" external>
              Swiss Federal Data Protection and Information Commissioner</PortfolioLink
            >
            or another competent supervisory authority.
          </p>
        </div>
      </section>

      <section aria-labelledby="changes-heading">
        <h2 id="changes-heading">Changes to this policy</h2>
        <div>
          <p>
            I may update this policy when the website or its services change. The current version
            and its update date will always appear on this page.
          </p>
        </div>
      </section>
    </article>

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

.privacy-intro {
  max-width: 680px;
  margin: 0;
  font-size: var(--font-body-large);
  line-height: 1.45;
}

.last-updated {
  margin: var(--space-3) 0 0;
  color: var(--color-text-muted);
  font-size: 14px;
}

.privacy-content {
  margin: 0 var(--page-padding);
  border-top: 1px solid var(--color-border);
}

.privacy-content section {
  display: grid;
  grid-template-columns: minmax(180px, 0.45fr) minmax(0, 1fr);
  gap: var(--space-7);
  padding: var(--space-8) 0;
  border-bottom: 1px solid var(--color-border);
}

.privacy-content section > div {
  max-width: 760px;
}

.privacy-content p,
.privacy-content li,
address {
  font-size: var(--font-body);
  line-height: 1.65;
}

.privacy-content p {
  margin: 0 0 var(--space-4);
}

.privacy-content p:last-child {
  margin-bottom: 0;
}

.privacy-content ul {
  margin: 0 0 var(--space-4);
  padding-left: 1.25em;
}

address {
  font-style: normal;
}

code {
  font-size: 0.9em;
}

.privacy-content :deep(.portfolio-link) {
  display: inline-flex;
  vertical-align: baseline;
}

@media (max-width: 768px) {
  h1 {
    margin: var(--space-3) 0;
    font-size: 36px;
  }

  .privacy-content section {
    grid-template-columns: 1fr;
    gap: var(--space-4);
    padding: var(--space-7) 0;
  }
}
</style>
