import React from "react";
import Slider from "react-slick";
const AboutCarousel=()=>{
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autplay: true,
        autoplaySpeed: 3000,
    };
    return(
        <div>
            <Slider {...settings}>
                <div>
                    <img src="" alt="" />
                </div>
            </Slider>
        </div>
    )
}