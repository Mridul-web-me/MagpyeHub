import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo.jpg'
import './HeaderTop.css'
const HeaderTop = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={4} md={4}>
                        <p><i class="fas fa-phone"></i> 0800 1 223 023 | MON-SAT, 9AM - 5PM</p>
                        <form class="d-flex" className='searchBox'>
                            <input class="form-control me-2" type="search" placeholder="Search for Product & Brand..." aria-label="Search" />
                            <i class="fas fa-search" type="submit" />
                        </form>
                    </Col>
                    <Col xs={4} md={4}>
                        <Link to="/home">
                            <img src={logo} alt="" className='img-fluid' />
                        </Link>
                    </Col>
                    <Col xs={4} md={4}>
                        <div className='cartMenu'>
                            <div>
                                <Link to="/login">
                                    <i class="fas fa-user"></i>
                                    <p>Login</p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/quote">
                                    <i class="fas fa-comments"></i>
                                    <p>Quote</p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/basket">
                                    <i class="fas fa-shopping-bag"></i>
                                    <p>My Basket</p>
                                </Link>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderTop
