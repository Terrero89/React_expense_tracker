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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          // CONTROLLED COMPONENT WITH THE SELECTED AND ONCHANGEFILTER
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
