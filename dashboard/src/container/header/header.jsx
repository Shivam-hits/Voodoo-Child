import React from 'react'
import profile from "../../images/profile.svg"
import "./header.css"

function Header() {
  return (
    <div className='header_container'>
        <p className='logo'>LOGO</p>
        <img src={profile} alt="" srcset="" />
    </div>
  )
}

export default Header;