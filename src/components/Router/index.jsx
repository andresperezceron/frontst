import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FormLogin from "../FormLogin";
import Users from "../Users";
import Home from "../Home";

const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home} />
                    <Route
                        path="/login"
                        component={FormLogin} />
                    <Route
                        path="/users"
                        component={Users} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;