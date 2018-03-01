import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addPost } from './actions'

class NewPost extends Component {

    state = {
        nasaPictures: [],
        currentPic: {},
        newPost: {},
        redirect: false,
        isOpenForm: false
    }

    componentWillMount() {
        this.makeRandomSearch()
    }

    makeRandomSearch = async () => {
        const searchArray = ['black%20hole', 'star%20dust', 'galaxy', 'comet', 'mysteries', 'hubble%20star', 'nebula', 'hubble%20beautiful', 'sun']
        const randomSearch = searchArray[Math.floor(Math.random()*searchArray.length)]
        console.log(randomSearch)
        const res = await fetch(`https://images-api.nasa.gov/search?q=${randomSearch}&media_type=image`)
        const returnObject = await res.json()
        const collection = returnObject.collection
        const items = collection.items
        await this.setState({nasaPictures: items, redirect: false})
        this.getRandomPic()
    }

    getRandomPic = () => {
        const nasaPictures = [...this.state.nasaPictures] 
        const randomPicObj = nasaPictures[Math.floor(Math.random()*nasaPictures.length)]
        const randomPic = randomPicObj.links[0]
        this.setState({currentPic: randomPic})
    }
    
    handleNewPostChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const newPost = {...this.state.newPost}

        newPost[attributeName] = attributeValue

        this.setState({newPost})
    }

    addNewPost = async (event) => {
        event.preventDefault()
        await this.props.addPost(this.props.user.id, this.state.newPost, this.state.currentPic.href)
        this.setState({redirect: true})
    }

    render() {
        const { user } = this.props
        if(this.state.redirect){
            return (<Redirect to={`/users/${user.id}`} />)
        }

        return (
            <div>
                <h1>{this.state.nasaPictures.length}</h1>
                <div>
                    <img width='500' src={this.state.currentPic.href} alt=""/>
                </div>
                <button onClick={this.getRandomPic}>Button</button>
                <button onClick={this.makeRandomSearch}>Shake it Up</button>
                <button >Write</button>
                <div>
                    <form onSubmit={this.addNewPost}>
                        <div>
                            <label >Title</label>
                            <input type="text" name="title" onChange={this.handleNewPostChange} />
                        </div>
                        <div>
                            <label >Your art</label>
                            <textarea type="text area" name="body" onChange={this.handleNewPostChange} />
                        </div>
                        <div>
                            <input type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.usersReducer.user,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addPost,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (NewPost)