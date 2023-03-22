import styled from 'styled-components'
import { ContainerApp } from './../App/styled'
export const ContainerSign = styled(ContainerApp)`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    fieldset {
      a {
        color: ${(props) => props.theme.colorButton};
      }
      legend {
        font-size: 24px;
        font-family: -apple-system, sans-serif;
        font-weight: bold;
      }
      border-radius: 5px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      label {
        font-size: 0.1px;
      }
      button {
        width: 100%;
      }
    }
  }
`
