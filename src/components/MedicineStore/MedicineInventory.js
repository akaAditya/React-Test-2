import React from "react";
import "./MedicineInventory.css";
import { useContext } from "react";
import CartContext from "../cartStore/cart-context";
import { useState } from "react";

const MedicineInventory = (props) => {
  const [count, setCount] = useState(props.quantity);
  //   console.log("medicineInvem=ntory", props.items[0].title);
  const cartCtx = useContext(CartContext);
  // const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = () => {
    if (props.quantity === 0) {
      setCount(()=>(<p>Out of Stock</p>));
    } else if(props.quantity > 0){
      setCount((prev) => prev - 1);
      if(count === 0){
        return <p>Out of Stock</p>
      }
    }
    cartCtx.addItems({
      id: props.id,
      title: props.title,
      description: props.description,
      price: props.price,
      quantity: props.quantity,
    });
  };
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.title}</td>
          <td>{props.description}</td>
          <td>{props.price}</td>
          <td>{count}</td>
          <td>
            <input
              type="button"
              value="Add to Cart"
              onClick={addToCartHandler}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MedicineInventory;
