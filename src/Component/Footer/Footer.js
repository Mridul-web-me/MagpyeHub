import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    let mridul = 'https://mridul-web.netlify.app'
    return (
        <div className='footer'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-4">
                        <h5>HELP & SUPPORT</h5>
                        <li><Link to="/">Request Appointment</Link></li>
                        <li><Link to="/">Get In Touch</Link></li>
                        <li><Link to="/">Request a Callback</Link></li>
                        <li><Link to="/">Help Centre</Link></li>
                        <li><Link to="/">Site Map</Link></li>
                        <li><Link to="/">Covid-19 Update</Link></li>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <h5>PRODUCTS</h5>
                        <li><Link to="">Store & Warehouse Locator</Link></li>
                        <li><Link to="">Delivery & Collect-In-Warehouse</Link></li>
                        <li><Link to="">Returns & Refunds</Link></li>
                        <li><Link to="">Buyer Guides</Link></li>
                        <li><Link to="">Ask For A Quote</Link></li>
                        <li><Link to="">Redeem Your Quote</Link></li>
                    </div>
                    <div className="col-md-2 col-sm-4">
                        <h5>SERVICES</h5>
                        <li><Link to="">Price Match</Link></li>
                        <li><Link to="">Payment Options</Link></li>
                        <li><Link to="">Track Your Order</Link></li>
                        <li><Link to="">Customer Reviews</Link></li>
                        <li><Link to="">Personal Consultation</Link></li>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5>ABOUT</h5>
                        <li><Link to="">About Us</Link></li>
                        <li><Link to="">Terms & Conditions</Link></li>
                        <li><Link to="">Cookie Policy</Link></li>
                        <li><Link to="">Privacy Policy</Link></li>
                        <li><Link to="">BabyBaby Society</Link></li>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>CONTACT US</h5>
                        <li><Link to="">Mon - Sat: 9am - 5pm</Link></li>
                        <li><Link to="">Sun: Closed</Link></li>
                        <li><Link to="">E: info@magpyehub.com</Link></li>
                        <li><Link to="">T: 0800 1 223 023</Link></li>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <p> <i class="far fa-copyright"></i>2022 magpyehub.com All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Created By <a href={mridul} target="_blank">Mridul</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
