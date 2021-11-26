import React, { useState } from 'react';
import './newExpenseForm.css';

const NewExpenseFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredDate, setEnteredDate] = useState();
  const [enteredAmount, setEnteredAmount] = useState();

  // const [enteredValue, setEnteredValue] = useState({
  //   enteredTitle: '',
  //   enteredDate: '',
  //   enteredAmount: '',
  // });

  const titleChageHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredValue({
    //   ...enteredValue,
    //   enteredTitle: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredValue({
    //   ...enteredValue,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredValue({
    //   ...enteredValue,
    //   enteredDate: event.target.value,
    // });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseData = [
      {
        title: enteredTitle,
        date: enteredDate,
        amount: enteredAmount,
      },
    ];
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new_expense__constrols">
        <div className="new_expense__constrol">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChageHandler} />
        </div>
        <div className="new_expense__constrol">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new_expense__constrol">
          <label>Date</label>
          <input type="date" min="2019-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseFrom;
