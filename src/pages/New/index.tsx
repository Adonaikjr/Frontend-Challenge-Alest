import { Input } from '../../components/Input'
import { ContainerApp, ContainerArticle } from '../App/styled'
import { MdArrowBack } from 'react-icons/all'
import { useNavigate } from 'react-router-dom'
import { NewContainerMain } from './styled'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { api } from '../../service/api'
import { Card } from '../../components/Card'
export function New() {
  const [title, setTitle] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [avatarURL, setAvatarURL] = useState()
  const [price, setPrice] = useState<any>(0)
  const navigate = useNavigate()

  function handleBack() {
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

  async function handleAdd(e: any) {
    const formData = new FormData()

    formData.append('linkUrl', linkUrl)
    formData.append('title', title)
    formData.append('price', price)

    e.preventDefault()
    try {
      await api.post('/clothes', formData)
      alert('Cadastrado com sucesso!')
      navigate(-1)
    } catch (error) {
      return console.log('algo deu errado', error)
    }
  }
  useEffect(() => {
    const user = localStorage.getItem('@challengeAlest:user')
    if (!user) {
      navigate('/')
    }
  }, [navigate])

  return (
    <ContainerApp>
      <ContainerArticle>
        <MdArrowBack size={35} onClick={handleBack} cursor="pointer" />
        <div></div>
      </ContainerArticle>
      <NewContainerMain>
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
                placeholder="Imagem do produto"
                onChange={handleFile}
              />
              somente arquivos png
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
            <div>
              {title && (
                <>
                  <h3>Preview</h3>

                  <Card
                    title={title}
                    preview={avatarURL && <img src={avatarURL} alt="preview" />}
                    price={price}
                  />
                </>
              )}
            </div>
            <Button title="Adicionar" onClick={handleAdd} />
          </fieldset>
        </form>
      </NewContainerMain>
    </ContainerApp>
  )
}
