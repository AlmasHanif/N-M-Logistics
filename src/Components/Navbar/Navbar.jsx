import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";

import Logo from '../../Img/Logo.png'
import ContactNav from './ContactNav';
const Navb = () => {
    return (

        <>

            <ContactNav />

            <Navbar bg="light" expand="lg" className='h-100' sticky="top">
                <Container>
                    <Navbar.Brand><img src={Logo} className={styles.Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className=''>
                            <Nav.Link className=''>
                                <Link to="/" className={styles.Link}>
                                    Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link className=''>
                                <Link to="/service" className={styles.Link}>
                                    Service
                                </Link>
                            </Nav.Link>

                            <Nav.Link className=''>
                                <Link to="/about" className={styles.Link}>
                                    About Us
                                </Link>
                            </Nav.Link>

                            <Nav.Link className=''>
                                <Link to="/contact" className={styles.Link}>
                                    Contact
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>

    )
}

export default Navb
