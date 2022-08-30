function NavBar() {
    return (
        <div id="navigation" className="header-main">
            <div className="container">
                <div className="row align-items-right">
                    <div className="col-lg-3 col-6">
                        <div className="desktop-logo">
                            <a href="!#"><img src="assets/images/logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-lg-9 col-6">
                        <div className="nav-toggle"></div>
                        <div className="nav-menus-wrapper">
                            <div className="mobile-logo">
                                <a href="!#"><img src="assets/images/logo-white.png" alt="" /></a>
                            </div>
                            <ul className="nav-menu">
                                <li><a className="active" href="!#">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li>
                                    <a href="!#">Services</a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="service.html">Services </a></li>
                                        <li><a href="service-single.html">Services Single </a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="!#">Portfolio</a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="portfolio.html">Portfolio </a></li>
                                        <li><a href="portfolio-details.html">Portfolio Details </a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="!#">Blog</a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="blog-grid.html">Blog Grid </a></li>
                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar </a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar </a></li>
                                        <li><a href="blog-details-left-sidebar.html">Blog Left Details </a></li>
                                        <li><a href="blog-details-right-sidebar.html">Blog Right Details </a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavBar