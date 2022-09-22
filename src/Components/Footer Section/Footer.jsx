import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={`${styles.footer} relative pt-8 pb-6 `}>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className={`${styles.iconDiv} mt-6 lg:mb-0 mb-6`}>
                            <FaFacebook className={styles.socialIcon} />
                            <FaInstagram className={styles.socialIcon} />
                            <FaTwitter className={styles.socialIcon} />
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link style={{ textDecoration: 'none' }} to={'/'}>
                                            <a className={`${styles.Link} text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm`} href="https://www.creative-tim.com/presentation?ref=njs-profile">Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ textDecoration: 'none' }} to={'/about'}>
                                            <a className={`${styles.Link} text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm`} href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ textDecoration: 'none' }} to={'/contact'}>
                                            <a className={`${styles.Link} text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm`} href="https://www.creative-tim.com/presentation?ref=njs-profile">Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ textDecoration: 'none' }} to={'/service'}>
                                            <a className={`${styles.Link} text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm`} href="https://www.creative-tim.com/presentation?ref=njs-profile">Our Services</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contact Info</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="mailto:nm.logistics@gmail.com">nm.logistics@gmail.com</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="tel:021-34380525">021-34380525</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span>2022</span><a href="https://nm-logistics.web.app" style={{ textDecoration: 'none' }} className="hover:text-gray-800" target="_blank"> Nm-Logistics</a> Agency <br /> All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer