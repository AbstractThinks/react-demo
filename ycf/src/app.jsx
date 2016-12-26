import React from 'react';
import { render } from 'react-dom';
import RouterComponent from './component/router/router.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './style/bootstrap.css'
import './style/app.scss';

injectTapEventPlugin();
let store = createStore(todoApp)

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <RouterComponent />
                </Provider>
            </MuiThemeProvider>
        )
    }

}


render(<AppContainer />, document.getElementById('root'))
