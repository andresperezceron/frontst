import React from 'react'
import styled from 'styled-components'
import NavBar from './navBar'

const Header = styled.header`
    background: bisque;
    color: coral;
    font-size: 40px;
    padding: 1em;
    text-align: center;
`;

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