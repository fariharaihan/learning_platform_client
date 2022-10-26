import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/loginoption" state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;