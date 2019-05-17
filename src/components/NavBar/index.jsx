import React from 'react'
import {
    Ul,
    LiTitle, LiItem, LiUserName, LiItemRight,
    ATitle, AItem, AItemRight
} from "./style";

const NavBar = (props) => {
    const user = props.value.getCurrentUser() ? props.value.getCurrentUser().name : "";
    return(
        <Ul>
            <LiTitle><ATitle to="/">Sandra Training</ATitle></LiTitle>
            <LiItem><AItem to="/">Home</AItem></LiItem>
            {props.value.getIsLogged() && <LiItem><AItem to="/users">Users</AItem></LiItem>}
            {!props.value.getIsLogged() ?
                <LiItemRight><AItemRight to="/login">Iniciar Sesión</AItemRight></LiItemRight> :
                <LiItemRight><AItemRight to="/todo">Cerrar Sesión</AItemRight></LiItemRight>}
            {!props.value.getIsLogged() && <LiItemRight><AItemRight to="/todo">Registrarse</AItemRight></LiItemRight>}
            {props.value.getIsLogged() && <LiUserName>{user}</LiUserName>}
        </Ul>
    )
};
export default NavBar;