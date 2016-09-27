// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'Dashboard.COUNTER_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  notifications: [
    {
      title: "WhatsApp",
      date: "Aug 25, 2016",
      imageUrl: "http://icons.iconarchive.com/icons/dtafalonso/android-l/512/WhatsApp-icon.png"
    }],
    apps: [
    {
      title: 'Facebook',
      text: 'Social',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_(square).png',
    },
    {
      title: 'Dropbox',
      text: 'Productivity',
      imageUrl: 'http://www.free-icons-download.net/images/dropbox-flag-icons-65842.png',
    },
    {
      title: 'Gmail',
      text: 'Productivity',
      imageUrl: 'https://lh6.ggpht.com/8-N_qLXgV-eNDQINqTR-Pzu5Y8DuH0Xjz53zoWq_IcBNpcxDL_gK4uS_MvXH00yN6nd4=w300',
    },
    {
      title: 'Flipboard',
      text: 'News',
      imageUrl: 'http://megaicons.net/static/img/icons_sizes/27/89/512/metroui-apps-flipboard-icon.png',
    },
    {
      title: 'Evernote',
      text: 'Productivity',
      imageUrl: 'https://gauravchaplot.files.wordpress.com/2016/01/evernote-logo.png?w=300',
    }
  ],
  preferences: {}
}
export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
