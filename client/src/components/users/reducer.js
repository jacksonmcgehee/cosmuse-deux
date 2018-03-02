
import { GET_USERS, SHOW_USER, ADD_USER, UPDATE_USER, DELETE_USER, DELETE_POST} from './actions'


const initialState = {
    users: [],
    usersLoaded: false,
    user: {},
    userLoaded: false,
    posts: [],

}

export default function (state = initialState, action) {
    const { type, data } = action
    switch(type) {
        case GET_USERS:
            return {
                ...state,
                users: data,
                usersLoaded: true,
            }
        case SHOW_USER:
            return {
                ...state,
                user: data.user,
                posts: data.posts,
                userLoaded: true,
            }
        case ADD_USER:
            return {
                ...state,
                users: data.users,
                user: data.user,
                userLoaded: true
            }
        case UPDATE_USER:
            return {
                ...state,
                user: {},
                userLoaded: true,
            }
        case DELETE_USER:
            return {
                ...state,
                users: data
            }
        case DELETE_POST:
            return {
                ...state,
                posts: data
            }
        default:
            return state
    }
}