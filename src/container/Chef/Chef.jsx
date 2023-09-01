import React from "react";

import images from "../../constants/images";
import Subheading from '../../components/SubHeading/SubHeading';

import "./Chef.css";

const Chef = () => {

    return (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef" />
        </div>

        <div className="app__wrapper_info">
            <Subheading title="Chef's World" />
            <h1 className="headtext__cormorant">What we believe in</h1>

            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img src={images.quote} alt="quote" />
                    <p className="p__opensans">Like a symphony conductor, a chef orchestrates flavors to create a culinary masterpiece that dances upon the senses and lingers in the memory.</p>
                </div>
                <p className="p__opensans">Cooking is a magical blend of artistry and science, where each dish tells a story and every ingredient is a brushstroke on the canvas of flavor.</p>
            </div>

            <div className="app__chef-sign">
                <p className="p__opensans">Riley Jones</p>
                <p className="p__opensans">Chef & Founder</p>
            </div>
        </div>
    </div>
    )
};

export default Chef;