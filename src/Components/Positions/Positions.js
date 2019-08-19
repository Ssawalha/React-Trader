import React from 'react';
import {baseURL} from '../../util'

//make charts for trades with dynamic time period/ticker/date
//also have option to switch charts bar chart/line chart etc
//option to download data as csv/excel/json
//add finance ratios to interfact

class Positions extends React.Component {
    
    state={
        positions: []
    }

    getPositions = () => {
        const url = `${baseURL}/api/${this.props.apiKey}/positions`
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


    listStyle = {

    }
    
    render() {

        // const position;
        // position = (
        //     <div>
        //         
        //     </div>
        // );

        return (
            <div style={this.divStyle}>
                <b>Your Positions are:</b>
                
                <div>
                <br/>
                {JSON.stringify(this.state.positions)} 
                {/*^ must stringify because it is a JS object (AN ARRAY) (convert to plain text in order to insert as plain text) */}
                </div>

            </div>
        );
    }
}

export default Positions;
