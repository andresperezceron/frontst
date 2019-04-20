
import React from 'react'
import styled from 'styled-components'
import constants from './constants'

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
        console.log(event.target)
        console.log(event.target.value)
        console.log(constants)

        switch (event.target.getAttribute("name")) {
            case constants.NAME:
                console.log('caca')
                this.setState({
                    name: event.target.value
                });
                break;
            case constants.PASSWORD:
                console.log('0mierda')

                this.setState({
                    password: event.target.value
                });
                break;
        }
        console.log(this.state)
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }
    render() {
        return (
            <StyledForm>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <StyledTextField name={constants.NAME} type="text" onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <StyledTextField name={constants.PASSWORD} type="text"  onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </StyledForm>
        );
    }
}