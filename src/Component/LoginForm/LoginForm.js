import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ForgotPass from './ForgotPass/ForgotPass'
import Login from './Login/Login'
import Register from './Register/Register'
import './LoginForm.css'

const LoginForm = () => {
    return (
        <>
            <Header></Header>
            <Container className='loginForm'>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={6}>
                        <Register></Register>
                    </Col>
                    <Col xs={12} md={6}>
                        <Login></Login>
                        {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Login></Login>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <ForgotPass></ForgotPass>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Forgot Pass</Nav.Link>
                                </Nav.Item>
                            </Nav>

                        </Tab.Container> */}
                    </Col>
                </Row>
            </Container>
            <Container className='tabContainer'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills" className="">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Register</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Login</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Register></Register>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Login></Login>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default LoginForm
