import React from 'react';
import RegisterInputs from './RegisterInputs'
import {baseURL} from '../../util'

import './Register.css'

export default class Register extends React.Component {
    state = {username: '', firstname: '', lastname: '', password: '', passwordconfirm: '', error: ''};

    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value});
        console.log(this.state);
    };

   firstnameChangedHandler = (event) => {
        this.setState({firstname : event.target.value});
        console.log(this.state);
    };

    lastnameChangedHandler = (event) => {
        this.setState({lastname : event.target.value});
        console.log(this.state);
    };

    passwordChangedHandler = (event) => {
        this.setState({password : event.target.value});
        console.log(this.state);
    };

    confirmChangedHandler = (event) => {
        this.setState({passwordconfirm : event.target.value});
        console.log(this.state);
    };

    register = (event) => {
        if (this.state.password === this.state.passwordconfirm) {
        event.preventDefault()
        const url = `${baseURL}/api/create_account`
        const promise = fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname
            })
        })
        promise.then(response=> response.json()).then(json => {
            if(json.error !== undefined) {
                this.setState({error: "Please choose a different username."})
                console.log(this.state)
            } else {
                this.props.history.push("/")       
            }
        }).catch(error => {console.log(error)})
    } else {
        this.setState({error: "Password and Confirm Password must match."})
    }
    }  


    inputStyle = {
        textAlign: 'center',
        border: '1px solid  #333'
    }

    render() { 
        
        return(
        <div className='divStyle'>
            <br/>
            <b className='header'>Register</b> 
            <br/>
                <br/>
                <RegisterInputs 
                    username={this.state.username}
                    firstname={this.state.firstname}
                    lastname={this.state.lastname} 
                    password={this.state.password}
                    confirm={this.state.passwordconfirm}

                    userChange={this.usernameChangedHandler}
                    firstnameChange={this.firstnameChangedHandler}
                    lastnameChange={this.lastnameChangedHandler} 
                    passChange= {this.passwordChangedHandler}
                    confirmChange={this.confirmChangedHandler}

                    userStyle={this.inputStyle} 
                    firstnameStyle={this.inputStyle}
                    lastnameStyle={this.inputStyle}
                    passStyle={this.inputStyle}
                    confirmStyle={this.inputStyle}
                ></RegisterInputs>
                <br/>

            <input className='submit'
                type='submit' 
                value='Register'
                onClick={this.register}
                ></input>
            <br/>
            <br/>
            <b>{this.state.error}</b>
        </div>
        )
    };
};