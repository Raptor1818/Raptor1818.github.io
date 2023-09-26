import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import SocialsSection from './components/SocialsSection'
import MyThings from './components/MyThings'
import Footer from './components/Footer'
import StarField from './components/StarField'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <NavBar />
      <StarField />
      <Home />
      <About />
      {
        //<MyThings />
        //<SocialsSection />
      }
      <Footer /> 
    </div>
  );
}

export default App
