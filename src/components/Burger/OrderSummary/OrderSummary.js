import React from 'react';
import Aux from '../../../hoc/Auxilary';
import classes from './OrderSummary.css'
    const OrderSumary =(props) => {
        const ISum = Object.keys( props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span 
                style={{textTransform : 'capitalize'}}
                >{igKey}</span>
                 : {props.ingredients[igKey]}   
            </li>)
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p >Ingredients : </p>
                <ul>{ISum}</ul>
                <div><strong>Total : </strong> {props.price.toFixed(2)} $ </div>
                <p>Continue to check out ?</p>
                <button onClick={props.continue} className={classes.Success} >Continue</button>
                <button className={classes.Danger} >Cancel</button>
            </Aux>
            )
        
    }

    
export default OrderSumary;
