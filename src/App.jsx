import './App.css'

import PaginaLogin from './pages/login/login'
import { CEPcontextProvider } from './context/CEPcontext'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <CEPcontextProvider>
      <Outlet/>
    </CEPcontextProvider>
    </>
  )
}

export default App
