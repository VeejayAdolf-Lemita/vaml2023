import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Logo from './assets/logo.png'
import Nav from './nav/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Work from './Work'
import CV from './assets/VAML CV.pdf'


function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <Router>
      <div className={darkMode ? "dark" : ""}  >
        <main className=" bg-white px-8 dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen">
              <header className="py-10 mb-12 flex justify-between dark:text-white">
                <Link to='/' className="cursor-pointer">
                  <img src={Logo} width="60px"  />
                </Link>
                <ul className="flex items-center">
                  <li>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl"/>
                  </li>
                  <li>
                    <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" href={CV} download>
                      Resume
                    </a>
                  </li>
                </ul>
              </header>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/work" element={<Work/>} />
              </Routes>
              <Nav/>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
