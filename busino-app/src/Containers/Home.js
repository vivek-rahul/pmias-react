import React from 'react';
import '../Assets/Styles/Home.css';
import Shape1 from "../Assets/Images/Home/shape-1.png";
import Shape2 from "../Assets/Images/Home/shape-2.png";
import Shape3 from "../Assets/Images/Home/shape-3.png";
// import Shapeone from "../Assets/Images/Home/slider/shape-1.png";
// import Shapetwo from "../Assets/Images/Home/slider/shape-2.png";
// import Hero from "../Assets/Images/Home/slider/slider-hero.png";
// import Heroone from "../Assets/Images/Home/slider/slider-hero-2.png";
import About from "../Assets/Images/Home/about.jpg";
import Brand1 from "../Assets/Images/Home/brand-1.png";
import Brand2 from "../Assets/Images/Home/brand-2.png";
import Brand3 from "../Assets/Images/Home/brand-3.png";
import Brand4 from "../Assets/Images/Home/brand-4.png";
import Brand5 from "../Assets/Images/Home/brand-5.png";
import Client1 from "../Assets/Images/Home/client-1.png";
import Client2 from "../Assets/Images/Home/client-2.png";
import Client3 from "../Assets/Images/Home/client-3.png";
import Icon1 from "../Assets/Images/Home/icon-1.png";
import Icon2 from "../Assets/Images/Home/icon-2.png";
import Icon3 from "../Assets/Images/Home/icon-3.png";
import Icon4 from "../Assets/Images/Home/icon-4.png";
import Icon5 from "../Assets/Images/Home/icon-5.png";
import Icon6 from "../Assets/Images/Home/icon-6.png";
import Icon7 from "../Assets/Images/Home/icon-7.png";
import Icon8 from "../Assets/Images/Home/icon-8.png";
import Icon13 from "../Assets/Images/Home/icon-13.png";
import Icon14 from "../Assets/Images/Home/icon-14.png";
import Quote from "../Assets/Images/Home/quote.png";
import Team1 from "../Assets/Images/Home/team-1.jpg"
import Team2 from "../Assets/Images/Home/team-2.jpg"
import Team3 from "../Assets/Images/Home/team-3.jpg"
import Team4 from "../Assets/Images/Home/team-4.jpg"
import Call from "../Assets/Images/Home/call-to-action.jpg"
import Blog1 from "../Assets/Images/Home/blog/blog-1.jpg"
import Blog2 from "../Assets/Images/Home/blog/blog-2.jpg"


