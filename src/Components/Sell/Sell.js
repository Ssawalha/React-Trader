import React, {useState} from 'react';
import {baseURL} from '../../util';
import SellInputs from './SellInputs';

const Sell = (props) => {
    const [message, setMessage] = useState('')

    const sell = (ticker, shares) => {
        const url = `${baseURL}/api/${props.apiKey}/sell`
        const promise = fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                ticker: ticker,
                //       ^ coming from sell function inputs
                shares: shares
                //       ^ coming from sell function inputs
            })
        })
        promise.then(response => response.json()).then(json => {
            setMessage('Sale successful')
        }).catch(error => {console.log(error)})
    }
    
        return (
            <div>
                <SellInputs sell={sell}/>
                {message}
            </div>
        );
}


export default Sell;