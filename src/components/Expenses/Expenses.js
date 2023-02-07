import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const date = new Date().getMonth()
  const [filteredYear, setFilteredYear] = useState(date);
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
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          // CONTROLLED COMPONENT WITH THE SELECTED AND ONCHANGEFILTER
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
