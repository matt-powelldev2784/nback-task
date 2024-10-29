// TODO: Syntax error in the test file seems to relate to the way Babel handles decorators and CSS files.
// I did not want to spend anymore time finding a solution for this

import { renderWithContext } from 'tests/test-utils/renderWithContext'
import { EnterName } from './EnterName'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
