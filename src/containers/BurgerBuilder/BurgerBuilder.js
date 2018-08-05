import React from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
    const IngredientPrices = {
            salad : 0.5,
            cheese : 0.4,
            meat : 1.3,
            bacon : 0.7,
        };
class BurgerBuilder extends React.Component {

    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        TotalPrice : 4,
        purchasing : false,
    }
    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = IngredientPrices[type];
        const oldPrice = this.state.TotalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            TotalPrice : newPrice,
            ingredients : updatedIngredients
        })
    }
    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = Math.max(0,oldCount -1);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = IngredientPrices[type];
        const oldPrice = this.state.TotalPrice;
        const newPrice = Math.max(4,oldPrice - priceDeduction);
        this.setState({
            TotalPrice : newPrice,
            ingredients : updatedIngredients
        })
    }
    popupHandler = () => {
        this.setState({
            purchasing : true
        })
    }
    closePopup = () => {
        this.setState({
            purchasing : false,
            ingredients : {
                salad : 0,
                bacon : 0,
                cheese : 0,
                meat : 0
            },
            TotalPrice : 4,
        });

    }
    continue = () => {
        alert("Enjoy your meal!");
    }


    render () {
            const disableInfo = {
                ...this.state.ingredients
            }
            let any =0;
            let Puschaseable = Boolean ; // toggle button Check out
            for (let key in disableInfo) { 
                any = any + disableInfo[key];
                disableInfo[key] = disableInfo[key] <= 0;  // toggle button Less
            }
            if(any > 0 ) {
                Puschaseable = false;
            }else {
                Puschaseable = true;
            }
    
            
        return (
            <Aux>
                <Backdrop hide={this.closePopup} show={this.state.purchasing}/>
                <Modal show={this.state.purchasing} hide={this.closePopup} >
                    <OrderSummary continue={this.continue} price={this.state.TotalPrice} ingredients={this.state.ingredients} /> 
                </Modal>  
                <Burger ingredients ={this.state.ingredients} />
                <BuildControls 
                    Puschaseable={Puschaseable}  
                    price={this.state.TotalPrice}
                    ordered = {this.popupHandler} 
                    disable={disableInfo} 
                    removeIngredient = {this.removeIngredient} 
                    addIngredient = {this.addIngredient} />
            </Aux>

        )
    }
}
export default BurgerBuilder;