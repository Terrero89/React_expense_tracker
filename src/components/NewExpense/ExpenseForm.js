// concepts: onClick - onSubmit, useState(different ways to manage states) -- two way binding with value=""

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //useState to be able to capture the information typed.
  //*TODO: We can create an object to avoid using all inputs separately
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
//title will be equal to each keystroke with the eevent object
  
  //?state that will read the values of usestate
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //? evemt handler needs a event object (browser object.)
  const submiHandler = (event) => {
    event.preventDefault(); //event.preventDefault to do no reload when clicked

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData); // no longer needed since we are executing the custom event from new expense
    props.onSaveExpenseData(expenseData); // we add expenseData as a parameter to submit the same information to the parent elements
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submiHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
