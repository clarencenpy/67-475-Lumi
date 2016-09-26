import React from 'react'
import s from './Button.scss'

import classnames from 'classnames'

const cx = classnames.bind(s)

export const Button = (props) => (
  <div className={cx(s.button, {
    [s.marginTop]: props.marginTop,
    [s.block]: props.block,
    [s.large]: props.large,
    [s.primary]: props.primary,
    [s.warning]: props.warning
  })} onClick={props.onClick}>
    {props.children}
  </div>
)

export default Button
