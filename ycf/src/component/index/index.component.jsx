import React from 'react';
import QueueAnim from 'rc-queue-anim';
import RaisedButton from 'material-ui/RaisedButton';
import BottomNavigationInstance from '../navigation/navigation.component';

const animaConfig = [
    { opacity: [1, 0], translateY: [0, 50] },
    { opacity: [1, 0], translateY: [0, -50] }
]

class IndexComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
                <QueueAnim animConfig={animaConfig}>
                    <div key="content">
                        123
                    </div>
                </QueueAnim>

            )
    }

}


export default IndexComponent;
