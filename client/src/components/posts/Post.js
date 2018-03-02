import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import MainDiv from '../styledComponents/MainDiv'

const Post = ({ post }) => {

    return (
        <Link to={`/posts/${post.id}`}>
            <PostPreview>
                <Img src={post.picture} alt=""/>
                <Div><h2>{post.title}</h2></Div>
            </PostPreview>
        </Link>
    )
}

export default Post

const PostPreview = styled.div`
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin: 15px 0;
`
const Img = styled.img`
    width: 200px;
`
const Div = styled.div`
    color: black;
    text-align: center;
`
