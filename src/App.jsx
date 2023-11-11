import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import SocialsSection from './components/SocialsSection'
import MyWorks from './components/MyWorks'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app overflow-hidden">
      <NavBar />
      <Home />
      <About />
      <MyWorks />
      {
        //<SocialsSection />
      }
      <Footer /> 
    </div>
  );
}

export default App
