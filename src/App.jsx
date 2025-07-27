import { Route, Routes } from 'react-router-dom'
import './App.css'
import Customers from './components/Customers'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Order from './components/Order'
import Register from './components/Register'
import Conversation from './components/conversation'
import Settingpage from './components/setting-page'
import Inventory from './components/inventory'
import ProtectedRoutes from './components/services/protectedRoutes'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/Register' element={ <Register /> } />
        <Route path='/' element={ <ProtectedRoutes /> } >
        <Route path='/Dashboard' element={ <Dashboard /> } /> 
        <Route path='/Order' element={<Order />} />
        <Route path='/Customers' element={<Customers />} />
        <Route path='/Conversation' element={<Conversation />} />
        <Route path='/Setting' element={<Settingpage />} />
        <Route path='/Inventory' element={<Inventory />} />
</Route>

      </Routes>
    </>
  )
}

export default App
