import { createContext } from 'react'

interface AuthUserContextType {
  user_info: { [key: string]: string }
  setUserInfo: (value: any) => void
}

export const AuthUserContext = createContext<AuthUserContextType>({
  user_info: {},
  setUserInfo: () => {},
})
