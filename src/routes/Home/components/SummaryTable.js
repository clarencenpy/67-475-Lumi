import React from 'react'
import _ from 'underscore'
import classnames from 'classnames'

import s from './SummaryTable.scss'

const cx = classnames.bind(s)

export const SummaryTable = (props) => (
  <div>

    <div className={s.summaryRow}>
      <div className={cx(s.summaryLabel, s.spacer)}>Summary</div>
      <div className={s.summaryLabel}>Business Process</div>
      <div className={s.summaryLabel}>Marketing</div>
      <div className={s.summaryLabel}>Profiling</div>
      <div className={s.summaryLabel}>Shared with 3rd Party</div>
    </div>

    {
      _.map(props.data, (value, key) => (
          <Row label={key} items={value} />
      ))

    }

  </div>
)

const Row = (props) => (
  <div className={s.summaryRow}>
    <div className={s.summaryLabel}>{props.label}</div>

    {
      _.map(props.items, (value, key) => (
        <RowItem data={value} key={key} />
      ))
    }
  </div>
)

const RowItem = (props) => {
  return (
    <div className={cx(s.summaryItem, {[s.applies]: props.data.applies})}>
      {
        props.data.content
      }
    </div>
  )
}

export default SummaryTable
