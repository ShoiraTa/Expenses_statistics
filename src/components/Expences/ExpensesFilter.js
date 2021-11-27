import React, { useState } from 'react';
import './expensesFilter.css';

function ExpensesFilter({ selectedYear, onChangeFilteredYear }) {
  const [currentYear, setCurrentYear] = useState(selectedYear);

  const currentYearHandler = (e) => {
    e.preventDefault();
    setCurrentYear(e.target.value);
    onChangeFilteredYear(e.target.value);
  };
  return (
    <div className= "filter-container">
      <p>Filter by year</p>
      <select name="year" id="year" defaultValue = {currentYear} onChange = {currentYearHandler}
>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
}

export default ExpensesFilter;
