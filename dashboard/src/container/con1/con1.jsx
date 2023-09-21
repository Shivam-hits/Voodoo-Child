import React from 'react'
import Home from "../../icons/si_Home.svg"
import Settings from "../../icons/si_Settings_alt.svg"
import User from "../../icons/si_User_alt_2.svg"
import "./con1.css"

function Con1() {
  return (
    <div className='container'>
      <img  className="icons" src={Home} alt="" srcset="" />
      <img className="icons" src={User} alt="" srcset="" />
      <img src={Settings} className="icons" alt="" srcset="" />
    </div>
  )
}

export default Con1;