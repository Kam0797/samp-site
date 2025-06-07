import { useState } from 'react'

import Navbar from './components/navbar/Navbar.jsx';
import Intro from './components/intro/Intro.jsx';
import Highlights from "./components/highlights/Highlights.jsx";
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="content-area">
        <Intro />
        <Highlights />
      </div>
    </>
  )
}

export default App
