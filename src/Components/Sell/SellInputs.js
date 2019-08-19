import React, {useState} from 'react';

const SellInputs = (props) => {
    const [ticker, setTicker] = useState('')
    const [shares, setShares] = useState(0)

    return (
        <form onSubmit={(event)=>{
            event.preventDefault() //<-- needed because submit is more than a click (onSubmit will reload the page (we dont want this))
                                                                                                                //IT WILL CLEAR OUR STATE
            props.sell(ticker, shares)
        }}>
            
            <input type='text' 
                placeholder='Ticker'
                value={ticker}
                onChange={(event)=>{
                    setTicker(event.target.value)}}/>

            <input type='text'
                placeholder='Number of Shares' 
                value={shares}
                onChange={(event)=>{
                    setShares(event.target.value)}}/>
            
            <input type='submit' value='Sell'/>  
                {/*^our Submit Button doesnt need an onClick event handler. It is implicity handled by our FORM  */}

        </form>
        // ^ ****************FORM
    );
};

export default SellInputs;