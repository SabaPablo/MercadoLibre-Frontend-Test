import React from 'react'

const Item = ({ item }) => {
  return (
    <li key={item.id} className="results-item">
      <div className="row-item">
        <div className="results-item-image">
          <img src={item.picture} />
        </div>
        <div className="results-item-info">
          <div className="item-location">{item.location}</div>
          <div className="item-price">
            {item.price.amount}
            {item.free_shipping && (
              <div
                className="item-shipping"
                title="Envío gratis a todo el país"
              >
                &nbsp;
              </div>
            )}
          </div>
          <h2 className="item-title">
            <a>{item.title}</a>
          </h2>
        </div>
      </div>
    </li>
  )
}

export default Item
