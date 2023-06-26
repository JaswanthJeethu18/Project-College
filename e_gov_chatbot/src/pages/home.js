import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/home.css'
import BannerImage from "../assests/Use-Cases-of-AI-in-the-Banking.jpg"
function Home() {
  return (
    <div class="page">
      <section class="hero" >
        <div class="container" style={ {backgroundImage:'url(${BannerImage})'} } >
          <h2>Your Gateway to Government Loans and Insurance Schemes</h2>
          <p> Discover a world of financial possibilities on our user-friendly website. Our chatbot provides instant access to comprehensive information on government loans for individuals and businesses.</p>
           <p>From education and housing to startups and small enterprises, explore eligibility, interest rates, and application procedures. Trust us for accurate and up-to-date details. Start your journey toward financial success today! Simply type in your queries and MegaBot will work its magic to assist you. </p></div>
          <div class="chat-container">
        <iframe width="650" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/bceaa392-bd92-4436-87b0-379d61ca6afb"></iframe>
      </div>
      </section>
      
      <section class="features">
        <div class="container">
          <div class="feature">
            <i class="fas fa-rocket"></i>
            <h2>Why use our chatbot?</h2>
            <h3>Fast and Efficient</h3>
            <p>Our chatbot provides quick responses and resolves queries in no time.</p>
          </div>
          <div class="feature">
            <i class="fas fa-cogs"></i>
            <h3>Customizable</h3>
            <p>Customize the chatbot to match your specific needs and preferences.</p>
          </div>
          <div class="feature">
            <i class="fas fa-comments"></i>
            <h3>24/7 Support</h3>
            <p>Our chatbot is available round the clock to assist you at any time.</p>
          </div>
        </div>
      </section>
      
      <section class="cta">
        <div >
          <h2>Ready to Get Started?</h2>
          <p>Chat with our AI bot and experience the future of customer support.</p>
          <button id="start-chat">Start Chat</button>
          
        </div>
      </section>
      
    </div>
  );
}

export default Home