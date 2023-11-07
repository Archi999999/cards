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

export type MeResponse = {
  email?: string
  name?: string
  id?: string
  isEmailVerified?: boolean
  avatar?: string | null
  created?: string
  updated?: string
} | null

export type updateResponse = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}


export type updateRequest = {
  avatar?: string
  name?: string
  email?: string
} | FormData

export type RecoverPassArgs = {
  html?: string
  email: string
  subject?: string
}

export type ResetPasswordArgs = {
  token: string
  password: string
}


