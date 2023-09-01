import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components/Footer/FooterOverlay';
import Newsletter from '../../components/Footer/Newsletter';

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => {

    return (
    <div className="app__footer section__padding">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__opensans">PrimeCut Steakhouse, 123 Savory Street, Gourmetville, Culinary County Delicacy District, DE 12345, United Tasteland</p>
                <p className="p__opensans">+1 123 456 7890</p>
            </div>
            <div className="app__footer-links_logo">
                <img src={images.jonesCafe} alt="footer_logo" />
                <p className="p__opensans">"Where Every Bite Tells a Delicious Story. Uniting Flavors, Savoring Moments."</p>
                <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15}} />
                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>
            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Open Hours</h1>
                <p className="p__opensans">Mon - Sun: 10:00am - 2:00am</p>
            </div>
        </div>
        
        <div className="footer__copyright">
            <p className="p__footer">© 2023 rileyjonestech.com</p>
        </div>
    </div>
    )
};

export default Footer;