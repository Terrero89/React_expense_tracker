import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "../expenses/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  //todo: USESTATE WILL BE USED IN THE COMPONENT THE STATE WILL CHANGE
  //TODO: Function that will be done from parent to reflect in child component
  //TODO: then pass function filterChangeHandler to child component ExpenseFilter to point to this function
  //todo:  filtered year will be reflected in the default value of the useState('2020') with value in child component ExpenseFilter
  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.JS");
    // console.log(selectedYear);
    //?instead of logging the value we add the change of value with state

    setFilteredYear(selectedYear); //? WILL BE EQUAL TO THE VALUE OF THE SELECTED YEAR ARGUMENT IN PARTENT
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No Expenses Found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          // CONTROLLED COMPONENT WITH THE SELECTED AND ONCHANGEFILTER
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
