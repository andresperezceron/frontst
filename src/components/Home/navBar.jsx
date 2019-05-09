import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  background-color: lightyellow;
  border: 1px solid #ccc;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

const Li = styled.li`
  color: white;
  display: block;
  float: left;
  padding: 11px 30px;
  text-align: center;
  text-decoration: none;
`;

const A = styled(Link)`
  color: coral;
  text-decoration: none;
`;


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