
import { GET_POSTS, SHOW_POST, ADD_POST } from './actions'


const initialState = {
    posts: [],
    postsLoaded: false,
    post: {},
    postLoaded: false,
    user: {},
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
        case SHOW_POST:
            return {
                ...state,
                post: data.post,
                user: data.user,
                postLoaded: true,
            }
        case ADD_POST:
            return {
                ...state,
                posts: data,
            }
        default:
            return state
    }
}