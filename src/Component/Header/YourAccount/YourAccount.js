import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header';

const YourAccount = () => {
    const { logOut } = useAuth();
    const history = useNavigate()

    const handleLogOutSubmit = e => {
        e.preventDefault();
        logOut(history)
        return
    }

    return (
        <div>
            <Header></Header>
            <Form onSubmit={handleLogOutSubmit}>
                <Button onClick={logOut} type='submit'>Logout</Button>
            </Form>
            <Link to="/addProduct">Add Product</Link>
        </div>
    )
}

export default YourAccount
