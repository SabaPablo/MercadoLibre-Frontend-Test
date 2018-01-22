import React from 'react'

const ItemDetail = ({ result }) => {
  return (
    <div className="detail-container">
      <div className="item-description-container">
        <div className="item-image">
          <img
            src={result.activeItem.item.picture}
            alt={result.activeItem.item.title}
            width="680"
          />
        </div>
        <div className="item-description">
          <h2>Descripción del producto</h2>
          <p className="item">{result.activeItem.item.description}</p>
        </div>
      </div>
      <div className="item-info-container">
        <div className="item-conditions">Usado</div>
        <header className="item-title">{result.activeItem.item.title}</header>
        <div className="item-price">1000</div>
        <button className="ui-button--primary">Comprar</button>
      </div>
    </div>
  )
}

export default ItemDetail
