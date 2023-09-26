import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { Login } from '../pages/login'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth/AuthContext'
import { Register } from '../pages/register'

export function Router() {
  const { isLogged } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={isLogged ? <Home /> : <Login />} />
    </Routes>
  )
}
