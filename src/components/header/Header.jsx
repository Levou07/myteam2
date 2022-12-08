import React from 'react'
import './Header.css'
import group4 from './img/Group4.png';
import restangle from './img/res.png';

function Header() {
  return (
    <div className='wrapper'>
        <div className="wrapper__head">
            <div className="head">
                <div className="left">
                    <button>myteam</button>
                    <button>home</button>
                    <button>about</button>
                </div>
                <div className="right">
                    <button className='btn_right'>contact us</button>
                </div>
            </div>
            <div className="head-down">
                <div className="down__left">
                    <h1 className='down__left-h1'>Find the best <span className='down__left-spn'>talent</span></h1>
                </div>
                <div className="down__right">
                    <p className='down__right-p'>Find the best talentFinding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
            </div>
            <div className="img">
                <img src={group4} alt="" className='group4'/>
                <img src={restangle} alt="" className='res'/>
            </div>
        </div>
    </div>
  )
}

export default Header