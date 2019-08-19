//Logged in Home view RCC

import React, { Component } from 'react';
import {baseURL} from '../../util'
import DepositForm from './DepositForm'

//defined as class BECASUE WE NEED TO DIDMOUNT 
class UserHome extends Component {
    state = {
        balance: 0
    }

    getBalance = () => {
        const url = `${baseURL}/api/${this.props.apiKey}/balance`
                                    // ^ 'this' referring to UserHome
        const promise = fetch(url)
        function currencyFormat(num) {
            return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          }
        promise.then(response => response.json()).then(json => {
            console.log(json)
            this.setState({balance: currencyFormat(json.balance)}) //<--- ************************ figure out how to format with 2 decimal places
    })
    }

    depositFunds = (amount) => {
            const url = `${baseURL}/api/${this.props.apiKey}/deposit`
            const promise = fetch(url, {
                method: 'PUT',
                mode: 'cors',
                headers: {"content-type": "application/json"},
                body: JSON.stringify(
                    {deposit: amount}
                    )
            })
            promise.then(response => response.json()).then(
                json => {
                    this.setState({balance: json.balance}) //<---- prop of App.js (which sets the state to apiKey)
            })
    }

    componentDidMount = () => {
        this.getBalance()
    }

    divStyle = {
        width: '60%',
        margin: '16px auto',
        border: '1px solid #eee',
        boxshadow: '0 2px 3px #ccc',
        padding: '16px',
        textalign: 'center',
        background: '',
        borderRadius: '20px',
    }

    render() {
        return (
            <div style={this.divStyle}>
            
            <br/>
            <b>Your Balance </b>
            <br/>
            {this.state.balance}
            
                <div>
                <br/>
                <b>Deposit Funds</b>
                <DepositForm depositFunds={this.depositFunds}/>
                </div>
            </div>
        );
    }
}

export default UserHome;