import React from 'react'
import Flogo from '../assests/title_logo.PNG';
import "../styles/footer.css";
function Footer() {
  return (
    <div class="footer">
    <div class="fcontainer">
    <img src={Flogo}/><p>&copy; 2023 MegaBot Website. All rights reserved.</p>
        </div>
        </div>
  )
}

export default Footer