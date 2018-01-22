import React from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../redux/modules/search'
import { push } from 'react-router-redux'

let SearchForItems = ({ dispatch }) => {
  let input

  return (
    <form
      className="nav-search"
      onSubmit={e => {
        e.preventDefault()
        if (input.value !== '') dispatch(fetchItems(input.value))
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
      <button className="nav-search-btn">
        <i className="nav-icon-search">
          <span>buscar</span>
        </i>
      </button>
    </form>
  )
}

SearchForItems = connect()(SearchForItems)

export default SearchForItems
