// concepts: onClick - onSubmit, useState(different ways to manage states) -- two way binding with value=""

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //useState to be able to capture the information typed.
  // this way is better since yu manage state changes separately from each other
  //STATE OF THE INFORMATION ENTERED
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //HANDLERS TO RECORD THE INPUTS
  //state that will read the values of usestate
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  //SUBMIT HANDLER THAT WILL SUBMIT THE DATA IN IT
  const submitHandler = (event) => {
    event.preventDefault(); //event.preventDefault to do no reload when clicked

    //object that contains the expense data information to be passed to next component with event handler
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate), //WILL CONVERT IT INTO A DATE OBJECT CORRECT FORMAT
    };

    props.onSaveExpenseData(expenseData); // we add expenseData as a parameter to submit the same information to the parent elements
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
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
            value={enteredAmount} //use for two way binding so value can be seen on input field
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
