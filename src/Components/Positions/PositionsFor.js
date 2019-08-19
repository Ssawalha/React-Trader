import React from 'react';
import {baseURL} from '../../util'

//MUST CHANGE ROUTES IN TTRADER BACKEND TO TAKE A POST REQUEST (CURRENTLY GET REQUEST USING URL)

class PositionsFor extends React.Component {
    
    state = {
        positions: []
    }
    
    getPositions = () => {
        const url = `${baseURL}/api/${this.props.apiKey}/positions/${this.props.match.params.ticker}`
        // ^ 'this' referring to Positions
        const promise = fetch(url)
        promise.then(response => response.json()).then(json => {
        console.log(json)
        this.setState({positions: json.positions})
        })
    }

    componentDidMount = () => {
        this.getPositions()
    }

    render() {
        return (
            <div>
                Your Position for {this.props.match.params.ticker} is:
                <div>
                {JSON.stringify(this.state.positions)} 
                {/*^ must stringify because it is a JS object (convert to plain text in order to insert as plain text) */}
                </div>
            </div>
        );
    }
}

export default PositionsFor;