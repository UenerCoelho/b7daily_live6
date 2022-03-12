import { useState } from "react"
import { User } from "../../types/User"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (email: string, password: string) => {
    // Continuar a partir daqui minuto 45:49
  }

  const signOut = () => {

  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}