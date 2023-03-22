import styled from 'styled-components'
import { ContainerMain } from '../App/styled'

export const NewContainerMain = styled(ContainerMain)`
  height: 100%;

  form {
    width: 90%;
    height: 100%;

    img {
      width: 90%;
    }
    fieldset {
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      label {
        margin: 1rem;
      }
      button {
        width: 100%;
      }
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > h3 {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
`
