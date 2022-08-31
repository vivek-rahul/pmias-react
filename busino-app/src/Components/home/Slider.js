function Slider() {
    return (

        <div className="section slider-section slider-active">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="single-slider swiper-slide" data-aos="fade-up" data-aos-delay={200}>
                        <div className="container">
                            <div className="slider-wrapper d-lg-flex align-items-center">
                                <div className="row">
                                    <div className="col-lg-7">
                                        {/* Slider Content Start */}
                                        <div className="slider-content">
                                            <h1 className="title">International Academy of <span>Scholars </span></h1>
                                            <a href="!#" className="btn btn-primary btn-hover-secondary">Get Started</a>
                                        </div>
                                        {/* Slider Content End */}
                                    </div>
                                </div>
                                {/* Slider Images Start */}
                                <div className="slider-images">
                                    <div className="slider-hero">
                                        <img src="assets/images/slider/slider-hero.png" alt="Slider Hero" />
                                    </div>
                                    <div className="shape-1" />
                                    <div className="layer shape-2" data-speed={5}>
                                        <img src="assets/images/slider/shape-1.png" alt="Shape" />
                                    </div>
                                    <div className="layer shape-3" data-speed={5}>
                                        <img src="assets/images/slider/shape-2.png" alt="Shape" />
                                    </div>
                                </div>
                                {/* Slider Images End */}
                            </div>
                        </div>
                    </div>
                    {/* Single Slider End */}
                </div>
            </div>
        </div>

    )
}

export default Slider