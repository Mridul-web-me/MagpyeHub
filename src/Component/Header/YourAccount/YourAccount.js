import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header';

const YourAccount = () => {
    const { logOut } = useAuth();
    const history = useNavigate()
    const { user } = useAuth();
    console.log(user);

    const handleLogOutSubmit = e => {
        e.preventDefault();
        logOut(history)
        return
    }

    return (
        <div>
            <Header></Header>
            <Container fluid>
                <h4 className='text-start'>Hello {user.displayName}, Welcome to your MagpyeHub.com Account</h4>
            </Container>
            <Container>
                <Row style={{
                    textAlign: 'start'
                }}>
                    <Col xs={6}>
                        <h4><Link to={'/'}>ORDER HISTORY</Link></h4>
                        <p>Track your recent orders and view details of older orders</p>
                    </Col>
                    <Col xs={6}>
                        <h4><Link to="/">MY FILES</Link></h4>
                        <p>View a list of files that are linked to your account</p>
                    </Col>
                    <Col xs={6}>
                        <h4><Link to={''}>MY DETAILS</Link></h4>
                        <p>Update your account details including your email address and newsletter subscription</p>
                    </Col>
                    <Col xs={6}>
                        <h4><Link to={''}>ADDRESS BOOK</Link></h4>
                        <p>Manage your delivery and billing addresses</p>
                    </Col>
                    <Col xs={6}>
                        <h4><Link to={''}>CHANGE PASSWORD</Link></h4>
                        <p>Change the password you use to login</p>
                    </Col>
                    <Col xs={6}>
                        <Form onSubmit={handleLogOutSubmit}>
                            <Button onClick={logOut} type='submit'>Logout</Button>
                        </Form>
                    </Col>
                </Row>

                <Link to="/addProduct">Add Product</Link>
            </Container>
        </div>
    )
}

export default YourAccount
