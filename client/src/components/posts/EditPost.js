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
        showPost(match.params.postId)
        this.setState({updatedPost: post})
    }

    handleEditPostChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const updatedPost = {...this.state.updatedPost}

        updatedPost[attributeName] = attributeValue

        this.setState({updatedPost})
    }

    updateThisPost = async (event) => {
        event.preventDefault()
        this.props.updatePost(this.props.user.id, this.state.updatedPost)
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
                <form onSubmit={this.updateThisPost}>
                    <div>
                        <label >Title</label>
                        <input type="text" name="title" onChange={this.handleEditPostChange} value={this.state.updatedPost.title}/>
                    </div>
                    <div>
                        <label >Your art</label>
                        <textarea type="text area" name="body" onChange={this.handleEditPostChange} value={this.state.updatedPost.body} />
                    </div>
                    <div>
                        <label >Picture</label>
                        <input type="text area" name="body" onChange={this.handleEditPostChange} value={this.state.updatedPost.picture} />
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
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