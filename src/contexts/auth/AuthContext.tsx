import { ReactNode, createContext, useState } from 'react'
import { AuthContextProps, UserData } from './types'

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null)
  const [isLogged, setIsLogged] = useState(false)

  const login = (user: UserData) => {
    setUser(user)
    setIsLogged(true)
  }

  const logout = () => {
    setUser(null)
    setIsLogged(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        login,
        logout,
      }}
    >
      <>{children}</>
    </AuthContext.Provider>
  )
}
