import React from 'react'
import './Newsletter.css'
import { Link } from 'react-router-dom'


const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="newsletter-content">
                            <i className="fas fa-envelope"></i>
                            <h4>NEWSLETTER</h4>
                            <form className="d-flex" className='searchBox'>
                                <input className="form-control me-2" type="search" placeholder="Search for Product & Brand..." aria-label="Search" />
                                <i className="fas fa-check" type="submit"></i>
                            </form>
                        </div>
                        <p>To see how we process your data view our <Link to="/">Privacy Policy</Link> </p>
                    </div>
                    <div className="col-md-6">
                        <div className="newsletter-content">
                            <h5>FOLLOW US</h5>
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-pinterest-p"></i></Link>
                            <Link to="/"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
