import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showUser } from './actions'

class UserShow extends Component {

    componentWillMount() {
        const { showUser, match } = this.props
        showUser(match.params.id)
    }

    render() {
        const { user, posts } = this.props
        if(!user.id) return null
        return (
            <div>
                <img width='200' src={user.profile_pic} alt=""/>

                <h3>{user.user_name}</h3>
                <Link to='/'><button>Home</button></Link>

                <h1>Posts</h1>
                {posts.map(post => <div key={post.id} >
                <img width='100' src={post.picture} alt=""/>
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
                </div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.usersReducer.user,
    posts: state.usersReducer.posts,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    showUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)