import React from 'react'
import MedicineInventory from './MedicineInventory';

const MedicineHouse = (props) => {
    // console.log("MedicineHouse", props.items[0].title)
    if(props.items.length === 0){
        return <p>Empty Inventory</p>;
    }
    else if(props.items.length >= 1)
    return (
        <ul>
          {props.items.map((medicine) => {
            return (
              <MedicineInventory
                key={medicine.id}
                id={medicine.id}
                title={medicine.title}
                description={medicine.description}
                price={medicine.price}
                quantity={medicine.quantity}
              />
            );
          })}
        </ul>
      );
}

export default MedicineHouse