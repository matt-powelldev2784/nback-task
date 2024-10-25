import { test, expect } from '@playwright/test'

test('end to end test', async ({ page }) => {
  // navigate to home page
  await page.goto('http://localhost:5173/')

  ///////////////////////////////// Home Screen Tests  //////////////////////////////////
  // expect user can click start game button
  const startGameButton = page.getByRole('button', { name: 'Start Game' })
  startGameButton.click()

  ///////////////////////////////// Enter Name Screen Tests  //////////////////////////////////
  // expect to see enter name screen
  await expect(page.getByText('Enter your name to begin:')).toBeVisible()

  // expect user can enter name and click submit butotn
  await page.fill('input', 'John Snmith')
  const submitButton = page.getByRole('button', { name: 'Submit' })
  submitButton.click()

  ///////////////////////////////// Game Screen Tests  //////////////////////////////////
  //expect to see game screen
  const repeatedLetterButton = page.getByRole('button', {
    name: 'Repeated Letter'
  })
  await expect(repeatedLetterButton).toBeVisible()

  // expect user can click the repeaed letter button
  // the game will end because the repeated letter button is clicked on the first and second letter
  // both answers will be incorrect as you can't get a repeated letter on the first two letters
  // after two inccorect guesses the game ends
  await page.waitForTimeout(6000)
  await repeatedLetterButton.click()
  await page.waitForTimeout(2200)
  await repeatedLetterButton.click()
  await page.waitForTimeout(4000)

  // expect to see view results button
  const viewResultsButton = page.getByRole('button', {
    name: 'View Results'
  })
  await expect(viewResultsButton).toBeVisible()

  // expect user can click view results button
  await viewResultsButton.click()

  ///////////////////////////////// Results Screen Tests  //////////////////////////////////
  // expect to see results screen
  await expect(page.getByText('Results')).toBeVisible()

  // expect user can click start again button
  const startAgainButton = page.getByRole('button', { name: 'Start Again' })
  startAgainButton.click()

  ///////////////////////////////// Home Screen Tests  //////////////////////////////////
  // expect to see home screen
  await expect(startGameButton).toBeVisible()
})
