import React from 'react'
import './Hero.css';
import frameImage from "../Assets/Apple iPad Pro 11 Silver - Portrait.png"
import topImage from "../Assets/Kuaay Show Video - Made with Clipchamp 1.png"
// import bgImage from "../Assets/38w.png"

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-content'>
           <h1>Revolutionize your online sales process</h1> 
           <p>Sell smarter, buy faster. Simplify online car sales. Deal anywhere. AI assists. Fast approvals. Secure payments. OEM financing coming soon.</p>
           <button className='hero-btn'>Book demo- It's free</button>
      </div>
      <div className='hero-images'>
        <img src={frameImage} alt='frame' className='hero-frame'></img>
        <img src={topImage} alt='content' className='hero-top-image'></img>
        
      </div>
    </section>
  )
}

export default Hero
