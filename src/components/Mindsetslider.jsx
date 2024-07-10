import React from "react";
import Slider from "react-slick";

function Mindsetslider() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
        <div className="slider-container h-[448px]">
            <Slider {...settings}>
                <div>
                    <h1 className=" font-poopins font-medium text-lg text-white text-center">1st phase <br />
                        "The not-wanting-to-be-true"</h1>
                    <p className=" text-sm text-center font-poopins  font-normal text-white">This phase is characterized by denial and ignoring the final separation.</p>
                </div>
                <div>
                    <h1 className=" font-poopins font-medium text-lg text-white text-center">2nd phase <br />
                        "The not-wanting-to-be-true"</h1>
                    <p className=" text-sm text-center font-poopins  font-normal text-white">This phase is characterized by denial and ignoring the final separation.</p>
                </div>
                <div>
                    <h1 className=" font-poopins font-medium text-lg text-white text-center">3rd phase <br />
                        "The not-wanting-to-be-true"</h1>
                    <p className=" text-sm text-center font-poopins  font-normal text-white">This phase is characterized by denial and ignoring the final separation.</p>
                </div>
                <div>
                    <h1 className=" font-poopins font-medium text-lg text-white text-center">4th phase <br />
                        "The not-wanting-to-be-true"</h1>
                    <p className=" text-sm text-center font-poopins  font-normal text-white">This phase is characterized by denial and ignoring the final separation.</p>
                </div>
            </Slider>
        </div>
    );
}

export default Mindsetslider