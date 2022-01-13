import React from 'react'
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header';

const YourAccount = () => {
    const { logOut } = useAuth();

    return (
        <div>
            <Header></Header>
            <Button onClick={logOut}>Logout</Button>
        </div>
    )
}

export default YourAccount
