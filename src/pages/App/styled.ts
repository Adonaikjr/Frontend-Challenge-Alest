import styled from 'styled-components'

export const ContainerApp = styled.div``
export const ContainerAtt = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
export const ContainerArticle = styled.article`
  height: 100%;
  padding-top: 4rem;
  padding-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  > div {
    display: flex;
    gap: 1rem;
    width: 90%;
  }
`
export const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.25rem;
  animation-delay: 2s;
  animation: animationCards 5s 1;
  position: relative;

  @keyframes animationCards {
    0% {
      left: 0px;
      top: 500px;
    }
    25% {
      left: 0px;
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
