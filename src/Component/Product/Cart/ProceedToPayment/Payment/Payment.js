
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useProduct from '../../../../../hooks/Product/useProduct';
import useAuth from '../../../../../hooks/useAuth';
import CartPaymentProduct from '../CartPaymentProduct/CartPaymentProduct';

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const { user } = useAuth()
    const history = useNavigate()
    const { totalQuantity, total, carts, } = useProduct({});
    const [checkout, setCheckout] = useState(false)


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [total])
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('')
        } else {
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
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        }
        else {
            setError('')
            setSuccess('Your Payment Processed Successfully')
            console.log(paymentIntent)
            setProcessing(false)
            history('/checkout')
        }
    };

    return (
        <div>
            <div class="col-25">
                <div class="container">
                    <h4>Cart
                        <span class="price" tyle={{
                            color: 'black'
                        }}>
                            <i class="fa fa-shopping-cart"></i>
                            <b>{totalQuantity}</b>
                        </span>
                    </h4>
                    {
                        carts.map(cart => <CartPaymentProduct
                            key={cart._id}
                            cart={cart}
                        >

                        </CartPaymentProduct>)
                    }
                    <p>Total <span class="price" style={{
                        color: 'black'
                    }}><b>{total}</b></span></p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
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
                {processing ? <Spinner animation="grow" variant="info" /> : <Button variant="outline-primary" type="submit" disabled={!stripe}>
                    Pay {total}
                </Button>}
            </form>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'Green' }}>{success}</p>
            }
            <p>

            </p>
        </div>
    )
}

export default Payment