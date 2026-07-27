import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('renders the heading, stats, and both CTAs', () => {
    render(<HeroSection />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Preserving the Soul of Eagle Lake/ })
    ).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Support Our Work' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: "See What We've Saved" })).toBeInTheDocument()
  })

  it('scrolls to the target section when a CTA is clicked', async () => {
    const user = userEvent.setup()
    document.body.innerHTML += '<div id="donate"></div>'
    const scrollIntoView = jest.fn()
    Element.prototype.scrollIntoView = scrollIntoView

    render(<HeroSection />)
    await user.click(screen.getByRole('button', { name: 'Support Our Work' }))

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<HeroSection />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
