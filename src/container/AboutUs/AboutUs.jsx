import React from "react";

import "./AboutUs.css";

import { images } from "../../constants";

const AboutUs = () => {

    return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
            <img src={images.letterJ} alt="letter j"/>
        </div>
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
                <p className="p__opensans">Welcome to "Jones Cafe," where the finest steaks are elevated into a culinary journey. With a blend of modern sophistication and timeless charm, we present expertly cooked prime cuts accompanied by thoughtfully crafted sides and impeccable wine selections. At Jones Cafe, we invite you to experience the legacy of great steak in every unforgettable bite.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.knife} alt="about_knife" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
                <p className="p__opensans">Established with a passion for exceptional dining, "Jones Cafe" carries a rich legacy in the world of culinary excellence. Founded in 1993, our journey began with a vision to redefine the art of enjoying steaks. Over the years, we have honed our craft, combining the finest ingredients, meticulous preparation, and a commitment to impeccable service. From humble beginnings to becoming a celebrated name in the gastronomic landscape, we take pride in sharing our love for fine dining with every guest who walks through our doors.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>
        </div>
    </div>
    )
};

export default AboutUs;