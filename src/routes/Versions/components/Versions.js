import React from 'react'
import VersionHistory from './VersionHistory.js'
import s from './Versions.scss'

export const Versions = () => (
  <div className={s.root}>
    <VersionHistory />
  </div>
)

export default Versions
