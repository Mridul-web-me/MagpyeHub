import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OrderedProduct = ({ product, orders }) => {
    return (
        <div>
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
                <Col xs={6} md={1}>
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
                <Col xs={6} md={1}>
                    <p>£{product.price}</p>
                </Col>
                <Col xs={6} md={2}>
                    <p>
                        £{product.quantity * product.price}
                    </p>
                </Col>
                <Col xs={6} md={2}>
                    <p>
                        {orders.status}
                    </p>


                </Col>
            </Row>
        </div>
    )
}

export default OrderedProduct