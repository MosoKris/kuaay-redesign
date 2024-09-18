import React from 'react'
import "./Integration.css"
import stack from "../Assets/529 (1) 2 1.png"

function Integration() {
  return (
    <section className='integration'>
      
        <img src= {stack} alt='stack-image' className='stack' />
        <div className='integration-text'>
            <h1>Seamless Integration</h1>
            <p>Integrate effortlessly with our platform. Enjoy streamlined processes, real-time data, and robust functionality to enhance your operations.</p>

            <div className='integration-grid'>
              <div className='grid-item'>
                  <h3>Easy Setup</h3>
                  <p>Get up and running quickly with our intuitive setup process.</p>
              </div>
              <div className='grid-item'>
                  <h3>Automated Sales</h3>
                  <p>Automation boosts sales by reducing tasks, enhancing productivity.</p>
              </div>
              <div className='grid-item'>
                  <h3>In-depth Analytics</h3>
                  <p>Gain insights with advanced analytics for data-driven decisions.</p>
              </div>
              <div className='grid-item'>
                  <h3>Flexible Interface</h3>
                  <p>Tailor interface for seamless, personalized experience.</p>
              </div>
            </div>
        </div>
      
    </section>
  )
}

export default Integration
