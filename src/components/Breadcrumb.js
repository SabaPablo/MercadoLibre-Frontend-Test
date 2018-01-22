import React from 'react'

const Breadcrumb = ({ categories }) => {
  return (
    <div className="breadcrumb-container">
      {categories.length ? (
        <ol>{categories.map(category => <li>{category}</li>)}</ol>
      ) : (
        <span>Categorias</span>
      )}
    </div>
  )
}

export default Breadcrumb
