import { combineReducers } from 'redux'

import usersReducer from './components/users/reducer'
import postsReducer from './components/posts/reducer'

const rootReducer = combineReducers({
    usersReducer,
    postsReducer
})

export default rootReducer