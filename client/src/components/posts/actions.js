
import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'
export const SHOW_POST = 'SHOW_POST'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'


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

export function addPost(userId, newPost, picUrl) {
    return async function (dispatch) {
        
        const payload = {
            title: newPost.title,
            user_id: userId,
            body: newPost.body,
            picture: picUrl
        }
        console.log('From the addPost action: ', payload)
        const res = await axios.post(`/api/users/${userId}/posts`, payload)
        return dispatch({
            type: 'ADD_POST',
            data: res.data
        })
    }
}

export function updatePost(userId, updatedPost) {
    return async function (dispatch) {
        const payload = {
            id: updatedPost.id,
            title: updatedPost.title,
            body: updatedPost.body,
            picture: updatedPost.picture,
            user_id: userId
        }
        const res = await axios.patch(`/api/users/${userId}/posts/${updatedPost.id}`, payload)
        return dispatch({
            type: 'UPDATE_POST',
            data: res.data
        })
    }
}