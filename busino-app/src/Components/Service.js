import React from "react";
import Slider from "react-slick";
import SliderCard from "./slider/slider-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Service() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        < div className="section section-padding-02 mt-n1 overflow-hidden" style={{ marginBottom: "150px" }} >
            <div className="container">

                <div className="service-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-9">

                            <div className="section-title">
                                <h5 className="sub-title">SERVICES WE PROVIDE</h5>
                                <h2 className="title">
                                    Best Quality <span>Service</span> for You
                                </h2>
                            </div>

                        </div>
                    </div>

                    <div className="service-active" data-aos='fade-up' data-aos-delay={200} style={{ padding: "25px" }} >
                        <div className="swiper-container">
                            {/* <div className="swiper-wrapper"> */}
                            <Slider {...settings} >

                                <SliderCard />
                                <SliderCard />
                                <SliderCard />
                                <SliderCard />
                                <SliderCard />
                                <SliderCard />
                                <SliderCard />
                                <SliderCard />

                            </Slider>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        // </div >



    )
}
export default Service