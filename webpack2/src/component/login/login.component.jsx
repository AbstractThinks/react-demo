import React from 'react';
import QueueAnim from 'rc-queue-anim';
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
        hashHistory.push('boilerplate');
    }
    render() {
        return (
            <QueueAnim animConfig={animaConfig}>
                <div key="content">
                    <div className="container height_full" >
                        <form className="ycf-login_form height_full">
                                <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" className="form-control"  placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" className="form-control"  placeholder="Password" />
                                </div>
                                <div className="form-group">
                                 <a  onClick={this.login.bind(this)} className="btn btn-default">登录</a>
                                 </div>
                        </form>
                    </div>
                </div>
            </QueueAnim>
            )
    }

}


export default LoginComponent;
