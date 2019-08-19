import React from 'react';
import Login from './LoginInputs'

export default class Home extends React.Component {
    state = {username: '', password: '', error: ''};

    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value});
        console.log(this.state);
    };

    passwordChangedHandler = (event) => {
        this.setState({password : event.target.value});
        console.log(this.state);
    };

    login = (event) => {
        event.preventDefault()
        const url = "http://127.0.0.1:5000/api/get_api_key"
        const promise = fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        promise.then(response => response.json()).then(json => {
            if (json.error !== undefined) {
                this.setState({error: "Bad username or password"})
            } else {
                window.sessionStorage.setItem("api_key", json.api_key)
                this.props.setApiKey(json.api_key) //<---- prop of App.js (which sets the state to apiKey)
            }
        }).catch(error => {console.log(error)})
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

    inputStyle = {
        textAlign: 'center',
        border: '1px solid  #333'
    }

    render() { 
        console.log(this.props)
        return(
        <div style={this.divStyle}>
            <br/>
            <b>LOGIN</b> 
            <br/>
            <br/>
            <Login 
                username={this.state.username} 
                password={this.state.password}

                userChange={this.usernameChangedHandler} 
                passChange= {this.passwordChangedHandler}
                passStyle={this.inputStyle}
                userStyle={this.inputStyle}  
            ></Login>
            <br/>
            <input type='submit' value='Log In'
                onClick={this.login}></input>
            <br/>
            {this.state.error}
        </div>
        )
    };
};