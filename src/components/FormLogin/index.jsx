import React from 'react'
import styled from 'styled-components'
import constants from './constants'
import {ajax} from "rxjs/ajax";


const StyledForm = styled.form`
  margin:  60px auto;
  padding: 12px 20px;
  width: 300px;
  border: 1px solid grey;
  border-radius: 5px;
  background: bisque;
`;

const Button = styled.button`
  width: 100%;
  background-color: coral;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const H1 = styled.h1`
  text-align: center;
  color: #777;
`;

const StyledTextField = styled.input`
  width: 100%;;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export default class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            password: undefined,
            isLogin: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch(event.target.getAttribute("name")) {
            case constants.NAME: this.setState( {name: event.target.value} ); break;
            case constants.PASSWORD: this.setState( {password: event.target.value} ); break;
        }
    }

    handleSubmit(event) {
        const loginPost$ = ajax.post(
            'http://localhost:6969/login',
            {
                name: this.state.name,
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
        const {isLogin} = this.state;;
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <H1>Login</H1>
                <StyledTextField name={constants.NAME} type="text" placeholder={"email"} onChange={this.handleChange}/>
                <StyledTextField name={constants.PASSWORD} type="text" placeholder={"password"} onChange={this.handleChange}/>
                {!isLogin && <p>email o contraseña incorrecto¡</p>}
                <Button>Enviar</Button>
            </StyledForm>
        );
    }
}
