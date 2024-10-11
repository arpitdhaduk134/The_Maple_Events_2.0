import React from 'react';
import ContactForm from '../ContactForm/contactform';
import MapComponent from '../Map/map';
const BookUs = () => {
    return (
        <div className='portfolio-mergecontainer'>
            <div className="portfolio-container">
                <div className="portfolio-text">
                    <h2>Contact Us Today for Event Planning Services</h2>
                    <p>
                    Experience exceptional event planning with Maple Events. Let's create unforgettable moments!
                    </p>
                </div>
               
            </div>
            <ContactForm /> 
            {/* <MapComponent />  */}
        </div>
    );
};

export default BookUs;
