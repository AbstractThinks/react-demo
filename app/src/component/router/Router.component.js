// import React from 'react';
// import { Router,Route } from 'react-router';
// import LoginComponent from '../login/Login.component';
// import IndexComponent from '../index/Index.component';

class IndexComponent extends React.component {
    render() {
        return (
            <div>
                index
            </div>
        )

    }
}

class LoginComponent extends React.component {
    render() {
        return (
            <div>
                Login
            </div>
        )

    }
}

export default class RouterComponent extends React.component {
    render() {
        return (
            <Router history={hashHistory}>
              <Route path="/" component={LoginComponent}>
                <Route path="/index" component={IndexComponent}/>
              </Route>
            </Router>
        )

    }
}
