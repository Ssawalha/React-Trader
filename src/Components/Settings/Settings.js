import React from 'react';
import SettingsInputs from './SettingsInputs'
import {baseURL} from '../../util'
import './Settings.css'

export default class Settings extends React.Component {
    state = {checkingAccountNumber: '', routingNumber: '', error: ''};

    getCheckingAccountNumber = () => {
        const url = `${baseURL}/api/${this.props.apiKey}/checking_account_number`
        const promise = fetch(url)
        promise.then(response => response.json()).then(json => {
            this.setState({checkingAccountNumber: json.checking_account_number})
        })
    };

    getRoutingNumber = () => {
        const url = `${baseURL}/api/${this.props.apiKey}/routing_number`
        const promise = fetch(url)
        promise.then(response => response.json()).then(json => {
            this.setState({routingNumber: json.routing_number})
        })
    };
    
    componentDidMount=() => {
        this.getCheckingAccountNumber()
        this.getRoutingNumber()
    }

    checkingAccountNumberChangedHandler = (event) => {
        this.setState({checkingAccountNumber: event.target.value});
        console.log(this.state);
    };

   routingNumberChangedHandler = (event) => {
        this.setState({routingNumber : event.target.value});
        console.log(this.state);
    };

    setCheckingAccountNumber = (event) => {
        event.preventDefault()
        const url = `${baseURL}/api/${this.props.apiKey}/settings/checking_account_number`
        const promise = fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                set_checking_account_number: this.state.checkingAccountNumber
            })
        })};

    setRoutingNumber = (event) => {
            event.preventDefault()
            const url = `${baseURL}/api/${this.props.apiKey}/settings/routing_number`
            const promise = fetch(url, {
                method: 'PUT',
                mode: 'cors',
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    set_routing_number: this.state.routingNumber
                })
            })
    }
        

    inputStyle = {
        textAlign: 'center',
        border: '1px solid  #333'
    }

    submitStyle = {
        backgroundColor: '#333',
        border: '2px solid #333',
        color: 'white',
        padding: '5px 9px', 
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '10px'
    }

    render() { 
        console.log(this.props)
        return(
        <div className='divStyle'>
            <br/>
            <b className='header'>Settings</b>
            <br/>
            <br/>

            Checking Account Number: {this.state.checkingAccountNumber}
            <br/>
            Routing Number: {this.state.routingNumber}
            <br/>
            <br/>
            <SettingsInputs 
                checkingAccountNumber={this.state.checkingAccountNumber}
                routingNumber={this.state.routingNumber}
    
                checkingAccountNumberChange={this.checkingAccountNumberChangedHandler}
                routingNumberChange={this.routingNumberChangedHandler}
                setCheckingAccountNumber = {this.setCheckingAccountNumber}
                setRoutingNumber={this.setRoutingNumber}

                checkingAccountNumberStyle={this.inputStyle} 
                routingNumberStyle={this.inputStyle}
                submitChecking = {this.submitStyle}
                submitRouting={this.submitStyle}
            ></SettingsInputs>  
            <br/>
            <br/>
            <b>{this.state.error}</b>
        </div>
        )
    };
};