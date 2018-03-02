import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { addPost } from './actions'

import MainDiv from '../styledComponents/MainDiv'
import InputBox from '../styledComponents/InputBox'
import Header from '../styledComponents/Header'

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

    toggleForm = () => {
        this.setState({isOpenForm: !this.state.isOpenForm})
    }

    render() {
        const { user } = this.props
        if(this.state.redirect){
            return (<Redirect to={`/users/${user.id}`} />)
        }

        return (
            <MainDiv>
                <Header/>
                <ImgCont>
                    <img width='500' src={this.state.currentPic.href} alt=""/>
                </ImgCont>
                <ButtonCont>
                    <button className='profile-button' onClick={this.getRandomPic}>Next</button>
                    <button className='profile-button' onClick={this.makeRandomSearch}>Shake Up</button>
                    <button className='profile-button' onClick={this.toggleForm}>Write</button>
                </ButtonCont>
                {this.state.isOpenForm ? 
                <div>
                    <form onSubmit={this.addNewPost}>
                        <div>
                            <InputBox type="text" name="title" onChange={this.handleNewPostChange} placeholder='Title' />
                        </div>
                        <div>
                            <InputBox type="text area" name="body" onChange={this.handleNewPostChange} placeholder='Your Art' />
                        </div>
                        <div>
                            <input className='profile-button' type="submit"/>
                        </div>
                    </form>
                </div>
                : null }
            </MainDiv>
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

const ImgCont = styled.div`
    height: 500px;
    width: 500px;
    overflow: hidden;
    margin-top: 60px;
`

const ButtonCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px;
`