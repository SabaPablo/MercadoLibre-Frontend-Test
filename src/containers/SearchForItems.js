import React from 'react'
import { connect } from 'react-redux'
import { addQuery } from '../redux/modules/search'

let SearchForItems = ({ dispatch }) => {
  let input

  return (
    <form
      className="nav-search"
      onSubmit={e => {
        e.preventDefault()
        dispatch(addQuery(input.value))
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
