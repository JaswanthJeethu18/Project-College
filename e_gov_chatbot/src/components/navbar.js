import React from 'react';
import Logo from "../assests/logo_chatbot.PNG";
import {Link} from "react-router-dom";
import Reorder from "../assests/reorder.png";
import "../styles/Navbar.css"; 

function Navbar() {
  return (
    <div class="navbar">
     <div class="leftSide">
     <img src={Logo}/> 
     </div>
      
    <div class= "rightSide">
        <Link to ="/">Home </Link>
        <Link to ="/about">About </Link>
        <Link to ="/contact">Contact</Link>
        <button >
        <img scr={Reorder}/>
        </button>
         </div> 
    </div>
  )
}

export default Navbar