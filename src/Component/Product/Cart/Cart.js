import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/Product/useProduct';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Carts from './Carts';


const Cart = () => {



    const { totalQuantity, total, carts, } = useProduct({});

    // const subtotal = quantity * price;

    return (
        <>
            <Header></Header>
            <Container fluid style={{
                margin: '50px 0'
            }}>
                {carts.length ?
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
                                        <p>SubTotal</p>
                                    </Col>
                                    <Col xs={6} md={2}>
                                        <p> {total.toFixed(2)}</p>
                                    </Col>
                                </Row>
                            </div>

                            <div style={{
                                textAlign: 'end'
                            }}>
                                <Link to='/proceedToPayment'>
                                    <Button variant='success'>Proceed To Payment </Button>
                                </Link>
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