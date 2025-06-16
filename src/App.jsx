import { useState } from 'react'

import Navbar from './components/navbar/Navbar.jsx';
import Intro from './components/intro/Intro.jsx';
import Highlights from "./components/highlights/Highlights.jsx";
import Products from "./components/products/Products.jsx"
import Testims from "./components/testims/Testims.jsx"
import Footer from "./components/footer/Footer.jsx"
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="content-area">
        <Intro />
        <Highlights />
        <Products />
        <Testims />
        <Footer />
      </div>
    </>
  )
}

export default App
