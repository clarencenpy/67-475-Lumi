import _ from 'underscore'

// ------------------------------------
// Constants
// ------------------------------------
export const APPLY_SEARCH = 'Search.APPLY_SEARCH'
export const TOGGLE_COMPANY = 'Search.TOGGLE_COMPANY'
export const TOGGLE_COMPARE_VIEW = 'Search.TOGGLE_COMPARE_VIEW'

// ------------------------------------
// Actions
// ------------------------------------
export function applySearch (value = "") {
  return {
    type: APPLY_SEARCH,
    payload: value
  }
}
export function toggleCompany (title) {
  return {
    type: TOGGLE_COMPANY,
    payload: title
  }
}
export function toggleCompareView () {
  return {
    type: TOGGLE_COMPARE_VIEW,
    payload: {}
  }
}

const initialState = {
  showCompareView: false,
  results: [
    {
      title: 'Google',
      text: 'Social',
      imageUrl: 'https://www.seeklogo.net/wp-content/uploads/2015/09/new-google-favicon-logo.png',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'YES'
        },
        pp: {
          type: 'YES'
        },
        abp: {
          type: 'OPT-IN',
          htmlContent: `<div>You are required to give permission for any third party app that uses your data</div>`
        },
        tpm: {
          type: 'NO'
        },
        gov: {
          type: 'YES'
        }
      }
    },
    {
      title: 'Facebook',
      text: 'Social',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_(square).png',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'YES'
        },
        pp: {
          type: 'YES'
        },
        abp: {
          type: 'OPT-IN',
          htmlContent: `<div>You are required to give permission for any third party app that uses your data</div>`
        },
        tpm: {
          type: 'NO'
        },
        gov: {
          type: 'YES'
        }
      }
    },
    {
      title: 'Uber',
      text: 'Transport',
      imageUrl: 'http://logo-png.com/thumbs-logo/uber-logo.png',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'NO'
        },
        pp: {
          type: 'YES'
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
    },
    {
      title: 'Instagram',
      text: 'Social',
      imageUrl: 'http://3835642c2693476aa717-d4b78efce91b9730bcca725cf9bb0b37.r51.cf1.rackcdn.com/Instagram_App_Large_May2016_200.png',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'YES'
        },
        pp: {
          type: 'YES'
        },
        abp: {
          type: 'NO',
        },
        tpm: {
          type: 'YES'
        },
        gov: {
          type: 'NO'
        }
      }
    },
    {
      title: 'Venmo',
      text: 'Finance',
      imageUrl: 'https://lh3.googleusercontent.com/UvEwv56zTj13dO1qr4fj4wDDc5Fwzc6O1ke4DnBSKN1Wa42zBDzGREwVLD9HqEAoIzs=w300',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'NO'
        },
        pp: {
          type: 'OPT-OUT'
        },
        abp: {
          type: 'OPT-IN',
          htmlContent: `<div>You are required to give permission for any third party app that uses your data</div>`
        },
        tpm: {
          type: 'NO'
        },
        gov: {
          type: 'NO'
        }
      }
    },
    {
      title: 'Messenger',
      text: 'Chat',
      imageUrl: 'http://www.freeiconspng.com/uploads/facebook-messenger-vector-logo-logo-15.png',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'YES'
        },
        pp: {
          type: 'YES'
        },
        abp: {
          type: 'OPT-IN',
          htmlContent: `<div>You are required to give permission for any third party app that uses your data</div>`
        },
        tpm: {
          type: 'OPT-OUT'
        },
        gov: {
          type: 'NO'
        }
      }
    },
    {
      title: 'WhatsApp',
      text: 'Chat',
      imageUrl: 'http://icons.iconarchive.com/icons/dtafalonso/android-l/512/WhatsApp-icon.png',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'NO'
        },
        pp: {
          type: 'YES'
        },
        abp: {
          type: 'OPT-IN',
          htmlContent: `<div>You are required to give permission for any third party app that uses your data</div>`
        },
        tpm: {
          type: 'YES',
          htmlContent: `<div>Shared with Facebook Inc.</div>`
        },
        gov: {
          type: 'NO'
        }
      }
    },
    {
      title: 'Dropbox',
      text: 'Productivity',
      imageUrl: 'http://www.free-icons-download.net/images/dropbox-flag-icons-65842.png',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'NO'
        },
        pp: {
          type: 'NO'
        },
        abp: {
          type: 'OPT-IN',
          htmlContent: `<div>You are required to give permission for any third party app that uses your data</div>`
        },
        tpm: {
          type: 'NO'
        },
        gov: {
          type: 'NO'
        }
      }
    },
    {
      title: 'Gmail',
      text: 'Productivity',
      imageUrl: 'https://lh6.ggpht.com/8-N_qLXgV-eNDQINqTR-Pzu5Y8DuH0Xjz53zoWq_IcBNpcxDL_gK4uS_MvXH00yN6nd4=w300',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'YES'
        },
        pp: {
          type: 'YES'
        },
        abp: {
          type: 'OPT-IN',
          htmlContent: `<div>You are required to give permission for any third party app that uses your data</div>`
        },
        tpm: {
          type: 'NO'
        },
        gov: {
          type: 'YES'
        }
      }
    },
    {
      title: 'Flipboard',
      text: 'News',
      imageUrl: 'http://megaicons.net/static/img/icons_sizes/27/89/512/metroui-apps-flipboard-icon.png',
      selected: false,
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
          type: 'NO'
        },
        tpm: {
          type: 'NO'
        },
        gov: {
          type: 'NO'
        }
      }
    },
    {
      title: 'G Maps',
      text: 'Maps',
      imageUrl: 'http://logonoid.com/images/google-maps-logo.png',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'YES'
        },
        pp: {
          type: 'YES'
        },
        abp: {
          type: 'NO'
        },
        tpm: {
          type: 'NO'
        },
        gov: {
          type: 'NO'
        }
      }
    },
    {
      title: 'Evernote',
      text: 'Productivity',
      imageUrl: 'https://gauravchaplot.files.wordpress.com/2016/01/evernote-logo.png?w=300',
      selected: false,
      summary: {
        ebp: {
          type: 'YES'
        },
        mp: {
          type: 'NO'
        },
        pp: {
          type: 'NO'
        },
        abp: {
          type: 'OPT-IN',
          htmlContent: `<div>You are required to give permission for any third party app that uses your data</div>`
        },
        tpm: {
          type: 'NO'
        },
        gov: {
          type: 'NO'
        }
      }
    }
  ]
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [APPLY_SEARCH]: (state, action) => {

    let newState = {...state}
    newState.results = _.filter(initialState.results, result => {
      return result.title.toUpperCase().indexOf(action.payload.toUpperCase()) >= 0 ||
        result.text.toUpperCase().indexOf(action.payload.toUpperCase()) >= 0
    })
    return newState
  },

  [TOGGLE_COMPANY]: (state, action) => {
    let newState = {...state}
    newState.results = _.map(newState.results, result => {
      if (result.title === action.payload) {
        result.selected = !result.selected
      }
      return result
    })
    return newState
  },

  [TOGGLE_COMPARE_VIEW]: (state, action) => {
    let newState = {...state}
    newState.showCompareView = !newState.showCompareView
    return newState
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
