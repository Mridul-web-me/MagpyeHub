import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from 'react-router-dom'
import { clearTheCart } from '../../../../../../fakeDB'
import useProduct from '../../../../../../hooks/Product/useProduct'
import useAuth from '../../../../../../hooks/useAuth'

const Paypal = ({ clientAddress }) => {
    const [sdkReady, setSdkReady] = useState(false)
    const [show, setShow] = useState(false)
    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [billingDetails, setBillingDetails] = useState("");
    const [success, setSuccess] = useState(false)
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState([])
    const { total, carts, totalCartQuantity } = useProduct({});
    const [errorMessage, setErrorMessage] = useState('')
    const { displayName, email, zip, state, city, phone, address, address1 } = clientAddress

    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            currency_code: "USD",
                            value: total,
                        },
                    },
                ],
            })
            .then((orderID) => {
                setOrderID(orderID);
                // console.log(orderID)
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess();
            console.log(payer)

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
                amount: total,
                // created: paymentIntent.created,
                // transaction: paymentIntent.client_secret.slice('_secret')[0],
                paymentDetails: payer,
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
                    console.log(data)
                    if (!data.insertedId || !payer) {
                        return
                    }
                    else {
                        alert('Order Processed Successfully')
                        clearTheCart()
                    }

                })
        });
    };
    //capture likely error
    const onError = (err) => {
        setErrorMessage(err);
    };


    return (
        <div>
            <PayPalScriptProvider
                options={{
                    "client-id": "ARXoNpMQajaHN0iOWEBXWeAA07PFlSHhKyCrMhW812is6kcns9LxLiUQU7_LT3kPJDVBxdfynWupHUOP",
                }}
            >

                <PayPalButtons
                    // style={{ layout: "vertical" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                // onSubmit={handlePyapalSubmit}
                />
            </PayPalScriptProvider>
            {
                success && <>

                    <Link to="/orderHistory"></Link>
                </>
            }
        </div>
    )
}

export default Paypal



