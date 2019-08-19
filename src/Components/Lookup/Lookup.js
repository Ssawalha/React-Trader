import React from 'react';
import {baseURL} from '../../util';
import LookupInput from './LookupInput';

class Lookup extends React.Component {

    state= {
        ticker: '',
        price: 0
    }

    tickerChangedHandler = (event) => {
        this.setState({ticker: event.target.value});
    }
    
    getTickerPrice = (event) => {
        event.preventDefault()
        const url = `${baseURL}/api/get_ticker_price/${this.state.ticker}`
        const promise = fetch(url)
        promise.then(response => response.json()).then(json=> {
            console.log(json)
            this.setState({price: json.price})
        })
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
        
        return (
            <div style={this.divStyle}>
                <b>Lookup Prices</b> <br/> 
                <br/>
                <LookupInput inputStyle={this.inputStyle}
                    tickerChange={this.tickerChangedHandler} 
                    ticker={this.state.ticker}/>
                ${this.state.price}
                <br/>
                <input type='submit' value='Search'
                    onClick={this.getTickerPrice}></input>
            </div>
        );
    }
}

export default Lookup;