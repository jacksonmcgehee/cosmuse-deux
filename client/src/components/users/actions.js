import axios from 'axios'

export const GET_USERS = 'GET_USERS'
export const SHOW_USER = 'SHOW_USER'
export const ADD_USER = 'ADD_USER'
export const RESET_NEW_USER_FORM = 'RESET_NEW_USER_FORM'


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

export function resetNewUserForm() {
    return {
        type: 'RESET_NEW_USER_FORM',
    }
}