function Home(props) {
    return (
        <div>
            {/*/!* Slider Start *!/*/}
            {/*<div className="section slider-section slider-active">*/}

            {/*    <div className="swiper-container">*/}
            {/*        <div className="swiper-wrapper">*/}

            {/*            /!* Single Slider Start *!/*/}
            {/*            <div >*/}
            {/*                <div className="container">*/}
            {/*                    <div className="slider-wrapper d-lg-flex align-items-center">*/}
            {/*                        <div className="row">*/}
            {/*                            <div className="col-lg-7">*/}

            {/*                                /!* Slider Content Start *!/*/}
            {/*                                <div className="slider-content">*/}
            {/*                                    <h1 className="title">Together we Explore your <span>Business </span></h1>*/}
            {/*                                    <a href="#" className="btn btn-primary btn-hover-secondary">Get Started</a>*/}
            {/*                                </div>*/}
            {/*                                /!* Slider Content End *!/*/}

            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        /!* Slider Images Start *!/*/}
            {/*                        <div className="slider-images">*/}

            {/*                            <div className="slider-hero">*/}
            {/*                                <img src={Hero} alt="Slider Hero"/>*/}
            {/*                            </div>*/}

            {/*                            <div className="shape-1"></div>*/}
            {/*                            <div className="layer shape-2" data-speed="5">*/}
            {/*                                <img src={Shapeone} alt="Shape"/>*/}
            {/*                            </div>*/}
            {/*                            <div className="layer shape-3" data-speed="5">*/}
            {/*                                <img src={Shapetwo} alt="Shape"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        /!* Slider Images End *!/*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            /!* Single Slider End *!/*/}

            {/*            /!* Single Slider Start *!/*/}
            {/*            <div className="single-slider swiper-slide animation-style-01">*/}
            {/*                <div className="container">*/}
            {/*                    <div className="slider-wrapper d-lg-flex align-items-center">*/}
            {/*                        <div className="row">*/}
            {/*                            <div className="col-lg-7">*/}

            {/*                                /!* Slider Content Start *!/*/}

            {/*                                <div className="slider-content">*/}
            {/*                                    <h1 className="title">Together we Explore your <span>Business </span></h1>*/}
            {/*                                    <a href="#" className="btn btn-primary btn-hover-secondary">Get Started</a>*/}
            {/*                                </div>*/}
            {/*                                /!* Slider Content End *!/*/}

            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        /!* Slider Images Start *!/*/}
            {/*                        <div className="slider-images">*/}

            {/*                            <div className="slider-hero">*/}
            {/*                                <img src={Heroone} alt="Slider Hero"/>*/}
            {/*                            </div>*/}

            {/*                            <div className="shape-1"></div>*/}
            {/*                            <div className="layer shape-2" data-speed="5">*/}
            {/*                                <img src={ Shapeone} alt="Shape"/>*/}
            {/*                            </div>*/}
            {/*                            <div className="layer shape-3" data-speed="5">*/}
            {/*                                <img src={Shapetwo} alt="Shape"/>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        /!* Slider Images End *!/*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            /!* Single Slider End *!/*/}

            {/*        </div>*/}

            {/*        /!* Add Arrows *!/*/}
            {/*        <div className="swiper-button-next"></div>*/}
            {/*        <div className="swiper-button-prev"></div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*/!* Slider End *!/*/}
            {/* Features Start */}
            <div className="section section-padding-02 mt-n6 mb-n1">
                <div className="container">
                    <div className="features-row">

                        <div className="feature-col">
                            {/* Features Start */}
                            <div className="feature-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon">
                                    <img src={Icon1} alt="Icon"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">Expert Team</h4>
                                    <p>Talnted People</p>
                                </div>
                            </div>
                            {/* Features End */}
                        </div>

                        <div className="feature-col">
                            {/* Features Start */}
                            <div className="feature-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon">
                                    <img src={ Icon2 } alt="Icon"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">Business Plan</h4>
                                    <p>Business Strategy</p>
                                </div>
                            </div>
                            {/* Features End */}
                        </div>

                        <div className="feature-col">
                            {/* Features Start */}
                            <div className="feature-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon">
                                    <img src={ Icon3 } alt="Icon"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">Intime Service</h4>
                                    <p>Talnted People</p>
                                </div>
                            </div>
                            {/* Features End */}
                        </div>

                        <div className="feature-col">
                            {/* Features Start */}
                            <div className="feature-box" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon">
                                    <img src={ Icon4 } alt="Icon"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">Quick Support</h4>
                                    <p>Talnted People</p>
                                </div>
                            </div>
                            {/* Features End */}
                        </div>

                    </div>
                </div>
            </div>
            {/* Features End */}

            {/* About Start */}
            <div className="section section-padding-02 about-section mt-n10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            {/* About Images Start */}
                            <div className="about-images">
                                <img src={ About } data-aos="flip-left" data-aos-delay="300" alt="About"/>
                                    <div className="shape"></div>
                            </div>
                            {/* About Images End */}

                        </div>
                        <div className="col-lg-6">

                            {/* About Content Start */}
                            <div className="about-content">

                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h5 className="sub-title">LEARN ABOUT BUSINO</h5>
                                    <h2 className="title">Best & Creative <span>Agency</span> for your Company</h2>
                                </div>
                                {/* Section Title End */}

                                <p className="about-text">Most of the most porro quisquam est, qui dolorem are one. ipsum quia dolor sit amet consectetur adipisci velit sed quia. </p>
                                <p>Best is the most porro quisquam est, qui dolorem are one. porro quis quam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore </p>
                                <a href="#" className="btn btn-primary btn-hover-secondary">Learn More</a>
                            </div>
                            {/* About Content End */}

                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Service Start */}
            <div className="section section-padding-02 mt-n1 overflow-hidden">
                <div className="container">

                    {/* Service Wrapper Start */}
                    <div className="service-wrapper">

                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-9">

                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h5 className="sub-title">SERVICES WE PROVIDE</h5>
                                    <h2 className="title">Best Quality <span>Service</span> for your Company</h2>
                                </div>
                                {/* Section Title End */}

                            </div>
                        </div>

                        {/* Service Start */}
                        <div className="service-active" data-aos="fade-up" data-aos-delay="200">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">

                                        {/* Service Box Start */}
                                        <div className="service-box">
                                            <div className="box-icon">
                                                <img src={ Icon5 } alt="Icon"/>
                                            </div>
                                            <div className="box-content">
                                                <h4 className="title"><a href="service-single.html">Market Research</a></h4>
                                                <p>Obtain pain of because is pain, but because you nally circumstances</p>
                                            </div>
                                        </div>
                                        {/* Service Box End */}

                                    </div>
                                    <div className="swiper-slide">

                                        {/* Service Box Start */}
                                        <div className="service-box">
                                            <div className="box-icon">
                                                <img src={ Icon6 } alt="Icon"/>
                                            </div>
                                            <div className="box-content">
                                                <h4 className="title"><a href="service-single.html">SEO Optimization</a></h4>
                                                <p>Obtain pain of because is pain, but because you nally circumstances</p>
                                            </div>
                                        </div>
                                        {/* Service Box End */}

                                    </div>
                                    <div className="swiper-slide">

                                        {/* Service Box Start */}
                                        <div className="service-box">
                                            <div className="box-icon">
                                                <img src={ Icon7 } alt="Icon"/>
                                            </div>
                                            <div className="box-content">
                                                <h4 className="title"><a href="service-single.html">Amazing Strategy</a></h4>
                                                <p>Obtain pain of because is pain, but because you nally circumstances</p>
                                            </div>
                                        </div>
                                        {/* Service Box End */}

                                    </div>
                                    <div className="swiper-slide">

                                        {/* Service Box Start */}
                                        <div className="service-box">
                                            <div className="box-icon">
                                                <img src={ Icon8 } alt="Icon"/>
                                            </div>
                                            <div className="box-content">
                                                <h4 className="title"><a href="service-single.html">PR & Marketing</a></h4>
                                                <p>Obtain pain of because is pain, but because you nally circumstances</p>
                                            </div>
                                        </div>
                                        {/* Service Box End */}

                                    </div>
                                    <div className="swiper-slide">

                                        {/* Service Box Start */}
                                        <div className="service-box">
                                            <div className="box-icon">
                                                <img src={Icon13} alt="Icon"/>
                                            </div>
                                            <div className="box-content">
                                                <h4 className="title"><a href="service-single.html">Project Analysis </a></h4>
                                                <p>Obtain pain of because is pain, but because you nally circumstances</p>
                                            </div>
                                        </div>
                                        {/* Service Box End */}

                                    </div>
                                    <div className="swiper-slide">

                                        {/* Service Box Start */}
                                        <div className="service-box">
                                            <div className="box-icon">
                                                <img src={Icon14} alt="Icon"/>
                                            </div>
                                            <div className="box-content">
                                                <h4 className="title"><a href="service-single.html">Financial Planning</a></h4>
                                                <p>Obtain pain of because is pain, but because you nally circumstances</p>
                                            </div>
                                        </div>
                                        {/* Service Box End */}

                                    </div>
                                </div>
                            </div>

                            {/* Add Arrows */}
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                        {/* Service End */}

                        {/* Shape Start */}
                        <div className="shape">
                            <img src={Shape1} className="layer" data-speed="1" alt="Shape"/>
                        </div>
                        {/* Shape End */}

                    </div>
                    {/* Service Wrapper End */}

                </div>
            </div>
            {/* Service End */}

            {/* Client's Start */}
            <div className="section section-padding-02 mt-n10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            {/* Client's Content Start */}
                            <div className="client-content">

                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h5 className="sub-title">CLIENTS REVIEW</h5>
                                    <h2 className="title">Our Happy <span>Clients</span> says about us</h2>
                                </div>
                                {/* Section Title End */}

                                <p>Best is the most porro quisquam est, qui dolorem are porro quis quam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>

                                <div className="client-wrapper client-active">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide single-client">
                                                <p> <img src={Quote} alt="Quote"/> Most of the most porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia some more than quick support with expert team </p>

                                                <div className="client-info">
                                                    <span className="name">David Layed</span>
                                                    <span className="designation">CEO, Xenmax</span>
                                                </div>
                                            </div>

                                            <div className="swiper-slide single-client">
                                                <p> <img src={Quote} alt="Quote"/> Most of the most porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia some more than quick support with expert team </p>

                                                <div className="client-info">
                                                    <span className="name">Serena Stroman</span>
                                                    <span className="designation">Manager, Xenmax</span>
                                                </div>
                                            </div>

                                            <div className="swiper-slide single-client">
                                                <p> <img src={Quote} alt="Quote"/> Most of the most porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia some more than quick support with expert team </p>

                                                <div className="client-info">
                                                    <span className="name">Jane Hamm</span>
                                                    <span className="designation">Managing Director, Xenmax</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Add Arrows */}
                                        <div className="swiper-button-prev">Previous</div>
                                        <div className="swiper-button-next">Next</div>
                                    </div>
                                </div>

                            </div>
                            {/* Client's Content End */}

                        </div>
                        <div className="col-lg-6">
                            {/* Client's Images Start */}
                            <div className="mouse-parallax client-images">
                                <div className="images-1">
                                    <img src={Client1} alt="Client's"/>
                                </div>
                                <div className="images-2">
                                    <img src={Client2} alt="Client's"/>
                                </div>
                                <div className="images-3">
                                    <img src={Client3} alt="Client's"/>
                                </div>

                                <div className="layer shape-1" data-speed="3"></div>
                                <div className="layer shape-2" data-speed="3"></div>
                                <div className="layer shape-3" data-speed="3"></div>
                            </div>
                            {/* Client's Images End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Client's End */}

            {/* Counter Start */}
            <div className="section section-padding-02 mt-n3">
                <div className="container">

                    {/* Section Title Start */}
                    <div className="section-title text-center">
                        <h2 className="title">Some of our <br/> <span>Interesting</span> facts</h2>
                    </div>
                    {/* Section Title End */}

                    {/* Counter Wrapper Start */}
                    <div className="counter-wrapper">
                        <div className="row gx-8">
                            <div className="col-lg-3 col-sm-6">

                                {/* Single Counter Start */}
                                <div className="single-counter" data-aos="fade-up" data-aos-delay="200">
                                    <div className="count"><span className="odometer" data-count-to="2,500"></span>2500+</div>
                                    <p>Customers</p>
                                </div>
                                {/* Single Counter End */}

                            </div>
                            <div className="col-lg-3 col-sm-6">

                                {/* Single Counter Start */}
                                <div className="single-counter" data-aos="fade-up" data-aos-delay="400">
                                    <div className="count"><span className="odometer" data-count-to="3570"></span>3,570+</div>
                                    <p>Project done</p>
                                </div>
                                {/* Single Counter End */}

                            </div>
                            <div className="col-lg-3 col-sm-6">

                                {/* Single Counter Start */}
                                <div className="single-counter" data-aos="fade-up" data-aos-delay="600">
                                    <div className="count"><span className="odometer" data-count-to="999"></span>999+</div>
                                    <p>Cup of Tea</p>
                                </div>
                                {/* Single Counter End */}

                            </div>
                            <div className="col-lg-3 col-sm-6">

                                {/* Single Counter Start */}
                                <div className="single-counter" data-aos="fade-up" data-aos-delay="500">
                                    <div className="count"><span className="odometer" data-count-to="230"></span>230+</div>
                                    <p>Employes</p>
                                </div>
                                {/* Single Counter End */}

                            </div>
                        </div>

                        {/* Shape Start */}
                        <div className="shape">
                            <img src={Shape2} className="layer" data-speed="0.5" alt="shape"/>
                        </div>
                        {/* Shape End */}
                    </div>
                    {/* Counter Wrapper End */}

                </div>
            </div>
            {/* Counter End */}

            {/* Call To Action Start */}
            <div className="section section-padding-02">
                <div className="container">

                    {/* Call To Action Wrapper Start */}
                    <div className="call-to-action-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-6">

                                {/* Call To Action Content Start */}
                                <div className="call-to-action-content">

                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h5 className="sub-title">FOR BEST SOLUTIONS</h5>
                                        <h2 className="title">Fully <span>Dedicated</span> to find the Best Solutions</h2>
                                    </div>
                                    {/* Section Title End */}
                                    <p>Do you need Business support & Solutions? Send us your details for better solutions. </p>
                                    <a href="#" className="btn btn-primary btn-hover-secondary">Let’s Start</a>
                                </div>
                                {/* Call To Action Content End */}

                            </div>
                            <div className="col-lg-6">

                                {/* Call To Action Content Start */}
                                <div className="call-to-action-image">
                                    <div className="shape-1">
                                        <img src={Shape3} className="layer" data-speed="1" alt="shape"/>
                                    </div>

                                    <img src={Call} alt="Call To Action"/>

                                        <div className="shape-2"></div>
                                </div>
                                {/* Call To Action Content End */}

                            </div>
                        </div>
                    </div>
                    {/* Call To Action Wrapper End */}

                </div>
            </div>
            {/* Call To Action End */}

            {/* Team Start */}
            <div className="section section-padding-02 mt-n1">
                <div className="container">

                    {/* Section Title Start */}
                    <div className="section-title text-center">
                        <h5 className="sub-title">OUR TEAM</h5>
                        <h2 className="title">People Behind <br/> <span>the Screen</span></h2>
                    </div>
                    {/* Section Title End */}

                    {/* Team Wrapper Start */}
                    <div className="team-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">

                                {/* Single Team Start */}
                                <div className="single-team" data-aos="fade-up" data-aos-delay="200">
                                    <div className="team-image">
                                        <img src={Team1} alt="Team"/>
                                            <h4 className="name">Nicolas <br/> Williams</h4>
                                    </div>
                                    <div className="team-content">
                                        <p className="designation">Founder & CEO</p>
                                        <span className="mail"><a href="#">nicolas@busino.com</a></span>
                                    </div>
                                </div>
                                {/* Single Team End */}

                            </div>
                            <div className="col-lg-3 col-sm-6">

                                {/* Single Team Start */}
                                <div className="single-team" data-aos="fade-up" data-aos-delay="400">
                                    <div className="team-image">
                                        <img src={Team2} alt="Team"/>
                                            <h4 className="name">Sharlin <br/> Smith</h4>
                                    </div>
                                    <div className="team-content">
                                        <p className="designation">Creative Head</p>
                                        <span className="mail"><a href="#">sharlin@busino.com</a></span>
                                    </div>
                                </div>
                                {/* Single Team End */}

                            </div>
                            <div className="col-lg-3 col-sm-6">

                                {/* Single Team Start */}
                                <div className="single-team" data-aos="fade-up" data-aos-delay="500">
                                    <div className="team-image">
                                        <img src={Team3} alt="Team"/>
                                            <h4 className="name">Stephen <br/> Flemming</h4>
                                    </div>
                                    <div className="team-content">
                                        <p className="designation">Marketing Head</p>
                                        <span className="mail"><a href="#">stephen@busino.com</a></span>
                                    </div>
                                </div>
                                {/* Single Team End */}

                            </div>
                            <div className="col-lg-3 col-sm-6">

                                {/* Single Team Start */}
                                <div className="single-team" data-aos="fade-up" data-aos-delay="600">
                                    <div className="team-image">
                                        <img src={Team4} alt="Team"/>
                                            <h4 className="name">Thomas <br/> Morgan</h4>
                                    </div>
                                    <div className="team-content">
                                        <p className="designation">HR Head</p>
                                        <span className="mail"><a href="#">thomas@busino.com</a></span>
                                    </div>
                                </div>
                                {/* Single Team End */}

                            </div>
                        </div>
                    </div>
                    {/* Team Wrapper End */}

                </div>
            </div>
            {/* Team End */}

            {/* Brand Start */}
            <div className="section section-padding-02">
                <div className="container">

                    {/* Brand Start */}
                    <div className="brand-active">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide single-brand">
                                    <img className="img1" src={Brand1} alt="Brand"/>
                                    <img className="img1" src={Brand2} alt="Brand"/>
                                    <img className="img1" src={Brand3} alt="Brand"/>
                                    <img className="img1" src={Brand4} alt="Brand"/>
                                    <img className="img1" src={Brand5} alt="Brand"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Brand End */}

                </div>
            </div>
            {/* Brand End */}

            {/* Blog Start */}
            <div className="section section-padding overflow-hidden mb-n1">
                <div className="container">

                    {/* Blog Wrapper Start */}
                    <div className="blog-wrapper blog-active">
                        {/* Shape Start */}
                        <div className="mouse-parallax shape">
                            <img src={Shape1} className="layer" data-speed="1" alt="Shape"/>
                        </div>
                        {/* Shape End */}

                        <div className="row">
                            <div className="col-lg-4 col-md-8">

                                {/* Blog title Wrapper Start */}
                                <div className="blog-title-wrapper">

                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h5 className="sub-title">OUR BLOG POST</h5>
                                        <h2 className="title">Latest Post <span>from Blog</span></h2>
                                    </div>
                                    {/* Section Title End */}

                                    <p>Best is the most porro quisquam est, dolor em are porro quis quam est, qui doloripsum quia dolor sit amet, consectetur</p>

                                    {/* Add Arrows */}
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>

                                </div>
                                {/* Blog title Wrapper End */}

                            </div>
                            <div className="col-lg-8">

                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">

                                            {/* Single Blog Start */}
                                            <div className="single-blog">
                                                <div className="blog-images">
                                                    <a href="blog-details-left-sidebar.html"><img src={Blog1} alt="Blog"/></a>
                                                </div>
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="blog-details-left-sidebar.html">Creative Business Training</a></h3>
                                                    <p>Obtain pain of because is pain, but because you nally circumstances more than some work </p>
                                                </div>
                                            </div>
                                            {/* Single Blog End */}

                                        </div>
                                        <div className="swiper-slide">

                                            {/* Single Blog Start */}
                                            <div className="single-blog">
                                                <div className="blog-images">
                                                    <a href="blog-details-left-sidebar.html"><img src={Blog2} alt="Blog"/></a>
                                                </div>
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="blog-details-left-sidebar.html">Winning Business Deals</a></h3>
                                                    <p>Obtain pain of because is pain, but because you nally circumstances more than some work </p>
                                                </div>
                                            </div>
                                            {/* Single Blog End */}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Blog Wrapper End */}

                </div>
            </div>
            {/* Blog End */}
        </div>
    );
}

export default Home;