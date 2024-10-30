import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Home } from './Home'
import userEvent from '@testing-library/user-event'
import { renderWithContext } from 'tests/vitest/test-utils/renderWithContext'

test('checks home component renders and that the start game button can be pressed', async () => {
  const user = userEvent.setup()
  const setCurrentScreen = vi.fn()

  renderWithContext({ children: <Home />, contextValues: { setCurrentScreen } })

  const startGameButton = screen.getByText('Start Game')

  await user.click(startGameButton)

  expect(setCurrentScreen).toHaveBeenCalledWith('enterName')
})

test('displays instructions when instructions button is clicked', async () => {
  const user = userEvent.setup()
  const setCurrentScreen = vi.fn()

  renderWithContext({ children: <Home />, contextValues: { setCurrentScreen } })

  const instructionsButton = screen.getByText('Instructions')
  await user.click(instructionsButton)

  const goBackButton = screen.getByText('Go back')
  expect(goBackButton).toBeInTheDocument()
})
