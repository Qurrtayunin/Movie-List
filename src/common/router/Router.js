import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Search from '../../app/Seacrh';
import Home from '../../app/Home';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={Search}/>
            </Switch>
        );
    }
}

export default Router;