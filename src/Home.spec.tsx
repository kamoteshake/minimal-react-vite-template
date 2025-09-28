import { render, screen, fireEvent } from '@testing-library/react'

import Home from './Home'

describe('<Home />', () => {
  it('renders the logos', () => {
    render(<Home />)

    expect(screen.getByTestId('viteLogo')).toBeInTheDocument()
    expect(screen.getByTestId('reactLogo')).toBeInTheDocument()
  })

  it('adds count when button is clicked', () => {
    render(<Home />)

    const button = screen.getByTestId('countButton')

    expect(button).toHaveTextContent('count is 0')

    fireEvent.click(button)

    expect(button).toHaveTextContent('count is 1')
  })
})
