import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { AuthProvider } from './contexts/auth/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
