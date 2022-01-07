import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo.jpg'

const HeaderTop = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <p><i class="fas fa-phone"></i> 0800 1 223 023 | MON-SAT, 9AM - 5PM</p>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search for Product & Brand..." aria-label="Search" />
                            <i class="fas fa-search" type="submit"></i>
                        </form>
                    </Col>
                    <Col xs={6} md={4}>
                        <Link to="/home">
                            <img src={logo} alt="" width="200px" />
                        </Link>
                    </Col>
                    <Col xs={6} md={4}>
                        <div>
                            <i class="fas fa-user"></i>
                            <p>Login</p>
                        </div>
                        <div>
                            <i class="fas fa-comments"></i>
                            <p>Quote</p>
                        </div>
                        <div>
                            <i class="fas fa-shopping-bag"></i>
                            <p>My Basket</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderTop
