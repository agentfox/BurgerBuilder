import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './build-control/build-control'
const controls = [
    {label:'Salad' , type : 'salad'},
    {label:'Bacon' , type : 'bacon'},
    {label:'Cheese' , type : 'cheese'},
    {label:'Meat' , type : 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <h4>Price : {props.price.toFixed(2)} $ </h4>
        { controls.map(ctrl=>(
            <BuildControl 
            addIngredient = {()=>props.addIngredient(ctrl.type)}
            removeIngredient = {()=>props.removeIngredient(ctrl.type)}
            disable={props.disable[ctrl.type]}
            key={ctrl.label} 
            label={ctrl.label} />
        ) )
        }
        <div className={classes.checkout}>
            <button 
                onClick={props.ordered}
                disabled={props.Puschaseable}
            >Order Now</button>
        </div>
    </div>

);


export default buildControls;


