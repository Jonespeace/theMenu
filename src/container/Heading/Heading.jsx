import React from "react";

import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

import "./Heading.css";

const Heading = () => {
    return (
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <SubHeading title="Chase the new flavor" />
                <h1 className="app__header-h1">The Key to Fine Dining</h1>
                <p className="p__opensans" style={{ margin: "2rem 0" }}>
                    The best fine dining experience in town.
                </p>
                <button type="button" className="custom__button">
                    Explore Menu
                </button>
            </div>
            <div className="app__wrapper_img">
                <img src={images.headingSteak} alt="header img" />
            </div>
        </div>
    );
};

export default Heading;
