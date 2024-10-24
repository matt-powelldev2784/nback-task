import { test, expect } from '@playwright/test'

test.describe('end to end test', () => {
  test('should navigate to enter name screen when start button is clicked', async ({
    page
  }) => {
    // navigate to home page
    await page.goto('http://localhost:5173/')

    // click start game button
    const startGameButton = page.getByRole('button', { name: 'Start Game' })
    startGameButton.click()

    // expect to see enter name screen
    await expect(page.getByText('Enter your name to begin:')).toBeVisible()
  })
})
