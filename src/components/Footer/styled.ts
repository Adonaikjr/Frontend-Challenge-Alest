import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundSecondary};
  margin-top: 2rem;
  h4 {
    margin: 1rem;
    padding: 1rem;
  }
`
