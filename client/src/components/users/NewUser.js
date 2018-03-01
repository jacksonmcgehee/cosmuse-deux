import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addUser } from './actions'

class NewUser extends Component {

    state = {
        newUser: {},
        redirect: false
    }

    componentWillMount() {
        // const { resetNewUserForm } = this.props
        this.setState({redirect: false})
    }

    handleNewUserChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const newUser = {...this.state.newUser}

        newUser[attributeName] = attributeValue

        this.setState({newUser})
    }

    addNewUser = async (event) => {
        event.preventDefault()
        await this.props.addUser(this.state.newUser)
        this.setState({redirect: true})
    }

    render() {
        const { user } = this.props
        if(this.state.redirect){
            return (<Redirect to={`/users/${user.id}`} />)
        }
        return (
            <div>
                <form onSubmit={this.addNewUser} >
                    <div>
                        <label >First Name</label>
                        <input type="text" name="f_name" onChange={this.handleNewUserChange} />
                    </div>
                    <div>
                        <label >Last Name</label>
                        <input type="text" name="l_name" onChange={this.handleNewUserChange} />
                    </div>
                    <div>
                        <label >User Name</label>
                        <input type="text" name="user_name" onChange={this.handleNewUserChange} />
                    </div>
                    <div>
                        <label >Email</label>
                        <input type="text" name="email" onChange={this.handleNewUserChange} />
                    </div>
                    <div>
                        <label >Profile Picture URL</label>
                        <input type="text" name="profile_pic" onChange={this.handleNewUserChange} />
                    </div>
                    <input type="submit" value="Create Profile" />
                </form>
            </div>
        )
        }
}

const mapStateToProps = (state) => ({
    user: state.usersReducer.user,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addUser,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)