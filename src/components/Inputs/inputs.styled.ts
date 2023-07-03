import styled, { css, keyframes } from 'styled-components'
import { DefaultTheme } from '../../styles/theme/defaultTheme'

const { font, fontSize, colors, border } = DefaultTheme

const shake = keyframes`
  0% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(5px);
  }
`

interface InputType {
  warning: boolean
  variation: '01' | '02'
}
interface WarningType {
  warning: boolean
}

export const InputWrapperStyled = styled.div<InputType>`
  width: 100%;
  height: 53px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  background-color: ${(props) =>
    props.variation === '01' ? `${colors.gray2}` : 'transparent'};
  color: ${colors.gray4};
  padding: 0 1rem;
  border-radius: ${(props) =>
    props.variation === '01' ? `${border.inputBorderRadius + 'px'}` : '0px'};

  transition: all 0.1s ease-in;
  margin-top: 18px;

  font-family: ${font.default};

  position: relative;

  ${(props) =>
    props.warning
      ? css`
          ${props.variation === '01'
            ? css`
                border: ${border.borderWidth + 'px'} solid ${colors.red_dark};
              `
            : css`
                border-bottom: ${border.borderWidth + 'px'} solid
                  ${colors.red_dark};
              `};
          color: ${colors.red};
          animation: ${shake} 0.1s 4 ease-in;
        `
      : css`
          ${props.variation === '01'
            ? css`
                border: ${border.borderWidth + 'px'} solid transparent;
              `
            : css`
                border: ${border.borderWidth + 'px'} solid transparent;
                border-bottom: 2px solid #2f3030;
              `}
        `}

  &:focus-within {
    ${(props) =>
      props.variation === '01'
        ? `border: ${border.borderWidth + 'px'} solid ${colors.orange_light};`
        : `border-bottom: ${border.borderWidth + 'px'} solid ${
            colors.orange_light
          };`}
    color: ${colors.white};
  }

  & label {
    position: absolute;
    top: ${(props) => (props.variation === '01' ? '-18px' : '0')};
    left: ${(props) => (props.variation === '01' ? '0' : '3.4rem')};

    font-style: normal;
    font-weight: 400;
    font-size: ${fontSize.XS};
    line-height: 12px;
    letter-spacing: 0.18em;
    color: ${colors.gray7};
  }

  & input {
    height: 100%;
    width: 100%;

    background-color: ${(props) =>
      props.variation === '01' ? `${colors.gray2}` : 'transparent'};
    border: none;
    outline: none;
    caret-color: ${colors.white};

    font-family: ${font.default};
    font-weight: 400;
    font-size: ${fontSize.M};
    line-height: 19px;
    letter-spacing: 0.18em;
    color: ${(props) => (props.warning ? `${colors.red}` : `${colors.white}`)};

    &::placeholder {
      color: ${colors.gray4};
      font-family: ${font.default};
      font-weight: 400;
      font-size: ${fontSize.M};
      letter-spacing: 0.18em;
      line-height: 19px;
    }
    &:focus {
      color: ${colors.white};
    }
  }

  & input[type='date'] {
    ::-webkit-calendar-picker-indicator {
      display: none;
    }
    ::-webkit-inner-spin-button {
      display: none;
    }
  }
  & input[type='number'] {
    ::-webkit-inner-spin-button {
      opacity: 0;
    }
  }
`

export const DropdownStyled = styled.div<WarningType>`
  width: 100%;
  height: 53px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  background-color: ${colors.gray2};
  color: ${colors.gray4};
  padding: 0 1rem;
  border-radius: ${border.inputBorderRadius + 'px'};
  transition: all 0.1s ease-in;
  margin-top: 18px;

  font-family: ${font.default};

  position: relative;

  ${(props) =>
    props.warning
      ? css`
          border: ${border.borderWidth + 'px'} solid ${colors.red_dark};
          color: ${colors.red};
          animation: ${shake} 0.1s 4 ease-in;
        `
      : css`
          border: ${border.borderWidth + 'px'} solid transparent;
        `}

  &:focus-within {
    border: ${border.borderWidth + 'px'} solid ${colors.orange_light};
    color: ${colors.white};
  }

  & label {
    position: absolute;
    top: -18px;
    left: 0;

    font-style: normal;
    font-weight: 400;
    font-size: ${fontSize.XS};
    line-height: 12px;
    letter-spacing: 0.18em;
    color: ${colors.gray7};
  }

  & select {
    width: 100%;
    height: 100%;
    background: ${colors.gray2};
    color: ${colors.gray5};
    border: none;
    outline: none;
    font-family: ${font.default};
    font-size: ${fontSize.M};
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.18em;
  }
`
export const WarningStyled = styled.span<WarningType>`
  width: 100%;
  visibility: ${(props) => (props.warning ? 'visible' : 'hidden')};

  color: ${colors.red};
  font-family: ${font.default};
  font-size: ${fontSize.XS};
  font-weight: 400;
  transition: all 0.1s ease-in;
`
export const CheckBoxStyled = styled.div`
  user-select: none;

  display: flex;
  align-items: center;
  gap: 1rem;

  & input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background-color: ${colors.white};
    border-radius: 3px;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.1s ease-in;

    &:checked {
      background-color: ${colors.orange};
    }
    &:checked::after {
      content: '';
      width: 12px;
      height: 12px;
      display: block;

      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYwIiBoZWlnaHQ9IjM0MiIgdmlld0JveD0iMCAwIDQ2MCAzNDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MyAxNjkuNUwxNTIgMjk5LjVMNDE3IDQzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9Ijg1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==);
    }
  }

  & label {
    font-size: ${fontSize.M};
    font-weight: 400;
    letter-spacing: 0;
    color: ${colors.gray7};

    & a {
      text-decoration: none;
      font-weight: 500;
      color: ${colors.orange_light};
    }
  }
`
