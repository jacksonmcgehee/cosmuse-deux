import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Cosmuse</h1>
                <Link to={`/users`}><button >Sign In</button></Link>
                <Link to={`/new/user`}><button >Sign Up</button></Link>
                <Link to={`/posts`}><button >Inspiration</button></Link>
            </div>
        )
    }
}

export default LandingPage