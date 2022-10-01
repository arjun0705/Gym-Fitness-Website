import React from 'react'
import "./Header.css"
import Logo from "../../assets/gym_logo.png"
import Bars from "../../assets/bars.png"
import { useState } from 'react';
import { Link } from 'react-scroll';


function Header() {

  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false)


  return (
    <div className='header'>
      {/* <img className='logo' src={Logo} alt="" /> */}
      
      <span className='logo-text'><span className='stroke-text'>FITNESS</span> MANTRA</span>

      {(menuOpened === false && mobile === true) ? (
        <div style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }} onClick={() => { setMenuOpened(true) }}><img src={Bars} alt="" style={{ width: "1.5rem", height: "1.5rem" }} /></div>) :

        <ul className='header-menu'>
          <li ><Link to='home' smooth={true} span={true} onClick={()=>{setMenuOpened(false)}}> Home </Link></li>

          <li > <Link to='programs' smooth={true} span={true} onClick={()=>{setMenuOpened(false)}}> Programs </Link></li>

          <li ><Link to='reasons' smooth={true} span={true} onClick={()=>{setMenuOpened(false)}}> Why us </Link></li>

          <li ><Link to='plans' smooth={true} span={true} onClick={()=>{setMenuOpened(false)}}> Plans </Link></li>

          <li >  <Link to='testimonials' smooth={true} span={true} onClick={()=>{setMenuOpened(false)}}> Testimonials </Link> </li>

        </ul>
      }

    </div>
  )
}

export default Header
