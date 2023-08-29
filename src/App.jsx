import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import SocialsSection from './components/SocialsSection'
import MyThings from './components/MyThings'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <NavBar  />
        <Home />
        <About />
        {
        //<MyThings />
        //<SocialsSection />
        }
        <Footer /> 
    </div>
  )
}

export default App
