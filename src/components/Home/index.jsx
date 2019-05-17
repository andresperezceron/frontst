import React from 'react'
import {Header, H1, P} from './style.js'

const Home = (props) => {
    console.log(props.value.currentUser);
    return(
        <Header>
            <H1>S-Training</H1>
            {props.value.getIsLogged() ?  <P>Logeado</P> : <P>NO ESTAS LOGEADO. Pulsa login</P>}
        </Header>
    )
};
export default Home;
