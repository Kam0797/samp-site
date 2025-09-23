import { LucideMoon, LucideSunMedium } from 'lucide-react';
import './Navbar.css'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import Menu from '../menu/Menu';

export default function Navbar() {
  const [theme, setTheme] = useState('Light');
  const [showMenu, setShowMenu] = useState(false)
  const themeToggleRef = useRef(null);

  let savedTheme = localStorage.getItem('theme');
  console.log('ST?:',savedTheme)
  if(!savedTheme) savedTheme = 'light';
  document.documentElement.dataset.theme = savedTheme;



  useEffect(()=> {
      themeToggleRef.current.classList.add('rotate');
      document.documentElement.dataset.theme = theme.toLowerCase();
      localStorage.setItem('theme',theme.toLowerCase())
      console.log('LST:',localStorage.getItem('theme'))
      setTimeout(()=> themeToggleRef.current.classList.remove('rotate'),1400)
  },[theme])

  useEffect(()=> {
    const menuButton = document.querySelector('.menu-button')
    const stick1 = document.querySelector('.bar1')
    const stick2 = document.querySelector('.bar2')
    const stick3 = document.querySelector('.bar3')

    if(!showMenu) {
      // setTimeout(()=>menuButton.classList.remove('jc-center'),800)
      menuButton.classList.remove('jc-center')
      stick1.classList.remove('stick1')
      stick2.classList.remove('stick2')
      stick3.classList.remove('stick3')

    }else {
      menuButton.classList.add('jc-center')
      stick1.classList.add('stick1')
      stick2.classList.add('stick2')
      stick3.classList.add('stick3')
    }

  })
  

  return(
    <div className="navbar" >
      <div className="navbar-left">
        <div className="logo" >Wierder</div>
      </div>
      <div className="navbar-right">
        <button className="theme-toggle-button" ref={themeToggleRef} onClick={()=> setTheme(prev => prev == 'Light'?'Dark':'Light')}>
          {theme == 'Light'?<LucideMoon />:<LucideSunMedium />}
        </button>
        <button className="menu-button" onClick={()=> setShowMenu(prev => !prev)}>
          <div className="menu-burger-bar bar1 " />
          <div className="menu-burger-bar bar2 " />
          <div className="menu-burger-bar bar3 " />
        </button>
      </div>
      <Menu showMenu={showMenu}/>
    </div>
  )
}
