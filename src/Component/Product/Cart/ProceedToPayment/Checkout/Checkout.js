import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { clearTheCart, getStoredCart } from '../../../../../fakeDB';
import useAuth from '../../../../../hooks/useAuth';
import logo from '../../../../../img/logo.jpg'
import './Checkout.css'


const Checkout = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const savedCart = getStoredCart()
        data.order = savedCart
        fetch('https://immense-spire-59977.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Processed Successfully')
                    clearTheCart()
                    reset()
                    navigate('/')
                }
            })
    }

    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`http://localhost:5000/addressBook?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => {
                setProfile(data.data)
                setLoading(false)
            });
    }, [user.email])


    return (

        <div className='checkout'>
            <Link to="/home" >
                <img src={logo} style={{
                    margin: '15px 0'
                }} alt="" className='img-fluid' width="200px" height="200px" />
            </Link>
            <Container>
                <div className="row">
                    <div className="col-75">
                        <div className="container">
                            <Form onSubmit={handleSubmit((onSubmit))} style={{
                                textAlign: 'start'
                            }} >
                                <div className="row">
                                    {profile.map(billingAddress => <div
                                        key={billingAddress._id}
                                        billingAddress={billingAddress}
                                    >
                                        <div className="col-50">
                                            <h3>Billing Address</h3>
                                            <Form.Group className="mb-3" controlId="formHorizontalName">
                                                <Form.Label><i class="fa fa-user"></i> Full Name</Form.Label>
                                                <Form.Control required type="name"
                                                    defaultValue={billingAddress.name}
                                                    {...register("fullName")} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label><i class="fa fa-envelope"></i> Email</Form.Label>
                                                {user.email && <Form.Control required type="name" value={user.email} {...register("email")} />}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formHorizontalPhone">
                                                <Form.Label><i class="fas fa-phone"></i> Phone</Form.Label>
                                                {billingAddress.phone && <Form.Control required type="name" defaultValue={billingAddress.phone} {...register("phone")} />}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formHorizontalAddress">
                                                <Form.Label><i className="fa fa-address-card-o"></i> Address</Form.Label>
                                                <Form.Control required type="name" placeholder="542 W. 15th Street" {...register("address")} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formHorizontalCity">
                                                <Form.Label><i className="fa fa-institution"></i> City</Form.Label>
                                                <Form.Control required type="name" placeholder="New York" {...register("city")} />
                                            </Form.Group>


                                            <div className="row">
                                                <div className="col-50">
                                                    <Form.Group className="mb-3" controlId="formHorizontalState">
                                                        <Form.Label> State</Form.Label>
                                                        <Form.Control required type="name" placeholder="NY"{...register("state")} />
                                                    </Form.Group>

                                                </div>
                                                <div className="col-50">
                                                    <Form.Group className="mb-3" controlId="formHorizontalZip">
                                                        <Form.Label> Zip</Form.Label>
                                                        <Form.Control required type="name" placeholder="10001"{...register("Zip")} />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)}

                                    <div className="col-50">
                                        <h3>Payment</h3>
                                        <label for="fname">Accepted Cards</label>
                                        <div className="icon-container">
                                            <i className="fa fa-cc-visa" style={{
                                                color: 'navy'
                                            }}></i>
                                            <i className="fa fa-cc-amex" style={{
                                                color: 'blue'
                                            }}></i>
                                            <i className="fa fa-cc-mastercard" style={{
                                                color: 'red'
                                            }}></i>
                                            <i className="fa fa-cc-discover" style={{
                                                color: 'orange'
                                            }}></i>
                                        </div>
                                        <Form.Group className="mb-3" controlId="formHorizontalCardName">
                                            <Form.Label> Name on Card</Form.Label>
                                            <Form.Control required type="name" placeholder="John More Doe"{...register("cardName")} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formHorizontalCardNumber">
                                            <Form.Label> Credit card number</Form.Label>
                                            <Form.Control required type="name" placeholder="1111-2222-3333-4444"{...register("carNumber")} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formHorizontalExpMont">
                                            <Form.Label>Exp Month</Form.Label>
                                            <Form.Control required type="name" placeholder="September"{...register("expMonth")} />
                                        </Form.Group>

                                        <div className="row">
                                            <div className="col-50">
                                                <Form.Group className="mb-3" controlId="formHorizontalExpYear">
                                                    <Form.Label> Exp Year</Form.Label>
                                                    <Form.Control required type="name" placeholder="2024"{...register("expYear")} />
                                                </Form.Group>
                                            </div>
                                            <div className="col-50">
                                                <Form.Group className="mb-3" controlId="formHorizontalCVV">
                                                    <Form.Label> 352</Form.Label>
                                                    <Form.Control required type="name" placeholder="352"{...register("CVV")} />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <label>
                                    <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                                </label>
                                <input type="submit" value="Continue to checkout" className="btn" />
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Checkout;