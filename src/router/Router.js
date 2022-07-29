import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../login/Login';
import Signup from '../login/Signup';
import Home from '../home/Home';
import Payment from '../payment/Payment';
import PageNotFoundComponent from '../pageNotFound/pageNotFoundComponent';

function Router() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/home" component={Home} />
            <Route path="/payment" component={Payment} />
            <Route path="*" component={PageNotFoundComponent} />
        </BrowserRouter>
    )
}
export default Router;
