import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import MissionStrip from './MissionStrip'

describe('MissionStrip', () => {
  it('renders the mission quote and contact meta', () => {
    render(<MissionStrip />)

    expect(
      screen.getByText(/historic preservation and restoration/)
    ).toBeInTheDocument()
    expect(screen.getByText('(979) 234-6848')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<MissionStrip />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
