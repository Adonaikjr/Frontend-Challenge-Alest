import { MouseEventHandler, ReactNode } from 'react'
import { ContainerButton } from './styled'

interface typePropsButton {
  title?: string
  children?: ReactNode
  onClick?: MouseEventHandler
}

export function Button({ title, children, onClick }: typePropsButton) {
  return (
    <ContainerButton onClick={onClick}>
      {title}
      {children}
    </ContainerButton>
  )
}
