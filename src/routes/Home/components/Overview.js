import React from 'react'
import classes from './Overview.scss'
import Metric from './Metric';
import MetricChart from './MetricChart'

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}

export const Overview = () => (
    <div className={classes.wrapper}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Your Investments</h1>
      </div>
      <div className={classes.metricContainer}>
        <Metric value={10.83} subtitle='% Returns' />
        <Metric value={83} subtitle='Loans' />
        <Metric value={10} subtitle='Fully repaid' />
        <Metric value={1} subtitle='Charge off' />
        <Metric value={1} subtitle='Deliquent' />
      </div>
      <div className={classes.chartContainer}>
        <MetricChart 
          data={data} 
          title={'Total Amount Invested'}
          type={'Line'}/>
        <MetricChart 
          data={data} 
          title={'Amount Invested Per Risk Grade'}
          type={'Bar'}/>
        <MetricChart 
          data={data} 
          title={'Total Repayments Received'}
          type={'Line'}/>
      </div>
    </div>
)

export default Overview;
