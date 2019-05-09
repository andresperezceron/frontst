import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Header = styled.header`
    background: bisque;
    color: coral;
    font-size: 40px;
    padding: 1em;
    text-align: center;
`;

export const Ul = styled.ul`
  background-color: lightyellow;
  border: 1px solid #ccc;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

export const Li = styled.li`
  display: block;
  float: left;
  padding: 14px 30px;
  text-align: center;
  text-decoration: none;
  :hover {background-color: lightgoldenrodyellow; color: brown}
`;

export const A = styled(Link)`
  color: coral;
  text-align: center;
  text-decoration: none;
  :hover {background-color: lightgoldenrodyellow; color: brown}
`;