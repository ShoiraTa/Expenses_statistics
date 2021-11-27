import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';

const ExpenseItem = (props) => {
  const [title, newTitle] = useState(props.expenseTitle);

  const clickHandler = () => {
    newTitle('Expired');
  };

  return (
    <>

    <Card className = "expense-item">
      <ExpenseDate expenseDate = {props.expenseDate}/>
      <div className = "expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expensePrice}</div>
        <button onClick = {clickHandler}>clickme</button>
      </div>
    </Card>
    </>
  );
};

export default ExpenseItem;
