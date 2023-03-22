import { Button } from '../Button'
import { ContainerCard } from './styled'
import { FaEdit, RiDeleteBin2Line } from 'react-icons/all'
import { api } from '../../service/api'
import { useNavigate } from 'react-router-dom'

interface typePropsCard {
  title: string
  img?: string
  price: number
  cardId?: string
  preview?: any
}
export function Card({ title, img, price, cardId, preview }: typePropsCard) {
  // navegação de rotas
  const navigate = useNavigate()
  // Delete button card
  const handleDelete = async () => {
    const YesDeleteNote = window.confirm(
      'Deseja excluir o produto permanentemente?',
    )
    if (YesDeleteNote) {
      try {
        alert('Clique em atualizar para vizualizar as alterações')
        return await api.delete(`/clothes/${cardId}`)
      } catch (error) {
        console.log('ooops algo deu errado', error)
      }
    }
  }
  // levando usuario para a pagina de detalhes enviando o id como params
  function handleUpdate() {
    navigate(`/clothes/${cardId}`)
  }
  return (
    <ContainerCard>
      <h2>{title}</h2>
      {img && <img src={img} alt={title} />}
      {preview}
      <h3>R$ {price}</h3>
      <div>
        <Button onClick={handleUpdate}>
          <FaEdit size={24} color="rgba(246, 240, 240, 0.87)" />
        </Button>
        <Button onClick={handleDelete}>
          <RiDeleteBin2Line size={24} color="rgba(246, 240, 240, 0.87)" />
        </Button>
      </div>
    </ContainerCard>
  )
}
