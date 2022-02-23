import React from 'react'
import { Spinner } from 'react-bootstrap';
import { Route, Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading1 } = useAuth();
    if (isLoading1) {
        return <Spinner className="text-center" animation="border" variant="dark" />
    }
    return user.email && admin ? children : <Navigate to="/" />

}

export default AdminRoute