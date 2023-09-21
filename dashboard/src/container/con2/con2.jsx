import React from 'react'
import "./con2.css"
import Adhd from "../../images/nobg_img/adhd.png"
import Alzi from "../../images/nobg_img/alzheimer.png"
import deme from "../../images/nobg_img/dementia.png"
import park from "../../images/nobg_img/parkinsons-disease.png"
import tbi from "../../images/nobg_img/TBI.png"

function Con2() {
  return(
    <div className='con2_container'>
      <div className="">

        <div className="counter">

        </div>

        <div className="graph">

        </div>

        <div className="">

        </div>

      </div>
      <div className="cat">
        <div className='patient_cat'>
          <h3>ADHD</h3>
          <img src={Adhd} alt="" />
        </div>


        <div className='patient_cat'>
          <h3>ALZHEIMERS</h3>
          <img src={Alzi} alt="" />
        </div>

        <div className='patient_cat'>
          <h3>DEMENTIA</h3>
          <img src={deme} alt="" />
        </div>

        <div className='patient_cat'>
          <h3>PARKINSON’s</h3>
          <img src={park} alt="" />
        </div>

        <div className='patient_cat'>
          <h3>TBI</h3>
          <img src={tbi} alt="" />
        </div>

        <div className='patient_cat'>
          <h3>EPILEPSY</h3>
          <img src={tbi} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Con2;