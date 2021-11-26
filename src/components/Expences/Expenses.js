import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import Card from '../UI/Card.js';

const Expenses = () => {
  const expenses = [
    {
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
    },
  ];
  return (
    <Card className= "expenses-container">
      <ExpenseItem
        expenseDate={expenses[0].expenseDate}
        expensePrice={expenses[0].expensePrice}
        expenseTitle={expenses[0].expenseTitle}
     />
     <ExpenseItem
        expenseDate={expenses[1].expenseDate}
        expensePrice={expenses[1].expensePrice}
        expenseTitle={expenses[1].expenseTitle}
     />
     <ExpenseItem
        expenseDate={expenses[2].expenseDate}
        expensePrice={expenses[2].expensePrice}
        expenseTitle={expenses[2].expenseTitle}
     />
    </Card>
  );
};

export default Expenses;
