import { expect, test } from '@playwright/test'

test('shows the complete portfolio homepage', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Sarah Dulat-Boussaid — Design Engineer. I design what I build.',
  )
  await expect(page.getByRole('heading', { name: 'Selected work' })).toBeVisible()
  await expect(page.locator('.project-card')).toHaveCount(2)
  await expect(page.getByRole('heading', { name: 'Have something in mind?' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Copy hello@sarahdulat.com' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'View case study' })).toHaveCount(2)
  await expect(page.getByRole('link', { name: 'View case study' }).first()).toHaveAttribute(
    'href',
    '/case-studies/the-skin-routine',
  )
})

test('lets the selected work images peek into a typical desktop viewport', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')

  const workHeading = page.getByRole('heading', { name: 'Selected work' })
  const headingBox = await workHeading.boundingBox()
  const firstProjectImage = await page.locator('.project-media').first().boundingBox()

  expect(headingBox).not.toBeNull()
  expect(headingBox!.y).toBeLessThan(900)
  expect(headingBox!.y).toBeGreaterThan(640)
  expect(firstProjectImage).not.toBeNull()
  expect(firstProjectImage!.y).toBeLessThan(900)
  expect(firstProjectImage!.y).toBeGreaterThan(760)
})

test('reopens analytics preferences from the footer', async ({ page }) => {
  await page.goto('/')

  const dialog = page.getByRole('dialog', { name: 'Optional analytics' })
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: 'Decline' }).click()
  await expect(dialog).toBeHidden()

  await page.getByRole('link', { name: 'Analytics settings' }).click()
  await expect(dialog).toBeVisible()
})
