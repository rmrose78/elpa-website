import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import AboutSection from './AboutSection'

describe('AboutSection', () => {
  it('renders credentials, org badges, and body copy', () => {
    render(<AboutSection />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Credentials & Memberships' })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Recognized 501(c)(3) Non-Profit organization')
    ).toBeInTheDocument()
    expect(screen.getByText('Preservation Texas')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<AboutSection />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
