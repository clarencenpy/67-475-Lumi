import React from 'react'
import s from './Dashboard.scss'
import Hero from '../../../components/Hero'
import CompanyCard from '../../../components/CompanyCard'

const Notification = (props) => (
  <div className={s.notification}>
    <div className={s.body}>
      <img className={s.image} src={props.imageUrl} />
      <div className={s.textbox}>
        <div className={s.title}>{props.title}</div>
        <div className={s.date}>Policy updated {props.date}</div>
      </div>
    </div>
    <div className={s.actionButtons}>
      <div className={s.button + " " + s.read}>Read</div>
      <div className={s.button + " " + s.dismiss}>Dismiss</div>
    </div>
  </div>
)

export const Dashboard = (props) => {
  return (
    <div>
      <Hero mainText="Lumi Dashboard" subText="Monitor and Manage the Apps you use" />

      <div className={s.root}>

        <div className={s.topSection}>
          <div className={s.notificationsPanel}>
            <div className={s.headerText}>Updated<span className={s.countBubble}>{props.notifications.length}</span></div>
            {
              props.notifications.map(n => (
                <Notification imageUrl={n.imageUrl} title={n.title} date={n.date} />
              ))
            }
          </div>
        </div>

        <div className={s.bottomSection}>
          <div className={s.headerText}>Your Apps</div>
          <div className={s.appsList}>
            {
              props.apps.map(a => (
                <CompanyCard selected={false}
                             title={a.title}
                             text={a.text}
                             imageUrl={a.imageUrl}
                />
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
