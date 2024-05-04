import './App.css'
import { Outlet } from 'react-router-dom'
import Header from "./components/molecules/header/header.jsx"
import Footer from './components/molecules/footer/footer.jsx'






function App() {


  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
