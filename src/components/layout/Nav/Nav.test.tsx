import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import Nav from './Nav'

describe('Nav', () => {
  it('renders the logo and desktop links, with the mobile menu closed', () => {
    render(<Nav />)

    expect(
      screen.getByRole('button', { name: /Eagle Lake Preservation Alliance/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Toggle navigation menu' })
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the mobile menu on hamburger click and updates aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Nav />)

    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))

    expect(
      screen.getByRole('button', { name: 'Toggle navigation menu' })
    ).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the mobile menu and scrolls when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    document.body.innerHTML += '<div id="about"></div>'
    const scrollIntoView = jest.fn()
    Element.prototype.scrollIntoView = scrollIntoView

    render(<Nav />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    // Two "About" buttons exist once the mobile menu is open (desktop +
    // mobile lists both render) -- click the last one, which is the
    // mobile-only list.
    const aboutButtons = screen.getAllByRole('button', { name: 'About' })
    await user.click(aboutButtons[aboutButtons.length - 1])

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    expect(
      screen.getByRole('button', { name: 'Toggle navigation menu' })
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('has no accessibility violations with the menu closed', async () => {
    const { container } = render(<Nav />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with the menu open', async () => {
    const user = userEvent.setup()
    const { container } = render(<Nav />)

    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))

    expect(await axe(container)).toHaveNoViolations()
  })
})
