import { EnterName } from './EnterName'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithContext } from 'tests/vitest/test-utils/renderWithContext'

test('user can enter their name and click the submit button', async () => {
  const user = userEvent.setup()
  const setCurrentScreen = vi.fn()
  const setPlayerName = vi.fn()

  renderWithContext({
    children: <EnterName />,
    contextValues: { setCurrentScreen, setPlayerName }
  })

  const nameInput = screen.getByPlaceholderText('Name')
  const submitButton = screen.getByText('Submit')

  await user.type(nameInput, 'John Doe')
  await user.click(submitButton)

  expect(setPlayerName).toHaveBeenCalledWith('John Doe')
  expect(setCurrentScreen).toHaveBeenCalledWith('game')
})
