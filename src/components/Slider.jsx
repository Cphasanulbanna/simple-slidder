import React, { useEffect, useRef, useState } from "react";

//images
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";

function Slider() {
    //states
    const [images] = useState([image1, image2, image3, image4]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [maxIndex] = useState(images?.length);
    const [transition, setTransition] = useState(false);

    //next button function
    const handleNext = () => {
        if (!transition) {
            setTransition(true);
            if (selectedIndex + 1 < maxIndex) {
                setSelectedIndex((prev) => prev + 1);
            } else {
                setSelectedIndex(0);
            }
            setTimeout(() => {
                setTransition(false);
            }, 400);
        }
    };

    //prev button function
    const handlePrev = () => {
        if (!transition) {
            setTransition(true);
            if (selectedIndex - 1 >= 0) {
                setSelectedIndex((prev) => prev - 1);
            } else {
                setSelectedIndex(maxIndex - 1);
            }
            setTimeout(() => {
                setTransition(false);
            }, 400);
        }
    };

    return (
        <section className="main">
            <section className="wrapper">
                <section className="slider-container">
                    <div className={`image ${transition && "active"}`}>
                        <img
                            src={images[selectedIndex]}
                            alt="image"
                        />
                    </div>

                    <div className="button-box">
                        <button
                            onClick={handlePrev}
                            className="prev"
                        >
                            prev
                        </button>
                        <button
                            onClick={handleNext}
                            className="next"
                        >
                            next
                        </button>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Slider;
