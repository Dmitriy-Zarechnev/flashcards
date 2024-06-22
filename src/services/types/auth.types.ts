export type AuthResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type UpdateUserDataArgs = {
  avatar?: string
  name: string
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}

export type SignUpArgs = Omit<LoginArgs, 'rememberMe'>

export type LoginResponse = {
  accessToken: string
  refreshToken: string
}
