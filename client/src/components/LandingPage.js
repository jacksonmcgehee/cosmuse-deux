import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainDiv from './styledComponents/MainDiv'

class LandingPage extends Component {
    render() {
        return (
            <MainDiv>
                <div className='landing-title'>Cosmuse</div>
                <div className='landing-buttons' >
                    <Link to={`/users`}><button className='cosmuse-button' >Sign In</button></Link>
                    <Link to={`/new/user`}><button className='cosmuse-button' >Sign Up</button></Link>
                    <Link to={`/posts`}><button className='cosmuse-button' >Inspiration</button></Link>
                </div>
            </MainDiv>
        )
    }
}

export default LandingPage

