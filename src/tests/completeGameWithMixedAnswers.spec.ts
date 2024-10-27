import { test, expect } from '@playwright/test'

test('user completes game with a mix of correct and incorrect answers', async ({
  page
}) => {
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
    name: 'Repeated Letter'
  })
  await expect(repeatedLetterButton).toBeVisible()

  // Set the currentGameString for test environment
  await page.evaluate(() => {
    window.setCurrentGameString('XZABABABABABABZ')
  })

  // Wait until first letter appears and then click repeated letter button
  // This will give an incorrect answer
  await page.waitForTimeout(2300)
  await repeatedLetterButton.click()
  // wait until the 5th letters appears this is the first repeating letter in my currentGameString
  // This will give a correct answer
  await page.waitForTimeout(8900)
  await repeatedLetterButton.click()
  // wait for game to complete before clicking view results button
  await page.waitForTimeout(26002)

  //click view results button
  const viewResultsButton = page.getByRole('button', { name: 'View Results' })
  await viewResultsButton.click()

  ///////////////////////////////// Results Screen Tests  //////////////////////////////////
  // expect results screen to report 1 correct and 1 incorrect answer
  await expect(page.getByText('You had 1 incorrect answers')).toBeVisible()
  await expect(page.getByText('You had 1 correct answers')).toBeVisible()

  // expect user can click start again button
  const startAgainButton = page.getByRole('button', { name: 'Start Again' })
  await startAgainButton.click()

  ///////////////////////////////// Home Screen Tests  //////////////////////////////////
  // expect to see home screen
  await expect(startGameButton).toBeVisible()
})
