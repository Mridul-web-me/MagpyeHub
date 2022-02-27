
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import useProduct from '../../../../../hooks/Product/useProduct';
import useAuth from '../../../../../hooks/useAuth';
import MultiStepForm from '../../../../Header/YourAccount/Admin/MultiStepForm/MultiStepForm';
import CartPaymentProduct from '../CartPaymentProduct/CartPaymentProduct';

const Payment = () => {
    const { totalQuantity, total, carts, } = useProduct({});

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const { user } = useAuth()
    const history = useNavigate()
    const [checkout, setCheckout] = useState(false)

    async function handleToken(token, addresses) {
        const response = await axios.post(
            "http://localhost:5000/create-payment-intent",
            { token, carts }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({ total })
    //     })
    //         .then(res => res.json())
    //         .then(data => setClientSecret(data.clientSecret))
    // }, [total])
    // const handleSubmit = async (e) => {

    //     e.preventDefault();

    //     if (!stripe || !elements) {
    //         return;
    //     }

    //     const card = elements.getElement(CardElement);

    //     if (card === null) {
    //         return;
    //     }
    //     setProcessing(true)
    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card
    //     });

    //     if (error) {
    //         setError(error.message);
    //         setSuccess('')
    //     } else {
    //         setError('');
    //         console.log(paymentMethod);

    //     }

    return (
        <div>
            <div className="container">
                <div className="product">
                    <h1>{ }</h1>
                    <h3>On Sale · £{total}</h3>
                </div>
                <StripeCheckout
                    stripeKey="pk_test_51KUuQEJYFu4RGWvKjw2LK5rIC9EAnyTQHbmzGNgGnb0XcOvh36utplRWpUtsK2EJAJEw0YExvwQxLNSv7hY3qdPh00BNUN9m3S"
                    amount={total * 100}
                    token={handleToken}
                    billingAddress
                    onSubmit={handleToken}
                    shippingAddress
                />
            </div>
        </div>
    )
}

export default Payment