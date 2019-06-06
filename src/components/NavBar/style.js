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
  font: 25px "Brush Script MT", Brush Script Std, cursive;
  //font: 24px "Snell Roundhand", cursive, san-serif;
  //font: 24px "Century Gothic", Futura, sans-serif;
  font-weight: bold;
  margin-left: 50px;
  margin-right: 200px;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
`;

export const ATitle = styled(Link)`
  //color: rgb(97, 218, 251);
  color: #fd76ff;
  outline: none;
  text-decoration: none;
`;

export const LiItem = styled.li`
  display: block;
  float: left;
  font: 24px "Century Gothic", Futura, sans-serif;
  font-size: 18px;
  padding-top: 20px;
  text-align: center;
  text-decoration: none;
`;

export const AItem = styled(Link)`
  color: #9c9c9c;
  outline: none;
  text-decoration: none;
  padding: 20px 25px 14px;
  :hover {
    background-color: #222323;
    color: #fd76ff;
    border-bottom: 4px solid #fd76ff;;
  }
`;

export const AItemRight = styled(AItem)`
  padding: 20px 25px 17px;
`;

export const LiItemRight = styled(LiItem)`
  float: right;
  font-size: 15px;
`;

export const LiUserName = styled.li`
  color: #fd76ff;
  float: right;
  font: 14px "Century Gothic", Futura, sans-serif;
  text-align: center;
  text-decoration: none;
  padding: 21px 25px 0;
`;
