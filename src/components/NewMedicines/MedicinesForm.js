import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [eneteredQuantity, setEnteredQuantity] = useState("");

  const addTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const addPrice = (event) => {
    setEnteredAmount(event.target.value);
  };

  const addQuantity = (event) => {
    setEnteredQuantity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      description: enteredDescription,
      price: +enteredAmount,
      quanitty: +eneteredQuantity
    };
    props.onSubmitExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDescription("")
    setEnteredAmount("");
    setEnteredQuantity("")
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Medicine Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={addTitle}
            />
            <label>Description</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={addTitle}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              id="price"
              value={enteredAmount}
              onChange={addPrice}
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="number"
              value={eneteredQuantity}
              onChange={addQuantity}
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
