import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

function Chart({ dataPoint }) {
  const dataPointValue = dataPoint.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValue);

  return (
    <div className = 'chart'>
      {dataPoint.map((data) => (
        <ChartBar
        value = {data.value}
        maxValue = {maxValue}
        key= {data.label}
        label= {data.label} />
      ))}
    </div>
  );
}

export default Chart;
