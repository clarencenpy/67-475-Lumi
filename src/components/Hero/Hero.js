import React from 'react'
import s from './Hero.scss'
import heroImage from './assets/Lumi_noborder-01.png'


export const Hero = (props) => (
  <div className={s.heroContainer}>
    <img className={s.heroImage} src={heroImage} />
    <div className={s.heroText}>
      <div className={s.large}>{props.mainText}</div>
      <div className={s.small}>{props.subText}</div>
    </div>
  </div>
)

export default Hero
