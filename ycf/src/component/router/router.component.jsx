

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';

import IndexComponent from '../index/index.component';
import LoginComponent from '../login/login.component';


class RouterComponent extends React.Component {
    Loading() {
        console.log("Loading the page");
    }
    render() {
        return (
            <Router history={hashHistory}>
              <Route path="/">
                <IndexRoute component={IndexComponent} onEnter={this.Loading}/>
                <Route path="/index" component={IndexComponent} onEnter={this.Loading}/>
                <Route path="/login" component={LoginComponent} onEnter={this.Loading}/>
              </Route>
            </Router>
        )
    }

}


export default RouterComponent;
