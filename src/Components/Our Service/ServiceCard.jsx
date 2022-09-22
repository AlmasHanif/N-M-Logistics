import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import styles from './ourService.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Btn1 } from '../../Widgets/Buttons/Buttons'



const ServiceCard = () => {


  const { cards } = useSelector(state => state.cardsReducer);

  return (
    <Container className={[styles.OurService]}>
      <Container className={styles.heading}>
        <h1 className='main_heading'>Our Services</h1>
      <hr className='mb-5 w-25 mx-auto' />
      </Container>
      {cards.map((item, ind) => (
        <section
          key={ind}
          data-aos={item.animateCard_1}
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={`${styles.topBox} bg-gray-900 flex justify-center items-center gap-x-16 text-white`}
        >
          <div
            className="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective"
          >
            <div
              className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
            >
              <div className="absolute backface-hidden border-2 w-full h-full">
                <img src={`/images/${item.Pic}`} className="w-full h-full" />
              </div>
              <div
                className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
              >
                <div
                  style={{ backgroundColor: 'var(--object-background-2)' }}
                  className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                >
                  <h1
                    style={{ color: "var(--text-color)" }}
                    className={`${styles.cardHeading} text-3xl font-semibold`}>
                    {item.name}
                  </h1>
                  <br />
                  <p className='font-serif' style={{ color: "var(--text-color)" }}>
                    {item.desc}
                  </p>
                  <Link
                    className="absolute -bottom-12 delay-500 duration-1000 group-hover:bottom-12 scale-0 group-hover:scale-125"
                    style={{
                      textDecoration: "none",
                      color: "#fff"
                    }}
                    to={`service_detail/${item.id}`}>
                    <Btn1 btnName={"Go to Details"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Container>
  )
}

export default ServiceCard
