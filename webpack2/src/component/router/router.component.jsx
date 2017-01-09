

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';

import BoilerplateComponent from '../boilerplate/boilerplate.component';
import LoginComponent from '../login/login.component';
import ListBoilerplateComponent from '../listboilerplate/list.component';

class RouterComponent extends React.Component {
    Loading() {
        console.log("Loading the page");
    }
    render() {
        return (
            <Router history={hashHistory}>
              <Route path="/">
                <IndexRoute component={BoilerplateComponent} onEnter={this.Loading}/>
                <Route path="/boilerplate" component={BoilerplateComponent} onEnter={this.Loading}/>
                <Route path="/login" component={LoginComponent} onEnter={this.Loading}/>
                <Route path="/list" component={ListBoilerplateComponent} onEnter={this.Loading}/>
                <Route path="/infinite/window" component={ListBoilerplateComponent} onEnter={this.Loading}/>
                <Route path="/infinite/chat" component={ListBoilerplateComponent} onEnter={this.Loading}/>
                <Route path="/infinite/index" component={ListBoilerplateComponent} onEnter={this.Loading}/>
                <Route path="/infinite/borderlesswindow" component={ListBoilerplateComponent} onEnter={this.Loading}/>
              </Route>
            </Router>
        )
    }

}


export default RouterComponent;
