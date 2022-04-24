import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import group1 from '../../img/Group/Group 5.png'
import group2 from '../../img/Group/Group 6.png'
import group3 from '../../img/Group/Group 7.png'
import group4 from '../../img/Group/Group 8.png'
import group5 from '../../img/Group/Group 9.png'
import group6 from '../../img/Group/Group 10.png'

const Product = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <Link to="#"><img src={group1} width="500px" className='img-fluid' alt="" /></Link>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Link to="#"><img src={group2} width="500px" className='img-fluid' alt="" /></Link>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Link to="#"><img src={group3} width="500px" className='img-fluid' alt="" /></Link>
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <Link to="#"><img src={group4} width="500px" className='img-fluid' alt="" /></Link>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Link to="#"><img src={group1} width="500px" className='img-fluid' alt="" /></Link>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Link to="#"><img src={group2} width="500px" className='img-fluid' alt="" /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product
