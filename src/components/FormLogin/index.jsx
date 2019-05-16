import React from 'react'
import {ajax} from "rxjs/ajax";
import constants from './constants'
import { Redirect } from 'react-router-dom';
import {Form, Input, Button, A, H1, P} from './style.js'


export default class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: undefined,
            password: undefined,
            firstSubmit: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch(event.target.getAttribute("name")) {
            case constants.EMAIL: this.setState( {email: event.target.value} ); break;
            case constants.PASSWORD: this.setState( {password: event.target.value} ); break;
        }
    }

    handleSubmit(event) {
        const loginPost$ = ajax.post(
            'http://localhost:6969/login',
            {
                email: this.state.email,
                password: this.state.password },
            {}
            );

        const ObbRequest = {
            next: (res) => {
                this.setState( {firstSubmit: false} );
                this.props.value.setIsLogged((res.response));
            },
            error: (res) => console.log(res.error()),
            complete: () => {
                if(this.props.value.getIsLogged())
                    usersJson$.subscribe(ObbUser);
            }
        };

        const usersJson$ = ajax.post(
            'http://localhost:6969/user',
            {email: this.state.email},
            {}
            );
        const ObbUser = {
            next: (res) => this.props.value.setCurrentUser(res.response),
            error: (res) => console.log(res.error()),
            complete: () =>{}
        };
        loginPost$.subscribe(ObbRequest);
        event.preventDefault();
    }

    render() {
        const {firstSubmit} = this.state;
        const isLogged = this.props.value.getIsLogged();
        return (
            <Form onSubmit={this.handleSubmit}>
                <H1>Log in</H1>
                <Input name={constants.EMAIL} type="text" placeholder={"email"} onChange={this.handleChange}/>
                <Input name={constants.PASSWORD} type="password" placeholder={"password"} onChange={this.handleChange}/>
                <Button>Enviar</Button>
                {(isLogged && !firstSubmit) && <Redirect to={"/"}/>}
                {(!isLogged && !firstSubmit) && <P>Error: email o password incorrectos</P>}
                <A href={""}>¿Olvidaste tu contraseña?</A>
            </Form>
        );
    }
}
