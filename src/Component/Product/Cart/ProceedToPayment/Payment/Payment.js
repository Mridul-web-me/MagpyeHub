
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { clearTheCart } from '../../../../../fakeDB';
import useProduct from '../../../../../hooks/Product/useProduct';
import useAuth from '../../../../../hooks/useAuth';


const Payment = ({ address: clientAddress }) => {
    const { totalQuantity, total, carts, } = useProduct({});
    const [profile, setProfile] = useState([])
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const { user } = useAuth()
    const navigate = useNavigate()
    const { register, reset } = useForm();
    const { displayName, email, zip, state, city, phone, address, address1 } = clientAddress
    // console.log(displayName)

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [total]);


    const handleSubmit = async (data) => {
        data.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            console.log(paymentMethod);
        }

        // Payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: useAuth.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message)
            setSuccess('')
            setProcessing(false)
        }
        else {
            setError('')
            console.log(paymentIntent)
            setSuccess('Your Payment Processed Successfully')
            setProcessing(false)
        }
        const blogInfo = {
            fullName: displayName,
            email: email,
            address: address,
            address1: address1,
            phone: phone,
            city: city,
            zip: zip,
            state: state,
            order: carts,
            ProductUpdate: data.ProductUpdate,
            author: data.author,
            publishDate: new Date().toLocaleDateString(),
            status: "Pending",
            expense: data.expense
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (!clientSecret || intentError) {
                    return;
                }
                else {
                    alert('Order Processed Successfully')
                    clearTheCart()
                    reset()
                }
            })
    }

    return (
        <div>
            <div className="container">
                <div className="product">
                    <h3>On Sale · £{total}</h3>
                </div>
                {/* <StripeCheckout
                    stripeKey="pk_test_51KUuQEJYFu4RGWvKjw2LK5rIC9EAnyTQHbmzGNgGnb0XcOvh36utplRWpUtsK2EJAJEw0YExvwQxLNSv7hY3qdPh00BNUN9m3S"
                    amount={total * 100}
                    token={handleToken}
                    billingAddress
                    onSubmit={handleToken}
                    shippingAddress
                /> */}
                <form onSubmit={handleSubmit}>
                    {/* <div className="row">

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
                    </div> */}
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    {processing ? <div><Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="info" /></div> : <Button variant='outline-success' type="submit" disabled={!stripe || success}>
                        Pay ${total}
                    </Button>}
                </form>
                {
                    error && <p style={{ color: 'red' }}>{error}</p>
                }
                {
                    success && <p style={{ color: 'green' }}>{success}</p>
                }
            </div>
        </div>
    )
}

export default Payment