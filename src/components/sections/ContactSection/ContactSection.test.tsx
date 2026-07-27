import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import ContactSection from './ContactSection'

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByRole('textbox', { name: 'Your name' }), 'Jane Doe')
  await user.type(
    screen.getByRole('textbox', { name: 'Your email address' }),
    'jane@example.com'
  )
  await user.type(
    screen.getByRole('textbox', { name: 'Your message' }),
    'I have a question about a historic property.'
  )
}

describe('ContactSection', () => {
  it('renders the empty form by default', () => {
    render(<ContactSection />)

    expect(screen.getByRole('heading', { level: 3, name: 'Send a Message' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('shows an alert and does not submit when required fields are missing', async () => {
    const user = userEvent.setup()
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})

    render(<ContactSection />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(alertSpy).toHaveBeenCalledWith(
      'Please fill in your name, email, and message before sending.'
    )
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()

    alertSpy.mockRestore()
  })

  it('shows the success state after a valid submission', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('heading', { level: 3, name: 'Message sent!' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Send Message' })).not.toBeInTheDocument()
  })

  it('has no accessibility violations in the default form state', async () => {
    const { container } = render(<ContactSection />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations in the success state', async () => {
    const user = userEvent.setup()
    const { container } = render(<ContactSection />)

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await axe(container)).toHaveNoViolations()
  })
})
