import React from 'react'
import {Header, H1, P} from './style.js'

const Home = (props) => {
    console.log(props.value.currentUser);
    return(
        <Header>
            <H1>Alexa Trainner</H1>
            <P>Entrenamiento personalizado</P>
        </Header>
    )
};
export default Home;
