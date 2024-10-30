import { test, expect } from '@playwright/test'

test('user ends game early due to 2 x incorrect answers', async ({ page }) => {
  // navigate to home page
  await page.goto('/')

  ///////////////////////////////// Home Screen Tests  //////////////////////////////////
  // expect user can click start game button
  const startGameButton = page.getByRole('button', { name: 'Start Game' })
  await startGameButton.click()

  ///////////////////////////////// Enter Name Screen Tests  //////////////////////////////////
  // expect to see enter name screen
  await expect(page.getByText('Enter your name to begin:')).toBeVisible()

  // expect user can enter name and click submit button
  await page.fill('input', 'John Smith')
  const submitButton = page.getByRole('button', { name: 'Submit' })
  await submitButton.click()

  ///////////////////////////////// Game Screen Tests  //////////////////////////////////
  //expect to see game screen
  const repeatedLetterButton = page.getByRole('button', {
    name: 'Mark Repeated Letter'
  })
  await expect(repeatedLetterButton).toBeVisible()

  // Set the currentGameString for test environment
  await page.evaluate(() => {
    window.setCurrentGameString('XZABABABABABABZ')
  })

  // wait until first letter appears and then click repeated letter button
  // this will give an incorrect answer
  await page.waitForTimeout(2300)
  await repeatedLetterButton.click()
  // wait until the 2nd letter appears then click repeated letter button
  // this will give a incorrect answer
  await page.waitForTimeout(2300)
  await repeatedLetterButton.click()
  // wait for view results button to appear
  await page.waitForTimeout(3000)

  //click view results button
  const viewResultsButton = page.getByRole('button', { name: 'View Results' })
  await viewResultsButton.click()

  ///////////////////////////////// Results Screen Tests  //////////////////////////////////
  // expect results screen to report 0 correct and 2 incorrect answers
  await expect(page.getByText('You had 2 incorrect answers')).toBeVisible()
  await expect(page.getByText('You had 0 correct answers')).toBeVisible()

  // expect user can click start again button
  const startAgainButton = page.getByRole('button', { name: 'Start Again' })
  await startAgainButton.click()

  ///////////////////////////////// Home Screen Tests  //////////////////////////////////
  // expect to see home screen
  await expect(startGameButton).toBeVisible()
})
