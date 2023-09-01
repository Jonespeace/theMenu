import React, { useRef } from "react";

import SubHeading from "../../components/SubHeading/SubHeading";

import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';

import "./Gallery.css";
import { images } from "../../constants";

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    }

return (
    <div className="app__gallery flex__center">
        <div className="app__gallery-content">
            <SubHeading title="Instagram" />
            <h1 className="headtext__cormorant">Photo Gallery</h1>
            <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>Step into our photo gallery and experience the essence of our fine dining steakhouse. From sizzling prime cuts to the artfully composed plates, each image tells a story of culinary excellence. Discover the intimate ambiance and refined elegance that await you as you explore snapshots of unforgettable moments in our restaurant.</p>
            <button type='button' className="custom__button">View More</button>
        </div>

        <div className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
            {galleryImages.map((image, index) => (
                <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
                    <img src={image} alt="gallery" />
                    <BsInstagram className="gallery__image-icon" />
                </div>
            ))}
            </div>
            <div className="app__gallery-images_arrows">
                <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
                <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
            </div>
        </div>
    </div>
)
};

export default Gallery;