import React, { useState } from "react";
import ExpenseForm from "./MedicinesForm";

const NewExpenseForm = (props)=>{
    const [hiddenForm, setShowForm] = useState(false);

    const addExpenseDataHandler = (addExpenseData)=>{
        const newExpenseGetData = {
            ...addExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(newExpenseGetData);
        setShowForm(false);
    }

    return (
        <>
            <div>
                <ExpenseForm onSubmitExpenseData= {addExpenseDataHandler}/>
            </div>
        </>
    );
}

export default NewExpenseForm;