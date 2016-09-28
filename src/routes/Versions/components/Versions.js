import React from 'react'
import s from './Versions.scss'
import Diff from 'text-diff'

const comparison = []

comparison.push({old: `
  <span>Information we collect when you are signed in to Google, may be associated with your Google Account. When information is associated with your Google Account, we treat it as personal information. For more information about how you can access, manage or delete information that is associated with your Google Account, visit the Transparency and choice section of this policy.
</span>`,
  new: `
    <span>Information we collect when you are signed in to Google, in addition to information we obtain about you from partners, may be associated with your Google Account. When information is associated with your Google Account, we treat it as personal information. For more information about how you can access, manage or delete information that is associated with your Google Account, visit the Transparency and choice section of this policy.
    </span>
  `
})

comparison.push({old: `
  <h2>Transparency and Choice</h2>
  <span>People have different privacy concerns. Our goal is to be clear about what information we collect, so that you can make meaningful choices about how it is used. For example, you can:</span>
  <ul>
    <li>Visit your Google Account History for settings that allow you to control the collection of personal information from Google services, such as Search, YouTube and Location History.</li>
    <li>Review and control certain types of information tied to your Google Account by using Google Dashboard.</li>
    <li>View and edit your preferences about the Google ads shown to you on Google and across the web, such as which categories might interest you, using Ads Settings. You can also opt out of certain Google advertising services here.</li>
  </ul>`,
  new: `
  <h2>Transparency and Choice</h2>
  <span>People have different privacy concerns. Our goal is to be clear about what information we collect, so that you can make meaningful choices about how it is used. For example, you can:</span>
  <ul>
    <li>Review and update your Google activity controls to decide what types of data, such as videos you’ve watched on YouTube or past searches, you would like saved with your account when you use Google services.</li>
    <li>Review and control certain types of information tied to your Google Account by using Google Dashboard.</li>
    <li>View and edit your preferences about the Google ads shown to you on Google and across the web, such as which categories might interest you, using Ads Settings. You can also opt out of certain Google advertising services here.</li>
  </ul>`
})

comparison.push({old: `
    <h2>Other useful privacy and security related materials</h2>
    <ul>
      <li><a href="https://www.google.com/policies/privacy/partners/">Page</a> that explains what data is shared with Google when you visit websites that use our advertising, analytics and social products.</li>
      <li>Google’s safety center, which provides information on how to stay safe and secure online.</li>
    </ul>
`,
  new: `
    <h2>Other useful privacy and security related materials</h2>
    <ul>
      <li><a href="https://www.google.com/policies/privacy/partners/">Page</a> that explains what data is shared with Google when you visit websites that use our advertising, analytics and social products.</li>
      <li>The <a href="https://myaccount.google.com/privacycheckup/1?hl=en&pli=1">Privacy Checkup</a> tool, which makes it easy to review your key privacy settings.</li>
      <li>Google’s safety center, which provides information on how to stay safe and secure online.</li>
    </ul>
  `
})

const Card = (props) => (
  <div className={s.card}>
    <div className={s.thumbnail}>
      <img src={props.imageUrl} />
    </div>
    <div className={s.content}>
      <h2>{props.title}</h2>
      <p>Privacy Policy as of <br/> {props.date} <br/> <span className={s.link}>View Full</span>
      </p>
    </div>
  </div>
)

const diff = new Diff()
const decoder = require('html-entities').AllHtmlEntities
const DiffSegment = (props) => {
  let d = diff.main(props.old, props.new)
  diff.cleanupSemantic(d)
  d = diff.prettyHtml(d)
  d = decoder.decode(d)
  return (
    <div className={s.diffPanel} dangerouslySetInnerHTML={{__html: d}}></div>
  )
}

export const Versions = () => {

  return (
    <div className={s.root}>
      <div className={s.left}>
        <div className={s.headerText}>Before</div>
        <Card imageUrl="https://www.seeklogo.net/wp-content/uploads/2015/09/new-google-favicon-logo.png"
              title="Google"
              date="Jun 30, 2015"
        />
      </div>

      <div>
        <div className={s.headerText}>Differences</div>
        {
          comparison.map(c => (
            <DiffSegment old={c.old} new={c.new} />
          ))
        }
      </div>

      <div className={s.right}>
        <div className={s.headerText}>After</div>
        <Card imageUrl="https://www.seeklogo.net/wp-content/uploads/2015/09/new-google-favicon-logo.png"
              title="Google"
              date="Aug 19, 2015"
        />
      </div>
    </div>
  )
}

export default Versions
