import React from 'react'
import {Ul, Li, A} from './style.js'

const NavBar = () => {
    return(
        <Ul>
            <Li><A to="/">Home</A></Li>
            <Li><A to="/login">Login</A></Li>
            <Li><A to="/users">Users</A></Li>
        </Ul>
    )
};

export default NavBar;