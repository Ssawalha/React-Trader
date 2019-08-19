import React from 'react';

const LookupInput=(props) => {
    return(
        <div>
            <input type='text' 
                onChange={props.tickerChange}
                value={props.ticker} 
                style={props.inputStyle}
                placeholder="Ticker"></input>
        </div>
    )
}

export default LookupInput;