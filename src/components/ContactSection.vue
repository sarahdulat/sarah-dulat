<script lang="ts">
import { defineComponent } from 'vue'

import { openAnalyticsPreferences } from '../lib/analytics'
import AmbientGlow from './AmbientGlow.vue'
import PortfolioLink from './PortfolioLink.vue'

export default defineComponent({
  name: 'ContactSection',
  components: {
    AmbientGlow,
    PortfolioLink,
  },
  data() {
    return {
      baselTime: '',
      clockTimer: undefined as number | undefined,
      copied: false,
      copyResetTimer: undefined as number | undefined,
      email: 'hello@sarahdulat.com',
    }
  },
  mounted() {
    this.updateBaselTime()
    this.clockTimer = window.setInterval(this.updateBaselTime, 60_000)
  },
  beforeUnmount() {
    if (this.clockTimer) {
      window.clearInterval(this.clockTimer)
    }

    if (this.copyResetTimer) {
      window.clearTimeout(this.copyResetTimer)
    }
  },
  methods: {
    openAnalyticsPreferences,
    updateBaselTime() {
      this.baselTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
        timeZoneName: 'short',
      }).format(new Date())
    },
    async copyEmail() {
      try {
        await navigator.clipboard.writeText(this.email)
      } catch {
        const textarea = document.createElement('textarea')
        textarea.value = this.email
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
      }

      this.copied = true
      if (this.copyResetTimer) {
        window.clearTimeout(this.copyResetTimer)
      }
      this.copyResetTimer = window.setTimeout(() => {
        this.copied = false
      }, 2000)
    },
  },
})
</script>

<template>
  <footer id="contact" class="contact-section" aria-labelledby="contact-heading">
    <AmbientGlow placement="footer" />
    <h2 id="contact-heading">Have something in mind?</h2>
    <div class="contact-copy">
      <p>I’m open to full-time roles, as well as contract and project-based work.</p>
      <div class="footer-actions" aria-label="Contact links">
        <span class="copy-action">
          <PortfolioLink
            variant="utility"
            button
            :aria-label="copied ? 'Email copied' : `Copy ${email}`"
            @click="copyEmail"
          >
            {{ email }}
          </PortfolioLink>
          <span class="copy-tooltip" :class="{ 'copy-tooltip--visible': copied }" aria-hidden="true"
            >Copied</span
          >
        </span>
        <PortfolioLink
          href="https://www.linkedin.com/in/sarahdulat/"
          variant="utility"
          icon="external"
          external
        >
          LinkedIn</PortfolioLink
        >
        <PortfolioLink href="/SarahDulat-Resume.pdf" variant="utility" icon="external" external
          >Résumé</PortfolioLink
        >
      </div>
      <span class="copy-status" aria-live="polite">{{ copied ? 'Email copied' : '' }}</span>
    </div>
    <div class="footer-meta">
      <p>
        <span>Basel, Switzerland</span>
        <span class="footer-meta__separator" aria-hidden="true">·</span>
        <span aria-label="Current local time in Basel">{{ baselTime }}</span>
      </p>
      <p>Working remotely across time zones</p>
      <div class="footer-meta__links">
        <PortfolioLink href="/privacy" variant="utility">Privacy Policy</PortfolioLink>
        <PortfolioLink variant="utility" button @click="openAnalyticsPreferences">
          Analytics settings
        </PortfolioLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.contact-section {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin-right: var(--page-padding);
  margin-left: var(--page-padding);
  padding: var(--space-8) 0 var(--space-12);
  border-top: 1px solid var(--color-border);
  scroll-margin-top: var(--space-4);
  isolation: isolate;
}

h2 {
  margin: 0;
  font-size: var(--font-contact-title);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 1.1;
}

.contact-copy p {
  max-width: 560px;
  margin: 0 0 var(--space-4);
  font-size: var(--font-body-large);
  line-height: 1.32;
}

.footer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
}

.footer-meta {
  display: flex;
  grid-column: 1 / -1;
  justify-content: space-between;
  gap: var(--space-3);
  margin-top: var(--space-4);
  padding-top: var(--space-3);
  color: var(--color-text-muted);
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 1.4;
}

.footer-meta p {
  margin: 0;
}

.footer-meta :deep(.portfolio-link) {
  color: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  line-height: inherit;
}

.footer-meta__separator {
  margin: 0 0.55em;
}

.footer-meta__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.copy-action {
  position: relative;
  display: inline-flex;
}

.copy-tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  padding: 6px 10px;
  border-radius: 4px;
  background: var(--color-text);
  color: var(--color-background);
  font-size: 13px;
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, 4px);
  transition:
    opacity 160ms ease,
    transform 160ms ease;
}

.copy-tooltip::after {
  position: absolute;
  top: 100%;
  left: 50%;
  border: 4px solid transparent;
  border-top-color: var(--color-text);
  content: '';
  transform: translateX(-50%);
}

.copy-tooltip--visible {
  opacity: 1;
  transform: translate(-50%, 0);
}

.copy-status {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 768px) {
  .contact-section {
    grid-template-columns: 1fr;
    gap: var(--space-5);
    margin-right: var(--page-padding);
    margin-left: var(--page-padding);
    padding: var(--space-7) 0 var(--space-9);
  }

  .footer-actions {
    gap: var(--space-2) var(--space-3);
  }

  .footer-meta {
    flex-direction: column;
    gap: var(--space-1);
    margin-top: var(--space-2);
    padding-top: var(--space-3);
    font-size: 13px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
  }
}
</style>
