
import { GET_POSTS } from './actions'


const initialState = {
    posts: [],
    postsLoaded: false,
}

export default function (state = initialState, action) {
    const { type, data } = action
    switch(type) {
        case GET_POSTS:
            return {
                ...state,
                posts: data,
                postsLoaded: true,
            }
        default:
            return state
    }
}