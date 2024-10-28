//
// TODO : syntax error is due the home component using a svg file
// I didn't want to spend anymore time finding a solution for this
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Home } from './Home'
import { render } from 'tests/test-utils/renderWithContext'

test('renders Home component with buttons and handles start button click', () => {
  const setCurrentScreen = vi.fn()

  render({ children: <Home />, contextValues: { setCurrentScreen } })

  const instructionsButton = screen.getByText('Instructions')
  const startGameButton = screen.getByText('Start Game')

  expect(instructionsButton).toBeInTheDocument()
  expect(startGameButton).toBeInTheDocument()

  fireEvent.click(startGameButton)
  expect(setCurrentScreen).toHaveBeenCalledWith('enterName')
})
