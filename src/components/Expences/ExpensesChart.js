import React from 'react';
import Chart from '../Chart/Chart';

function ExpensesChart({ expenses }) {
  const dataPoint = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  /* eslint-disable-next-line */
  for (const expense of expenses) {
    const expenseMonth = expense.expenseDate.getMonth();
    let intPriceValue = expense.expensePrice;
    intPriceValue = parseInt(intPriceValue, 10);
    dataPoint[expenseMonth].value += intPriceValue;
  }

  return (
    <Chart dataPoint ={dataPoint} />
  );
}

export default ExpensesChart;
