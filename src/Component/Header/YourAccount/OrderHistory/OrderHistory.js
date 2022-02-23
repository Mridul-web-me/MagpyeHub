import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Footer/Footer';
import Newsletter from '../../../Newsletter/Newsletter';
import PromoUnit from '../../../PromoUnit/PromoUnit';
import Header from '../../Header';

const OrderHistory = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => {
                setOrders(data.data)
                setLoading(false)
            });
    }, [user.email])



    return (
        <div>
            <Header></Header>
            <PromoUnit></PromoUnit>
            {loading ? <div><Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" /></div> : orders.length ? <div>
                    <h2 style={{
                        textAlign: 'start',
                        color: '#303030', fontSize: '26px',
                        textTransform: 'uppercase',
                        margin: '20px'
                    }}>Order History</h2>
                    <Row style={{
                        borderTop: '1px solid rgb(159 159 159)',
                        borderBottom: '1px solid rgb(159 159 159)',
                        margin: '10px 0'
                    }}>
                        <Col xs={6} md={6}>
                            <h5 className='text-start'><i class="fas fa-shopping-basket"></i> Your Order Items</h5>
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
                    {orders.map(orders =>
                        <>
                            <div
                                key={orders._id}
                                orders={orders}
                                savedProduct={orders.order.savedProduct}
                            >
                                {
                                    orders.order.savedProduct.map(product => <div>

                                        <Row style={{
                                            borderBottom: '1px solid rgb(159 159 159)',
                                            margin: '10px 0'
                                        }}>
                                            <Col xs={6} md={2}>
                                                {/* <img src={`data:image/jpg;base64,${img}`} alt="" width="100px" height="100px" /> */}
                                                <img src={product.img} alt="" width="100px" height="100px" />
                                            </Col>
                                            <Col xs={6} md={4} style={{
                                                textAlign: 'start'
                                            }}>
                                                <Link style={{
                                                    color: '#303030', fontSize: '16px',
                                                    textDecoration: 'none'
                                                }} to={`/placeOrder/${product._id}`}>
                                                    <h5 style={{ fontSize: '16px' }}>{product.title}</h5>
                                                </Link>
                                                <p style={{ fontSize: '12px' }}>Product Code: {product._id}</p>
                                            </Col>
                                            <Col xs={6} md={2}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <input style={{ width: '50px', padding: ' 0 15px' }} type="text" value={product.quantity} />
                                                        {/* <p>{quantity}</p> */}
                                                        <div style={{
                                                            display: 'flex', flexDirection: 'column', fontSize: '26px',
                                                            border: '#f3f3f3',
                                                        }}>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6} md={2}>
                                                <p>£{product.price}</p>
                                            </Col>
                                            <Col xs={6} md={2}>
                                                <p>
                                                    £{product.quantity * product.price}
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>)
                                }
                            </div>
                            <div>

                            </div>
                        </>
                    )}


                </div> : <div style={{
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}><h2 style={{ color: '#606060' }}>No Product found</h2></div>}
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
};

export default OrderHistory;
