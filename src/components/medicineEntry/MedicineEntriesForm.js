import React from "react";
import { useState } from "react";

const MedicineEntriesForm = (props) => {
  const [medName, setMedName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const medNameaHandler = (event) => {
    setMedName(event.target.value);
  };

  const medDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const medPriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const medQuantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const MedicineData = {
      title: medName,
      description: description,
      price: price,
      quantity: quantity,
    };
    props.onSaveMedicineData(MedicineData);
    setMedName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Medicine Name</label>
        <input type="text" value={medName} onChange={medNameaHandler} />
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={medDescriptionHandler}
        />
        <label>Price</label>
        <input type="number" value={price} onChange={medPriceHandler} />
        <label>Quantity</label>
        <input type="number" value={quantity} onChange={medQuantityHandler} />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default MedicineEntriesForm;
