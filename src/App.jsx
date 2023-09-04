import { useState } from 'react'
import './App.css'
import Navbar from './features/navbar';
import About from './features/about';
import Home from './features/home';
import Project from './features/projects';
import Contact from './features/contact';
import Footer from './features/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App

