import { renderWithContext } from 'tests/test-utils/renderWithContext'
import { Game } from './Game'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import useGameTimer from './hooks/useGameTimer'

// Mock the useGameTimer hook
vi.mock('./hooks/useGameTimer', () => ({
  default: vi.fn()
}))
const mockUseGameTimer = vi.mocked(useGameTimer)

test('displays the current letter in red if an incorrect guess is made', async () => {
  const user = userEvent.setup()
  const setCurrentScreen = vi.fn()
  const setPlayerName = vi.fn()

  // Mock implementation of useGameTimer
  mockUseGameTimer.mockReturnValue({
    currentLetterIndex: 2,
    gameStatus: 'inPlay'
  })

  renderWithContext({
    children: <Game />,
    contextValues: {
      setCurrentScreen,
      setPlayerName,
      currentGameString: 'ABZDEFGHIJKLMNO'
    }
  })

  const repeatedLetterButton = screen.getByText('Repeated Letter')
  await user.click(repeatedLetterButton)

  expect(screen.getByText('Z')).toHaveClass('text-red-500')

  screen.debug()
})
