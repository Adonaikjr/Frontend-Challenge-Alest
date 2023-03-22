import styled from 'styled-components'

export const ContainerHeader = styled.header`
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: ${(props) => props.theme.backgroundSecondary};
  padding-left: 1rem;
  padding-right: 1rem;
  h1 {
    animation-delay: 1s;
    animation: animationFirst 5s 1;
    position: relative;
  }
  @keyframes animationFirst {
    0% {
      left: -500px;
      top: 0px;
    }
    25% {
      left: 200px;
      top: 0px;
    }
    50% {
      left: 0px;
      top: 0px;
    }
    75% {
      left: 0px;
      top: 0px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`
