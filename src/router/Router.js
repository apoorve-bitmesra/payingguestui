import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../login/Login';
import Signup from '../login/Signup';

function Router() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
        </BrowserRouter>
    )
}
export default Router;
