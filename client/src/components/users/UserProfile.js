import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showUser, updateUser, deleteUser, deletePost } from './actions'

import Header from '../styledComponents/Header'

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
            <div >
                <Header/>
                {!this.state.isEditActive ? 
                <div>
                    <img width='200' src={user.profile_pic} alt=""/>
                    <h3>{user.user_name}</h3> 
                </div> :
                 
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
                <button onClick={this.toggleEditForm} >Edit Profile</button>
                <Link to='/'><button>Home</button></Link>
                <button onClick={this.deleteThisUser}>Delete</button>

                <h1>Posts</h1>
                <Link to={`/users/${user.id}/newpost`}><button>Create New Post</button></Link>
                {posts.map(post => <div key={post.id} >
                <img width='100' src={post.picture} alt=""/>
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
                <button>Delete</button>
                <Link to={`/users/${this.props.user.id}/post/${post.id}/edit`} ><button>Edit</button></Link>
                <button onClick={() => this.deleteThisPost(post.id)} >Delete Post</button>
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
    showUser,
    updateUser,
    deleteUser,
    deletePost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)