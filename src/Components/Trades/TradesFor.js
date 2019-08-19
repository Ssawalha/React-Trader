import React from 'react';
import {baseURL} from '../../util'

//MUST CHANGE ROUTES IN TTRADER BACKEND TO TAKE A POST REQUEST (CURRENTLY GET REQUEST USING URL)

class TradesFor extends React.Component {
    
    state = {
        trades: []
    }
    
    getTrades = () => {
        const url = `${baseURL}/api/${this.props.apiKey}/trades/${this.props.match.params.ticker}`
        // ^ 'this' referring to Trades
        const promise = fetch(url)
        promise.then(response => response.json()).then(json => {
        console.log(json)
        this.setState({trades: json.trades})
        })
    }

    componentDidMount = () => {
        this.getTrades()
    }

    divStyle = {
        width: '80%',
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
                <b>Trade History For</b>
                <br/>
                <br/>
                {this.props.match.params.ticker}
                <div>
                <br/>
                {JSON.stringify(this.state.trades)} 
                {/*^ must stringify because it is a JS object (convert to plain text in order to insert as plain text) */}
                </div>
            </div>
        );
    }
}

export default TradesFor;