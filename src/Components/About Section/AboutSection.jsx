/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import styles from "./about.module.css";

const AboutSection = () => {
  return (

    <div className='container-fluid mt-5' >
      <div className={styles.aboutSection}>
        <div className={styles.opacityBg}>
          <div className={styles.details}>
            <h1 className={styles.h1}>About Us</h1>
            <p className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dicta. Minus accusamus corrupti earum tempore totam, architecto iste eaque quasi sapiente, sequi impedit saepe, obcaecati delectus ipsam ipsa aliquam eius!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
