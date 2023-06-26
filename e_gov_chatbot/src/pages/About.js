import React from 'react'
import "../styles/about.css"
import MAIN from "../assests/about_img.PNG"
function About() {
  return (
    <div class="about">
        <div class="aboutTop"><img src={MAIN}/>
        </div>
        <div class="aboutBottom">
        <h1 >ABOUT US</h1>
    <p >We are a team of experts dedicated to developing cutting-edge chatbot solutions. Our goal is to provide seamless and efficient communication between businesses and their customers through the power of artificial intelligence.</p>
    <p >With our advanced chatbot technology, we aim to revolutionize customer support, enhance user experiences, and drive business growth.</p></div> 
    </div>
  )
}

export default About