import React from 'react';
import './Register.css';


const RegisterInputs = (props) => {
   
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
                style={props.firstnameStyle} 
                type='firstname'
                onChange={props.firstnameChange}
                value={props.firstname}
                placeholder="First Name"></input>
            <br/>

            <input 
                style={props.lastnameStyle} 
                type='lastname'
                onChange={props.lastnameChange}
                value={props.lastname}
                placeholder="Last Name"></input>
            <br/>

            <input 
                style= {props.passStyle}
                type='password'
                onChange={props.passChange} 
                value={props.password}
                placeholder="Password"></input>
            <br/>

            <input 
                style= {props.confirmStyle}
                type='password'
                onChange={props.confirmChange} 
                value={props.confirm}
                placeholder="Confirm Password"></input>
            <br/>
        </div>
    )
}

export default RegisterInputs;