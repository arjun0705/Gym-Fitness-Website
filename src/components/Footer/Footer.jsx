import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/gym_logo.png"

function Footer() {
    return (
        <div className='footer_container'>
            <hr />
            <div className="footer">

                <div className="social-links">

                <a href="https://github.com/arjun0705" target="_blank"><img width="30px"  src={Github} alt="" /></a>  
                 <a href="" target="_blank"><img  width="30px" src={Instagram} alt="" /></a>   
                 <a href="https://www.linkedin.com/in/arjun-samrat-23b7b11aa/" target="_blank"> <img width="30px" src={LinkedIn} alt="" /></a>  
                </div>

                <div className="logo-footer">
                    {/* <img src={Logo} alt="" /> */}
                    <span className='logo-text'><span className='stroke-text'>FITNESS</span> MANTRA</span>

                </div>
            <div className="footer__copyright">
                <small>&copy; Design & Developed by Arjun Samrat | all rights reserved</small>
            </div>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>

        </div>
    )
}

export default Footer
