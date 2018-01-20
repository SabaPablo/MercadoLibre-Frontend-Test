import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/items" render={() => <h1>index</h1>} />
          <Route path="/item:id" render={() => <h1>Soy un item</h1>} />
        </Switch>
      </div>
    </Router>
  )
}

export default hot(module)(App)
