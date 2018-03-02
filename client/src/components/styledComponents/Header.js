import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <Link to='/'><HeaderTitle>Cosmuse</HeaderTitle></Link>
            </HeaderDiv>
        );
    }
}

export default Header

const HeaderDiv = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderTitle = styled.div`
    margin: 0 0 0 15px;
    font-size: 28px;
    color: white;
`