import React from 'react'
import s from './CompanyCard.scss'
import classnames from 'classnames'

const cx = classnames.bind(s)

export const CompanyCard = (props) => (
  <div className={cx(s.card, {[s.selected]: props.selected})}>
    <div className={s.thumbnail}>
      <img src={props.imageUrl} />
    </div>
    <div className={s.content}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  </div>
)

export default CompanyCard
