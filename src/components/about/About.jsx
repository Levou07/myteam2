import React from 'react'
import './About.css'
import gr9 from './img/gr9.png';
import facebook from './img/facebook.png';
import pinteres from './img/pinteres.png';
import twitter from './img/twitter.png';

function About() {
  return (
    <div className='about'>
        <div className="about__bg">
            <div className="about__up">
                <h2>Ready to get started?</h2>
                <button className="about-contact">contact us</button>
                <img src={gr9} alt="a" className='imggr9'/>
            </div>
        </div>
        <div className="down__bg2">
            <div className="about__down">
                <div className="about__left">
                    <h1>myteam</h1>
                    <div className="about-left__texts">
                        <p>home</p>
                        <p>about</p>
                    </div>
                </div>
                <div className="about__center">
                    <p>987 Hillcreast Lone</p>
                    <p>Irvine CA</p>
                    <p>Uzbekistan 998</p>
                    <p>Call us: 998 *** </p>
                </div>
                <div className="about__right">
                    <img src={facebook} alt="f" />
                    <img src={pinteres} alt="p" />
                    <img src={twitter} alt="t" />
                    <p>Copyright 2020. All Rights Reserver</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About