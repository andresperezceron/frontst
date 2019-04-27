import React from 'react'
import styled from 'styled-components'
import constants from './constants'
import {ajax} from "rxjs/ajax";

const StyledForm = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
`;

const StyledTextField = styled.input`
  width: 100%;
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
            password: undefined
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
            {name: 'pepe', password: 'pepa'}
            ,{}
            );
        loginPost$.subscribe(console.log, console.log);

        alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }

    render() {
        return (
            <StyledForm>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <StyledTextField name={constants.NAME} type="text" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <StyledTextField name={constants.PASSWORD} type="text" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </StyledForm>
        );
    }
}
