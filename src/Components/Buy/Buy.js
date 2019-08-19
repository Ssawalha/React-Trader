import React, {useState} from 'react';
import {baseURL} from '../../util';
import BuyInputs from './BuyInputs';

const Buy = (props) => {
    
    const [message, setMessage] = useState('')

    const buy = (ticker, shares) => {
        const url = `${baseURL}/api/${props.apiKey}/buy`
        const promise = fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                ticker: ticker,
                //       ^ coming from buy function inputs
                shares: shares
                //       ^ coming from buy function inputs
            })
        })
        promise.then(response => response.json()).then(json => {
            setMessage('Purchase successful')
        }).catch(error => {console.log(error)})
    }
    
        return (
            <div>
                <BuyInputs buy={buy}/>
                {message}
            </div>
        );
}


export default Buy;