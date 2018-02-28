
import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'
export const SHOW_POST = 'SHOW_POST'


export function getPosts() {
    return async function(dispatch) {
        const res = await axios.get('/api/posts/index')
        const posts = await res.data
        return dispatch({
            type: 'GET_POSTS',
            data: posts
        })
    }
}

export function showPost(id) {
    return async function (dispatch) {
        const res = await axios.get(`/api/posts/${id}`)
        return dispatch({
            type: 'SHOW_POST',
            data: res.data
        })
    }
}