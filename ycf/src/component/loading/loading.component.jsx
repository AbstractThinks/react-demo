import React from 'react';
import QueueAnim from 'rc-queue-anim';
var Loader = require('halogen/BeatLoader');

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
                            <div key="content" className="loading-container">
                                <div className="loading-container">
                                        <div className="loading-content">
                                                 <Loader color="#26A65B" size="16px"/>
                                        </div>
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
