import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // we now save and keep the props to use.
  // enteredExpenseData is just a name for the data sent from the form in ExpenseForm
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //?this is all the data together from the submitted form
      ...enteredExpenseData,
      id: Math.random().toString(), //dynamic id for now.
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* we add a prop to expenseForm */}
      {/* we pass the event handler to the save data */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
