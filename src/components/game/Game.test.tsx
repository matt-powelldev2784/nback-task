import { Game } from './Game'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import useGameTimer from './hooks/useGameTimer'
import { renderWithContext } from 'tests/vitest/test-utils/renderWithContext'

// Mock the useGameTimer hook
vi.mock('./hooks/useGameTimer', () => ({
  default: vi.fn()
}))
const mockUseGameTimer = vi.mocked(useGameTimer)

test('displays the current letter in white if a guess has not been made', async () => {
  // Mock implementation of useGameTimer
  mockUseGameTimer.mockReturnValue({
    currentLetterIndex: 2,
    gameStatus: 'inPlay'
  })

  renderWithContext({
    children: <Game />,
    contextValues: { currentGameString: 'ABZDEFGHIJKLMNO' }
  })

  expect(screen.getByText('Z')).toHaveClass('text-white')
})

test('displays the current letter in red if an incorrect guess is made', async () => {
  const user = userEvent.setup()

  // Mock implementation of useGameTimer
  mockUseGameTimer.mockReturnValue({
    currentLetterIndex: 2,
    gameStatus: 'inPlay'
  })

  renderWithContext({
    children: <Game />,
    contextValues: { currentGameString: 'ABZDEFGHIJKLMNO' }
  })

  const repeatedLetterButton = screen.getByText('Mark Repeated Letter')
  await user.click(repeatedLetterButton)

  expect(screen.getByText('Z')).toHaveClass('text-red-500')
})

test('displays the current letter in green if an correct guess is made', async () => {
  const user = userEvent.setup()

  // Mock implementation of useGameTimer
  mockUseGameTimer.mockReturnValue({
    currentLetterIndex: 2,
    gameStatus: 'inPlay'
  })

  renderWithContext({
    children: <Game />,
    contextValues: { currentGameString: 'AAAAAAAAAAAAAA' }
  })

  const repeatedLetterButton = screen.getByText('Mark Repeated Letter')
  await user.click(repeatedLetterButton)

  expect(screen.getByText('A')).toHaveClass('text-green-500')
})
