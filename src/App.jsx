import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Order from './components/Order'
import Customers from './components/Customers'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/Register' element={ <Register /> } />
        <Route path='/Dashboard' element={ <Dashboard /> } /> 
        <Route path='/Order' element={<Order />} />
        <Route path='/Customers' element={<Customers />} />
      </Routes>
    </>
  )
}

export default App
