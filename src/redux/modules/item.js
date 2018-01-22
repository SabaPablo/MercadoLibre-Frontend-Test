import axios from 'axios'

// Actions

const REQUEST_ITEM_DETAIL = 'meli-frontend/item/REQUEST_ITEM_DETAIL'
const RECEIVE_ITEM_DETAIL = 'meli-frontend/item/RECEIVE_ITEM_DETAIL'

// Initial State

const initialState = {
  itemRequested: '',
  isFetchingData: false,
  activeItem: {}
}

// Action Creators

export function requestItemDetail(itemRequested) {
  return { type: REQUEST_ITEM_DETAIL, itemRequested }
}

export function receiveItemDetail(itemRequested, activeItem) {
  return { type: RECEIVE_ITEM_DETAIL, itemRequested, activeItem }
}

// Reducers

export default function item(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ITEM_DETAIL:
      return {
        ...state,
        isFetchingData: true,
        itemRequested: action.itemRequested
      }
    case RECEIVE_ITEM_DETAIL:
      return {
        ...state,
        itemRequested: action.itemRequested,
        isFetchingData: false,
        activeItem: action.activeItem
      }

    default:
      return state
  }
}

// Async Action Creators

export function fetchItemDetail(itemRequested) {
  return async dispatch => {
    dispatch(requestItemDetail(itemRequested))

    try {
      const { data } = await axios.get(`/api/items/${itemRequested}`)
      dispatch(receiveItemDetail(itemRequested, data))
    } catch (e) {
      console.log(e)
    }
  }
}
