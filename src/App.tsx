import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Careers from './pages/Careers'
import NotFoundPage from './pages/NotFoundPage'
import Services from './pages/Services'

function App() {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Nav />
        <main>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
