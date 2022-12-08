import React from 'react'
import './Hero.css'
import gr1 from './img/gr1.png';
import gr2 from './img/gr2.png';
import gr3 from './img/gr3.png';
import res2 from './img/res2.png';

function Hero() {
  return (
    <div className='center'>
      <div className="center__two">
        <div className="center__left">
          <img src={res2} alt="" className='res2'/>
          <h2>
          Build & manage distributed teams like no one else.
          </h2>
        </div>
        <div className="center__right">
          <div className="right__first">
            <div className="first__img">
              <img src={gr1} alt="" />
            </div>
            <div className="first__texts">
              <h3>Experienced Individuals</h3>
              <p>Our network is made up of highly experienced professionals  who are passionate about what they do.</p>
            </div>
          </div>
          {/*  */}
          <div className="right__second">
            <div className="second__img">
              <img src={gr2} alt="" />
            </div>
            <div className="second__texts">
              <h3>Easy to Implement</h3>
              <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
            </div>
          </div>
          {/*  */}
          <div className="right__third">
            <div className="third__img">
              <img src={gr3} alt="" />
            </div>
            <div className="third__texts">
              <h3>Enhanced Productivity</h3>
              <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero