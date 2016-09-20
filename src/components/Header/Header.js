import React from 'react'
import { IndexLink, Link } from 'react-router'
import s from './Header.scss'

export const Header = () => (
  <div className={s.navbarContainer}>

    <div className={s.leftContainer}>
      <Link to="/"
        className={[s.logo]}>
        Starter
      </Link>
    </div>

    <div className={s.centerContainer}>
      <IndexLink to='/'
        className={s.link}
        activeClassName={s.activeRoute}>
        Tab1
      </IndexLink>
      <Link to='/counter'
        className={s.link}
        activeClassName={s.activeRoute}>
        Tab2
      </Link>
      <Link to='/invest'
        className={s.link}
        activeClassName={s.activeRoute}>
        Tab3
      </Link>
    </div>

    <div className={s.rightContainer}>
      <Link to='/account'
        className={s.link}
        activeClassName={s.activeRoute}>
        Username
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
