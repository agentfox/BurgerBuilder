import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {   
    let Ingredients = Object.keys(props.ingredients).map((igkey)=> {
    // props.ingredients[igkey] tra ra so luong nhan banh moi loai
            return [...Array(props.ingredients[igkey])].map((ele,i)=>{ 
    // Array(n) tao ra array chua n phan tu empty nen ko map duoc
    // [...Array(n)] tao ra array trong chua n phan tu [undefine,undefine,undefine...,undefine]
    // console.log([...Array(props.ingredients[igkey])]);
                 return <BurgerIngredient key={igkey + i} type ={igkey} />

            })
    }) // if there are no ingredient , the 2th map fnc will only return [] 
        // the output will be like [[],[],[],[]]
    .reduce((arr,el)=> {
        return arr.concat(el);
    })
    if(Ingredients.length === 0) {
        Ingredients=( <p>Pls start adding ingredients</p> )
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type ="bread-top" />
            {Ingredients}
            <BurgerIngredient type ="bread-bottom" />
        </div>
    )
}
export default burger;