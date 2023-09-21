import styled, { css, keyframes } from 'styled-components'

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
    props.variation === '01' ? `${props.theme.colors.gray2}` : 'transparent'};
  color: ${(props) => props.theme.colors.gray4};
  padding: 0 1rem;
  border-radius: ${(props) =>
    props.variation === '01'
      ? `${props.theme.border.inputBorderRadius}`
      : '0px'};

  transition: all 0.1s ease-in;
  margin-top: 18px;

  font-family: ${(props) => props.theme.font.default};

  position: relative;

  ${(props) =>
    props.warning
      ? css`
          ${props.variation === '01'
            ? css`
                border: ${props.theme.border.borderWidth} solid
                  ${props.theme.colors.red_dark};
              `
            : css`
                border-bottom: ${props.theme.border.borderWidth} solid
                  ${props.theme.colors.red_dark};
              `};
          color: ${(props) => props.theme.colors.red};
          animation: ${shake} 0.1s 4 ease-in;
        `
      : css`
          ${props.variation === '01'
            ? css`
                border: ${(props) => props.theme.border.borderWidth} solid
                  transparent;
              `
            : css`
                border: none;
                border-bottom: 2px solid #2f3030;
              `}
        `}

  &:focus-within {
    ${(props) =>
      props.variation === '01'
        ? `border: ${props.theme.border.borderWidth} solid ${props.theme.colors.orange_light};`
        : `border-bottom: ${props.theme.border.borderWidth} solid ${props.theme.colors.orange_light};`}
    color: ${(props) => props.theme.colors.white};
  }

  & label {
    position: absolute;
    top: ${(props) => (props.variation === '01' ? '-18px' : '0')};
    left: ${(props) => (props.variation === '01' ? '0' : '3.4rem')};

    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.XS};
    line-height: 12px;
    letter-spacing: 0.18em;
    color: ${(props) => props.theme.colors.gray7};
  }

  & input {
    height: 100%;
    width: 100%;

    background-color: ${(props) =>
      props.variation === '01' ? `${props.theme.colors.gray2}` : 'transparent'};
    border: none;
    outline: none;
    caret-color: ${(props) => props.theme.colors.white};

    font-family: ${(props) => props.theme.font.default};
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.M};
    line-height: 19px;
    letter-spacing: 0.18em;
    color: ${(props) =>
      props.warning
        ? `${props.theme.colors.red}`
        : `${props.theme.colors.white}`};

    &::placeholder {
      color: ${(props) => props.theme.colors.gray4};
      font-family: ${(props) => props.theme.font.default};
      font-weight: 400;
      font-size: ${(props) => props.theme.fontSize.M};
      letter-spacing: 0.18em;
      line-height: 19px;
    }
    &:focus {
      color: ${(props) => props.theme.colors.white};
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

  background-color: ${(props) => props.theme.colors.gray2};
  color: ${(props) => props.theme.colors.gray4};
  padding: 0 1rem;
  border-radius: ${(props) => props.theme.border.inputBorderRadius};
  transition: all 0.1s ease-in;
  margin-top: 18px;

  font-family: ${(props) => props.theme.font.default};

  position: relative;

  ${(props) =>
    props.warning
      ? css`
          border: ${props.theme.border.borderWidth} solid
            ${props.theme.colors.red_dark};
          color: ${props.theme.colors.red};
          animation: ${shake} 0.1s 4 ease-in;
        `
      : css`
          border: ${props.theme.border.borderWidth} solid transparent;
        `}

  &:focus-within {
    border: ${(props) => props.theme.border.borderWidth} solid
      ${(props) => props.theme.colors.orange_light};
    color: ${(props) => props.theme.colors.white};
  }

  & label {
    position: absolute;
    top: -18px;
    left: 0;

    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.XS};
    line-height: 12px;
    letter-spacing: 0.18em;
    color: ${(props) => props.theme.colors.gray7};
  }

  & select {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.gray2};
    color: ${(props) => props.theme.colors.gray5};
    border: none;
    outline: none;
    font-family: ${(props) => props.theme.font.default};
    font-size: ${(props) => props.theme.fontSize.M};
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.18em;
  }
`
export const ErrorTextStyled = styled.span<WarningType>`
  width: 100%;
  visibility: ${(props) => (props.warning ? 'visible' : 'hidden')};

  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.font.default};
  font-size: ${(props) => props.theme.fontSize.XS};
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
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 3px;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.1s ease-in;

    &:checked {
      background-color: ${(props) => props.theme.colors.orange};
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
    font-size: ${(props) => props.theme.fontSize.M};
    font-weight: 400;
    letter-spacing: 0;
    color: ${(props) => props.theme.colors.gray7};

    & a {
      text-decoration: none;
      font-weight: 500;
      color: ${(props) => props.theme.colors.orange_light};
    }
  }
`
