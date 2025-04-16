import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Nav />
    <main>
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default App
