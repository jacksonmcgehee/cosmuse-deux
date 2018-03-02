import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import axios from 'axios'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

import LandingPage from './components/LandingPage'
import UsersList from "./components/users/UsersList"
import NewUser from './components/users/NewUser'
import UserProfile from "./components/users/UserProfile"
import PostsList from "./components/posts/PostsList"
import PostShow from "./components/posts/PostShow"
import NewPost from './components/posts/NewPost'
import EditPost from './components/posts/EditPost'

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
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/users" component={UsersList}/>
              <Route exact path="/new/user" component={NewUser}/>
              <Route exact path="/users/:id" component={UserProfile}/>
              <Route exact path="/posts" component={PostsList}/>
              <Route exact path="/posts/:id" component={PostShow} />
              <Route exact path="/users/:id/newpost" component={NewPost} />
              <Route exact path="/users/:userId/post/:postId/edit" component={EditPost} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
