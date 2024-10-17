import { render, screen } from '@testing-library/react'
import App from 'components/App'
import userEvent from '@testing-library/user-event'

describe('App', () => {
  test('navigates to enter name screen when "Start Game" button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    // click the "Start Game" button
    const startGameButton = screen.getByText('Start Game')
    await user.click(startGameButton)

    // check that the enter name screen is displayed
    const enterNameText = screen.getByText('Enter your name to begin:')
    expect(enterNameText).toBeInTheDocument()
  })
})
