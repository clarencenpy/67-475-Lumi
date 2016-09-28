import React from 'react'
import Header from '../../components/Header'
import FakeChrome from '../../components/FakeChrome'
import s from './CoreLayout.scss'
import '../../styles/core.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CompareView from '../../routes/Search/components/CompareView'
import Icon from '../../components/Hero/assets/Lumi_noborder-01.png'

const LumiWidget = (props) => {
  const summary = [{
    title: 'Lumi',
    text: 'Tools',
    imageUrl: Icon,
    selected: true,
    summary: {
      ebp: {
        type: 'NO'
      },
      mp: {
        type: 'NO'
      },
      pp: {
        type: 'NO'
      },
      abp: {
        type: 'NO',
      },
      tpm: {
        type: 'NO'
      },
      gov: {
        type: 'NO'
      }
    }
  }]
  return (
    <div className={s.lumiWidget} >
      <CompareView results={summary} />
      <br/><br/>
    </div>
  )
}

const CoreLayout = (props) => {
  return (
    <div className={s.wrapper}>
      <FakeChrome url={props.coreData.fakeUrl}
                  title={props.coreData.fakeTitle}
                  lumiActive={props.coreData.lumiActive}
                  startLumi={props.startLumi}
                  goFacebook={props.goFacebook}
                  goGoogle={props.goGoogle}
      />

      <Header country={props.coreData.country} />
      <div className={s.mainContainer}>
        <ReactCSSTransitionGroup
          transitionName={{
            appear: s.appear,
            appearActive: s.appearActive,
            enter: s.enter,
            enterActive: s.enterActive,
            leave: s.leave,
            leaveActive: s.leaveActive,
          }}
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
        {
          props.coreData.startLumi ?
            <LumiWidget/> : null
        }
        </ReactCSSTransitionGroup>

        {props.children}
      </div>

    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
