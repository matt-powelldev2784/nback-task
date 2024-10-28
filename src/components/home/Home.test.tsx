import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Home } from './Home'
import { AppContext } from '../App'

test('renders Home component with buttons and handles start button click', () => {
  const setCurrentScreen = vi.fn()

  render(
    <AppContext.Provider
      value={{
        setCurrentScreen,
        currentScreen: 'home',
        playerName: '',
        setPlayerName: vi.fn(),
        currentGameString: '',
        setCurrentGameString: vi.fn(),
        correctAnswerCount: 0,
        setCorrectAnswerCount: vi.fn(),
        incorrectAnswerCount: 0,
        setIncorrectAnswerCount: vi.fn(),
        resetGame: vi.fn()
      }}
    >
      <Home />
    </AppContext.Provider>
  )

  const instructionsButton = screen.getByText('Instructions')
  const startGameButton = screen.getByText('Start Game')

  expect(instructionsButton).toBeInTheDocument()
  expect(startGameButton).toBeInTheDocument()

  fireEvent.click(startGameButton)
  expect(setCurrentScreen).toHaveBeenCalledWith('enterName')
})
