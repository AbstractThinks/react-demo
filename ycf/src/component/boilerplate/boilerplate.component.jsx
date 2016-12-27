import React from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import {loadboilerplateReducer1} from '../../actionCreator/boilerplateActionCreator';
import LoadingComponent from '../loading/loading.component';

import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'react-iscroll';

const animaConfig = [
    { opacity: [1, 0], translateY: [0, 50] },
    { opacity: [1, 0], translateY: [0, -50] }
]

class BoilerplateComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
            console.log(ReactIScroll);

        //     this.props.dispatch(loadboilerplateReducer1('4'));
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    onScrollStart() {
        console.log("iScroll starts scrolling")
    }
    render() {
        // let {boilerplateReducer1} =this.props;
        // console.log("boilerplateReducer1 :" + boilerplateReducer1);
        // if (true) {
        //         return <LoadingComponent />
        // }
        // return (
        //         <QueueAnim animConfig={animaConfig}>
        //             <div key="content" className="height_full">
        //                     <div className="container">
        //                             <div className="row">
        //
        //                             </div>
        //                     </div>
        //             </div>
        //         </QueueAnim>
        //     )
        var i = 0, len = 1000, listOfLi = [];

        for(i; i < len; i++) {
                listOfLi.push(<li key={i}>Row {i+1}</li>)
        }
        return (
                <div>
                        <h1>Example of scrollable list</h1>
                        <ReactIScroll
                        iScroll={iScroll}
                        options={{
                                mouseWheel: true,
                                scrollbars: true
                         }}
                         onScrollStart={this.onScrollStart}>
                          <ul>
                            {listOfLi}
                          </ul>
                        </ReactIScroll>
              </div>
        )
    }

}


// export default BoilerplateComponent;
export default connect(state => ({
  boilerplateReducer1: state.boilerplateReducer1
}))(BoilerplateComponent);
