import './App.css';

import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ButtonTheme from "./components/ButtonTheme";
import Pesquisar from "./pages/Pesquisar";
import Search from "./pages/Search.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = useSpring({
    transform: menuOpen ? "translateX(0%)" : "translateX(-100%)",
  });

  return (
    <div className="App">
      <BrowserRouter>
        <button className="menu-button" onClick={() => setMenuOpen(true)}>MENU</button>
        <animated.div
          className="menu"
          style={menu}
          onClick={() => setMenuOpen(false)} >
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/pesquisar">Pesquise itens</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><ButtonTheme /></li>
          </ul>
        </animated.div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisar" element={<Pesquisar />}/>
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path='/search' element={<Search /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
