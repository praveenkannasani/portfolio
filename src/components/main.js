import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Landing from './landingpage';

const Main = () => {
    return (
        <HashRouter>
        <Switch>
        <Route exact path="/" component={Landing} />
            </Switch>
        </HashRouter>)
}

export default Main;