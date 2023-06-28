import styled from 'styled-components'
import background from '../../assets/imgs/login/background.webp'

export const BackgroundLoginStyled = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.85) 100%,
      rgba(0, 0, 0, 0.85) 100%
    ),
    url(${background});
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(1);

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const ContentContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem;
`

export const ContantGridStyled = styled.main``
