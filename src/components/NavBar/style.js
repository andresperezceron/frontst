import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Ul = styled.ul`
  background-color: black;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

export const LiTitle = styled.li`
  display: block;
  float: left;
  font-family: Verdana, sans-serif;
  font-weight: bold;
  margin-left: 50px;
  margin-right: 200px;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
`;

export const ATitle = styled(Link)`
  color: rgb(97, 218, 251);
  font-size: 22px;
  outline: none;
  text-decoration: none;
`;

export const LiItem = styled.li`
  display: block;
  float: left;
  font-family: Verdana, serif;
  font-size: 18px;
  padding-top: 20px;
  text-align: center;
  text-decoration: none;
`;

export const AItem = styled(Link)`
  color: white;
  outline: none;
  text-decoration: none;
  padding: 20px 25px 11.5px;
  :hover {
    background-color: #181717;
    color: rgb(97, 218, 251);
    border-bottom: 3px solid rgb(97, 218, 251);
  }
`;

export const LiLogin = styled(LiItem)`
  float: right;
`;

export const LiUserLogin = styled(LiTitle)`
  color: rgb(97, 218, 251);
  float: right;
  font-size: 12px;
  font-weight: normal;
  margin: 0;
  padding: 28px 25px 0;
`;
