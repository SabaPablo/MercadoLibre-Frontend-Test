// Actions

const ADD_QUERY = 'meli-frontend/search/ADD_QUERY'

// Initial State

const initialState = {
  query: ''
}

// Action Creators

export function addQuery(text) {
  return { type: ADD_QUERY, text }
}

// Reducers

export default function search(state = initialState, action) {
  switch (action.type) {
    case ADD_QUERY:
      return { ...state, query: action.text }
  }
}
