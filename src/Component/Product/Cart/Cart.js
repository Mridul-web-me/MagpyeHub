import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/Product/useProduct';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Cart = () => {



    const { totalQuantity, total, shipping, carts, handleRemove, loading } = useProduct({});

    return (
        <>
            <Header></Header>
            <Container fluid style={{
                margin: '50px 0'
            }}>
                {carts.length ? <div className='py-5 bg-light'>


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

                    {
                        carts.map((cart) => {

                            const { _id, img, title, price, quantity } = cart;

                            return (
                                <>
                                    <Row style={{

                                        borderBottom: '1px solid rgb(159 159 159)',
                                        margin: '10px 0'
                                    }}>
                                        <Col xs={6} md={2}>
                                            <img src={`data:image/jpg;base64,${img}`} alt="" width="100px" height="100px" />
                                        </Col>
                                        <Col xs={6} md={4} style={{
                                            textAlign: 'start'
                                        }}>
                                            <Link to={`/placeOrder/${_id}`}>
                                                <h5>{title}</h5>
                                            </Link>
                                            <p>Product Code: {_id}</p>
                                        </Col>
                                        <Col xs={6} md={2}>
                                            {quantity}
                                        </Col>
                                        <Col xs={6} md={2}>
                                            £{price}
                                        </Col>
                                        <Col xs={6} md={2}>

                                            <i class="fa-solid fa-xmark"></i>
                                            <svg style={{
                                                color: 'red',
                                                cursor: 'pointer'
                                            }} onClick={() => handleRemove(_id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="30px"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                                        </Col>
                                    </Row>
                                </>)
                        })
                    }

                    <Row>
                        <Col xs={6} md={6}>

                        </Col>
                        <Col xs={6} md={2}>

                        </Col>
                        <Col xs={6} md={2}>
                            <p>SubTotal</p>
                        </Col>
                        <Col xs={6} md={2}>
                            <p> {total.toFixed(2)}</p>
                        </Col>
                    </Row>
                    <div style={{
                        textAlign: 'end'
                    }}>
                        <Link to='/proceedToPayment'>
                            <Button variant='success'>Proceed To Payment </Button>
                        </Link>
                    </div>
                </div>
                    :

                    <div>
                        <h4>You currently have nothing in your Basket</h4>
                        <p>Why not have a look at some of our best offers we've selected for you below:</p>
                    </div>
                }
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Cart;


// {/* <h3>Order Summary</h3>
//                 <h5>Items Ordered: {totalQuantity}</h5>
//                 <br />
//                 <p className="fs-4">Total: ${total.toFixed(2)}</p>
//                 <p className="fs-4">Delivery: ${shipping}</p>
//                 <p className="fs-4">tax: ${tax.toFixed(2)}</p>
//                 <p className="fs-4">Grand Total: ${grandTotal.toFixed(2)}</p> */}