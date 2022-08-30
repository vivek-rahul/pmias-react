// import logo from '../images/logo.png'

function Footer() {
    return (
        <div className="section footer-section">
            <div className="footer-widget-section section-padding mt-n10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className="footer-widget" data-aos="fade-up" data-aos-delay="200">
                                {/* <a href="!#"><img src="assets/images/logo.png" alt="Logo" /></a> */}
                                <p>Best is the most porro quisqudolor em are quis quam est, qui doquia dolor sit amcons</p>
                                <p className="widget-text">Subscribe our newsletter and get latest update about our offers,
                                    promotions</p>
                                <div className="widget-subscribe">
                                    <form action="#">
                                        <input type="text" placeholder="Enter your email" />
                                        <button className="btn btn-hover-primary">Subscribe</button>
                                    </form>
                                </div>
                                <div className="widget-social">
                                    <a href="!#"><i className="fa fa-facebook-f"></i></a>
                                    <a href="!#"><i className="fa fa-twitter"></i></a>
                                    <a href="!#"><i className="fa fa-instagram"></i></a>
                                    <a href="!#"><i className="fa fa-google-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-7">
                            <div className="footer-widget-link">
                                <div className="footer-widget" data-aos="fade-up" data-aos-delay="400">
                                    <h5 className="footer-widget-title">Service</h5>
                                    <ul className="footer-link">
                                        <li><a href="!#">Research paper publications</a></li>
                                        <li><a href="!#">Awards nomination</a></li>
                                        <li><a href="!#">International workshops</a></li>
                                        <li><a href="!#">Special lectures</a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget" data-aos="fade-up" data-aos-delay="500">
                                    <h5 className="footer-widget-title">Information</h5>
                                    <ul className="footer-link">
                                        <li><a href="!#">About us</a></li>
                                        <li><a href="!#">Portfolio</a></li>
                                        <li><a href="!#">Login/Register</a></li>
                                        <li><a href="!#">Terms &amp; Conditions</a></li>
                                        <li><a href="!#">Promotions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6">
                            <div className="footer-widget" data-aos="fade-up" data-aos-delay="600">
                                <h5 className="footer-widget-title">Service</h5>
                                <div className="widget-info">
                                    <p>12, Kavin Illam, Bharathi Nagar, Trichy</p>
                                </div>
                                <div className="widget-info">
                                    <p><a href="!#">+12345 687 856</a></p>
                                    <p><a href="!#">+98745 612 325</a></p>
                                </div>
                                <div className="widget-info">
                                    <p><a href="!#">info@pm-ias.com</a></p>
                                    <p><a href="!#">www.pm-ias.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="copyright-text">
                        <p>&copy; 2021 <span> PM-IAS </span> Made with <i className="fa fa-heart" aria-hidden="true"></i> by <a
                            href="/index.html" target="_blank">Vivek</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
