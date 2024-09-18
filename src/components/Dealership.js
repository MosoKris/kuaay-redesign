import React from 'react'
import "./Dealership.css"
import firstImage from "../Assets/image 61.png"
import titleImage from "../Assets/Boost your car dealership experience..png"
import paragraphImage from "../Assets/Elevate your dealership with advanced software for seamless integration, intuitive interfaces, and streamlined operations.png"
function Dealership() {
  return (
    <section className="layered-section">
      
        <img src={firstImage} alt="first Layer" className="first-image" />
        <img src={titleImage} alt="Title Layer" className="title-image" />
        <img src={paragraphImage} alt="Paragraph" className="paragraph-image" />
      
    </section>
  )
}

export default Dealership

