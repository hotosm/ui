import { test, expect } from '@playwright/test'


test.describe('hot-header (visual)', () => {
  test('small + borderBottom + tabs', async ({ page }) => {
    await page.goto('/playwright/vr/header.html?title=Test%20App&size=small&showLogin=true')
    const target = page.locator('hot-header')
    await expect(target).toHaveScreenshot('hot-header-small.png', {
      animations: 'disabled',
      timeout: 10000,
    })
  })

  test('large without borderBottom', async ({ page }) => {
    await page.goto('/playwright/vr/header.html?title=Large&size=large&borderBottom=false')
    const target = page.locator('hot-header')
    await expect(target).toHaveScreenshot('hot-header-large-noborder.png', {
      animations: 'disabled',
      timeout: 10000,
    })
  })

  test('login open state', async ({ page }) => {
    await page.goto('/playwright/vr/header.html?title=Login%20State&size=small&showLogin=true')
    // open the dialog by invoking the underlying button if it exists
    // (robust to different internal markup thanks to shadow piercing)
    const el = page.locator('hot-header')
    await page.evaluate(async (host) => {
      if (!host) return;
      const sr = host.shadowRoot!;
      const maybeBtn = sr.querySelector('.login-button') || sr.querySelector('wa-button');
      (maybeBtn as HTMLElement)?.click?.()
      // If your code uses a method, you could do: (host as any)._handleLogin?.()
    }, await el.elementHandle())

    await expect(el).toHaveScreenshot('hot-header-login-open.png', {
      animations: 'disabled',
      timeout: 10000,
    })
  })




})
