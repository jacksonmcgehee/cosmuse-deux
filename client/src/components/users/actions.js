import axios from 'axios'

export const GET_USERS = 'GET_USERS'
export const SHOW_USER = 'SHOW_USER'
export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const DELETE_POST = 'DELETE_POST'


export function getUsers() {
    return async function(dispatch) {
        const res = await axios.get('/api/users')
        const users = await res.data
        return dispatch({
            type: 'GET_USERS',
            data: users
        })
    }
}

export function showUser(id) {
    return async function (dispatch) {
        const res = await axios.get(`/api/users/${id}`)
        return dispatch({
            type: 'SHOW_USER',
            data: res.data
        })
    }
}

export function addUser(newUser) {
    return async function (dispatch) {
        const res = await axios.post('/api/users', newUser)
        return dispatch({
            type: 'ADD_USER',
            data: res.data
        })
    }
}

export function updateUser(id, updatedUser) {
    return async function (dispatch) {
        const res = await axios.patch(`/api/users/${id}`, updatedUser)
        return dispatch({
            type: 'UPDATE_USER',
            data: res.data
        })
    }
}

export function deleteUser (id) {
    return async function (dispatch) {
        const res = await axios.delete(`/api/users/${id}`)
        return dispatch({
            type: 'DELETE_USER',
            data: res.data
        })
    }
}

export function deletePost(userId, postId) {
    return async function (dispatch) {
        const res = await axios.delete(`/api/users/${userId}/posts/${postId}`)
        return dispatch({
            type: 'DELETE_POST',
            data: res.data
        })
    }
}
