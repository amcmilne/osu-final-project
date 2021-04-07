import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/authenticationService';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLoggedIn() ?
                <Component {...props} />
                : <Redirect to="/home" />
        )} />
    );
};
export default PrivateRoute;