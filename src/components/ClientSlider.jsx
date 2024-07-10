import React, { Component } from "react";
import Slider from "react-slick";
import slider_img from '../assets/img/png/slider_girl.png';

function ClientSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>

                <div className=" max-w-[980px] mx-auto">
                    <div className="bg-white w-full px-[50px] max-w-[820px] min-h-[270px] flex items-center justify-center shadow-sliderBoxShadow flex-col mt-[84px]">
                        <span className=' text-center relative -translate-y-10'>  <img src={slider_img} alt="profile pic" width={'86px'} height={'86px'} /></span>
                        <div className=" flex items-center flex-col">
                            <p className=" max-w-[721px] text-center text-sm text-black opacity-70 font-poopins font-normal">Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                            <h3 className=" font-poopins font-medium text-sm text-black  text-center pt-4">Marrie James-CEO</h3>
                            <p className=" pt-1 font-poopins font-normal text-center text-sm text-black opacity-70">Limana Enterprises, CA</p>
                        </div>
                    </div>
                    <div className=" flex gap-5 mt-5">
                        <div className=" max-w-[400px] w-full shadow-sliderBoxShadow bg-white px-9 flex items-center justify-center min-h-[270px] flex-col">
                            <p className=" font-poopins font-normal text-sm text-black opacity-70 max-w-[328px] text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                            <h2 className=" font-poopins text-sm text-center font-medium text-black pt-5">Ralph Edwards-CEO</h2>
                            <p className=" text-center font-poopins text-sm  opacity-70 text-black">Limana Enterprises, CA</p>
                        </div>
                        <div className=" max-w-[400px] w-full shadow-sliderBoxShadow bg-white px-9 flex items-center justify-center min-h-[270px] flex-col">
                            <p className=" font-poopins font-normal text-sm text-black opacity-70 max-w-[328px] text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                            <h2 className=" font-poopins text-sm text-center font-medium text-black pt-5">Darrell Steward-Head</h2>
                            <p className=" text-center font-poopins text-sm  opacity-70 text-black">Limana Enterprises, CA</p>
                        </div>
                    </div>
                </div>

                <div className=" max-w-[980px] mx-auto">
                    <div className="bg-white w-full px-[50px] max-w-[820px] min-h-[270px] flex items-center justify-center shadow-sliderBoxShadow flex-col mt-[84px]">
                        <span className=' text-center relative -translate-y-10'>  <img src={slider_img} alt="profile pic" width={'86px'} height={'86px'} /></span>
                        <div className=" flex items-center flex-col">
                            <p className=" max-w-[721px] text-center text-sm text-black opacity-70 font-poopins font-normal">Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                            <h3 className=" font-poopins font-medium text-sm text-black  text-center pt-4">Marrie James-CEO</h3>
                            <p className=" pt-1 font-poopins font-normal text-center text-sm text-black opacity-70">Limana Enterprises, CA</p>
                        </div>
                    </div>
                    <div className=" flex gap-5 mt-5">
                        <div className=" max-w-[400px] w-full shadow-sliderBoxShadow bg-white px-9 flex items-center justify-center min-h-[270px] flex-col">
                            <p className=" font-poopins font-normal text-sm text-black opacity-70 max-w-[328px] text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                            <h2 className=" font-poopins text-sm text-center font-medium text-black pt-5">Ralph Edwards-CEO</h2>
                            <p className=" text-center font-poopins text-sm  opacity-70 text-black">Limana Enterprises, CA</p>
                        </div>
                        <div className=" max-w-[400px] w-full shadow-sliderBoxShadow bg-white px-9 flex items-center justify-center min-h-[270px] flex-col">
                            <p className=" font-poopins font-normal text-sm text-black opacity-70 max-w-[328px] text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                            <h2 className=" font-poopins text-sm text-center font-medium text-black pt-5">Darrell Steward-Head</h2>
                            <p className=" text-center font-poopins text-sm  opacity-70 text-black">Limana Enterprises, CA</p>
                        </div>
                    </div>
                </div>

                <div className=" max-w-[980px] mx-auto">
                    <div className="bg-white w-full px-[50px] max-w-[820px] min-h-[270px] flex items-center justify-center shadow-sliderBoxShadow flex-col mt-[84px]">
                        <span className=' text-center relative -translate-y-10'>  <img src={slider_img} alt="profile pic" width={'86px'} height={'86px'} /></span>
                        <div className=" flex items-center flex-col">
                            <p className=" max-w-[721px] text-center text-sm text-black opacity-70 font-poopins font-normal">Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                            <h3 className=" font-poopins font-medium text-sm text-black  text-center pt-4">Marrie James-CEO</h3>
                            <p className=" pt-1 font-poopins font-normal text-center text-sm text-black opacity-70">Limana Enterprises, CA</p>
                        </div>
                    </div>
                    <div className=" flex gap-5 mt-5">
                        <div className=" max-w-[400px] w-full shadow-sliderBoxShadow bg-white px-9 flex items-center justify-center min-h-[270px] flex-col">
                            <p className=" font-poopins font-normal text-sm text-black opacity-70 max-w-[328px] text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                            <h2 className=" font-poopins text-sm text-center font-medium text-black pt-5">Ralph Edwards-CEO</h2>
                            <p className=" text-center font-poopins text-sm  opacity-70 text-black">Limana Enterprises, CA</p>
                        </div>
                        <div className=" max-w-[400px] w-full shadow-sliderBoxShadow bg-white px-9 flex items-center justify-center min-h-[270px] flex-col">
                            <p className=" font-poopins font-normal text-sm text-black opacity-70 max-w-[328px] text-center">Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                            <h2 className=" font-poopins text-sm text-center font-medium text-black pt-5">Darrell Steward-Head</h2>
                            <p className=" text-center font-poopins text-sm  opacity-70 text-black">Limana Enterprises, CA</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default ClientSlider;