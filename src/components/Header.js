import React from 'react'

import SearchForItems from '../containers/SearchForItems'

const Header = () => {
  return (
    <header className="nav-header">
      <a className="nav-logo">logo</a>
      <SearchForItems />
    </header>
  )
}

export default Header
