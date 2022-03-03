import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { clearTheCart } from '../../../../../fakeDB';
import useProduct from '../../../../../hooks/Product/useProduct';
import useAuth from '../../../../../hooks/useAuth';
import logo from '../../../../../img/logo.jpg'
import './Checkout.css'
import Payment from '../Payment/Payment';




const Checkout = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { totalQuantity, total, carts, } = useProduct({});
    // console.log(totalQuantity, total, carts);
    const { register, handleSubmit, reset } = useForm();
    const [profile, setProfile] = useState([])
    const [loading, setLoading] = useState(true)




    const onSubmit = data => {
        const savedProduct = carts;
        data.order = { savedProduct };
        fetch('http://localhost:5000/orders', {
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


    useEffect(() => {
        axios.get(`https://localhost:5000/addressBook?email=${user.email}`, {
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
            <a href="/home" >
                <img src={logo} style={{
                    margin: '15px 0'
                }} alt="" className='img-fluid' width="200px" height="200px" />
            </a>
            <Container>
                <div className="row">
                    <div className="col-75">
                        <div className="container">
                            <Form onSubmit={handleSubmit((onSubmit))} style={{
                                textAlign: 'start'
                            }} >
                                <div className="row">

                                    <div className="col-50">
                                        <h3>Billing Address</h3>
                                        <Form.Group className="mb-3" controlId="formHorizontalName">
                                            <Form.Label><i class="fa fa-user"></i> Full Name</Form.Label>
                                            <Form.Control required type="name"
                                                placeholder='Name'
                                                {...register("fullName")} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formHorizontalEmail">
                                            <Form.Label><i class="fa fa-envelope"></i> Email</Form.Label>
                                            {user.email && <Form.Control required type="name" value={user.email} {...register("email")} />}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formHorizontalPhone">
                                            <Form.Label><i class="fas fa-phone"></i> Phone</Form.Label>
                                            {<Form.Control required type="name" placeholder='Phone' {...register("phone")} />}
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
                                            <Form.Group className="mb-3 d-none" controlId="formHorizontalZip">
                                                <Form.Label> Status</Form.Label>
                                                <Form.Control required type="n
                                                ame" defaultValue="Pending"{...register("status")} />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
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
