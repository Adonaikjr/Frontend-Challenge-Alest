import { ContainerMain } from '../App/styled'
import styled from 'styled-components'

export const ContainerDetails = styled.div``

export const NewContainerApp = styled(ContainerMain)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form {
    legend {
      font-size: 1px;
      color: transparent;
    }
    fieldset {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      padding: 1rem;
      border: none;
      label {
        font-size: 0.1px;
      }
      button {
        width: 100%;
      }
    }
  }
`
