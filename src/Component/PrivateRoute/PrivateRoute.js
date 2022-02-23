import React from 'react'
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    // if (isLoading) {
    //     return (
    //         <div className="spinner-border" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
    //     )
    // }

    return user.email ? children : <Navigate to="/register" />

};

export default PrivateRoute
