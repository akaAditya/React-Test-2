import React from 'react'
import { useContext } from 'react'
import CartContext from '../cartStore/cart-context'

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalQuantity.toFixed(2)}`;

    const addCartItemHandler = (item) =>{
        cartContext.addItems({...item, quantity:1})
    }

    const cartItems = (
        <ul>
            {cartContext.items.map((item)=>(
                <li>
                    <h2>{item.title}</h2>
                    <h2>{item.description}</h2>
                    <h2>{item.price}</h2>
                    <h2>{item.quantity}</h2>
                    <button onClick={addCartItemHandler.bind(null, item)}>Add</button>
                </li>
            ))}
        </ul>
    )
  return (
    <div>
    {cartItems}
    <span>Total Amount</span>
    <span>{+totalAmount}</span>
    <button onClick={props.onClose}>Close</button>
    </div>
  )
}

export default Cart