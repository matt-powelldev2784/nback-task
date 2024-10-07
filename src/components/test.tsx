import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    render(<App />)

    const testText = screen.getByText('test')
    expect(testText).toBeInTheDocument()
  })
})
