import React from 'react'
import { IndexLink, Link } from 'react-router'
import s from './Header.scss'

export const Header = () => (
  <div className={s.navbarContainer}>

    <div className={s.leftContainer}>
      <Link to="/"
        className={[s.logo]}>
        Lumi
      </Link>
    </div>

    <div className={s.centerContainer}>
      <IndexLink to='/'
        className={s.link}
        activeClassName={s.activeRoute}>
        Dashboard
      </IndexLink>
      <Link to='/versions'
        className={s.link}
        activeClassName={s.activeRoute}>
        Alerts
      </Link>
      <Link to='/search'
        className={s.link}
        activeClassName={s.activeRoute}>
        Search
      </Link>
    </div>

    <div className={s.rightContainer}>
      <Link to='/account'
        className={s.link}
        activeClassName={s.activeRoute}>
        United States
      </Link>
      <Link to='/logout'
        className={s.link}
        activeClassName={s.activeRoute}>
        Logout
      </Link>
    </div>
  </div>
)

export default Header
