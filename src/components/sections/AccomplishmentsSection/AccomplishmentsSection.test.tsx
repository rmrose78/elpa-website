import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import AccomplishmentsSection from './AccomplishmentsSection'

describe('AccomplishmentsSection', () => {
  it('renders the heading and all accomplishment cards', () => {
    render(<AccomplishmentsSection />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Accomplishments' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Historic Landmark Plaque Program' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Community Engagement' })
    ).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<AccomplishmentsSection />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
