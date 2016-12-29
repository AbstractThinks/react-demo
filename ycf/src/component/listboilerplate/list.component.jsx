import React from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import 'isomorphic-fetch';
import assign from 'lodash/assign';

import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'react-iscroll';

//https://iiunknown.gitbooks.io/iscroll-5-api-cn/content/refresh.html
const animaConfig = [
    { opacity: [1, 0], translateY: [0, 50] },
    { opacity: [1, 0], translateY: [0, -50] }
]
const iScrollOptions = {
    mouseWheel: false,
    scrollbars: true,
    freeScroll: false,
    invertWheelDirection: true,
    momentum: false
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
class ListBoilerplateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : []
        }
    }

    componentWillMount() {
    //    let that = this;
    //    const url = `../../../json/person/1.json`;
    //    this.loadData(url).then(function (data) {
    //             console.log(data);
    //             that.setState(assign({},that.state,data.data));
    //     });

    }
    componentDidMount() {
        let listOfLi = [];
        for(let i = 0; i < 100; i++) {
          listOfLi.push(<li key={i}>Pretty row {i}<span className="beyond">I'm beyond</span></li>)
        }
        this.setState({list:listOfLi});
    }
    componentWillUnmount() {

    }

    handleRefresh(downOrUp, callback) {

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
    onBeforeScrollStart(iScrollInstance) {

        var yScroll = iScrollInstance.y;
        console.log("vertical position:" + yScroll)

    }
    onRefresh(iScrollInstance) {

      var yScroll = iScrollInstance.y;
      console.log("vertical position:" + yScroll)

    }
    render() {


        return (
                <QueueAnim animConfig={animaConfig}>
                    <div key="content" className="height_full">
                            <div className="container">
                                    <div className="row">
                                        <div id="wrapper">
                                          <ReactIScroll
                                              iScroll={iScroll}
                                              options={iScrollOptions}
                                              onRefresh={this.onRefresh}
                                              onBeforeScrollStart={this.onBeforeScrollStart}
                                              onScrollCancel={this.onScrollCancel}
                                              onScrollStart={this.onScrollStart}
                                              onScroll={this.onScroll}
                                              onScrollEnd={this.onScrollEnd}
                                              onFlick={this.onFlick}
                                              onZoomStart={this.onZoomStart}
                                              onZoomEnd={this.onZoomEnd}>
                                            <div>
                                              <ul>
                                                {this.state.list}
                                              </ul>
                                            </div>
                                          </ReactIScroll>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </QueueAnim>
            )

    }

}


export default ListBoilerplateComponent;
