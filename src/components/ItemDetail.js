import React from 'react'

const ItemDetail = ({ result }) => {
  return <div>{JSON.stringify(result.activeItem)}</div>
}

export default ItemDetail
