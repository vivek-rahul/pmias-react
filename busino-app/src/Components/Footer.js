import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Logo from "../Assets/Images/logo.png";
import "../Assets/Styles/Footer.css";

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='foot '>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3 '>
                        <div className='col-md-3 col-lg-4 col-xl-3  mb-4 mt-5 margin'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img src={Logo} alt="logo"/>
                            </h6>
                            <p className="name">
                                Best is the most porro quisqudolor em are quis quam est, qui doquia dolor sit amcons
                            </p>
                            <p className='name1 fw-bold'>
                                Subscribe our newsletter and get latest update about our offers, promotions
                            </p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Button className="but" variant="primary" type="submit">
                                    Subscribe
                                </Button>
                            </Form>
                        </div>
                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5'>
                            <h5 className='text-uppercase fw-bold mb-4 content '>Service</h5>
                            <p>
                                <a href='#!' className='text'>
                                    Market Research
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    SEO Optimization
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    Amazing Strategy
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    Financial Planning
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    Project Analysis
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    PR & Marketing
                                </a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5'>
                            <h5 className='text-uppercase fw-bold mb-4 content'>Information</h5>
                            <p>
                                <a href='#!' className='text'>
                                    About us
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    Portfolio
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    Login/Register
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    Terms & Conditions
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    Our Blog
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                    Promotions
                                </a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5'>
                            <h5 className='text-uppercase fw-bold mb-4 content'>Contact</h5>
                            <p>
                                <i className='fas fa-home me-3 text'></i> 256 Central Park, East Town South valley, New York
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                <i className='fas fa-envelope me-3'></i>
                                info@example.com
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                <i className='fas fa-phone me-3'></i> +98745 612 325
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text'>
                                <i className='fas fa-print me-3 '></i> + 01 234 567 89
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-6 mx-5 d-none d-lg-block '>
                    <div >
                    <a href='' className='me-4 '>
                        <i className='fab fa-facebook-f  '></i>
                    </a>
                    <a href='' className='me-4'>
                        <i className='fab fa-twitter '></i>
                    </a>
                    <a href='' className='me-4'>
                        <i className='fab fa-google '></i>
                    </a>
                    <a href='' className='me-4'>
                        <i className='fab fa-instagram '></i>
                    </a>
                    <a href='' className='me-4'>
                        <i className='fab fa-linkedin '></i>
                    </a>
                    <a href='' className='me-4'>
                        <i className='fab fa-github '></i>
                    </a>
                </div>
                </div>
            </section>


            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 &nbsp;
                <a className='text-reset fw-bold' href='/'>
                Busino </a>
                made with <i className="fa-solid fa-heart"> </i> &nbsp;by
                <a className='text-reset fw-bold' href='/'>
                    &nbsp;  Gowshika Kirubha Rahul
                </a>
            </div>
        </MDBFooter>
    );
}