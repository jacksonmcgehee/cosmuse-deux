import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getPosts } from './actions'
import Post from "./Post"

import MainDiv from '../styledComponents/MainDiv'
import Header from '../styledComponents/Header'

class PostsList extends Component {

    componentWillMount() {
        const { getPosts, isLoaded } = this.props
        if (!isLoaded) {
            getPosts()
        }
    }

    render() {
        const { posts, isLoaded } = this.props
        if (!isLoaded) return <h1>Loading...</h1>
        return (
            <MainDiv>
                <Header/>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post} />)}
                {/* {props.posts.length > 0 ? posts : null} */}
            </MainDiv>
        )
        }
}

const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts,
    isLoaded: state.postsReducer.postsLoaded,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)