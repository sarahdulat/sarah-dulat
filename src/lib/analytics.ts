export const ANALYTICS_MEASUREMENT_ID = 'G-1PVLS4K203'

const consentStorageKey = 'analytics-consent'
const analyticsScriptId = 'google-analytics-script'
let openPreferencesHandler: (() => void) | undefined

export type AnalyticsConsent = 'granted' | 'denied' | null

export function openAnalyticsPreferences() {
  openPreferencesHandler?.()
}

export function registerAnalyticsPreferences(handler: () => void) {
  openPreferencesHandler = handler

  return () => {
    if (openPreferencesHandler === handler) {
      openPreferencesHandler = undefined
    }
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[][]
    gtag?: (...args: unknown[]) => void
  }
}

export function getAnalyticsConsent(): AnalyticsConsent {
  try {
    const consent = window.localStorage.getItem(consentStorageKey)
    return consent === 'granted' || consent === 'denied' ? consent : null
  } catch {
    return null
  }
}

export function setAnalyticsConsent(consent: Exclude<AnalyticsConsent, null>) {
  try {
    window.localStorage.setItem(consentStorageKey, consent)
  } catch {
    // Analytics stays disabled if storage is unavailable.
  }

  const disableKey = `ga-disable-${ANALYTICS_MEASUREMENT_ID}`
  ;(window as unknown as Record<string, unknown>)[disableKey] = consent === 'denied'

  if (consent === 'denied') {
    deleteAnalyticsCookies()
  }
}

function deleteAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name): name is string => Boolean(name?.startsWith('_ga')))
  const hostname = window.location.hostname
  const hostnameParts = hostname.split('.')
  const registrableDomain =
    hostnameParts.length > 1 ? `.${hostnameParts.slice(-2).join('.')}` : undefined
  const domains = [undefined, hostname, `.${hostname}`, registrableDomain]

  for (const name of cookieNames) {
    for (const domain of domains) {
      const domainAttribute = domain ? `; domain=${domain}` : ''
      document.cookie = `${name}=; Max-Age=0; path=/${domainAttribute}`
    }
  }
}

function initializeDataLayer() {
  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function (...args: unknown[]) {
      window.dataLayer?.push(args)
    }
}

export function loadAnalytics() {
  if (getAnalyticsConsent() !== 'granted') {
    return
  }

  setAnalyticsConsent('granted')
  initializeDataLayer()

  if (!document.getElementById(analyticsScriptId)) {
    const script = document.createElement('script')
    script.id = analyticsScriptId
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.gtag?.('js', new Date())
    window.gtag?.('config', ANALYTICS_MEASUREMENT_ID, { send_page_view: false })
  }
}

export function trackPageView(path: string) {
  if (getAnalyticsConsent() !== 'granted') {
    return
  }

  loadAnalytics()
  window.gtag?.('event', 'page_view', {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
  })
}
