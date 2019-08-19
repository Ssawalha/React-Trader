import React from 'react';
import './Settings.css';


const SettingsInputs = (props) => {
   
    return(
        <div>
            <input
                style = {props.checkingAccountNumberStyle} 
                type='text' 
                onChange={props.checkingAccountNumberChange} 
                value={props.checkingAccountNumber}
                placeholder="Checking Account Number"></input>

            <input
                style ={props.submitChecking} 
                type='submit' 
                value='Update Checking Account Number'
                onClick={props.setCheckingAccountNumber}
                ></input>
            <br/>
            <input 
                style={props.routingNumberStyle} 
                type='text'
                onChange={props.routingNumberChange}
                value={props.routingNumber}
                placeholder="Routing Number"></input>

            <input 
                style ={props.submitRouting}
                type='submit' 
                value='Update Routing Number'
                onClick={props.setRoutingNumber}
                ></input> 
        </div>
    )
}

export default SettingsInputs;