import React from 'react'

const CartContext = React.createContext({
    items: [],
    totalQuantity: 0,
    addItems: (item) => {}
})
export default CartContext