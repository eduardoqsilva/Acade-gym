import styled, { keyframes } from 'styled-components'
import { ButtonStyled } from '../../../../components/Button/button.styled'

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const drop = keyframes`
  0% {
    opacity: 0;
    transform: scale(2);
  }
  35% {
    transform: scale(1);
  }
  65% {
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
interface ContainerStyledType {
  isOpen: boolean
  success: 'loading' | 'success' | 'error'
}

export const ContainerModalStyled = styled.div<ContainerStyledType>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem;

  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`

type ContantWrapperStyledType = Omit<ContainerStyledType, 'isOpen'>

export const ContentWrapperStyled = styled.div<ContantWrapperStyledType>`
  max-width: 300px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  padding: 1rem;

  background-color: ${(props) => props.theme.colors.gray3};
  border-radius: ${(props) => props.theme.border.boxBorderRadius};

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex: 1;
  }

  svg {
    color: ${(props) => {
      switch (props.success) {
        case 'success':
          return props.theme.colors.green
        case 'error':
          return props.theme.colors.red
        default:
          return props.theme.colors.white
      }
    }};
  }

  h2 {
    font-family: ${(props) => props.theme.font.default};
    font-size: ${(props) => props.theme.fontSize.M};
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.colors.gray6};
    max-width: 200px;
  }

  .animate {
    animation: ${drop} 0.6s 1 ease-in-out;
  }
`

export const LoadingDivStyled = styled.div`
  animation: ${load} 1s linear infinite;

  display: flex;
  align-items: center;
  justify-content: center;
`
interface ButtonModalStyledType {
  $color: 'success' | 'error'
}
export const ButtonModalStyled = styled(ButtonStyled)<ButtonModalStyledType>`
  width: 100%;

  background-color: ${(props) =>
    props.$color === 'success'
      ? props.theme.colors.green
      : props.theme.colors.red};

  &:hover {
    background-color: ${(props) =>
      props.$color === 'success'
        ? props.theme.colors.green_dark
        : props.theme.colors.red_dark};
  }
  &:not(:disabled):active {
    background-color: ${(props) =>
      props.$color === 'success'
        ? props.theme.colors.green
        : props.theme.colors.red};
  }
`
