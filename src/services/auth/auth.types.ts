export type LoginArgs = {
  login: string
  password: string
  rememberMe?: boolean
}

export type RegistrationArgs = {
  html?: string
  name?: string
  password: string
  email: string
  subject?: string
  sendConfirmationEmail?: boolean
}
