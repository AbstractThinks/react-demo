

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';

// import BoilerplateComponent from '../boilerplate/boilerplate.component';
// import LoginComponent from '../login/login.component';
import ListBoilerplateComponent from '../listboilerplate/list.component';
import InfiniteComponent from '../infinite/window';

import StickyheaderComponent from '../listview/stickyheader/stickyheader';
import StickyComponent from '../listview/sticky/sticky';

const BoilerplateComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../boilerplate/boilerplate.component').default)
    },'/boilerplate')
}
const LoginComponent = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../login/login.component').default)
    },'/login')
}

class RouterComponent extends React.Component {
    Loading() {
        console.log("Loading the page");
    }
    render() {
        return (
            <Router history={hashHistory}>
              <Route path="/">
                <IndexRoute getComponent={BoilerplateComponent} onEnter={this.Loading}/>
                <Route path="/boilerplate" getComponent={BoilerplateComponent} onEnter={this.Loading}/>
                <Route path="/login" getComponent={LoginComponent} onEnter={this.Loading}/>
                <Route path="/list" component={ListBoilerplateComponent} onEnter={this.Loading}/>
                <Route path="/infinite/window" component={InfiniteComponent} onEnter={this.Loading}/>
                <Route path="/listview/stickyheader" component={StickyheaderComponent} onEnter={this.Loading}/>
                <Route path="/listview/sticky" component={StickyComponent} onEnter={this.Loading}/>
              </Route>
            </Router>
        )
    }

}


export default RouterComponent;
