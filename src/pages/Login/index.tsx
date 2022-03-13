import { useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')
  return (
    <div>
      <h2>Página Fechada</h2>

      <input type="text" value={email} placeholder="Digite seu email" />
      <input type="password" value={password} placeholder="Digite sua senha" />
      <button onClick={handleLogin}>Logar</button>
    </div>
  )
}
