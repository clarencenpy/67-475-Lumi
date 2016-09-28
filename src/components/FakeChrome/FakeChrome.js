import React from 'react'
import s from './FakeChrome.scss'
import left from './assets/LeftChrome.jpg'
import right from './assets/RightChrome.jpg'
import center from './assets/CenterChrome.jpg'
import activeIcon from './assets/Icon-active.png'
import inactiveIcon from './assets/Icon-inactive.png'

export const FakeChrome = (props) => (
  <div>
    <div className={s.url}>{props.url}</div>
    <div className={s.title}>{props.title}</div>
    <div className={s.iconClickTarget} onClick={props.clickLumiHandler}>
      <img className={s.icon} src={inactiveIcon} />
    </div>
    <div className={s.fbClickTarget}></div>
    <div className={s.gClickTarget}></div>
    <img src={left} className={s.left} />
    <img src={center} className={s.center} />
    <img src={right} className={s.right} />
  </div>
)

export default FakeChrome
