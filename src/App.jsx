import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home';
import AddProduct from './pages/AddProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';



function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-[#fdf6ee] text-[#1a1210] font-sans overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App
