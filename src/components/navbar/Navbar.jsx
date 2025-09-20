import { LucideMoon, LucideSunMedium } from 'lucide-react';
import './Navbar.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState('Light')

  useEffect(()=> {
      document.documentElement.dataset.theme = theme.toLowerCase()
  })

  // function themeHandler() { // good, but theres a more 'react' way to do this
  //   const theme = document.querySelector("html");
  //   if(theme.dataset.theme == "light") {
  //     theme.dataset.theme = "dark";
  //       document.querySelector(".theme-text").textContent = "LIGHT";
  //   }
  //   else {
  //     theme.dataset.theme = "light";
  //     document.querySelector(".theme-text").textContent = "DARK";
  //   }
  // }
  

  return(
    <div className="navbar" >
      <div className="navbar-left">
        <div className="logo" >Wierder</div>
      </div>
      <div className="navbar-right">
        <button className="theme-toggle-button" onClick={()=> setTheme(prev => prev == 'Light'?'Dark':'Light')}>
          {theme == 'Light'?<LucideMoon />:<LucideSunMedium />}
          {/* <span className="theme-text"> LIGHT</span> <span className="mode">MODE </span> */}
        </button>
        <button className="menu-button">
          <div className="menu-burger-bar" />
          <div className="menu-burger-bar" />
          <div className="menu-burger-bar" />
        </button>
      </div>
    </div>
  )
}
