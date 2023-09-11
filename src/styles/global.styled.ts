import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${(props) => props.theme.font.default};
    color: ${(props) => props.theme.colors.gray7};
    background-color: ${(props) => props.theme.colors.gray1};
  }
`
