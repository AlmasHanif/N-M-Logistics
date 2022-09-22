import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { card } = useSelector(state => state.cardsReducer);

  useEffect(() => {
    dispatch({ type: 'PRODUCT', id })
  }, [id])

  return (
    <Container fluid>
      <div>
        <Row>
          <img src={`/images/${card.Pic}`} alt="" width="100%" height={400} />
        </Row>
        <Row>
          <Col className='mx-auto' md={2} xs={12}>
            <h1 className='mt-4 text-center'>{card.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col className='mx-auto' md={6} xs={12}>
            <p className='text-center'>{card.desc}</p>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default ServiceDetail
