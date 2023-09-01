import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";


const FindUs = () => {

    return (
        <div className="app__bg app__wrapper section__padding" id="contact">
            <div className="app__wrapper_info">
                <SubHeading title='Contact' />
                <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
                <div className="app__wrapper-content">
                    <p className="p__opensans">PrimeCut Steakhouse, 123 Savory Street, Gourmetville, Culinary County Delicacy District, DE 12345, United Tasteland</p>
                    <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Open Hours</p>
                    <p className="p__opensans">Mon - Sun: 10:00am - 2:00am</p>
                </div>
                <button className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>
            </div>

            <div className="app__wrapper_img">
                <img src={images.findus} alt="findus" />
            </div>
        </div>
    )
};

export default FindUs;