import styled, { css } from 'styled-components'

interface ButtonTypeStyled {
  variation: 'primary' | 'secundary'
  radius?: string
}
export const ButtonStyled = styled.button<ButtonTypeStyled>`
  width: 100%;
  height: 53px;
  border-radius: ${(props) =>
    props.radius ? props.radius : props.theme.border.buttonBorderRadius};
  background-color: ${(props) => props.theme.colors.orange};
  border: none;
  transition: all 0.1s ease-in;

  font-family: ${(props) => props.theme.font.default};
  font-size: ${(props) => props.theme.fontSize.M};
  font-weight: 500;
  letter-spacing: 0.18em;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  ${(props) =>
    props.variation === 'secundary'
      ? css`
          background-color: transparent;
          border: ${props.theme.border.borderWidth} solid
            ${props.theme.colors.orange};
          color: ${props.theme.colors.orange};
        `
      : ''}

  &:not(:disabled):hover {
    transform: scale(1.01);
  }
  &:not(:disabled):active {
    transform: scale(0.98);
    ${(props) =>
      props.variation === 'secundary'
        ? css`
            background-color: transparent;
            border: ${props.theme.border.borderWidth} solid
              ${props.theme.colors.orange_light};
            color: ${props.theme.colors.orange_light};
          `
        : css`
            background-color: ${props.theme.colors.orange_light};
          `}
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.orange_dark};
    cursor: not-allowed;
    ${(props) =>
      props.variation === 'secundary'
        ? css`
            background-color: transparent;
            border: ${props.theme.border.borderWidth} solid
              ${props.theme.colors.orange_dark};
            color: ${props.theme.colors.orange_dark};
          `
        : ''}
  }
`
