import React from 'react'
import {Header, P} from './style.js'

const Home = (props) => {
    console.log(props.value.currentUser);
    return(
        <Header>
            Titulo
            {props.value.getIsLogged() ?  <P>Logeado</P> : <P>NO ESTAS LOGEADO. Pulsa login</P>}
        </Header>
    )
};
export default Home;
