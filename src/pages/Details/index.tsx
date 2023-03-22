import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { api } from '../../service/api'
import { NewContainerApp, ContainerDetails } from './styled'
import { MdArrowBack } from 'react-icons/all'
import { ContainerArticle } from '../App/styled'
interface typePropsData {
  id: string
  linkUrl: string
  price: number
  title: string
}
export function Details() {
  const { id } = useParams()
  const [data, setData] = useState<typePropsData[]>([])
  const baseUrl = 'http://localhost:3333'
  const [title, setTitle] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [avatarURL, setAvatarURL] = useState()
  const [price, setPrice] = useState<any>(0)

  const navigate = useNavigate()

  function handleBack() {
    // voltando rota sem deixar o historico de stacks
    navigate(-1)
  }

  function handleFile(event: any) {
    // colocando imagem
    const image = event.target.files[0]
    // verificando se tem imagem
    if (!event.target.files || !image) {
      return
    }
    // recebendo tipos de imagem
    if (image.type === 'file/jpeg' || image.type === 'image/png') {
      setLinkUrl(image)
      setAvatarURL(URL.createObjectURL(event.target.files[0]))
    }
  }

  async function getClothes() {
    try {
      const response = await api.get('/clothes')
      // guardando dados da request dentro de um estado
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  // atualizando product
  async function handleUpdate(e: any) {
    e.preventDefault()
    // armazenando tudo em formData
    const formData = new FormData()

    formData.append('linkUrl', linkUrl)
    formData.append('title', title)
    formData.append('price', price)
    try {
      // enviando dados para atualizar
      await api.put(`/clothes/${id}`, formData)
      navigate('/home')
    } catch (error) {
      throw new Error('Erro ao Atualizar')
    }
  }

  useEffect(() => {
    // fazendo request para mostrar o card selecionado
    getClothes()
    const user = localStorage.getItem('@challengeAlest:user')
    if (!user) {
      navigate('/')
    }
  }, [navigate])
  return (
    <ContainerDetails>
      <ContainerArticle>
        <MdArrowBack size={35} onClick={handleBack} cursor="pointer" />
        <div></div>
      </ContainerArticle>
      <NewContainerApp>
        <section>
          {data &&
            // eslint-disable-next-line array-callback-return
            data?.map((item) => {
              // filtrando Produto que o ID for igual ao id do parametro
              if (item.id === id)
                return (
                  <>
                    <h1>Antes de atualizar</h1>
                    <Card
                      price={item.price}
                      title={item.title}
                      key={item.id}
                      img={`${baseUrl}/file/${item.linkUrl}`}
                    />
                  </>
                )
            })}
        </section>
        <form>
          <fieldset>
            <legend>Create new Clothes</legend>
            <label>
              Title
              <Input
                iconTitle
                placeholder="Titulo"
                onChange={(e: any) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Imagem
              <Input
                iconImage
                type="file"
                placeholder="Imagem do produto somente arquivos png"
                onChange={handleFile}
              />
            </label>
            <label>
              Preço
              <Input
                iconPrice
                type="number"
                placeholder="Preço"
                onChange={(e: any) => setPrice(e.target.value)}
              />
            </label>
            <Button title="Atualizar" onClick={handleUpdate} />
          </fieldset>
        </form>
        <div>
          {/* se titulo existir mostrar o Card do Preview */}
          {title && (
            <>
              <h1>Depois de atualizar</h1>
              <h3>Preview</h3>

              <Card
                title={title}
                preview={avatarURL && <img src={avatarURL} alt="preview" />}
                price={price}
              />
            </>
          )}
        </div>
      </NewContainerApp>
    </ContainerDetails>
  )
}
