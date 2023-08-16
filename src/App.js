import React from "react";
import NewMedicineList from "./components/medicineEntry/NewMedicineList";
import MedicineHouse from "./components/MedicineStore/MedicineHouse";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/cartStore/CartProvider";

function App() {
  const [medicines, setMedicines] = useState("");
  const [isItemShow, setIsItemShow] = useState(false)

  const showCartItemHandler = () =>{
    setIsItemShow(true)
  }

  const hideCartItemHandler = () =>{
    setIsItemShow(false)
  }

  const saveMedicineInList = (medicine) => {
    setMedicines((prev) => {
      return [medicine, ...prev];
    });
    console.log(medicines);
  };

  return (
    <React.Fragment>
      <CartProvider>
        <div>Medicine Store</div>
        <NewMedicineList onAddMedicines={saveMedicineInList} />
        <MedicineHouse items={medicines} />
        {isItemShow && <Cart onClose={hideCartItemHandler}/>}
        <button onClick={showCartItemHandler}>Cart</button>
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
