import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import './styles/index.scss'

import Header from './components/Header'
import SearchResults from './containers/SearchResults'

const App = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          <Header />
          <main role="main">
            <div className="ml-content">
              <Switch>
                <Route exact path="/items" render={() => <SearchResults />} />
                <Route path="/item/:id" render={() => <h1>Soy un item</h1>} />
              </Switch>
            </div>
          </main>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default hot(module)(App)
