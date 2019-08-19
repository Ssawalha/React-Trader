import React, {useState} from 'react';


const DepositForm = (props) => {
    const [amount, setAmount] = useState(0)
 //setAmount manipulates amount in state ^ initial state (default deposit 0)

 //the general format for building forms:
 // build input for form and use 'useState' to create a variable to track the 'value' of every element
 // onSubmit will be a function recieved through a prop from the bigger element (component)
    
    

    return (
        <form 
            onSubmit={(event)=> {
                event.preventDefault()
                props.depositFunds(amount) //<-- we dont put brackets for amount because it is in a JS function
        }}>

        <input type='text'
            value={amount} 
            onChange={(event)=>{
                setAmount(event.target.value)}}/>
                {/*^ from useState  */}
        <input type='submit' value='Deposit'/>
        </form>
    );
};

export default DepositForm;