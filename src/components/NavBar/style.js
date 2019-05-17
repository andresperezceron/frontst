import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Ul = styled.ul`
  background-color: #1d1e1e;
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
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  font-size: 18px;
  padding-top: 20px;
  text-align: center;
  text-decoration: none;
`;

export const AItem = styled(Link)`
  color: white;
  outline: none;
  text-decoration: none;
  padding: 20px 25px 12px;
  :hover {
    background-color: #222323;
    color: rgb(97, 218, 251);
    border-bottom: 4px solid rgb(97, 218, 251);
  }
`;

export const AItemRight = styled(AItem)`
  padding: 20px 25px 15px;
`;

export const LiItemRight = styled(LiItem)`
  float: right;
  font-size: 15px;
`;

export const LiUserName = styled(LiTitle)`
  color: rgb(97, 218, 251);
  float: right;
  font-size: 12px;
  font-weight: normal;
  margin: 0;
  padding: 24px 25px 0;
`;
