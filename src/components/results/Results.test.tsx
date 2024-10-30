import { renderWithContext } from 'tests/vitest/test-utils/renderWithContext'
import { Results } from './Results'
import { screen } from '@testing-library/react'

test('displays the correct results information based on the current state', async () => {
  renderWithContext({
    children: <Results />,
    contextValues: {
      correctAnswerCount: 5,
      incorrectAnswerCount: 2,
      playerName: 'John Smith',
      currentGameString: 'ABABABABABABABA'
    }
  })

  // check the player name is displayed
  expect(screen.getByText('JOHN SMITH Results')).toBeInTheDocument()

  // check the correct and incorrect answers are displayed
  const correctAnswersText = screen.getByText('5')
  expect(correctAnswersText).toBeInTheDocument()

  const incorrectAnswersText = screen.getByText('2')
  expect(incorrectAnswersText).toBeInTheDocument()

  // check the current game string is displayed
  expect(screen.getByText('ABABABABABABABA')).toBeInTheDocument()
})
