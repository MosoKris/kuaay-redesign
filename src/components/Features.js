import React from 'react'
import "./Feature.css"
import clock from "../Assets/clock.png"
import shield from "../Assets/shield.png"
import customer from "../Assets/customer.png"

function Features() {
  return (
    <section className='features'>
      <h3>KUAAY FEATURES</h3>
      <h1>Sell cars online <br/> anywhere effortlessly.</h1>
      <p>Optimize your sales strategy with our platform. Manage inventory, secure payments, and <br/>provide excellent customer support, all in real-time.</p>

    <div className='card-container'>
        <div className='card-1'>
            <img src={clock} ></img>
            <h2>Real-time Inventory</h2>
            <p>With Pacer, your inventory is automatically updated in real-time, ensuring accurate product availability for your customers.</p>
        </div>
        <div className='card-2'>
            <img src={shield}></img>
            <h2>Secure Payment</h2>
            <p>With Pacer, ensure secure and swift transactions with real-time payment updates, providing a seamless purchasing experience.</p>
        </div>
        <div className='card-3'>
            <img src={customer}></img>
            <h2> Customer Support</h2>
            <p>With Pacer, you get unparalleled customer support with real-time updates and accurate product information for all your customers.</p>
        </div>
    </div>
   
    </section>
  )
}

export default Features;
