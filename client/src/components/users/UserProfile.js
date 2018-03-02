import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { showUser, updateUser, deleteUser, deletePost } from './actions'

import Header from '../styledComponents/Header'
import MainDiv from '../styledComponents/MainDiv'
import InputBox from '../styledComponents/InputBox'

class UserShow extends Component {

    state = {
        isEditActive: false,
        updatedUser: {},
        userDeleted: false,
    }

    componentWillMount() {
        const { showUser, user, match } = this.props
        showUser(match.params.id)
        this.setState({updatedUser: user})
    }

    handleUpdateUserChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const updatedUser = {
            ...this.state.updatedUser
        }

        updatedUser[attributeName] = attributeValue

        this.setState({updatedUser})
    }

    toggleEditForm = () => {
        const { user } = this.props
        this.setState({isEditActive: !this.state.isEditActive, updatedUser: user})
    }

    updateThisUser = async (event) => {
        event.preventDefault()
        await this.props.updateUser(this.props.user.id, this.state.updatedUser)
        this.componentWillMount()
        this.setState({isEditActive: false})
    }

    deleteThisUser = async () => {
        await this.props.deleteUser(this.props.user.id)
        this.setState({userDeleted: true})
    }

    deleteThisPost = async (postId) => {
        const userId = this.props.match.params.id
        await this.props.deletePost(userId, postId)
        showUser(userId)
    }

    render() {
        const { user, posts } = this.props
        if(!user.id) return null
        if(this.state.userDeleted) return (<Redirect to={`/`} />)
        return (
            <MainDiv >
                <Header/>
                {!this.state.isEditActive ? 
                <ProfileData>
                    <img width='200' src={user.profile_pic} alt=""/>
                    <h3>{user.user_name}</h3> 
                </ProfileData> :
                 
                <div  >
                    <form onSubmit={this.updateThisUser} >
                        <div><input
                            type="text"
                            name="user_name"
                            placeholder="User Name"
                            onChange={this.handleUpdateUserChange}
                            value={this.state.updatedUser.user_name}/></div>
                        <div><input
                            type="text"
                            name="f_name"
                            placeholder="First Name"
                            onChange={this.handleUpdateUserChange}
                            value={this.state.updatedUser.f_name}/></div>
                        <div><input
                            type="text"
                            name="l_name"
                            placeholder="Last Name"
                            onChange={this.handleUpdateUserChange}
                            value={this.state.updatedUser.l_name}/></div>
                        <div><input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleUpdateUserChange}
                            value={this.state.updatedUser.email}/></div>
                        <div><input
                            type="text"
                            name="profile_pic"
                            placeholder="Profile Picture"
                            onChange={this.handleUpdateUserChange}
                            value={this.state.updatedUser.profile_pic}/></div>
                        <input type="submit"/>
                    </form>
                </div>
                }
                <div>
                    <button onClick={this.toggleEditForm} className='profile-button' >Edit</button>
                    <Link to='/'><button className='profile-button' >Home</button></Link>
                    <button onClick={this.deleteThisUser} className='profile-button' >Delete</button>
                </div>

                <h1>Posts</h1>
                <Link to={`/users/${user.id}/newpost`}><button  className='profile-button' >Create</button></Link>
                {posts.map(post => <PostPreview key={post.id} >
                <img width='100' src={post.picture} alt=""/>
                <div>
                    <h1>{post.title}</h1>
                    <Link to={`/users/${this.props.user.id}/post/${post.id}/edit`} ><button className='profile-button' >Edit</button></Link>
                    <button onClick={() => this.deleteThisPost(post.id)} className='profile-button' >Delete</button>
                </div>
                </PostPreview>)}
            </MainDiv>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.usersReducer.user,
    posts: state.usersReducer.posts,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    showUser,
    updateUser,
    deleteUser,
    deletePost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)

const ProfileData = styled.div`
    width: 500px;
    height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 65px;

`

const PostPreview = styled.div`
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`