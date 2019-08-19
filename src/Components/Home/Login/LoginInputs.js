import React from 'react';
import './LoginInputs.css';

//make login on the far right of nav bar and have it drop down a box for login
const Login = (props) => {
   
    return(
        <div>
            <input
                style = {props.userStyle} 
                type='username' 
                onChange={props.userChange} 
                value={props.username}
                placeholder="Username"></input>
            <br/>
            <input 
                style= {props.passStyle}
                type='password'
                onChange={props.passChange} 
                value={props.password}
                placeholder="Password"></input>
            <br/>
        </div>
    )
}

export default Login;