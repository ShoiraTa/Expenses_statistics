import { useState } from 'react';
import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import Card from '../UI/Card.js';
import NewExpense from '../NewExpense/NewExpense';

const Expenses = () => {
  const [expenses, setExpenses] = useState(
    [{
      expenseDate: new Date(2021, 2, 12),
      expensePrice: 268,
      expenseTitle: 'Car ensurance',
    },
    {
      expenseDate: new Date(2021, 2, 12),
      expensePrice: 110,
      expenseTitle: 'Dinner',
    },
    {
      expenseDate: new Date(2021, 2, 12),
      expensePrice: 52,
      expenseTitle: 'Cheese',
    },
    {
      expenseDate: new Date(2021, 2, 12),
      expensePrice: 8,
      expenseTitle: 'Toilet paper',
    }],
  );

  const addExpenseHandler = (expenseData) => {
    const date = new Date(expenseData.expenseDate);
    expenseData.expenseDate = date;
    console.log(expenseData);
    setExpenses([...expenses, expenseData]);
  };

  return (
    <>
        <NewExpense onAddExpenses={addExpenseHandler} />
    <Card className= "expenses-container">
      {expenses.map((item) => {
        console.log(item);
        return (<ExpenseItem expenseDate={item.expenseDate}
        expensePrice={item.expensePrice}
        expenseTitle={item.expenseTitle}/>);
      })

        }
    </Card>
    </>
  );
};

export default Expenses;
