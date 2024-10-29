//
// TODO : syntax error is due the home component using a svg file
// I didn't want to spend anymore time finding a solution for this
// the test passes without issue
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Home } from './Home'
import { renderWithContext } from 'tests/test-utils/renderWithContext'

test('renders Home component with buttons and handles start button click', () => {
  const setCurrentScreen = vi.fn()

  renderWithContext({ children: <Home />, contextValues: { setCurrentScreen } })

  const instructionsButton = screen.getByText('Instructions')
  const startGameButton = screen.getByText('Start Game')

  expect(instructionsButton).toBeInTheDocument()
  expect(startGameButton).toBeInTheDocument()

  fireEvent.click(startGameButton)
  expect(setCurrentScreen).toHaveBeenCalledWith('enterName')
})
