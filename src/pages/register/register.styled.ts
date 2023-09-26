import styled from 'styled-components'
import { ButtonStyled } from '../../components/Button/button.styled'

export const ContainerStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.gray1};

  display: flex;
  justify-content: center;
  overflow-y: hidden;
`

export const WrapperStyled = styled.main`
  flex-grow: 1;
  max-width: 470px;

  padding: 1rem 1.5rem;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 100%;
  grid-template-rows: 120px 4fr auto;
  gap: 2rem;
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
  & ${ButtonStyled} {
    margin-top: 1.5rem;
  }
`
