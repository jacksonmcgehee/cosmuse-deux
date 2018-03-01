import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getUsers } from './actions'
import User from "./User"

class UsersList extends Component {

    componentWillMount() {
        const { getUsers, isLoaded } = this.props
        if (!isLoaded) {
            getUsers()
        }
    }

    render() {
        const { users, isLoaded } = this.props
        if (!isLoaded) return <h1>Loading...</h1>
        return (
            <div>
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user} />)}
                {/* {props.posts.length > 0 ? posts : null} */}
            </div>
        )
        }
}

const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    isLoaded: state.usersReducer.usersLoaded,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)