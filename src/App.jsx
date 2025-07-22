import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/Register' element={ <Register /> } />
        <Route path='/Dasboard' element={ <Dashboard /> } /> 
      </Routes>
    </>
  )
}

export default App
