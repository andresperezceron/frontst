import React from 'react'
import {Header} from './style.js'
import NavBar from './navBar'

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <Header>TITULO</Header>
                <NavBar />
            </div>
        );
    }
}