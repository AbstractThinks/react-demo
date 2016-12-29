import React from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import {loadboilerplateReducer1} from '../../actionCreator/boilerplateActionCreator';
import LoadingComponent from '../loading/loading.component';
import 'isomorphic-fetch';
import assign from 'lodash/assign';
import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'react-iscroll';

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

function checkStatus(response) {
  const status = response.status;
  if (status >= 200 && status < 300) {
    return response;
  }
  let error = new Error(response.statusText);
  error.response = response;
  error.errorCode = status;
  throw error;
}
class BoilerplateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          list: [],
          currentPage: 1,
          lastPage: false
        };
    }

    componentWillMount() {
       let that = this;
       const url = `../../../json/person/1.json`;
       this.loadData(url).then(function (data) {
                console.log(data);
                that.setState(assign({},that.state,data.data));
        });

    }
    componentDidMount() {
            let  that = this;
            setTimeout(function () {
                    that.setState({
                            isLoading:false
                    })
            },2000)
    }
    componentWillUnmount() {

    }

    handleRefresh(downOrUp, callback) {
        let {currentPage, lastPage} = this.state;
        let url;
        if (downOrUp === 'up') { // 加载更多
            if (currentPage === 5) {
                this.state.lastPage = true;
            } else {
                url = `../../../json/person/${currentPage+1}.json`;
            }
        } else { // 刷新
            lastPage = false;
            currentPage = 1;
        }
        // this.setState({currentPage,lastPage}, () => {this.loadData(downOrUp, callback)});
        let that = this;
        this.loadData(url,downOrUp, callback).then(function (data) {
                let newList = that.state.list.concat();
                for (let i = 0; i < data.data.list.length; i++) {
                        newList.push(data.data.list[i])
                }
                data.data.list = newList;
                let obj = assign({},that.state, data.data);
                that.setState(obj);
        })
    }
    loadData(url,downOrUp, callback) {
      let fetchUrl = url;
      const fetchOptions = {
              method: 'get',
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json; charset=utf-8'
              }
      };
      return fetch(fetchUrl, fetchOptions)
                      .then(checkStatus)
                      .then(response => response.json().then(json => ({json, response})))
                      .then(
                              ({json, response}) => {
                                  if (!response.ok || json.success !== true) {
                                      // 根据后台实际返回数据来定义错误格式
                                      let error = new Error(json.message || '获取数据出错');
                                      error.json = json;
                                      return Promise.reject(error, json);
                                  }
                                  return Promise.resolve(json);
                              }
                      ).catch(
                              (error) => {
                                  return Promise.reject(error);
                              }
                      );
    }
    render() {

        // let {boilerplateReducer1} =this.props;
        // console.log("boilerplateReducer1 :" + boilerplateReducer1);
        if (this.state.isLoading) {
                return <LoadingComponent />
        }
        const {list} = this.state;
        return (
                <QueueAnim animConfig={animaConfig}>
                    <div key="content" className="height_full">
                            <div className="container">
                                    <div className="row">
                                        <ReactIScroll iScroll={iScroll} handleRefresh={this.handleRefresh.bind(this)} className="">
                                          <ul className="example-paging">
                                            {this.state.list.map((item) =>
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


export default connect(state => ({
  boilerplateReducer1: state.boilerplateReducer1
}))(BoilerplateComponent);
