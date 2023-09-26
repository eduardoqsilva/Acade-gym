import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/theme/defaultTheme.ts'
import { GlobalStyled } from './styles/global.styled.ts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyled />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
