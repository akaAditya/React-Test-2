import React from 'react'
import MedicineEntriesForm from './MedicineEntriesForm'

const NewMedicineList = (props) => {
    const medicineDataHandler = (existingMedicineList)=>{
        const medicineData = {
            ...existingMedicineList,
            id : Math.random().toString()
        }
        props.onAddMedicines(medicineData);
        
    }
  return (
    <div>
        <MedicineEntriesForm onSaveMedicineData={medicineDataHandler}/>
        
    </div>
  )
}

export default NewMedicineList;