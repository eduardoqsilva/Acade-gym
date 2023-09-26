import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  
  :root {
    --toastify-color-dark: ${(props) => props.theme.colors.gray2};
  }
 
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

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 9999s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.colors.yellow} !important;
  }
`
