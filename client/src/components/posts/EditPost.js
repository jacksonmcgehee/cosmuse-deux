import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showPost, updatePost } from './actions'

class EditPost extends Component {

    state = {
        updatedPost: {},
        redirect: false,
    }

    componentWillMount() {
        const { showPost, post, match } = this.props
        showPost(match.params.id)
        this.setState({updatedPost: post})
    }

    render() {
        const { post, user } = this.props
        if(this.state.redirect){
            return (<Redirect to={`/users/${user.id}`} />)
        }
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
    showPost,
    updatePost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)