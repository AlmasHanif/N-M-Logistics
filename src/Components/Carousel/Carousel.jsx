import React from "react";
import Slider from "react-slick";
import styles from './carousel.module.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Btn3, Btn4 } from "../../Widgets/Buttons/Buttons";
import { Link } from "react-router-dom";
// import shipImg from '../../Img/Slider1.jpg'
// import planeImg from '../../Img/Slider2.jpg'
// import truckImg from '../../Img/Slider3.jpg'

const Carousel = () => {

    // Custom Arrow
    const NextArrow = ({ onClick }) => (
        <IoIosArrowForward
            className={`${styles.slickArrows} ${styles.slickNext}`}
            onClick={onClick} />
    );

    const PrevArrow = ({ onClick }) => (
        <IoIosArrowBack
            className={`${styles.slickArrows} ${styles.slickPrev}`}
            onClick={onClick} />
    );


    // Carousel Settings
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        fade: true,
        lazyLoad: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <Slider className={`${styles.sliderBox}`} {...settings}>

            <div className={`${styles.slideItem} ${styles.slide1}`}>
                <div className={styles.opacityBg}>
                    <h1>By Ship</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className={`${styles.btnDiv} container animate__animated animate__backInUp`}>
                        <Link to={'/contact'} ><Btn4 btnName={'Contact Us'} /></Link>
                        <Link to={'/service'} ><Btn4 btnName={'Our Service'} /></Link>
                    </div>
                </div>
            </div>
            <div className={`${styles.slideItem} ${styles.slide2}`}>
            <div className={styles.opacityBg}>
                <h1>By Road</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className={`${styles.btnDiv} container animate__animated animate__backInUp`}>
                    <Link to={'/contact'} ><Btn4 btnName={'Contact Us'} /></Link>
                    <Link to={'/service'} ><Btn4 btnName={'Our Service'} /></Link>
                </div>
            </div>
            </div>
            <div className={`${styles.slideItem} ${styles.slide3}`}>
            <div className={styles.opacityBg}>
                <h1>By Air</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className={`${styles.btnDiv} container animate__animated animate__backInUp`}>
                    <Link to={'/contact'} ><Btn4 btnName={'Contact Us'} /></Link>
                    <Link to={'/service'} ><Btn4 btnName={'Our Service'} /></Link>
                </div>
                </div>
            </div>
        </Slider>
    )
}

export default Carousel
