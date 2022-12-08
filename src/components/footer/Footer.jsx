import React from 'react'
import './Footer.css'
import oval2 from './img/oval2.png'
import oval3 from './img/oval3.png'
import gr8 from './img/gr8.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__up">
            <h1>Delivering real results for top companies. Some of our <span>success stories</span>.</h1>
        </div>
        <div className="footer__down">
            <div className='first__down'>
                <h2> “The team perfectly fit the specialized skill set required. They focused on the most essential helping us.”</h2>
                <p>Kady Baker</p>
                <img src={oval2} alt="o" />
            </div>
            <div className='second__down'>
                <h2>“We needed to automate our entire onboarding process. The team came in and built out the whole journey.”</h2>
                <p>Aiysha Reese</p>
                <img src={oval2} alt="o" />
            </div>
            <div className='third__down'>
                <h2>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. Lorem ipsum dolor”</h2>
                <p>Arthur Clarke</p>
                <img src={oval3} alt="o" />
            </div>
        </div>
        <img src={gr8} alt="gr" className='imggr8'/>
    </div>
  )
}

export default Footer