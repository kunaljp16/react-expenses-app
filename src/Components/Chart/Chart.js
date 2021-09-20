import React from "react";
import "./Chart.scss";
import ChartBar from './ChartBar';  

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => {
       return <ChartBar
          key={data.label}
          value={data.value}
          label={data.label}
          maxValue={totalMaximum}
        />
      })}
    </div>
  );
};

export default Chart;
