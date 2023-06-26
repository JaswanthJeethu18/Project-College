import React from 'react'
import "../styles/contact.css"
import PizzaLeft from "../assests/hhh.png"

function Contact() {
  return (
    <div class="contact">
      <div className="leftSide"></div>

    <div className="rightSide">
        <h1> Contact Us</h1>
        <p >If you have any inquiries, feedback, or suggestions, please don't hesitate to reach out to us. Our team will be happy to assist you.</p>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact