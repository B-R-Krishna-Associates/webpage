import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

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
