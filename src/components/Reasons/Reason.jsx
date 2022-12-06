import React from 'react';
import  './Reason.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
const Reason = () => {
  return (
    <div className="Reasons" id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>

        <div className="right-r">
            <span>Some reasons</span>
            <div><span className="stroke">Why </span>
                <span>Choose Use</span> 
                <span></span>
            </div>
            <div className='details-r'>
            <div><img src={tick} alt=""></img>
                <span>OVER 20+ COACHES</span>
            </div>
            <div><img src={tick} alt=""></img>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div><img src={tick} alt=""></img>
                <span>FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div><img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
            </div>
            <div><img src={tick} alt="" />
            <span>100+ SUCCESFULL   MEMBERS</span>
            </div>
        </div>
        <span />
        <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Reason