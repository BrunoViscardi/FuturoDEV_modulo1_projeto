import './App.css'
import { Outlet } from 'react-router-dom'
import Header from "./components/molecules/header/header.jsx"






function App() {


  return (
    <>
      <Header>
        <Outlet />
      </Header>
    </>
  )
}

export default App
