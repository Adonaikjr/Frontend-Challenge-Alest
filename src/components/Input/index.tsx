import { ContainerInput } from './styled'
import {
  BsSearch,
  AiOutlineUser,
  AiOutlineMail,
  MdPassword,
  MdTitle,
  GiPriceTag,
  AiOutlineFileImage,
} from 'react-icons/all'

interface typePropsInput {
  placeholder: string
  enabled?: any
  type?: any
  onChange?: any
  iconUser?: any
  iconEmail?: any
  iconPassword?: any
  iconTitle?: any
  iconPrice?: any
  iconImage?: any
}

export function Input({
  placeholder,
  enabled,
  type,
  onChange,
  iconUser,
  iconEmail,
  iconPassword,
  iconTitle,
  iconPrice,
  iconImage,
}: typePropsInput) {
  return (
    <ContainerInput>
      {enabled && <BsSearch size={20} />}
      {iconUser && <AiOutlineUser size={20} />}
      {iconEmail && <AiOutlineMail size={20} />}
      {iconPassword && <MdPassword size={20} />}
      {iconTitle && <MdTitle size={20} />}
      {iconPrice && <GiPriceTag size={20} />}
      {iconImage && <AiOutlineFileImage size={20} />}
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </ContainerInput>
  )
}
