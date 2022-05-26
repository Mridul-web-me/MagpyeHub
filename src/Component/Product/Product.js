import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Product.css'

import group1 from '../../img/Group/Group 5.png'
import group2 from '../../img/Group/Group 6.png'
import group3 from '../../img/Group/Group 7.png'
import group4 from '../../img/Group/Group 8.png'
import group5 from '../../img/Group/Group 9.png'
import group6 from '../../img/Group/Group 10.png'
import Product1 from './Product1'

const Product = () => {
    return (
        <div className='product'>
            <Container fluid>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={group1} />
                            <div className='cardBody'>
                                <Card.Body>
                                    <Card.Title>6 home interiors trends set to be huge in 2022</Card.Title>
                                    <Link to="">Read & Shop</Link>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={group2} />
                            <div className='cardBody'>
                                <Card.Body>
                                    <Card.Title>6 home interiors trends set to be huge in 2022</Card.Title>
                                    <Link to="">Read & Shop</Link>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={group3} />
                            <div className='cardBody'>
                                <Card.Body>
                                    <Card.Title>6 home interiors trends set to be huge in 2022</Card.Title>
                                    <Link to="">Read & Shop</Link>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>

                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={group4} />
                            <div className='cardBody'>
                                <Card.Body>
                                    <Card.Title>6 home interiors trends set to be huge in 2022</Card.Title>
                                    <Link to="">Read & Shop</Link>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={group1} />
                            <div className='cardBody'>
                                <Card.Body>
                                    <Card.Title>6 home interiors trends set to be huge in 2022</Card.Title>
                                    <Link to="">Read & Shop</Link>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={group2} />
                            <div className='cardBody'>
                                <Card.Body>
                                    <Card.Title>6 home interiors trends set to be huge in 2022</Card.Title>
                                    <Link to="">Read & Shop</Link>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* <Product1></Product1> */}
            {/* Columns are always 50% wide, on mobile and desktop */}
            {/* <Container fluid>
                <Row >
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <Link to="#"><img src={group4} width="500px" className='img-fluid' alt="" /></Link>
                        </div>
                        <div>
                            <h2>Hello</h2>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <Link to="#"><img src={group1} width="500px" className='img-fluid' alt="" /></Link>
                        </div>
                        <div>
                            <h2>Hello</h2>
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
                </Row>

            </Container> */}
        </div>
    )
}

export default Product
