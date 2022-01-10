import React, { useState } from 'react'
import { Col, Form, Row, ToggleButton } from 'react-bootstrap'

const Register = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <h5>CREATE AN ACCOUNT</h5>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                    <Form.Label column sm="4">
                        Your Full Name
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="name" placeholder="Name" />
                    </Col>
                </Form.Group>
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
                    Register
                </ToggleButton>
            </Form>
        </div>
    )
}

export default Register
