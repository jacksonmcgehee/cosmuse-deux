import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showPost } from './actions'

class PostShow extends Component {

    componentWillMount() {
        const { showPost, match } = this.props
        showPost(match.params.id)
    }

    render() {
        const { post, user } = this.props
        if(!post.id) return null
        return (
            <div>
                <img width='600' src={post.picture} alt=""/>
                <img width='200' src={user.profile_pic} alt=""/>

                <h3>Author: {user.user_name}</h3>
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    post: state.postsReducer.post,
    user: state.postsReducer.user,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    showPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)