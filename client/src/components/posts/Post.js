import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Post = ({ post }) => {

    // const deletePost = () => {
    //     props.deletePost(props.id)
    // }
    return (
        <Link to={`/posts/${post.id}`}>
            <div><img width='400' src={post.picture} alt=""/></div>
            <div><h2>{post.title}</h2></div>
            <div>{post.body}</div>
            <div>
                {/* <button onClick={deletePost}>Delete</button> */}
            </div>
        </Link>
    )
}

export default Post

Post.propTypes = {
    post: PropTypes.shape({
        picture: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string
    }).isRequired,
}
