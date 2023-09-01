import React from "react";

import { images } from "../../constants";

import "./SubHeading.css";

const SubHeading = ({ title }) => {
    return (

        <div style={{ marginBottom: '1rem' }}>
            <p className="p__cormorant">{title}</p>
            <img src={images.spoon} alt="spoon" className="spoon__img" />
        </div>
    )
};

export default SubHeading;