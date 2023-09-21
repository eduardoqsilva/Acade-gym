export type UserData = {
  accessToken: string
  user: {
    email: string
    id: number
  }
}

export type AuthContextProps = {
  isLogged: boolean
  user: UserData | null
  login: (user: UserData) => void
  logout: () => void
}
