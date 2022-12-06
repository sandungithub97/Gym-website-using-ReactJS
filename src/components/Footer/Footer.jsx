import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Insta from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className="blur blur-join"></div>
        <div className="footer">
            <div className='social-links'>
            <img src={Github} alt="" />
            <img src={Insta} alt="" />
            <img src={Linkedin} alt="" />
            </div>
        
            <div className="logo-footer">
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer