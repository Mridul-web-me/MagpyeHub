import React, { useState } from 'react'
import { Col, Container, Form, Row, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Login = () => {

    const [checked, setChecked] = useState(false);
    return (
        <Container fluid>
            <h5>RETURNING CUSTOMER</h5>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Email Address
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <ToggleButton
                    className="mb-2"
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked}
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                >
                    Login
                </ToggleButton> <br />
                <Link to="/register/ForgotPass">Forgotten Password? </Link>
            </Form>
        </Container>
    )
}

export default Login
