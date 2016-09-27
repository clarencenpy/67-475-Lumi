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
  notifications: [{
    title: "WhatsApp",
    date: "Aug 25, 2016",
    imageUrl: "http://icons.iconarchive.com/icons/dtafalonso/android-l/512/WhatsApp-icon.png"
  }],
  apps: [],
  preferences: {}
}
export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
