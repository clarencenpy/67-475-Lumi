import React from 'react'
import classes from './MetricChart.scss'
import Graph from 'react-chartist'

export const MetricChart = ({ data, type, title }) => (
  <div className={classes.chartContainer}>
    <Graph 
      data={data} 
      type={type}
      className={classes.chart} />
    <div className={classes.chartTitle}>{title}</div>
  </div>
)

export default MetricChart
