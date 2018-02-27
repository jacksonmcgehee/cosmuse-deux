
import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'


export function getPosts() {
    return async function(dispatch) {
        const res = await axios.get('/posts/index')
        const posts = await res.data
        return dispatch({
            type: 'GET_POSTS',
            data: posts
        })
    }
}