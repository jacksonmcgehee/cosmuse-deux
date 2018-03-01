import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const User = ({ user }) => {

    // const deletePost = () => {
    //     props.deletePost(props.id)
    // }
    return (
        <Link to={`/users/${user.id}`}>
            <div><img width='400' src={user.profile_pic} alt=""/></div>
            <div><h2>{user.user_name}</h2></div>
            <div>
                {/* <button onClick={deletePost}>Delete</button> */}
            </div>
        </Link>
    )
}

export default User

User.propTypes = {
    user: PropTypes.shape({
        profile_pic: PropTypes.string,
        user_name: PropTypes.string,
        email: PropTypes.string,
        f_name: PropTypes.string,
        l_name: PropTypes.string,
    }).isRequired,
}
