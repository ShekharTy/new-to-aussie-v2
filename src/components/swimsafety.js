import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import '../styles/swim-safety.css';
import bannerImage from '../data/swim_banner.jpg'; 


// Array of image data
const imageData = [
    {
        imageSrc: require('../data/yellow_flag.png'),
        altText: 'yellow flag',
        title: 'Caution is required',
        facts: 'Be careful of potential hazards in the water such as large waves or sharks'
    },
    {
        imageSrc: require('../data/sign2.png'),
        altText: 'Swim between the flags',
        title: 'Swim between the flags',
        facts: 'This symbol indicates it is a swimming area and you should swim between the red and yellow flags only.'
    },
    {
        imageSrc: require('../data/red_flag.png'),
        altText: 'red flag',
        title: 'Red flag',
        facts: 'Extremely Dangerous. Should not enter the ocean'
    },
    {
        imageSrc: require('../data/black_white_flag.png'),
        altText: 'black white flag',
        title: 'Black and White Flag',
        facts: 'Surfcraft riding area boundary. Avoid swimming in surfcraft areas if at all possible.'
    },
    {
        imageSrc: require('../data/red_white_flag.png'),
        altText: 'red white flag',
        title: 'Red and White Flag',
        facts: 'Emergency evacuation. Evacuate the water immediately for a variety of reasons, including sharks and hurricanes.'
    },
    {
        imageSrc: require('../data/no_alcohol.png'),
        altText: 'No alcohol',
        title: 'No alcohol',
        facts: 'No alcohol is allowed in the area.'
    },
    {
        imageSrc: require('../data/no_frame.png'),
        altText: 'No flame',
        title: 'No flame',
        facts: 'Open flames or the use of fire are prohibited in the area..'
    },
    {
        imageSrc: require('../data/no_swimming.png'),
        altText: 'No Swimming',
        title: 'No Swimming',
        facts: 'No swimming is allowed in the area..'
    },
    {
        imageSrc: require('../data/no_vehicle.png'),
        altText: 'No Vehicle',
        title: 'No Vehicle',
        facts: 'No vehicles are allowed in the area...'
    },
    {
        imageSrc: require('../data/no_camping.png'),
        altText: 'No Camping',
        title: 'No Camping',
        facts: 'Camping is prohibited in the area.'
    },
    {
        imageSrc: require('../data/no_fishing.png'),
        altText: 'No Fishing',
        title: 'No Fishing',
        facts: 'Fishing is prohibited in the area.'
    },
    {
        imageSrc: require('../data/no_dogs.png'),
        altText: 'No Dogs',
        title: 'No Dogs',
        facts: 'No dogs are allowed in the area...'
    },
    {
        imageSrc: require('../data/no_vessels.png'),
        altText: 'No Vessels',
        title: 'No Vessels',
        facts: 'Vessels, such as boats, jet skis, or other watercraft, is not allowed in the area.'
    },
    {
        imageSrc: require('../data/no_water_ski.png'),
        altText: 'No Sking',
        title: 'No Sking',
        facts: 'No Water skiing is prohibited in the area.'
    },
    {
        imageSrc: require('../data/no_fishing.png'),
        altText: 'No Fishing',
        title: 'No Fishing',
        facts: 'No Fishing is allowed in the area...'
    },
];

function SwimSafety() {
    const sliderRef = useRef(null); // Reference to the Slider component

    // State to track the number of flags
    const [flagCounter, setFlagCounter] = useState(0);

    // Function to update the flag counter when changing slides
    const handleSlideChange = (currentSlide) => {
        setFlagCounter(currentSlide + 1); // Slide index starts from 0, so add 1
    };

    // Function to handle clicking on the left arrow
    const handleLeftArrowClick = () => {
        sliderRef.current.slickPrev(); // Go to the previous slide
    };

    // Function to handle clicking on the right arrow
    const handleRightArrowClick = () => {
        sliderRef.current.slickNext(); // Go to the next slide
    };

    return (
       
        <div id="swim">
            <h2>Learn Beach Safety & Regulatory Signs</h2>
            <p>
            Welcome to the section dedicated to beach safety learning! We believe that enjoying the beach should be both fun and safe. Whether you're a seasoned beachgoer or someone new to the coastal environment, there's always something new to learn about staying safe by the water.
            </p>  

            <div className="banner">
                <img src={bannerImage} alt="Banner" className="banner-image" />
                </div>
                 
            <h3>Why is beach safety important?</h3>
            <p>Beaches can be dynamic and unpredictable environments, with changing tides, currents, and weather conditions. 
            Knowing how to recognize potential hazards 
            and understanding beach safety signage can significantly reduce the risk of accidents and ensure a positive beach experience for everyone.
            </p>

            <h3>Let's start learning below signs!</h3>
            <p>Together, let's make every beach day a safe and memorable experience!
            Start exploring below  safety & regulatory signs and empower yourself with the knowledge you need to stay safe and have fun at the beach!</p>
           
            <Slider
                ref={sliderRef}
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                afterChange={handleSlideChange}
            >
                {imageData.map((item, index) => (
                    <GalleryItem
                        key={index}
                        imageSrc={item.imageSrc}
                        altText={item.altText}
                        title={item.title}
                        facts={item.facts}
                    />
                ))}
            </Slider>

            {/* Custom arrow components with click event handlers */}
            <div className="custom-arrows">
                <FaArrowLeft className="custom-arrow arrow-left" onClick={handleLeftArrowClick} />
                <FaArrowRight className="custom-arrow arrow-right" onClick={handleRightArrowClick} />
            </div>
            
            {/* Flag Counter */}
            <div className="flag-counter"> Flag {flagCounter} / {imageData.length}</div>

        </div>
         
    );
}

function GalleryItem({ imageSrc, altText, title, facts }) {
    return (
        <div className="gallery-item">
            <img className="gallery-item__image" src={imageSrc} alt={altText} />
            <div className="gallery-item__text">
                <div className="gallery-item__title">{title}</div>
                <div className="gallery-item__facts">{facts}</div>
            </div>
        </div>
    );
}

export default SwimSafety;
