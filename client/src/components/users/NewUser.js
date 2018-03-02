import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addUser } from './actions'

import MainDiv from '../styledComponents/MainDiv'
import InputBox from '../styledComponents/InputBox'
import Header from '../styledComponents/Header'

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
            <MainDiv>
                <Header/>
                <form className='cosmuse-form' onSubmit={this.addNewUser} >
                    <div>
                        <InputBox type="text" name="f_name" onChange={this.handleNewUserChange} placeholder='First Name' />
                    </div>
                    <div>
                        <InputBox type="text" name="l_name" onChange={this.handleNewUserChange} placeholder='Last Name' />
                    </div>
                    <div>
                        <InputBox type="text" name="user_name" onChange={this.handleNewUserChange} placeholder='User Name' />
                    </div>
                    <div>
                        <InputBox type="text" name="email" onChange={this.handleNewUserChange} placeholder='Email' />
                    </div>
                    <div>
                        <InputBox type="text" name="profile_pic" onChange={this.handleNewUserChange} placeholder='Profile Picture URL' />
                    </div>
                    <InputBox className='cosmuse-button' type="submit" value="Create Profile" />
                </form>
                <Link to='/' ><button className='cosmuse-button' >Cancel</button></Link>
            </MainDiv>
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