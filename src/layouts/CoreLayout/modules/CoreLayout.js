// ------------------------------------
// Constants
// ------------------------------------
export const START_LUMI = 'CoreLayout.START_LUMI'

// ------------------------------------
// Actions
// ------------------------------------
export function startLumi () {
  return {
    type: START_LUMI,
    payload: {}
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [START_LUMI]: (state, action) => {
    console.log('clicked start Lumi')
    return {...state}
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  country: 'United States',
  fakeUrl: "www.lumi.org",
  fakeTitle: "Lumi"
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
