import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import axios from 'axios'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

import PostsList from "./components/posts/PostsList"
import PostShow from "./components/posts/PostShow"

const middleware = [logger, thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware, )),
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
              <Route exact path="/" component={PostsList}/>
              <Route exact path="/posts/:id" component={PostShow} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
