import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import logo from '../../../img/logo.jpg'
import './HeaderTop.css'
const HeaderTop = () => {
    const { user } = useAuth();
    return (
        <div className='header-top'>
            <Container fluid>
                <Row>
                    <Col xs={4} md={4}>
                        <p style={{
                            textAlign: 'initial',
                            letterSpacing: "3px",
                            marginLeft: '10px',
                            fontSize: "15px"
                        }}><i className="fas fa-phone"></i> 0800 1 223 023 | MON-SAT, 9AM - 5PM</p>
                        <form className="d-flex" className='searchBox'>
                            <input className="form-control me-2" type="search" placeholder="Search for Product & Brand..." aria-label="Search" />
                            <i className="fas fa-search" type="submit" />
                        </form>
                    </Col>
                    <Col xs={4} md={4}>
                        <Link to="/home">
                            <img src={logo} alt="" className='img-fluid' width="200px" height="200px" />
                        </Link>
                    </Col>
                    <Col xs={4} md={4}>
                        <div className='cartMenu'>
                            <div>
                                {
                                    user?.email ?
                                        <Link to="/profile" >
                                            <i className="fas fa-user"></i>
                                            <p >Your Account</p>
                                        </Link>
                                        :
                                        <Link to="/register">
                                            <i className="fas fa-user"></i>
                                            <p>Login</p>
                                        </Link>
                                }
                            </div>
                            <div>
                                <Link to="/quote">
                                    <i className="fas fa-comments"></i>
                                    <p>Quote</p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/basket">

                                    <i className="fas fa-shopping-bag"></i>
                                    <Badge bg="secondary">0</Badge>
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
