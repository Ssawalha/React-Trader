import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import {isLoggedIn} from '../util'


export default class Navbar extends React.Component { 
    linkList = () => {
        if (this.props.apiKey) {
            return (
                <>
                    <Link to="/">Home</Link>
                    <Link to="/positions">Positions</Link>
                    <Link to="/trades">Trades</Link>
                    <Link to="/lookup">Lookup</Link>
                    <Link to="/buy">Buy</Link>
                    <Link to="/sell">Sell</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="/logout">Logout</Link>
                </>
            )
        } else { return (
                <>
                    <Link to="/">Home</Link>
                    <Link to="/lookup">Lookup</Link>
                    <Link to="/register">Register</Link>
                </>
            )
        }
    }
    render () {
        return(
            <nav className="navbar">
                {this.linkList()}
            </nav>
        )
    }
}