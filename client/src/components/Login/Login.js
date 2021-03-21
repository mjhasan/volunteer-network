import React from 'react';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // Also add this code on Login.js but where set setUser
    // history.replace(from);
    return (
        <div>
            <h3>This is login page</h3>
        </div>
    );
};

export default Login;