import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { clearTheCart } from '../../../../../../fakeDB'
import useAuth from '../../../../../../hooks/useAuth'

const Paypal = () => {
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
    const [errorMessage, setErrorMessage] = useState('')
    // useEffect(() => {
    //     const addPaypalScript = async () => {
    //         const { data: cliendId } = await axios.get('/my-api/create-payment')
    //         const script = document.createElement('script')
    //         script.type = 'text/javascript'
    //         script.src = `https://www.paypal.com/sdk/js?client-id=${cliendId}`
    //         script.async = true

    //         script.onload = () => {
    //             setSdkReady(true)
    //         }
    //         document.body.appendChild(script)
    //     }
    // }, [])

    // creates a paypal order
    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: "Sunflower",
                        amount: {
                            currency_code: "GBP",
                            value: 20,
                        },
                    },
                ],
                // not needed if a shipping address is actually needed
                // application_context: {
                //     shipping_preference: "NO_SHIPPING",
                // },
            })
            .then((orderID) => {
                setOrderID(orderID);
                console.log(orderID)
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
            console.log(payer)
        });
    };
    //capture likely error
    const onError = (err) => {
        setErrorMessage(err);
    };

    // check Approval
    // const onApprove = (data, actions) => {
    //     return actions.order.capture().then(function (details) {
    //         const { payer } = details;
    //         setSuccess(true);
    //         alert('success')
    //     });
    // };
    // // creates a paypal order
    // const createOrder = (data, actions) => {
    //     return actions.order
    //         .create({
    //             purchase_units: [
    //                 {
    //                     amount: {
    //                         // charge users $499 per order
    //                         value: 499,
    //                     },
    //                 },
    //             ],
    //             // remove the applicaiton_context object if you need your users to add a shipping address
    //             application_context: {
    //                 shipping_preference: "NO_SHIPPING",
    //             },
    //         })
    //         .then((orderID) => {
    //             setOrderID(orderID);
    //             return orderID;
    //         });
    // };

    // // handles payment errors
    // const onError = (data, actions) => {
    //     setPaypalErrorMessage("Something went wrong with your payment");
    // }

    // const paypal = useRef()

    // useEffect(() => {
    //     window.paypal
    //         .Buttons({
    //             createOrder: (data, actions, err) => {
    //                 return actions.order.create({
    //                     intent: 'CAPTURE',
    //                     purchase_units: [
    //                         {
    //                             description: 'Coll Looking Table',
    //                             amount: {
    //                                 currency_code: 'CAD',
    //                                 value: 100.00
    //                             },
    //                         },
    //                     ],
    //                 });
    //             },
    //             onApprove: async (data, actions) => {
    //                 const order = await actions.order.capture()
    //                 console.log(order)
    //             },
    //             onError: (err) => {
    //                 console.log(err)
    //             }
    //         })
    //         .render(paypal.current)
    // }, [])


    return (
        <div>
            {/* <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);

                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/my-api/create-payment", {
                        method: "post",
                        body: JSON.stringify({
                            orderId: data.orderID
                        })
                    });
                }}
                options={{
                    clientId: "ARXoNpMQajaHN0iOWEBXWeAA07PFlSHhKyCrMhW812is6kcns9LxLiUQU7_LT3kPJDVBxdfynWupHUOPPAYPAL_CLIENT_ID"
                }}
            /> */}

            <PayPalScriptProvider
                options={{
                    "client-id": "ARXoNpMQajaHN0iOWEBXWeAA07PFlSHhKyCrMhW812is6kcns9LxLiUQU7_LT3kPJDVBxdfynWupHUOP",
                }}
            >
                <div>
                    <div className="wrapper">
                        <div className="product-img">
                            <img
                                src="https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg"
                                alt="SunFlower"
                                height="420"
                                width="327"
                            />
                        </div>
                        <div className="product-info">
                            <div className="product-text">
                                <h1>Sunflower</h1>
                                <h2>POPULAR HOUSE PLANT</h2>
                                <p>
                                    Sunflowers are usually tall annual or perennial plants.
                                    <br />
                                    Each "flower" is actually a
                                    <br />
                                    disc made up of tiny flowers,
                                    <br />
                                    to better attract pollinators.{" "}
                                </p>
                            </div>

                            <div className="product-price-btn">
                                <p>
                                    <span>$20</span>
                                </p>
                                <button type="submit" onClick={() => setShow(true)}>
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>

                    {show ? (
                        <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={createOrder}
                            onApprove={onApprove}
                            onError={onError}
                        />
                    ) : null}
                </div>
            </PayPalScriptProvider>


            {/* <PayPalScriptProvider options={{ "client-id": process.env.PAYPAL_CLIENT_ID }}>
                <PayPalButtons
                    style={{
                        color: "blue",
                        shape: "pill",
                        label: "pay",
                        tagline: false,
                        layout: "horizontal",
                    }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                />
            </PayPalScriptProvider> */}
            {/* <div>
                <div ref={paypal}></div>
            </div> */}
        </div>
    )
}

export default Paypal



