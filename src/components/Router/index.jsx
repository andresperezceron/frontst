import React from "react"
import { BrowserRouter, Route} from 'react-router-dom';
import NavBar from '../NavBar'
import FormLogin from '../FormLogin'
import Users from '../Users/index'
import Home from '../Home'
import Todo from '../Todo'
import EndSesion from '../EndSesion'
import {GlobalStyle} from './style'


export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            currentUser: null,
            setIsLogged: (isLogged) => this.setState({isLogged: isLogged}),
            getIsLogged: () => this.state.isLogged,
            setCurrentUser: (user) => this.setState({currentUser: user}),
            getCurrentUser: () => this.state.currentUser
        }
    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <GlobalStyle/>
                    <NavBar value={this.state}/>
                    <Route
                        exact
                        path="/"
                        render={() => <Home value={this.state} />} />
                    <Route
                        path="/login"
                        render={() => <FormLogin value={this.state} />} />
                    <Route
                        path="/users"
                        component={Users} />
                    <Route
                        path="/endsesion"
                        render={() => <EndSesion value={this.state} />} />
                    <Route
                        path="/todo"
                        component={Todo} />
                </div>
            </BrowserRouter>
        );
    }
};