import React, {Fragment, Component} from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('Order Summary Updated')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
        return( 
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li> 
        )
    })
        return(
            <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingedients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
        )
    }
    
}
export default OrderSummary