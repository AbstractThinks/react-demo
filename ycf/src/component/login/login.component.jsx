import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { hashHistory } from 'react-router';

const animaConfig = [
    { opacity: [1, 0], translateY: [0, 50] },
    { opacity: [1, 0], translateY: [0, -50] }
]

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    login() {
        hashHistory.push('index');
    }
    render() {
        return (
            <QueueAnim animConfig={animaConfig}>
                <div key="content">
                    <div className="container">
                        <div className="row text-center">
                            <TextField
                              floatingLabelText="用户名"
                            />
                        </div>
                        <div className="row text-center">
                            <TextField
                              floatingLabelText="密码"
                            />
                        </div>
                        <div className="row text-center">
                            <RaisedButton label="登录" secondary={true} onClick={this.login.bind(this)}/>
                        </div>
                    </div>

                </div>
            </QueueAnim>
            )
    }

}


export default LoginComponent;
