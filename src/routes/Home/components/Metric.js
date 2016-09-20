import React from 'react'
import classes from './Metric.scss'

export const Metric = ({value, subtitle}) => (
  <div className={classes.metric}>
    <div className={classes.value}>{value}</div>
    <div className={classes.subtitle}>{subtitle}</div>
  </div>
)

export default Metric
