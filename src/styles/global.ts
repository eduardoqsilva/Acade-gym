import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from './theme/defaultTheme'

const { font, colors } = DefaultTheme

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${font.default};
    color: ${colors.gray7};
    background-color: ${colors.gray1};
  }
`
