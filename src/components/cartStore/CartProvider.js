import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartValue = {
  items: [],
  totalQuantity: 0
};

const reducerFun = (state, action) => {
  if (action.type === "ADD-ITEMS") {
    
    const updatetotalQuantity =
      state.totalQuantity + action.item.price * action.item.quantity;
    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItems = state.items[existingCartItemsIndex];

        let updateItems;
    if (existingCartItems) {
        const updatedItems = {
            ...existingCartItems,
            quantity : existingCartItems.quantity + action.item.quantity
        };
        updateItems = [...state.items];
        updateItems[existingCartItemsIndex] = updatedItems;
    }else{
        updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalQuantity: updatetotalQuantity,
    };
  }
  return defaultCartValue;
};
const CartProvider = (props) => {
  const [cartState, dispatchItems] = useReducer(reducerFun, defaultCartValue);

  const addItemstoCart = (item) => {
    dispatchItems({ type: "ADD-ITEMS", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalQuantity: cartState.totalQuantity,
    addItems: addItemstoCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
