import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import AnnouncementBar from './AnnouncementBar'

describe('AnnouncementBar', () => {
  it('renders the donate call to action', () => {
    render(<AnnouncementBar />)

    expect(
      screen.getByRole('button', { name: 'Donate Today →' })
    ).toBeInTheDocument()
  })

  it('scrolls to the donate section on click', async () => {
    const user = userEvent.setup()
    document.body.innerHTML += '<div id="donate"></div>'
    const scrollIntoView = jest.fn()
    Element.prototype.scrollIntoView = scrollIntoView

    render(<AnnouncementBar />)
    await user.click(screen.getByRole('button', { name: 'Donate Today →' }))

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<AnnouncementBar />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
