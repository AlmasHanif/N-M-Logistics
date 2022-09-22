import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import styles from './contactNav.module.css'

const ContactNav = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Text>
                    <section className={`${styles.contactLinks} `}>
                        <div className="phone">
                            <i className="fa-solid fa-square-phone"></i>
                            <p>+92-123456789</p>
                        </div>
                        <div className="email">
                            <i className="fa-solid fa-envelope"></i>
                            <p>nm.logistics@gmail.com</p>
                        </div>
                    </section>
                </Navbar.Text>
                <Navbar.Text className="justify-content-end">
                    <Navbar.Text>
                        <div className={`${styles.socialLinks} d-flex justify-content-between`}>
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-square-twitter"></i>
                            <i className="fa-brands fa-square-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </Navbar.Text>
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default ContactNav
