import { test, expect } from '@playwright/test'

test.describe('homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/')
  })

  test('should navigate to enter name screen when start button is clicked', async ({
    page
  }) => {
    const startGameButton = page.getByRole('button', { name: 'Start Game' })
    startGameButton.click()

    await expect(page.getByText('Enter your name to begin:')).toBeVisible()
  })
})
