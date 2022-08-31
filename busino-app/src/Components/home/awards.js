import AwardSlide from '../slider/awards-card'
import React from "react";
import Slider from "react-slick";
import SliderCard from "../slider/slider-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Awards() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (

        <div style={{ marginBottom: 100 }} className="section">
            <div className="container">
                <div className="brand-active">
                    <Slider {...settings}>
                        <img
                            src="assets/images/awards/Best Personality of India.png" alt="Awards"
                        />
                        <img
                            src="assets/images/awards/Best Research Scholar.png" alt="Awards"
                        />
                        <img
                            src="assets/images/awards/Best Student.png" alt="Awards"
                        />
                        <img src="assets/images/awards/Global Best Head Master.png" alt="Brand" />

                        <img src="assets/images/awards/Global Best Institution.png" alt="Brand" />

                        <img src="assets/images/awards/Global Best Researcher.png" alt="Brand" />

                        <img src="assets/images/awards/Global Dynamic Principal.png" alt="Brand" />

                        <img src="assets/images/awards/Global Best Teacher.png" alt="Brand" />

                        <img src="assets/images/awards/Global Smart Principal.png" alt="Brand" />

                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Awards