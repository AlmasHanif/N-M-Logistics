import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider1 from '../Img/Slider1.jpg';
import ReviewSlider from './Testimonials/ReviewSlider'
const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} xs={12}>
          <img src={Slider1} width='100%' height={400} />
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' md={6} xs={12}>
          <h1 className='text-center mt-5 main_heading'>About Us</h1>
          <hr className='mb-5 w-25 mx-auto' />
          <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dolore ad hic minus numquam
            quisquam error distinctio cupiditate quam quis
            nihil voluptates alias nesciunt, earum dicta nostrum
            animi commodi rerum nam.</p>
          <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dolore ad hic minus numquam
            quisquam error distinctio cupiditate quam quis
            nihil voluptates alias nesciunt, earum dicta nostrum
            animi commodi rerum nam.</p><p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolore ad hic minus numquam
              quisquam error distinctio cupiditate quam quis
              nihil voluptates alias nesciunt, earum dicta nostrum
              animi commodi rerum nam.</p>
        </Col>
        <Col>
          <ReviewSlider />
        </Col>
      </Row>
    </Container>

  )
}

export default About
