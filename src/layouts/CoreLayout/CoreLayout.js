import React from 'react'
import Header from '../../components/Header'
import FakeChrome from '../../components/FakeChrome'
import s from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className={s.wrapper}>
    <FakeChrome />
    <Header />
    <div className={s.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
