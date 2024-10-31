import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'
import { Mock, vi } from 'vitest'

describe('Button', () => {
  let onClick: Mock

  beforeEach(() => {
    onClick = vi.fn()
    render(
      <Button
        onClick={onClick}
        classNames="my-2 max-w-full rounded-xl bg-blue-800 text-white"
        text="Click me"
      />
    )
  })

  test('button renders with correct text', () => {
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })

  test('button can be clicked', async () => {
    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: 'Click me' })

    await user.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('expect button to have correct class names', () => {
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toHaveClass(
      'my-2 max-w-full rounded-xl bg-blue-800 text-white'
    )
  })
})
