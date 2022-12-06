import React from 'react'
import {plansData} from '../../data/plansData'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    
    <div className="plans-container">
        <div className="blur blur-pl1"></div>
        <div className="blur blur-pl2"></div>
        <div className="programs-header">
            <span className='stroke2'>READY TO START</span>
            <span className='middle'>YOUR JOURNEY</span>
            <span className='stroke2'>NOW WITH US</span>
        </div>
        {/* Plans Card  */}
        <div className="plans">
                {plansData.map((plan, i)=>(
                    <div className='plan' key={i}>
                    {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>
                <div className="features">
                    {plan.features.map((feature, i)=>(
                       <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                       </div> 
                    ))}
                </div>
                <div>
                    <span>See more Benefits</span>
                </div>
                <button className='btn'>Join Now</button>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Plans