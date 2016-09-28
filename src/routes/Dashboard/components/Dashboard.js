import React from 'react'
import s from './Dashboard.scss'
import Hero from '../../../components/Hero'
import CompanyCard from '../../../components/CompanyCard'
import Toggle from 'react-toggle'

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
      <div className={s.button + " " + s.read} onClick={props.readCallback}>Read</div>
      <div className={s.button + " " + s.dismiss}>Dismiss</div>
    </div>
  </div>
)

const PreferenceTable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th className={s.preferenceLabel} >Everyday Business Purpose</th>
          <td>
            <Toggle defaultChecked={props.preferences.ebp}
                    onChange={props.updatePreferences.bind(null, 'ebp')} />
          </td>
        </tr>

        <tr>
          <th className={s.preferenceLabel}>Marketing Purpose</th>
          <td>
            <Toggle defaultChecked={props.preferences.mp}
                    onChange={props.updatePreferences.bind(null, 'mp')} />
          </td>
        </tr>

        <tr>
          <th className={s.preferenceLabel}>Profiling Purpose</th>
          <td>
            <Toggle defaultChecked={props.preferences.pp}
                    onChange={props.updatePreferences.bind(null, 'pp')} />
          </td>
        </tr>

        <tr>
          <th className={s.preferenceLabel}>Shared with Affiliates</th>
          <td>
            <Toggle defaultChecked={props.preferences.abp}
                    onChange={props.updatePreferences.bind(null, 'abp')} />
          </td>
        </tr>

        <tr>
          <th className={s.preferenceLabel}>Shared with Third Party Marketers</th>
          <td>
            <Toggle defaultChecked={props.preferences.tpm}
                    onChange={props.updatePreferences.bind(null, 'tpm')} />
          </td>
        </tr>

        <tr>
          <th className={s.preferenceLabel}>Shared with Government Agencies</th>
          <td>
            <Toggle defaultChecked={props.preferences.gov}
                    onChange={props.updatePreferences.bind(null, 'gov')} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export const Dashboard = (props) => {
  return (
    <div>
      <Hero mainText="Lumi Dashboard" subText="Monitor and Manage the Apps you use" />

      <div className={s.root}>

        <div className={s.left}>
          <div className={s.headerText}>Privacy Preferences</div>
          <div className={s.preferencesPanel}>
            <PreferenceTable preferences={props.preferences} updatePreferences={props.updatePreferences} />
          </div>
        </div>

        <div className={s.right}>
          <div className={s.notificationsPanel}>
            <div className={s.headerText}>Updated<span className={s.countBubble}>{props.notifications.length}</span></div>
            {
              props.notifications.map(n => {
                return (
                  <Notification imageUrl={n.imageUrl} title={n.title} date={n.date} readCallback={props.history.push.bind(null, '/versions')} />
                )
              })
            }
          </div>
          <div>
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

    </div>
  )
}

export default Dashboard
