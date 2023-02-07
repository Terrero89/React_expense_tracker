import React from "react";

import "./ExpenseFilter.css";

//TODO: THIS PROP WE GOING TO USE HERE FROM EXPENSE.JS
const ExpensesFilter = (props) => {

    //TODO  WILL HANDLE THE CHANGE ON FILTER SELECTION ON CHANGE IN SELECT HTML
    const filterHandler = (event) => {
      // console.log(event.target.value)
      //?THIS PROP WE GOING TO USE HERE FROM EXPENSE.JS
      props.onChangeFilter(event.target.value); //? this will use onChangeFilter as a function that receives the event and forwards the event.target.value
    }
  
  //?PROP SELECTED IS USED TO ADD THE DEFAULT VALUE OF THE USE STATE IN PARENT 
    return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.selected} onChange={filterHandler}>
          
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    );
};

export default ExpensesFilter;
