import React from 'react';
import {Redirect} from 'react-router-dom';

//props.setApiKey is coming from App.js indirectly (IT IS PASSED FROM APP TO MAIN AND FROM MAIN TO LOGOUT)

const Logout = (props) => {
    console.log('logout component')
    window.sessionStorage.setItem('api_key', '')
    props.setApiKey('')
    return (
        <Redirect to = '/' />
    );
};

export default Logout;