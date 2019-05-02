import React from 'react'
import styled from 'styled-components'
import constants from './constants'
import {ajax} from "rxjs/ajax";


const Form = styled.form`
  margin:  60px auto;
  padding: 12px 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: bisque;
`;

const Input = styled.input`
  background-color: lightyellow;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
  :focus {border: 2px solid darkorange;}
`;

const Button = styled.button`
  width: 100%;
  background-color: darkorange;
  color: lightyellow;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  :hover {background-color: coral;}
`;

const A = styled.a`
  text-align: center;
  font-size: 15px;
  color: darkorange;
  display: block;
  margin-top: 12px;
  text-decoration: none;
`;

const P = styled.p`
  color: saddlebrown;
  text-align: center;
`;

const H1 = styled.h1`
  text-align: center;
  color: darkorange;
`;

export default class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: undefined,
            password: undefined,
            isLogin: true
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
            next: (res) => this.setState( {isLogin: res.response} ),
            error: (res) => console.log(res.error()),
            complete: () => {}
        };
        loginPost$.subscribe(ObbRequest);
        event.preventDefault();
    }

    render() {
        const {isLogin} = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <H1>Log in</H1>
                <Input name={constants.EMAIL} type="text" placeholder={"email"} onChange={this.handleChange}/>
                <Input name={constants.PASSWORD} type="password" placeholder={"password"} onChange={this.handleChange}/>
                <Button>Enviar</Button>
                {!isLogin && <P>Error: email o password incorrectos</P>}
                <A href={""}>¿Olvidaste tu contraseña?</A>
            </Form>
        );
    }
}
