import React from 'react'
import {
    Ul,
    LiTitle, LiItem, LiUserLogin, LiLogin,
    ATitle, AItem
} from "./style";

const NavBar = (props) => {
    const user = props.value.getCurrentUser() ? props.value.getCurrentUser().name : "";
    return(
        <Ul>
            <LiTitle><ATitle to="/">Sandra Training</ATitle></LiTitle>
            <LiItem><AItem to="/">Home</AItem></LiItem>
            {props.value.getIsLogged() && <LiItem><AItem to="/users">Users</AItem></LiItem>}
            {!props.value.getIsLogged() ?
                <LiLogin><AItem to="/login">Iniciar Sesión</AItem></LiLogin> :
                <LiLogin><AItem to="/todo">Salir</AItem></LiLogin>}
            {!props.value.isLogged && <LiLogin><AItem to="/todo">Registrarse</AItem></LiLogin>}
            {props.value.isLogged && <LiUserLogin>{user}</LiUserLogin>}
        </Ul>
    )
};
export default NavBar;