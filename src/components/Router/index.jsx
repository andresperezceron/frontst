import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FormLogin from "../FormLogin";
import Users from "../Users";
import Home from "../Home";

export default class Router extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Home />} />
                        <Route
                            exact
                            path="/login"
                            render={() => <FormLogin />} />
                        <Route
                            exact
                            path="/users"
                            render={() => <Users />} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}