import './App.css'
import {Link, Routes, Route} from "react-router";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Eventos from './pages/Eventos.jsx';
import { GiCastle } from "react-icons/gi";



function App() {
  return (
        <>
          <a href="https://open.spotify.com/prerelease/3UWFwDMzIfiXRQjEou1GYy">
            <GiCastle size={35} color='pink' />
          </a>
          <nav>
            <ul>
              <li>
                <Link to="/">𝐵𝑖𝑜𝑓𝑟𝑎𝑓𝜄́𝑎</Link>
              </li>
              <li>
                <Link to="/about">𝐶𝑎𝑟𝑟𝑒𝑟𝑎 𝑀𝑢𝑠𝑖𝑐𝑎𝑙</Link>
              </li>
              <li>
                <Link to="/contact">𝐷𝑖𝑠𝑐𝑜𝑓𝑟𝑎𝑓𝜄́𝑎</Link>
              </li>
              <li>
                <Link to="/eventos">𝐴𝑔𝑒𝑛𝑑𝑎</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/eventos" element={<Eventos />} />
          </Routes>
        </>
  )
}


export default App
