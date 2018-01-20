import React from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../redux/modules/search'
// import { push } from 'react-router-redux'

let SearchForItems = ({ dispatch }) => {
  let input

  return (
    <form
      className="nav-search"
      onSubmit={e => {
        e.preventDefault()
        dispatch(fetchItems(input.value))
        // dispatch(push('/items'))
      }}
    >
      <input
        className="nav-search-input"
        placeholder="Nunca dejes de buscar"
        type="text"
        ref={node => {
          input = node
        }}
      />
      <button className="nav-search-btn">buscar</button>
    </form>
  )
}

SearchForItems = connect()(SearchForItems)

export default SearchForItems
