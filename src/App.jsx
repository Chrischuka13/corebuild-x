import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import News from './pages/news/News'
import BlogStories from './pages/news/BlogStories'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={
        <>
          <NavBar/>
          <Hero/>
          <Footer/>
        </>

        }/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/blog' element={<News/>}/>
        <Route path='/blog/:id' element={<BlogStories/>}/>
      </Routes>
    </>
  )
}

export default App
