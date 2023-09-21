import styled from 'styled-components'
import background from '../../assets/imgs/login/background.webp'
import { ButtonStyled } from '../../components/Button/button.styled'

export const ContainerStyled = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    filter: grayscale(100%);

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.85) 100%,
        rgba(0, 0, 0, 0.85) 100%
      ),
      url(${background});
    background-position: 70% top;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const WrapperStyled = styled.main`
  flex-grow: 1;
  max-width: 470px;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 200px 4fr 100px;
  justify-items: center;
  align-items: center;
  row-gap: 1rem;

  padding: 1rem 1.5rem;
`

export const FormStyled = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    font-size: ${(props) => props.theme.fontSize.XL};
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 0.27rem;
  }

  .buttonsWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;

    & ${ButtonStyled} {
      max-width: 300px;
    }
  }
`
