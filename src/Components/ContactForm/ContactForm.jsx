import React from 'react'
import './contactForm.css'

const ContactForm = () => {
    return (
        <section className="contact-form">
            <div className="contact content-area-5">
                <div className="container">
                    {/* <!-- Main title --> */}
                    <div className="main-title text-center">
                        <h1 className='main_heading'>Get In Touch</h1>
                        <hr className='mb-2 w-25 mx-auto' />
                        <p>We are always Here <span className="for-u">4U</span></p>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group name">
                                            <input type="text" className="form-control" placeholder="Name" aria-label="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group email">
                                            <input type="email" className="form-control" placeholder="Email" aria-label="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group subject">
                                            <input type="text" className="form-control" placeholder="Subject" aria-label="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group number">
                                            <input type="text" className="form-control" placeholder="Phone" aria-label="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group message">
                                            <textarea className="form-control" placeholder="Tell us Your Experience" aria-label="Write message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send-btn text-center">
                                            <button className="submit-btn btn-5">Send Message <i className="far fa-paper-plane"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="contact-info-2">
                                    <div className="ci-box">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="detail">
                                            <h5>Phone:</h5>
                                            <p><a href='tel:+92-0000000000'>+92-0000000000</a></p>
                                        </div>
                                    </div>
                                    <div className="ci-box">
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="detail">
                                            <h5>Email:</h5>
                                            <p><a href="mailto: nm.logistics@gmail.com">nm.logistics@gmail.com</a></p>
                                        </div>
                                    </div>
                                    <div className="ci-box">
                                        <div className="icon">
                                            <i className="fas fa-globe"></i>
                                        </div>
                                        <div className="detail">
                                            <h5>Web:</h5>
                                            <p><a href="/">nm-logistics.web.app</a></p>
                                        </div>
                                    </div>
                                    <div className="ci-box mb-0">
                                        <div className="icon">
                                            <i className="fas fa-map-marked-alt"></i>
                                        </div>
                                        <div className="detail">
                                            <h5>Adress:</h5>
                                            <p><a>Near Star Uniform Corner, Mithadar, Karachi</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default ContactForm
