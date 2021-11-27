import { useState } from 'react';
import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import Card from '../UI/Card.js';
import NewExpense from '../NewExpense/NewExpense';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesChart from './ExpensesChart.js';

const Expenses = () => {
  const [expenses, setExpenses] = useState(
    [{
      expenseDate: new Date(2021, 1, 12),
      expensePrice: 268,
      expenseTitle: 'Car ensurance',
      id: 1,
    },
    {
      expenseDate: new Date(2021, 3, 12),
      expensePrice: 110,
      expenseTitle: 'Dinner',
      id: 2,
    },
    {
      expenseDate: new Date(2021, 2, 12),
      expensePrice: 52,
      expenseTitle: 'Cheese',
      id: 3,
    },
    {
      expenseDate: new Date(2021, 10, 12),
      expensePrice: 80,
      expenseTitle: 'Toilet paper',
      id: 4,
    }],
  );

  const addExpenseHandler = (expenseData) => {
    const date = new Date(expenseData.expenseDate);
    expenseData.expenseDate = date;
    setExpenses([...expenses, expenseData]);
  };

  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredYearHandler = (setYear) => {
    setFilteredYear(setYear);
  };

  const fExpenses = expenses.filter((e) => e.expenseDate.getFullYear().toString() === filteredYear);

  let expensesContent = <p>No Expenses found </p>;

  if (fExpenses.length > 0) {
    expensesContent = fExpenses.map((item) => (
    <ExpenseItem key = {item.id} expenseDate={item.expenseDate}
    expensePrice={item.expensePrice}
    expenseTitle={item.expenseTitle}/>));
  }

  return (
    <>
    <NewExpense onAddExpenses={addExpenseHandler}
    />
    <ExpensesFilter selectedYear = {filteredYear}
     onChangeFilteredYear = {filteredYearHandler}/>
     <ExpensesChart expenses = {fExpenses} />
    <Card className= "expenses-container">
    {expensesContent}
    </Card>
    </>
  );
};

export default Expenses;
