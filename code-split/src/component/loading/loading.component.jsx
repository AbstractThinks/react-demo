import React from 'react';
import QueueAnim from 'rc-queue-anim';
var Loader = require('halogen/PulseLoader');

const animaConfig = [
    { opacity: [1, 0], translateY: [0, 50] },
    { opacity: [1, 0], translateY: [0, -50] }
]

class LoadingComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
                return (
                        <QueueAnim animConfig={animaConfig}>
                            <div key="content">
                                <div className="ycf-loading_container">
                                        <Loader color="#26A65B" size="16px"/>
                                </div>
                            </div>
                        </QueueAnim>

                )
                // return (
                //         <div>789</div>
                // )
        }
}
export default LoadingComponent;
