import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const [passDidNotMatch, setPassDidNotMatch] = useState('')
    const history = useNavigate()

    const { registerUser, isLoading, user, authError } = useAuth();

    // console.log(loginData);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        // console.log(field, value, newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password1 !== loginData.password2) {
            setPassDidNotMatch('password did not match');
            return
        }
        else {
            setPassDidNotMatch('')
            registerUser(loginData.email, loginData.password1, loginData.name, history);

        }

    }
    return (
        <div>
            <h5>CREATE AN ACCOUNT</h5>
            {!isLoading && <Form onSubmit={handleLoginSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">Name</Form.Label>
                    <Col sm="8">
                        <Form.Control
                            sm="8"
                            type="name"
                            name="name"
                            onBlur={handleOnBlur}
                            placeholder="Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" >
                        Email Address
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            onBlur={handleOnBlur}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control
                            type="password"
                            name="password1"
                            placeholder="Password"
                            onBlur={handleOnBlur}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">
                        Re-Type Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control
                            type="password"
                            name="password2"
                            placeholder="Password"
                            onBlur={handleOnBlur}
                        />
                    </Col>
                </Form.Group>
                <Button variant="outline-primary" type='submit'>Register</Button>
            </Form>}
            {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            {user?.email && [
                'success'
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    Registration Success
                </Alert>
            ))}
            {authError && [
                'danger'
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    {authError}
                </Alert>
            ))}
            {passDidNotMatch && [
                'danger'
            ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    {passDidNotMatch}
                </Alert>
            ))}
        </div>
    )
}

export default Register
