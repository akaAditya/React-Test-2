import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Medicines/Medicines';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import NewExpenseForm from './components/NewMedicines/NewMedicinesForm'

function App() {
  const [isItemShow, setIsItemShow] = useState(false)
  const [newItems, setNewItems] = useState(false)

  const showCartItemHandler = () =>{
    setIsItemShow(true)
  }

  const hideCartItemHandler = () =>{
    setIsItemShow(false)
  }

  const addNewItemHanlder = ()=>{
    setNewItems(true)
  }
  return (
    <CartProvider>
      {isItemShow && <Cart onClose={hideCartItemHandler}/>}
      <Header onShowCart={showCartItemHandler}/>
      <main>
        <NewExpenseForm />
        <Meals onAddItems={addNewItemHanlder}/>
      </main>
    </CartProvider>
  );
}

export default App;
