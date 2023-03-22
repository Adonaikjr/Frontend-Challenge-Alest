import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../service/api'

export const ContextProvider = createContext({})

export function Context({ children }: any) {
  const [data, setData] = useState<any>(null)
  const navigate = useNavigate()

  // deixando o usuario sempre logado caso exista um usuario com token
  useEffect(() => {
    const user = localStorage.getItem('@challengeAlest:user')
    const token = localStorage.getItem('@challengeAlest:token')
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    if (user) {
      navigate('/home')
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ContextProvider.Provider
      value={{
        setData,
        data,
      }}
    >
      {children}
    </ContextProvider.Provider>
  )
}

export function useSign() {
  const context = useContext(ContextProvider)
  return context
}
