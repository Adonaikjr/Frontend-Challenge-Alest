import styled from 'styled-components'

export const ContainerInput = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 1rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.background_800};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  input {
    :focus {
      outline: none;
    }
    margin-left: 0.5rem;
    background-color: ${(props) => props.theme.background_800};
    padding: 0.5rem;
    width: 100%;
    height: 100%;
    border: none;
    color: ${(props) => props.theme.WHITE};
    font-size: 20px;
  }
`
