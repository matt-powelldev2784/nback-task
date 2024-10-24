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

    // enter name and click submit butotn
    await page.fill('input', 'John Snmith')
    const submitButton = page.getByRole('button', { name: 'Submit' })
    submitButton.click()

    //expect to see game screen
    await expect(
      page.getByRole('button', { name: 'Repeated Letter' })
    ).toBeVisible()
  })
})
