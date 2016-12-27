import React from 'react';
import { render } from 'react-dom';
import RouterComponent from './component/router/router.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import './style/bootstrap.css'
import './style/app.scss';

injectTapEventPlugin();
let store = configureStore();

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Provider store={store}>
                        <MuiThemeProvider>
                                <RouterComponent />
                        </MuiThemeProvider>
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
