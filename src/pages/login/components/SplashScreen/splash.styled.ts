import styled, { keyframes } from 'styled-components'
import splashMin from '../../../../assets/imgs/splash/splashMin.jpg'
import { DefaultTheme } from '../../../../styles/theme/defaultTheme'
import { LogoStyled } from '../../../../components/Logo/logo.styled'

const { colors } = DefaultTheme

const SplashAnimate = keyframes`
  100% {
    opacity: 0;
  }
`
const color = keyframes`
  100% {
    color: ${colors.orange}
  }
`

interface SplashTypeStyled {
  $show: boolean
  position?: number
}

export const SplashWrapper = styled.div<SplashTypeStyled>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  overflow: hidden;
  background-color: ${colors.gray1};

  display: ${(props) => (props.$show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  animation: ${SplashAnimate} 0.1s both ease-in;
  animation-delay: 2.2s;

  & ${LogoStyled} {
    position: absolute;
    animation: LogoAnimate 1s ease-in-out both;
    animation-delay: 1s;
    & .icon {
      animation: ${color} 0.8s ease-in both;
      animation-delay: 1s;
    }

    @keyframes LogoAnimate {
      0% {
        transform: translate(0);
      }
      100% {
        opacity: 1;
        transform: translateY(
          calc((-50vh) + ${(props) => props.position + 'px'})
        ); //pegando 50% da tela e somando com o valor em px da distancia a ser percorrida
        .icon {
          color: ${colors.orange};
        }
      }
    }
  }
`

interface ImgBackTypeStyled {
  $load: boolean
}

export const ImgBack = styled.div<ImgBackTypeStyled>`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${splashMin});
  background-size: cover;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${(props) => (props.$load ? '1' : '0')};
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(235, 94, 40, 0.75) 100%
    );
  }
`
