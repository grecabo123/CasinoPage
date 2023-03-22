import React from 'react'
import { Divider } from 'primereact/divider'
import { ProgressBar } from 'primereact/progressbar';

import { FaArrowRight, FaEnvelope, FaMailBulk, FaPen, FaPhone } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='mt-auto bg-footer'>
            <div className="container">
                <div className="row justify-content-space item-center">
                    <div className="col-lg-3 col-md-12 col-sm- mb-2 title">
                        <div className="footer-column">
                            <h4>service advantages</h4>
                            <div className='service'>
                                <div className='depo'>
                                <h4>deposit</h4>
                                </div>
                                <div className="d-flex justify-content-between top-move">
                                    <span className='text-secondary'>average time</span>
                                    <span className='num'>3 <span className='text-mins'>mins</span></span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className='service'>
                                <div className="depo">
                                <h4>withdrawal</h4>
                                </div>
                                <div className="d-flex justify-content-between top-move">
                                    <span className='text-secondary'>average time</span>
                                    <span className='num'>20 <span className='text-mins'>mins</span></span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-2 title">
                        <div className="footer-column">
                            <h4>product advantages</h4>
                            <h6>sports</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolore maxime eius eaque consequatur mollitia, molestias nihil</p>
                            <h6>live casino</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ullam molestias suscipit quos ipsa sit sed, ex voluptates error necessitatibus.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-2 title">
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
                    <div className="col-lg-3 col-md-12 mb-2 title">
                        <div className="row justify-content-center footer-column">
                            <h4>contact us</h4>
                            <div className="footer-contact">
                                <li><FaPen size={30} className='text-yellow' />
                                    <div className="list-info">
                                        <li><span>live chat</span></li>
                                        <li><a href='/'>click here</a></li>
                                    </div>
                                </li>
                                <li><FaMailBulk size={30} className='text-yellow' />
                                    <div className="list-info">
                                        <li><span>mail</span></li>
                                        <li><small>mail@onlinecasion.com</small></li>
                                    </div>
                                </li>
                                <li><FaPhone size={30} className='text-yellow' />
                                    <div className="list-info">
                                        <li><span>hotline</span></li>
                                        <li><small>(+12) 123-456-7890</small></li>
                                    </div>
                                </li>


                                {/* <li><FaEnvelope size={20} className="text-yellow" /></li>
                                <li><FaPhone size={20} className="text-yellow" /></li> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary py-2 mt-4"></div>
                {/* <div className="border-btm"> */}
                <div class="d-flex justify-content-between mt-2 align-text">
                    <div>
                        <div className="footer-list">
                            <li className='me-3'><span>about us</span></li>
                            <li className='me-3'><span>responsible gaming</span></li>
                            <li className='me-3'><span>info centre</span></li>
                            <li className='me-3'><span>contact us</span></li>
                            <li className='me-3'><span>affiliates</span></li>
                        </div>
                    </div>
                    <div className='copyright'>
                        <span>© 2018 Casino All rights reseved | 18+</span>
                    </div>
                </div>
                {/* </div> */}
                <div className="border-btm"></div>

                <div className="mt-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <h5 className='footer-info'>information</h5>
                            <div className="box-border-btm"></div>
                            <div className="information-list">
                                <div>
                                    <li><h5>registration</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                                <div>
                                    <li><h5>affiliates</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                                <div>
                                    <li><h5>responsible gaming</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <h5 className='footer-info'>products</h5>
                            <div className="box-border-btm"></div>
                            <div className="information-list">
                                <div>
                                    <li><h5>sports betting & live betting</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                                <div>
                                    <li><h5>online casino</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                                <div>
                                    <li><h5>live casino</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <h5 className='footer-info'>info center</h5>
                            <div className="box-border-btm"></div>
                            <div className="information-list">
                                <div>
                                    <li><h5>promotion</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                                <div>
                                    <li><h5>help centre</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                                <div>
                                    <li><h5>payment methods</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <h5 className='footer-info'>betting info</h5>
                            <div className="box-border-btm"></div>
                            <div className="information-list">
                                <div>
                                    <li><h5>sports results</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                                <div>
                                    <li><h5>betting statistics</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                                <div>
                                    <li><h5>sport betting</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                                <div>
                                    <li><h5>casino betting</h5></li>
                                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste voluptatum labore earum dicta voluptatem omnis quam eaque itaque enim aperiam, tempora id accusamus in iusto quia eum sunt unde.</p></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer