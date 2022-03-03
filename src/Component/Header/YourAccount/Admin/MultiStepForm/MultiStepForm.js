
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import MultiStep from './MultiStepForm'
import Table from 'react-bootstrap/Table'

const MultiStepForm = () => {



    // async function handleToken(token, addresses) {
    //     const response = await axios.post(
    //         "http://localhost:5000/create-payment-intent",
    //         { token, carts }
    //     );
    //     const { status } = response.data;
    //     console.log("Response:", response.data);
    //     if (status === "success") {
    //         toast("Success! Check email for details", { type: "success" });
    //     } else {
    //         toast("Something went wrong", { type: "error" });
    //     }
    // }

    return (
        <div>

            <p>
                <h3>
                    Free upgrade to Windows 11 when available (see below for details*). Created with a AMD Ryzen 5 processor, 8GB RAM, a 15.6” Full HD display, Dell’s Inspiron 15 laptop will enable you to finish your coursework, as well as enabling you to stream films and update your social media sites.
                </h3>
                <row>
                    <div className="com-md-4">
                        <h4>Processor</h4>

                        <h1>AMD Ryzen 5</h1>

                        <h4>Great for light online streaming</h4>

                    </div>
                    <div className="col-md-4">
                        <h4>Memory (RAM)</h4>

                        <h1>8GB</h1>

                        <h4>Perfect for online browsing and emails</h4>
                    </div>
                    <div className="col-md-4">
                        <h4>Storage capacity</h4>

                        <h1>256GB</h1>

                        <h4> Store photos, documents, music and videos</h4>
                    </div>
                </row>
                <Row style={{ textAlign: 'start' }}>
                    <h3>Overview</h3>
                    <Col md={5}>
                        <p>Brand</p>
                        <p>Dimensions</p>
                        <p>Model name / number</p>
                        <p>Product code</p>
                        <p>Range</p>
                        <p>Weight</p>
                    </Col>
                    <Col md={5}>
                        <p>Dell</p>
                        <p>H1.75 x W35.85 x D23.56cm</p>
                        <p>Dell Inspiron 15 3515 Laptop</p>
                        <p>82710619</p>
                        <p>Dell Inspiron</p>
                        <p>1.71kg</p>
                    </Col>
                </Row>
                <Row style={{ textAlign: 'start' }}>
                    <h3>Overview</h3>
                    <Col md={5}>
                        <p>Battery life             </p>
                        <p>Graphics card type       </p>
                        <p>Graphics Card/GPU Details</p>
                        <p>Hard drive               </p>
                        <p>Includes intel optane    </p>
                        <p>Memory (RAM)             </p>
                        <p>Operating system         </p>
                        <p>Operating system version </p>
                        <p>Processor</p>
                        <p>Processor speed</p>
                        <p>Processor type</p>
                    </Col>
                    <Col md={5}>
                        <p>41WHr, 3-C</p>
                        <p>Integrated</p>
                        <p>AMD Radeon</p>
                        <p>256GB</p>
                        <p>No additional memory</p>
                        <p>8GB</p>
                        <p>Windows 10</p>
                        <p>Windows 10 Pro (64 bit)</p>
                        <p>AMD Ryzen 5 3500U</p>
                        <p>2.1GHz to 3.7GHz</p>
                        <p>AMD Ryzen 5</p>
                    </Col>
                </Row>
                <Row style={{ textAlign: 'start' }}>
                    <h3>Overview</h3>
                    <Col md={5}>
                        <p>Brightness</p>
                        <p> Display</p>
                        <p> Picture or video resolution</p>
                        <p> Refresh rate range</p>
                        <p>Screen resolution</p>
                        <p>Screen size</p>
                        <p>Wireless display</p>
                    </Col>
                    <Col md={5}>
                        <p>220cd/m²</p>
                        <p>Full HD</p>
                        <p>Full HD</p>
                        <p>Up to 75Hz</p>
                        <p>1920 x 1080 pixels</p>
                        <p>15.6"</p>
                        <p>No Wireless Display</p>
                    </Col>
                </Row>


                <p>Brightness</p>


                <p> Display</p>


                <p> Picture or video resolution</p>


                <p> Refresh rate range</p>


                <p>Screen resolution</p>


                <p>Screen size</p>


                <p>Wireless display</p>

            </p>
        </div>
    )
}

export default MultiStepForm