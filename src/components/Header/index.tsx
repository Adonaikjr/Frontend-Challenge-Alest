import { ContainerHeader } from './style'
import { ImExit } from 'react-icons/all'
import { useNavigate } from 'react-router-dom'
export function Header() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('@challengeAlest:user')
    localStorage.removeItem('@challengeAlest:token')
    navigate('/')
  }
  return (
    <ContainerHeader>
      <div></div>
      <h1>Produtos CRUD</h1>
      <div>
        <ImExit size={30} cursor="pointer" onClick={handleLogout} />
      </div>
    </ContainerHeader>
  )
}
