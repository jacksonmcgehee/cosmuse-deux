import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const User = ({ user }) => {

    return (
        <Link to={`/users/${user.id}`}>
            <UserPreview  >
                <ImgCont><Img className src={user.profile_pic} alt=""/></ImgCont>
                <UserName>{user.user_name}</UserName>
            </UserPreview>
        </Link>
    )
}

export default User

const UserPreview = styled.div`
    width: 500px;
    height: 125px;
    display: grid;
    grid-template-columns: 25% 75%;
    margin: 10px auto;
    background-color: white;
    overflow: hidden;

`
const ImgCont = styled.div`
    grid-column-start: 1;
    height: 100%;
    overflow: hidden;
`
const Img = styled.img`
    width: 100%;
`

const UserName = styled.div`
    grid-column-start: 2;
    /* align-self: center; */
    justify-self: center;
    font-size: 36px;
    color: black;
    margin-top: 20px;
`


