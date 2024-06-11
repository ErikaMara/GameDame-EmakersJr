import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import HomePage from "./Pages/HomePage"
import Login from "./Pages/Login"
import NoPage from "./Pages/NoPage"
import Register from './Pages/Register'
import ForgotPassword from './Pages/ForgotPassword'
import Profile from './Pages/Profile'
import GameScreen from './Pages/GameScreen'
import ShoppingCart from './Pages/ShoppingCart'
import TelaAdministrador from './Pages/Admin'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<NoPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/gameScreen' element={<GameScreen />} />
          <Route path='/shoppingCart' element={<ShoppingCart />} />
          <Route path='/admin' element={<TelaAdministrador />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
