import { useEffect, useRef, useState } from 'react';
import './Menu.css'

export default function Menu({showMenu}) {

  const [showWithStyle, setShowWithStyle] = useState(true);
  const menuRef = useRef()

  const menuList = [
    {
      name: 'About us',
      url: '#about-us',
    },
    {
      name: 'HighLights',
      url: '#highlights'
    },
    {
      name: 'Products',
      url: '#products'
    },
    {
      name: 'Testimonials',
      url: '#testims'
    },
    {
      name: 'Careers',
      url: ''
    }
  ];

  useEffect(()=> {
//     const animationClass = showMenu ? 'slide-in': 'slide-out';
//     const timeout = showMenu?0:700;
// console.info('kk:',showMenu, animationClass, showWithStyle)
//     setTimeout(()=> {setShowWithStyle(prev=> !prev);},timeout)
//     menuRef.current?.classList.add(animationClass);
    if(menuRef.current) {
      if(showMenu) {
        menuRef.current.classList.add('slide-in');
        menuRef.current.classList.remove('slide-out')
      }else {
        menuRef.current.classList.add('slide-out');
        menuRef.current.classList.remove('slide-in')      }
    }

  },[showMenu])

  return ( 
    <div className='menu-wrapper' ref={menuRef} >
      {
        menuList.map(menuItem => (
          <a href={menuItem.url} className='menu-item'>{menuItem.name}</a>
        ))
      }
    </div>
  )

}