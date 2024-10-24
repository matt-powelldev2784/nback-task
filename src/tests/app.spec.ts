import { test, expect } from '@playwright/test'

test('end to end test', async ({ page }) => {
  // navigate to home page
  await page.goto('http://localhost:5173/')

  ///////////////////////////////// Home Screen Tests  //////////////////////////////////
  // click start game button
  const startGameButton = page.getByRole('button', { name: 'Start Game' })
  startGameButton.click()

  ///////////////////////////////// Enter Name Screen Tests  //////////////////////////////////
  // expect to see enter name screen
  await expect(page.getByText('Enter your name to begin:')).toBeVisible()

  // enter name and click submit butotn
  await page.fill('input', 'John Snmith')
  const submitButton = page.getByRole('button', { name: 'Submit' })
  submitButton.click()

  ///////////////////////////////// Game Screen Tests  //////////////////////////////////
  //expect to see game screen
  const repeatedLetterButton = page.getByRole('button', {
    name: 'Repeated Letter'
  })
  await expect(repeatedLetterButton).toBeVisible()

  // check repeaed letter button can be clicked
  // the game will end because the repeated letter button is clicked on the first
  // two letters - which means it's the no letter can be repeated yet
  await page.waitForTimeout(4400)
  await repeatedLetterButton.click()
  await page.waitForTimeout(2200)
  await repeatedLetterButton.click()
  await page.waitForTimeout(2200)

  // expect to see view results button
  const viewResultsButton = page.getByRole('button', {
    name: 'View Results'
  })
  await expect(viewResultsButton).toBeVisible()
})
