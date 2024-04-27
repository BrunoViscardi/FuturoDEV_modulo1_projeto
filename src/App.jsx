import './App.css'


import { UsuarioContextProvider } from './context/UsuarioContext'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <UsuarioContextProvider>
      <Outlet/>
    </UsuarioContextProvider>
    </>
  )
}

export default App
