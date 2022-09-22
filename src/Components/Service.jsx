import React from 'react'
import styles from './service.module.css'
import ServiceImg from '../Img/Warehouse 1.jpg'
import { Btn2 } from '../Widgets/Buttons/Buttons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'

const Service = () => {

  const { cards } = useSelector(state => state.cardsReducer);

  return (
    <section className='serviceCmpnt'>
      <aside
        className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-xl mx-auto text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
              tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
              fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
              duis.
            </p>

            <div className="mt-4 md:mt-8">
              <Btn2 btnName={"Get Started Today"} />
            </div>
          </div>
        </div>
        <img
          alt="img"
          src={ServiceImg}
          className="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
          style={{ height: "100%" }}
        />
      </aside>
      <br />
      <Container>
        <Row>
          {cards.map((item, ind) => (
            <Col md={6}
              data-aos={item.animateCard_2}
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <section
                className={`${styles.cardCmpnt} block overflow-hidden border border-gray-100 rounded-lg shadow-sm`}>
                <img
                  className="object-cover w-full h-full"
                  src={`/images/${item.Pic}`}
                  alt="" />

                <div className="p-6">
                  <h5 className="text-xl font-bold">
                    {item.name}
                  </h5>

                  <p className="mt-2 text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <div
                    className="inline-block pb-1 mt-4 font-medium text-blue-600 ">
                    <button className={`${styles.detailsBtn}`}>
                      <Link
                        to={`/service_detail/${item.id}`}>Go To Details <FaArrowRight /></Link>
                    </button>
                  </div>
                </div>
              </section>

            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Service
