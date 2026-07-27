import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import PreservationSection from './PreservationSection'

describe('PreservationSection', () => {
  it('renders every building card with no modal open', () => {
    render(<PreservationSection />)

    expect(
      screen.getByRole('button', { name: 'View details for Wooden Front Commercial Building' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'View details for Craig Adams Commercial Building' })
    ).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the modal with the selected building details on card click', async () => {
    const user = userEvent.setup()
    render(<PreservationSection />)

    await user.click(
      screen.getByRole('button', { name: 'View details for Wooden Front Commercial Building' })
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(
      within(dialog).getByText('310 E. Main St.')
    ).toBeInTheDocument()
    expect(within(dialog).getByText('Saved from demolition')).toBeInTheDocument()
  })

  it('shows the "lost" banner for a demolished building', async () => {
    const user = userEvent.setup()
    render(<PreservationSection />)

    await user.click(
      screen.getByRole('button', { name: 'View details for Craig Adams Commercial Building' })
    )

    const dialog = screen.getByRole('dialog')
    expect(
      within(dialog).getByText(/demolished it in September 2007/)
    ).toBeInTheDocument()
  })

  it('closes the modal when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<PreservationSection />)

    await user.click(
      screen.getByRole('button', { name: 'View details for Wooden Front Commercial Building' })
    )
    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('has no accessibility violations with no modal open', async () => {
    const { container } = render(<PreservationSection />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with the modal open', async () => {
    const user = userEvent.setup()
    render(<PreservationSection />)

    await user.click(
      screen.getByRole('button', { name: 'View details for Wooden Front Commercial Building' })
    )

    // Radix Dialog portals its content to document.body, outside the
    // render() container -- scan the whole body so the portaled modal
    // is actually checked, not just the section's own subtree.
    expect(await axe(document.body)).toHaveNoViolations()
  })
})
