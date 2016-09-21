import React from 'react'
import s from './HomeView.scss'
import data from './summaryData.js'
import SummaryTable from './SummaryTable.js'

export const HomeView = () => (
  <div className={s.root}>

    <SummaryTable data={data} />

  </div>
)

export default HomeView
