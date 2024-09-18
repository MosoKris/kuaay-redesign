import React from 'react'
import investor from "../Assets/Frame 51.png"
import investors from "../Assets/Supported by some great investors.png"
import "./Investor.css";
function Investor() {
  return (
    <section className='investors'>
      <img src={investors}></img>
      <img src={investor} ></img>
    </section>
  )
}

export default Investor
