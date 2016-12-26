import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Router,Route } from 'react-router';
// import RouterComponent from './component/router/Router.component';

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

class RouterComponent extends React.component {
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
ReactDOM.render(<RouterComponent />,document.getElementById('root'));
