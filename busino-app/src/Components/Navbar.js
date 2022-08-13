import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import Logo from '../Assets/Images/logo.png'
import '../Assets/Styles/Navbar.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import Signup from "../Components/Signup";

export default function Navbar() {

    const [showNavColorThird, setShowNavColorThird] = useState(false);


    return (
           <>
            <MDBNavbar  className="naving" expand='lg'  light style={{ backgroundColor: 'white' }} >
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'><img src={Logo} alt="logo"/></MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorThird(!showNavColorThird)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorThird} navbar>
                        <MDBNavbarNav className='justify-content-end justify-content-evenly item mt-5 mb-5' >
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink className="text" aria-current='page' href='/home' >
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className="text" href='/about'>About</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className="text" href='/services'>Services</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className="text" href='/gallery'>Gallery</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className="text" href='/contact'>Contact</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                 <MDBBtn className="mt-2"  href="/register" onClick={Signup}>Signup</MDBBtn>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
          </>
    );
}

