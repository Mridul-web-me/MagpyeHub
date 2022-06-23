import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import group1 from '../../img/Group/Group 5.jpg'
import group2 from '../../img/Group/Group 6.jpg'
import group3 from '../../img/Group/Group 7.jpg'

const Product1 = () => {
    return (
        <div>
            <Container fluid>
                <div className='productImage'>
                    <Row >
                        <Col xs={12} sm={6} md={4}>
                            <div >
                                <div>
                                    <img src={group1} width="500px" className='img-fluid' alt="" />
                                </div>
                                <div className='detailsContent'>
                                    <div className='productDetails'>
                                        <h4 style={{ textAlign: 'start' }}>Simple tricks to elevate your WFH space</h4>
                                        <Link to="" style={{ color: '#000' }}>Read & Shop</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <div>
                                <Link to="#"><img src={group2} width="500px" className='img-fluid' alt="" /></Link>
                            </div>
                            <div>
                                <h2>Hello</h2>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <div>
                                <Link to="#"><img src={group3} width="500px" className='img-fluid' alt="" /></Link>
                            </div>
                            <div >
                                <h2>Hello</h2>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Product1