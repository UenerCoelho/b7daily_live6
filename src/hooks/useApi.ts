import axios from "axios";

const api = axios.create({
  baseURL: 'process.env.REACT_APP_API'
})

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: 'José', email: 'jose@gmail.com' },
    }
    const response = await api.post('/validate', {token});
    return response.data;
  }, 
  
  signIn: async (email: string, password: string) => {
    // retorno falso
    return {
      user: { id: 3, name: 'José', email: 'jose@gmail.com' },
      token: '123456789'
    }
    // API não existe, por isso foi usado um retorno falso
    const response = await api.post('/signin', { email, password})
    return response.data;
  },
  
  logOut: async () => {
    return { status: true }
    const response = await api.post('/logout')
    return response.data;
  }
})