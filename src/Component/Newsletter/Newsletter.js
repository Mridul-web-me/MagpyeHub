import React from 'react'
import './Newsletter.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useForm } from 'react-hook-form';


const Newsletter = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        // console.log('clicked');
        axios.post('https://immense-spire-59977.herokuapp.com/newsLater', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Email Added Successfully')
                    reset()
                }

            })
    }
    return (
        <div className='newsletter'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="newsletter-content">
                            <i className="fas fa-envelope"></i>
                            <h4>NEWSLETTER</h4>
                            {/* <form className="d-flex" className='searchBox'>
                                <input className="form-control me-2" type="search" placeholder="Search for Product & Brand..." aria-label="Search" />
                                <i className="fas fa-check" type="submit"></i>
                            </form> */}
                            <form className='searchBox' onSubmit={handleSubmit((onSubmit))}>
                                <input className="form-control me-2"  {...register("email")} placeholder="Email Address..." />
                                <button style={{ display: 'contents' }}> <i className="fas fa-check" ></i></button>

                            </form>
                        </div>
                        <p>To see how we process your data view our <Link to="/">Privacy Policy</Link> </p>
                    </div>
                    <div className="col-md-6">
                        <div className="newsletter-content2">
                            <h4>FOLLOW US</h4>
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
