import React from 'react'
import ReactDOM from 'react-dom'
import FormLogin from './components/FormLogin'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const app = document.getElementById('root')
ReactDOM.render(
    <Router>
        <Link to={'/login'}>Login</Link>
        <Route path={'/login'} component={FormLogin}/>
    </Router>,
    app)
