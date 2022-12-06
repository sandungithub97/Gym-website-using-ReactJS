import React from 'react'
import Header from'../Header/Header'
import hero from '../../assets/hero_image.png'
import back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import './Hero.css'

import {motion} from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'



const Hero = () => {
  const transition ={type:'spring', duration:3}
  const mobile = window.innerWidth <= 768 ? true: false;
  return (
    <div className='hero'>
      <div className="blur blur-he"></div>
        <div className="left-h">
          <Header/>
          <div className='add'>
        <motion.div
        initial={{left: mobile? '178px': '238px'}}
        whileInView={{left:'8px'}}
        transition={{...transition, type:'tween'}}
         
        ></motion.div>
        <span>The Best Fitness Club in Sri Lanka</span>
        </div>
        <div className='text'>
          <div className='tes'>
            <span className='stroke'>SHAPE   </span>
            <span>YOUR</span>
          </div>
          <div className='tes'>
            <span>Body Correctly</span>
          </div>
          <div>
            <span>“The gym is not the social club for the fit. It's a training ground for everyone.” “The mind is the most important part of achieving any fitness</span>
          </div>
        </div>
      <div className="figure">
        {/* Live starts update */}
        <div>
        <span>12+</span>
        <span> Fitness Coaches</span>
        </div>
        <div>
        <span>200+</span>
        <span>Active Members</span>
        </div>
        <div>
        <span>20+</span>
        <span>Programs</span>
        </div>
      </div>
      <div className="in-buttons">
        <div>
        <buttons className="btn1">Get Started</buttons>
        </div>
        <div>
        <buttons className="btn1">Learn More</buttons>
        </div>
        
        
      </div>     
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
          <motion.div 
          transition={transition}
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          className="heart-rate">
          <img src={heart} alt="" />
            <span>Heart Rate </span>
            <span>116 bpm</span>
            </motion.div>
            <img src={hero} alt="" className="hero-img" />
          <motion.img 
          transition={transition}
          initial={{right: '-1rem'}}
          whileInView={{right: '22rem'}}
          src={back} alt="" className="back" />
          <motion.div 
           transition={transition}
           initial={{right: '37rem'}}
           whileInView={{right: '28rem'}}
           className="calories">
            <img src={Calories} alt="" className="cal" />
            <div className='div1'>
              <span>Burned Calories</span>
              <span>225 kcal</span>
            </div>
          </motion.div>
        </div>
        
    </div>
  )
}

export default Hero