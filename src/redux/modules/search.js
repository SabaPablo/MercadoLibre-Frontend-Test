import axios from 'axios'

// const internalRequest = axios.create({
//   baseURL: 'http://localhost:3000'
// })

// Actions

const REQUEST_ITEMS = 'meli-frontend/search/REQUEST_ITEMS'
const RECEIVE_ITEMS = 'meli-frontend/search/RECEIVE_ITEMS'
// const FETCH_ITEMS = 'meli-frontend/search/FETCH_ITEMS'

// Initial State

const initialState = {
  searchTerm: '',
  searchResult: {}
}

// Action Creators

export function requestItems(searchTerm) {
  return { type: REQUEST_ITEMS, searchTerm }
}

export function receiveItems(searchTerm, searchResult) {
  console.log(`Items are ${searchResult}`)
  return { type: RECEIVE_ITEMS, searchTerm, searchResult }
}

// Reducers

export default function search(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return { ...state, searchTerm: action.searchTerm }
    case RECEIVE_ITEMS:
      return {
        ...state,
        searchTerm: action.searchTerm,
        searchResult: action.searchResult
      }

    default:
      return state
  }
}

// Async Action Creators

export function fetchItems(searchTerm) {
  return async dispatch => {
    dispatch(requestItems(searchTerm))

    try {
      const { data } = await axios.get(`/api/items?q=${searchTerm}`)
      dispatch(receiveItems(searchTerm, data))
    } catch (e) {
      console.log(e)
    }
  }
}
