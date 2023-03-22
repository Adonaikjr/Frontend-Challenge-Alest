import styled from 'styled-components'

export const ContainerCard = styled.div`
  background-color: ${(props) => props.theme.backgroundCard};
  height: 382px;
  width: 271px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 5px;
  img {
    width: 12.75rem;
    height: 12.73rem;
    border-radius: 50%;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.1rem;
    > button {
      width: 100%;
      border-radius: 0;
    }
  }
`
