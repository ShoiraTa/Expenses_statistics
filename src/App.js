import Expenses from './components/Expences/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const addExpenseHandler = (expenseData) => {
    console.log('app', expenseData);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <Expenses />
    </div>
  );
};
export default App;
