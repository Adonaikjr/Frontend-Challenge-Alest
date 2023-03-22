import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../service/api'
import { ContainerSign } from '../SignIn/styled'

export function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()
  async function handleSignUp(e: any) {
    e.preventDefault()
    try {
      if (!email || !password || !name) {
        return alert('Preencha todos os campos ⚠')
      }
      const CreateUser = {
        name,
        email,
        password,
      }
      await api.post('/users', CreateUser)
      alert('Cadastrado com Sucesso! ✅')
      navigate('/')
    } catch (error) {
      alert('Email informado já está cadastrado')
    }
  }

  return (
    <ContainerSign>
      <form>
        <fieldset>
          <legend>SignUp</legend>
          <label>
            Nome
            <Input
              type="text"
              iconUser
              placeholder="Nome"
              onChange={(e: any) => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <Input
              type="email"
              iconEmail
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <Input
              type="password"
              iconPassword
              placeholder="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </label>
          <Button title="Cadastrar" onClick={handleSignUp} />
          <span>
            Já tem conta? <Link to="/">Entre</Link>
          </span>
        </fieldset>
      </form>
    </ContainerSign>
  )
}
