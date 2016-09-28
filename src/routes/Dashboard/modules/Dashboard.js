// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_PREFERENCES = 'Dashboard.UPDATE_PREFERENCES'

// ------------------------------------
// Actions
// ------------------------------------
export function updatePreferences (field, value) {
  return {
    type: UPDATE_PREFERENCES,
    payload: {
      field, value
    }
  }
}
export const actions = {
  updatePreferences
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_PREFERENCES]: (state, action) => {
    //this is badd
    const newState = JSON.parse(JSON.stringify(state))
    newState.preferences[action.payload.field] = action.payload.value
    return newState
  }
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
            type: 'NO'
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
            type: 'NO'
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
  ,
  preferences: {
    ebp: true,
    mp: false,
    pp: true,
    abp: true,
    tpm: false,
    gov: false
  }
}
export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
