import styled, { keyframes } from 'styled-components'
import { LogoStyled } from '../Logo/logo.styled'

const Loading = keyframes`
  0%{
    transform: translateY(30px);
  }
  100%{
    transform: translateY(-30px);
  }
`
interface LoadingTypeStyled {
  $load: boolean
  $show: boolean
}

export const LoadingWrapperStyled = styled.div<LoadingTypeStyled>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.gray1};

  display: ${(props) => (props.$show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$load ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;

  & ${LogoStyled} {
    animation: ${Loading} 0.8s infinite alternate ease-in-out;
  }
`
