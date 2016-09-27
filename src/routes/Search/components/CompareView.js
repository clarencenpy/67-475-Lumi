import React from 'react'
import s from './CompareView.scss'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'
import _ from 'underscore'

const cx = classnames.bind(s)

const getNumCols = (results) => {
  let numSelected = 0
  _.each(results, result => {
    if (result.selected) numSelected++
  })
  return numSelected
}

const RowItem = (props) => {
  if (!props.summary || !props.summary[props.metric]) return (<td></td>)
  const fieldData = props.summary[props.metric]
  let contents
  switch (fieldData.type) {
    case 'YES':
      contents = (<FontAwesome name="check" size="2x"/>)
      break
    case 'NO':
      contents = null;
      break
    case 'OPT-IN':
      contents = (<span className={s.opt}>Opt-In</span>)
      break
  }

  return (
    <td className={s.rowItem}>
      { contents }
    </td>
  )
}

export const CompareView = (props) => {

  const selectedCompanies = props.results.filter(result => {
    return result.selected
  })

  return (
    <div className={s.root}>
      <table className={s.table}>
        {/*Header*/}
        <thead>
        <tr>
          <th>How your Personal Information is used</th>
          {
            selectedCompanies.map(c => (
              <th>
                <img src={c.imageUrl} width="50" height="50" />
                <div>{c.title}</div>
              </th>
            ))
          }
        </tr>
        </thead>

        {/*Rows*/}
        <tbody>
        <tr>
          <td>
            <div><strong>Everyday Business Purpose</strong></div>
            <div>Such as processing your transactions, sending you email notifications, delivery etc.</div>
          </td>
          {
            selectedCompanies.map(c => (
              <RowItem summary={c.summary} metric={'ebp'} />
            ))
          }
        </tr>

        <tr>
          <td>
            <div><strong>Marketing Purpose</strong></div>
            <div>To market their products and services to you</div>
          </td>
          {
            selectedCompanies.map(c => (
              <RowItem summary={c.summary} metric={'mp'} />
            ))
          }
        </tr>

        <tr>
          <td>
            <div><strong>Profiling Purpose</strong></div>
            <div>Uses data mining and analytics to generate further insights about you based on your interactions with their products. Includes transactions, messages, preferences etc.</div>
          </td>
          {
            selectedCompanies.map(c => (
              <RowItem summary={c.summary} metric={'pp'} />
            ))
          }
        </tr>

        <tr>
          <td>
            <div><strong>Affiliate's Business Purpose</strong></div>
            <div>For their affiliates to provide you with services</div>
          </td>
          {
            selectedCompanies.map(c => (
              <RowItem summary={c.summary} metric={'abp'} />
            ))
          }
        </tr>

        <tr>
          <td>
            <div><strong>Third Party Marketing</strong></div>
            <div>For other companies to perform targeted advertising of their products and services</div>
          </td>
          {
            selectedCompanies.map(c => (
              <RowItem summary={c.summary} metric={'tpm'} />
            ))
          }
        </tr>

        <tr>
          <td>
            <div><strong>Security</strong></div>
            <div>Data is encrypted in transit and storage, with appropriate measures to anonymise sensitive information</div>
          </td>
          {
            selectedCompanies.map(c => (
              <RowItem summary={c.summary} metric={'sec'} />
            ))
          }
        </tr>

        </tbody>

      </table>
    </div>
  )
}

export default CompareView
