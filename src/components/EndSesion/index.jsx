import React from 'react'
import {Redirect} from "react-router-dom";

const EndSesion = (props) => {
    props.value.setIsLogged(false);
    props.value.setCurrentUser(null);
    return(<Redirect to={"/"}/>);
};

export default EndSesion;