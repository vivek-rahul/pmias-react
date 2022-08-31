import React from "react";
import Slider from "react-slick";
import SliderCard from "../slider/slider-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Service() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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

                    <div className="service-active" data-aos='fade-up' data-aos-delay={200} >
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
                            {/* <div className="swiper-slide">
                                    <SliderCard />
                                </div>
                                <div className="swiper-slide">
                                    <SliderCard />
                                </div> */}
                            {/* </div> */}
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                    <div class="shape">
                        <img src="assets/images/shape-1.png" class="layer" data-speed="1" alt="Shape" />
                    </div>
                </div>

            </div>
        </div >



    )
}
export default Service