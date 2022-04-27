import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

const Paypal = () => {
    const [sdkReady, setSdkReady] = useState(false)

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


    return (
        <div>
            <PayPalButton
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
            />
        </div>
    )
}

export default Paypal



