import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/theme/defaultTheme.ts'
import { GlobalStyled } from './styles/global.styled.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
