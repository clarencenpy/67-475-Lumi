import React from 'react'
import s from './FakeChrome.scss'
import left from './assets/LeftChrome.jpg'
import right from './assets/RightChrome.jpg'
import center from './assets/CenterChrome.jpg'

export const FakeChrome = () => (
  <div>
    <img src={left} className={s.left} />
    <img src={center} className={s.center} />
    <img src={right} className={s.right} />
  </div>
)

export default FakeChrome
