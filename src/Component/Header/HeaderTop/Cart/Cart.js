import React from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { PayPalButton } from 'react-paypal-button-v2';
import { Link } from 'react-router-dom';
import useProduct from '../../../../hooks/Product/useProduct';
import Footer from '../../../Footer/Footer';
import Newsletter from '../../../Newsletter/Newsletter';
import PromoUnit from '../../../PromoUnit/PromoUnit';
import Header from '../../Header';
import Carts from './Carts';
import Paypal from './ProceedToPayment/Paypal/Paypal';


const Cart = () => {
    const { totalQuantity, total, carts, loading } = useProduct({});

    return (
        <>
            <Helmet>
                <title>My Basket</title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Container fluid style={{
                margin: '50px 0'
            }}>
                {loading ? <div>
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="info" />
                </div> : carts.length ?
                    <>
                        <div style={{
                            textAlign: 'end'
                        }}>
                            <Link to='/proceedToPayment'>
                                <Button variant='success'>Proceed To Payment </Button>
                            </Link>
                        </div>
                        <div className='py-5 bg-light'>


                            <div>
                                <Row style={{
                                    borderTop: '1px solid rgb(159 159 159)',
                                    borderBottom: '1px solid rgb(159 159 159)',
                                    margin: '10px 0'
                                }}>
                                    <Col xs={6} md={6}>
                                        <h5 className='text-start'><i class="fas fa-shopping-basket"></i> Your Basket Contains: {totalQuantity} Items</h5>
                                    </Col>
                                    <Col xs={6} md={2}>
                                        <h5>Quantity</h5>
                                    </Col>
                                    <Col xs={6} md={2}>
                                        <h5>Price</h5>
                                    </Col>
                                    <Col xs={6} md={2}>
                                        <h5>Sub Total</h5>
                                    </Col>
                                </Row>

                                <div>
                                    {
                                        carts.map((cart) => <Carts
                                            key={cart._id}
                                            cart={cart}
                                        ></Carts>)
                                    }
                                </div>

                                <Row>
                                    <Col xs={6} md={6}>

                                    </Col>
                                    <Col xs={6} md={2}>

                                    </Col>
                                    <Col xs={6} md={2}>
                                        <h5>SubTotal</h5>
                                    </Col>
                                    <Col xs={6} md={2}>
                                        <h5>£ {total.toFixed(2)}</h5>
                                    </Col>
                                </Row>
                            </div>

                            <div style={{
                                textAlign: 'end'
                            }}>
                                <Link to='/proceedToPayment'>
                                    <Button variant='success'>Proceed To Payment </Button>
                                </Link>
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
                        </div>
                    </>
                    :

                    <div>
                        <h4>You currently have nothing in your Basket</h4>
                        <p>Why not have a look at some of our best offers we've selected for you below:</p>
                    </div>
                }
            </Container>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    );
};

export default Cart;