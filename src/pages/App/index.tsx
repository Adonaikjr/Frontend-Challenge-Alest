import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import {
  ContainerApp,
  ContainerArticle,
  ContainerMain,
  ContainerAtt,
} from './styled'
import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import { useNavigate } from 'react-router-dom'
import { FiRefreshCcw } from 'react-icons/all'
// tipando as informações capturadas da api
interface typePropsData {
  id: string
  linkUrl: string
  price: number
  title: string
}

function App() {
  const [data, setData] = useState<typePropsData[]>([])
  const navigate = useNavigate()
  // rota base para conseguir mostrar as imagens
  const baseUrl = 'https://challenge-alest.onrender.com'
  // coletando informações da api GET
  async function getClothes() {
    try {
      const response = await api.get('/clothes')
      // Guardando informações dentro de um estado
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleNew() {
    navigate('/new')
  }

  useEffect(() => {
    // assim que carregar a pagina chamar function para mostrar os itens cadastrado
    getClothes()
    const user = localStorage.getItem('@challengeAlest:user')
    if (!user) {
      navigate('/')
    }
  }, [navigate])

  return (
    <ContainerApp>
      <ContainerArticle>
        <div>
          <Button title="Adicionar" onClick={handleNew} />
          <Input placeholder="Search" enabled />
          <Button title="Pesquisar" />
        </div>
      </ContainerArticle>
      <ContainerAtt>
        {/* Atualizar possiveis alterações, para não atingir o limite de leituras do cloud firestore */}
        <FiRefreshCcw onClick={getClothes} size={30} cursor="pointer" />
        Atualizar
      </ContainerAtt>
      <ContainerMain>
        {/* mapeando array de objetos da api */}
        {data &&
          data?.map((item) => {
            return (
              <Card
                key={item.id}
                cardId={item.id}
                title={item.title}
                img={`${baseUrl}/file/${item.linkUrl}`}
                price={item.price}
              />
            )
          })}
      </ContainerMain>
    </ContainerApp>
  )
}

export default App
