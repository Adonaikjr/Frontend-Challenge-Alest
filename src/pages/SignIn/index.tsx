import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../service/api'
import { ContainerSign } from './styled'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // hook de context
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState()
  // navegação
  const navigate = useNavigate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function handleSignIn(e: any) {
    e.preventDefault()
    const result = {
      email,
      password,
    }
    try {
      // erros de usuario nao digiar nada
      if (!email || !password) {
        return alert('Preencha todos os campos ⚠')
      }
      // enviando email e password para db
      const res: any = await api.post('/session', result)
      setData(res.data)

      // salvando informações do banco
      const token = res.data.token
      const user = res.data.id
      // enviando token para o header
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      // verificando se o token e user é falso
      if (!user || !token) {
        setEmail('')
        setPassword('')
        alert('Parece que você não está registrado em nosso sistema ❌')
        return
      }
      // adicionando token e user ao localstorage
      localStorage.setItem('@challengeAlest:user', user)
      localStorage.setItem('@challengeAlest:token', token)
    } catch (error) {
      alert('Parece que você não está registrado em nosso sistema ❌')
    }
  }

  useEffect(() => {
    // se o usuario logar e existir ir para pagina de home
    const user = localStorage.getItem('@challengeAlest:user')
    if (user) {
      navigate('/home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSignIn])

  return (
    <ContainerSign>
      <form>
        <fieldset>
          <legend>SignIn</legend>
          <label>
            Email
            <Input
              iconEmail
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <Input
              iconPassword
              placeholder="Password"
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </label>
          <Button title="Entrar" onClick={handleSignIn} />
          <span>
            Não possui conta? <Link to="/signup">Cadastre-se</Link>
          </span>
        </fieldset>
      </form>
    </ContainerSign>
  )
}
