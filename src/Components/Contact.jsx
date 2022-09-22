import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import about_img from '../Img/about_img.jpg';
import Map from './Map Section/Map';
import styles from "../Components/About Section/about.module.css";
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
  
       <Container fluid>
      <Row>
        <Col md={12} xs={12}>
          <img src={about_img} width='100%' height={400} />
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12}>
          {/* Contact Form */}
          <ContactForm />
        <hr  className='mb-5 w-75 mx-auto' />
        </Col>
        <Col className='mx-auto' md={10} xs={12}>
        <Map />
        </Col>
      </Row>
    </Container>

  )
}

export default Contact
