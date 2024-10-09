import React from 'react';
import './aboutUs.css'; // External CSS for styling
import aboutUsImage from '../../Images/i2.jpg'; // Adjust the path to your image

const AboutUs = () => {
    return (
        <div className='about-us-mergecontainer'>
  <div className="about-us-container">
            <div className="about-us-text">
                <h2>About Us</h2>
                <p>
                We are The Maple Events, Guelph’s premier event planning company. Our dedicated team specializes in crafting unforgettable celebrations, 
                from intimate birthdays to grand corporate functions. We pride ourselves on our meticulous planning and personalized approach, 
                ensuring your vision becomes a reality. Our mission is to provide exceptional service and unique experiences tailored to your needs.
                We are located in the heart of Guelph and offer a range of customizable packages. Trust us to transform your special occasion into a cherished memory. 
                Let’s create something extraordinary together. Contact us today!
                </p>
               
            </div>
            <div className="about-us-image">
                <img
                    src={aboutUsImage}
                    alt="About Us"
                    className="rounded-image"
                />
            </div>
        </div>
        <div className="about-us-container">
        <div className="about-us-image">
                <img
                    src={aboutUsImage}
                    alt="About Us"
                    className="rounded-image"
                />
            </div>
            <div className="about-us-text">
                <h2>The Art of Flawless Celebrations 🌟
                </h2>
                <p>
                Experience unparalleled event planning with Maple Events, 
                where meticulous attention to detail and creative expertise ensure your celebration is flawlessly executed and unforgettable.
                </p>
               
            </div>
            
        </div>
        </div>
      
        
    );
};

export default AboutUs;
