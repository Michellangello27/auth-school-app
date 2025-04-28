import { Routes, Route } from 'react-router' 
import Login from './pages/Login'
import Home from './pages/Home'
import AuthLaout from './components/layouts/AuthLayout'
import Profile from './pages/Profile'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLaout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}
