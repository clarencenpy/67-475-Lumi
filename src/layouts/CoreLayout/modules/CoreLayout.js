// ------------------------------------
// Constants
// ------------------------------------
export const ACTION = 'CoreLayout.ACTION'

// ------------------------------------
// Actions
// ------------------------------------
export function action (value) {
  return {
    type: ACTION,
    payload: value
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACTION]: (state, action) => {
    return {...state}
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  country: 'United States'
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
