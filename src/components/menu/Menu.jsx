import { useEffect, useRef, useState } from 'react';
import './Menu.css'

export default function Menu({showMenu, setShowMenu}) {

  const [showWithStyle, setShowWithStyle] = useState(true);
  const menuRef = useRef()

  const menuList = [
    {
      name: 'About us',
      url: '#about-us',
    },
    {
      name: 'Highlights',
      url: '#highlights'
    },
    {
      name: 'Products',
      url: '#products'
    },
    {
      name: 'Testimonials',
      url: '#testims'
    }
    // ,
    // {
    //   name: 'Careers',
    //   url: ''
    // }
  ];

  useEffect(()=> {

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
    <div className='menu-wrapper' tabIndex={0} ref={menuRef} onBlur={()=>setShowMenu(false)} >
      {
        menuList.map(menuItem => (
          <a href={menuItem.url} key={menuItem.url+'_'} className='menu-item'>{menuItem.name}</a>
        ))
      }
    </div>
  )

}