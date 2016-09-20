import React from 'react'
import classes from './LoansSummary.scss'
import LoansTable from 'components/LoansTable'
import Metric from './Metric'

export const LoansSummary = () => (
  <div className={classes.wrapper}>
    <div className={classes.titleContainer}>
      <h1 className={classes.title}>Your Loans</h1>
    </div>
    <div className={classes.loansContainer}>
      <LoansTable />
    </div>
  </div>
)

export default LoansSummary;
