import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import Footer from './Footer'

describe('Footer', () => {
  it('renders brand, navigate, and organization columns', () => {
    render(<Footer />)

    expect(
      screen.getByText('Eagle Lake Preservation Alliance')
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accomplishments' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Preservation Texas' })
    ).toBeInTheDocument()
  })

  it('scrolls to an in-page section when a navigate link is clicked', async () => {
    const user = userEvent.setup()
    document.body.innerHTML += '<div id="about"></div>'
    const scrollIntoView = jest.fn()
    Element.prototype.scrollIntoView = scrollIntoView

    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'About & Credentials' }))

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('opens an external organization link in a new tab', async () => {
    const user = userEvent.setup()
    const windowOpen = jest.fn()
    window.open = windowOpen

    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Preservation Texas' }))

    expect(windowOpen).toHaveBeenCalledWith(
      'https://www.preservationtexas.org',
      '_blank',
      'noopener noreferrer'
    )
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
