import { React, useState } from 'react'
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "../UI/Card.js";



const ExpenseItem = (props) => {
  //set the start when we click on the click handler to show setTitle Value 
  const [title, setTitle] = useState(props.title)
  
  function clickHandler() {
    setTitle('hello, dude')
  
    setTimeout(() => setTitle(title), 2000) // after 2 seconds, setTitle
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price" >{props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;