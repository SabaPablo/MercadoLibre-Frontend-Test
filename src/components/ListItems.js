import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ListItems = ({ result }) => {
  const items = result.searchResult.items
  return (
    <div className="search-results">
      {items.length ? (
        <ol>{items.map(item => <Item key={item.id} item={item} />)}</ol>
      ) : (
        <div>No hay resultados</div>
      )}
    </div>
  )
}

ListItems.propTypes = {
  result: PropTypes.object.isRequired
}

export default ListItems