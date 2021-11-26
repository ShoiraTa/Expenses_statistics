import React from 'react';
import './newExpense.css';
import NewExpenseFrom from './NewExpenseForm.js';

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expenseData);
  };

  return (
<div className = "new-expense">
      <NewExpenseFrom onSaveExpenseData = {saveExpenseHandler}/> </div>
  );
};

export default NewExpense;