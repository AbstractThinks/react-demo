import React from 'react';
import { render } from 'react-dom';
import RouterComponent from './component/router/router.component';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
require('./style/bootstrap.css');
// import './style/app.scss';

// injectTapEventPlugin();
let store = configureStore();

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // return (
        //         <Provider store={store}>
        //                 <MuiThemeProvider>
        //                         <RouterComponent />
        //                 </MuiThemeProvider>
        //         </Provider>
        // )
        return (
                <Provider store={store}>
                        <RouterComponent />
                </Provider>
        )
        // return (
        //     <MuiThemeProvider>
        //             <RouterComponent />
        //     </MuiThemeProvider>
        // )
    }

}


render(<AppContainer />, document.getElementById('root'))
