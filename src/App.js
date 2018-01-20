import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import Header from './components/Header'

const App = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/items" render={() => <h1>index</h1>} />
            <Route path="/item:id" render={() => <h1>Soy un item</h1>} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default hot(module)(App)
