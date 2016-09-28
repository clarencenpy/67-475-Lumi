// ------------------------------------
// Constants
// ------------------------------------
export const START_LUMI = 'CoreLayout.START_LUMI'
export const GO_GOOGLE = 'CoreLayout.GO_GOOGLE'
export const GO_FACEBOOK = 'CoreLayout.GO_FACEBOOK'

// ------------------------------------
// Actions
// ------------------------------------
export function startLumi () {
  return {
    type: START_LUMI,
    payload: {}
  }
}

export function goFacebook () {
  return {
    type: GO_FACEBOOK,
    payload: {}
  }
}

export function goGoogle () {
  return {
    type: GO_GOOGLE,
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
  },
  [GO_FACEBOOK]: (state, action) => {
    return {
      ...state,
      fakeUrl: 'https://facebook.com',
      fakeTitle: 'Facebook',
      lumiActive: true,
      showIFrame: true
    }
  },
  [GO_GOOGLE]: (state, action) => {
    return {
      ...state,
      fakeUrl: 'https://www.google.com/webhp?ion=1&espv=2&ie=UTF-8#q=buy%20pc%20parts',
      fakeTitle: 'buy pc parts - Google',
      lumiActive: true,
      showIFrame: true
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  country: 'United States',
  fakeUrl: "http://localhost:3000",
  fakeTitle: "Lumi",
  lumiActive: false,
  showIFrame: false
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
