import React from 'react';
import "../Assets/Styles/Contact.css";

function Contact(props) {
    return (
        <div>
            <div className="section page-banner-section">
                <div className="container">

                    {/* Page Banner Start */}
                    <div className="page-banner">
                        <h2 className="title"><span>Contact Us</span></h2>
                    </div>
                    {/* Page Banner End */}

                </div>
            </div>
            {/* Page Banner End */}

            {/* Contact Start */}
            <div className="section section-padding mt-n10">
                <div className="container">

                    <div className="row gx-10 align-items-center">
                        <div className="col-lg-5">

                            {/* Contact Info Start */}
                            <div className="contact-info">
                                <div className="contact-info-wrapper">
                                    <h4 className="title">Contact Info</h4>

                                    <div className="single-contact-info">
                                        <h6 className="info-title">Address</h6>
                                        <p>256 Central Park, East Town <br/> South valley, New York</p>
                                    </div>

                                    <div className="single-contact-info">
                                        <h6 className="info-title">Phone</h6>
                                        <p><a href="#">+12365 789 541</a></p>
                                        <p><a href="#">+98745 258 741</a></p>
                                    </div>

                                    <div className="single-contact-info">
                                        <h6 className="info-title">Web</h6>
                                        <p><a href="#">info@example.com</a></p>
                                        <p><a href="#">www.example.com</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* Contact Info End */}

                        </div>
                        <div className="col-lg-7">

                            {/* Contact Form Start */}
                            <div className="contact-form">
                                <h4 className="contact-title">Leave a Message</h4>

                                <div className="form-wrapper">
                                    <form id="contact-form"
                                          action="https://htmlmail.hasthemes.com/humayun/busino-contact.php"
                                          method="post">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                {/* Single Form Start */}
                                                <div className="single-form">
                                                    <input type="text" name="name" placeholder="Name*"/>
                                                </div>
                                                {/* Single Form End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* Single Form Start */}
                                                <div className="single-form">
                                                    <input type="text" name="email" placeholder="Email*"/>
                                                </div>
                                                {/* Single Form End */}
                                            </div>
                                            <div className="col-lg-4">
                                                {/* Single Form Start */}
                                                <div className="single-form">
                                                    <input type="text" name="subject" placeholder="Subject*"/>
                                                </div>
                                                {/* Single Form End */}
                                            </div>
                                            <div className="col-lg-12">
                                                {/* Single Form Start */}
                                                <div className="single-form">
                                                    <textarea placeholder="Message*" name="message"></textarea>
                                                </div>
                                                {/* Single Form End */}
                                            </div>
                                            <p className="form-message"></p>
                                            <div className="col-lg-12">
                                                {/* Single Form Start */}
                                                <div className="single-form">
                                                    <button className="btn1 btn1-primary">Post
                                                        Comment
                                                    </button>
                                                </div>
                                                {/* Single Form End */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Contact Form End */}

                        </div>
                    </div>

                </div>
            </div>
            {/* Contact End */}

            {/*Contact Map Start*/}
            <div className="contact-map">
                <iframe id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
            </div>
            {/*Contact Map End*/}

        </div>
    );
}

export default Contact;