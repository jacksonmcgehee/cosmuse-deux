import { combineReducers } from 'redux'

import posts from './components/posts/reducer'

const rootReducer = combineReducers({
    posts
})

export default rootReducer