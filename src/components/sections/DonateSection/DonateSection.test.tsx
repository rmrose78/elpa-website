import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import DonateSection from './DonateSection'

describe('DonateSection', () => {
  it('renders the impact list and donation card with $25 selected by default', () => {
    render(<DonateSection />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Help Us Save the Next One' })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '$25' })).toHaveAttribute(
      'aria-pressed',
      'true'
    )
    expect(screen.getByRole('spinbutton', { name: 'Enter donation amount' })).toHaveValue(25)
  })

  it('selecting a different preset amount updates aria-pressed and the input', async () => {
    const user = userEvent.setup()
    render(<DonateSection />)

    await user.click(screen.getByRole('button', { name: '$100' }))

    expect(screen.getByRole('button', { name: '$100' })).toHaveAttribute(
      'aria-pressed',
      'true'
    )
    expect(screen.getByRole('button', { name: '$25' })).toHaveAttribute(
      'aria-pressed',
      'false'
    )
    expect(screen.getByRole('spinbutton', { name: 'Enter donation amount' })).toHaveValue(100)
  })

  it('typing a custom amount deselects every preset and selects "Other"', async () => {
    const user = userEvent.setup()
    render(<DonateSection />)

    const input = screen.getByRole('spinbutton', { name: 'Enter donation amount' })
    await user.clear(input)
    await user.type(input, '75')

    expect(screen.getByRole('button', { name: '$25' })).toHaveAttribute(
      'aria-pressed',
      'false'
    )
    expect(screen.getByRole('button', { name: 'Other' })).toHaveAttribute(
      'aria-pressed',
      'true'
    )
  })

  it('has no accessibility violations in the default state', async () => {
    const { container } = render(<DonateSection />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations after selecting a different amount', async () => {
    const user = userEvent.setup()
    const { container } = render(<DonateSection />)

    await user.click(screen.getByRole('button', { name: '$100' }))

    expect(await axe(container)).toHaveNoViolations()
  })
})
