import React from 'react'
import { FaArrowRight, FaEnvelope, FaPen, FaPhone } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='mt-auto bg-footer'>
            <div className="container">
                <div className="row justify-content-space item-center">
                    <div className="col-md-3 mb-2 title">
                        <div className="footer-column">
                            <h4>service advantages</h4>
                            <h4>deposit</h4>
                            <h4>withdrawwal</h4>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 title">
                        <div className="footer-column">
                            <h4>product advantages</h4>
                            <h6>sports</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolore maxime eius eaque consequatur mollitia, molestias nihil</p>
                            <h6>live casino</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ullam molestias suscipit quos ipsa sit sed, ex voluptates error necessitatibus.</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 title">
                        {/* <div className="footer-column list-column justify-content-center">
                            <h4>info center</h4>
                            <li>
                                <span className='info'>faq</span> <FaArrowRight size={13} className="text-white" />
                            </li>
                            <li>
                                <span className='info'>how to deposite?</span> <FaArrowRight size={13} className="text-white" />
                            </li>
                            <li>
                                <span className='info'>how to withdraw?</span> <FaArrowRight size={13} className="text-white" />
                            </li>
                        </div> */}
                        <div className="row justify-content-center footer-column">
                            <h4>info center</h4>

                            <div className="footer-side">
                                <li>
                                    <span className='info'>faq</span> <FaArrowRight size={13} className="text-white" />
                                </li>
                                <li>
                                    <span className='info'>how to deposite?</span> <FaArrowRight size={13} className="text-white" />
                                </li>
                                <li>
                                    <span className='info'>how to withdraw?</span> <FaArrowRight size={13} className="text-white" />
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 title">
                        <div className="row justify-content-center footer-column">
                            <h4>contact us</h4>
                            <div className="footer-contact">
                                <li><FaPen size={30} className="text-yellow" /> </li>
                               <li><FaEnvelope  size={30} className="text-yellow"/></li>
                               <li><FaPhone size={30} className="text-yellow" /></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary py-2 mt-4"></div>
            </div>
        </footer>
    )
}

export default Footer