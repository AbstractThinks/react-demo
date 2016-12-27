import React from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import {loadboilerplateReducer1} from '../../actionCreator/boilerplateActionCreator';
import LoadingComponent from '../loading/loading.component';

import callApi from '../../../fetch/index'
import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';

const animaConfig = [
    { opacity: [1, 0], translateY: [0, 50] },
    { opacity: [1, 0], translateY: [0, -50] }
]
const iscrollOption = {
    mouseWheel: true,
    scrollbars: true,
    pullUp: true,
    pullDown: true
}

class BoilerplateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          list: [],
          currentPage: 1,
          lastPage: false
        };
    }

    componentWillMount() {
            console.log(ReactIScroll);
        this.loadData();
        //     this.props.dispatch(loadboilerplateReducer1('4'));
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    handleRefresh(downOrUp, callback) {
      let {currentPage, lastPage} = this.state;
      if (downOrUp === 'up') { // 加载更多
        if (currentPage === 5) {
          lastPage = true;
        } else {
          currentPage++;
        }
      } else { // 刷新
        lastPage = false;
        currentPage = 1;
      }
      this.setState({
        currentPage,
        lastPage
      }, () => {
        this.loadData(downOrUp, callback);
      });
    }
    loadData(downOrUp, callback) {
      const {currentPage} = this.state;
      const url = `../../../json/person/${currentPage}.json`;

    }
    render() {

        // let {boilerplateReducer1} =this.props;
        // console.log("boilerplateReducer1 :" + boilerplateReducer1);
        // if (true) {
        //         return <LoadingComponent />
        // }
        const {list} = this.state;
        return (
                <QueueAnim animConfig={animaConfig}>
                    <div key="content" className="height_full">
                            <div className="container">
                                    <div className="row">
                                        <ReactIScroll iScroll={iScroll} handleRefresh={this.handleRefresh.bind(this)} className="example">
                                          <ul className="example-paging">
                                            {list.map((item) =>
                                              <li key={item.id}>{item.id}</li>
                                            )}
                                          </ul>
                                        </ReactIScroll>
                                    </div>
                            </div>
                    </div>
                </QueueAnim>
            )

    }

}


// export default BoilerplateComponent;
export default connect(state => ({
  boilerplateReducer1: state.boilerplateReducer1
}))(BoilerplateComponent);
