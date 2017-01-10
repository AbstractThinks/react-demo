webpackJsonp([0],{

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(70);

var _rcQueueAnim = __webpack_require__(82);

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

var _boilerplateActionCreator = __webpack_require__(367);

var _loading = __webpack_require__(368);

var _loading2 = _interopRequireDefault(_loading);

__webpack_require__(152);

var _assign = __webpack_require__(153);

var _assign2 = _interopRequireDefault(_assign);

var _iscrollProbe = __webpack_require__(151);

var _iscrollProbe2 = _interopRequireDefault(_iscrollProbe);

var _reactIscroll = __webpack_require__(154);

var _reactIscroll2 = _interopRequireDefault(_reactIscroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animaConfig = [{ opacity: [1, 0], translateY: [0, 50] }, { opacity: [1, 0], translateY: [0, -50] }];
var iscrollOption = {
    mouseWheel: true,
    scrollbars: true,
    pullUp: true,
    pullDown: true
};

function checkStatus(response) {
    var status = response.status;
    if (status >= 200 && status < 300) {
        return response;
    }
    var error = new Error(response.statusText);
    error.response = response;
    error.errorCode = status;
    throw error;
}

var BoilerplateComponent = function (_React$Component) {
    _inherits(BoilerplateComponent, _React$Component);

    function BoilerplateComponent(props) {
        _classCallCheck(this, BoilerplateComponent);

        var _this = _possibleConstructorReturn(this, (BoilerplateComponent.__proto__ || Object.getPrototypeOf(BoilerplateComponent)).call(this, props));

        _this.state = {
            isLoading: true,
            list: [],
            currentPage: 1,
            lastPage: false
        };
        return _this;
    }

    _createClass(BoilerplateComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var that = this;
            var url = '../../../json/person/1.json';
            this.loadData(url).then(function (data) {
                console.log(data);
                that.setState((0, _assign2.default)({}, that.state, data.data));
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var that = this;
            setTimeout(function () {
                that.setState({
                    isLoading: false
                });
            }, 2000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'handleRefresh',
        value: function handleRefresh(downOrUp, callback) {
            var _state = this.state,
                currentPage = _state.currentPage,
                lastPage = _state.lastPage;

            var url = void 0;
            if (downOrUp === 'up') {
                // 加载更多
                if (currentPage === 5) {
                    this.state.lastPage = true;
                } else {
                    url = '../../../json/person/' + (currentPage + 1) + '.json';
                }
            } else {
                // 刷新
                lastPage = false;
                currentPage = 1;
            }
            // this.setState({currentPage,lastPage}, () => {this.loadData(downOrUp, callback)});
            var that = this;
            this.loadData(url, downOrUp, callback).then(function (data) {
                var newList = that.state.list.concat();
                for (var i = 0; i < data.data.list.length; i++) {
                    newList.push(data.data.list[i]);
                }
                data.data.list = newList;
                var obj = (0, _assign2.default)({}, that.state, data.data);
                that.setState(obj);
            });
        }
    }, {
        key: 'loadData',
        value: function loadData(url, downOrUp, callback) {
            var fetchUrl = url;
            var fetchOptions = {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            return fetch(fetchUrl, fetchOptions).then(checkStatus).then(function (response) {
                return response.json().then(function (json) {
                    return { json: json, response: response };
                });
            }).then(function (_ref) {
                var json = _ref.json,
                    response = _ref.response;

                if (!response.ok || json.success !== true) {
                    // 根据后台实际返回数据来定义错误格式
                    var error = new Error(json.message || '获取数据出错');
                    error.json = json;
                    return Promise.reject(error, json);
                }
                return Promise.resolve(json);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            // let {boilerplateReducer1} =this.props;
            // console.log("boilerplateReducer1 :" + boilerplateReducer1);
            if (this.state.isLoading) {
                return _react2.default.createElement(_loading2.default, null);
            }
            var list = this.state.list;

            return _react2.default.createElement(
                _rcQueueAnim2.default,
                { animConfig: animaConfig },
                _react2.default.createElement(
                    'div',
                    { key: 'content', className: 'height_full' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                _reactIscroll2.default,
                                { iScroll: _iscrollProbe2.default, handleRefresh: this.handleRefresh.bind(this), className: '' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'example-paging' },
                                    this.state.list.map(function (item) {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: item.id },
                                            item.id
                                        );
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BoilerplateComponent;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        boilerplateReducer1: state.boilerplateReducer1
    };
})(BoilerplateComponent);

/***/ },

/***/ 367:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadboilerplateReducer1 = loadboilerplateReducer1;
exports.addComment = addComment;
function loadboilerplateReducer1(userId) {
  return {
    types: ['LOAD_boilerplateReducer1_REQUEST', 'LOAD_boilerplateReducer1_SUCCESS', 'LOAD_boilerplateReducer1_FAILURE'],
    // shouldCallAPI: (state) => {
    //         !state.users[userId]
    // },
    callAPI: function callAPI() {
      return fetch('http://myapi.com/users/' + userId + '/posts');
    },
    payload: { userId: userId }
  };
}

function addComment(postId, message) {
  return {
    types: ['ADD_COMMENT_REQUEST', 'ADD_COMMENT_SUCCESS', 'ADD_COMMENT_FAILURE'],
    callAPI: function callAPI() {
      return fetch('http://myapi.com/posts/' + postId + '/comments', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      });
    },
    payload: { postId: postId, message: message }
  };
}

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _rcQueueAnim = __webpack_require__(82);

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = __webpack_require__(375);

var animaConfig = [{ opacity: [1, 0], translateY: [0, 50] }, { opacity: [1, 0], translateY: [0, -50] }];

var LoadingComponent = function (_React$Component) {
    _inherits(LoadingComponent, _React$Component);

    function LoadingComponent(props) {
        _classCallCheck(this, LoadingComponent);

        return _possibleConstructorReturn(this, (LoadingComponent.__proto__ || Object.getPrototypeOf(LoadingComponent)).call(this, props));
    }

    _createClass(LoadingComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _rcQueueAnim2.default,
                { animConfig: animaConfig },
                _react2.default.createElement(
                    'div',
                    { key: 'content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ycf-loading_container' },
                        _react2.default.createElement(Loader, { color: '#26A65B', size: '16px' })
                    )
                )
            );
            // return (
            //         <div>789</div>
            // )
        }
    }]);

    return LoadingComponent;
}(_react2.default.Component);

exports.default = LoadingComponent;

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var getVendorPropertyName = __webpack_require__(372);

module.exports = function(target, sources) {
  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  var prefixed = {};
  for (var key in to) {
    prefixed[getVendorPropertyName(key)] = to[key]
  }

  return prefixed
}


/***/ },

/***/ 370:
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = document.createElement('div').style;


/***/ },

/***/ 371:
/***/ function(module, exports) {

"use strict";
'use strict';

var cssVendorPrefix;

module.exports = function() {

  if (cssVendorPrefix) return cssVendorPrefix;

  var styles = window.getComputedStyle(document.documentElement, '');
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];

  return cssVendorPrefix = '-' + pre + '-';
}


/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var builtinStyle = __webpack_require__(370);
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
var domVendorPrefix;

// Helper function to get the proper vendor property name. (transition => WebkitTransition)
module.exports = function(prop, isSupportTest) {

  var vendorProp;
  if (prop in builtinStyle) return prop;

  var UpperProp = prop.charAt(0).toUpperCase() + prop.substr(1);

  if (domVendorPrefix) {

    vendorProp = domVendorPrefix + UpperProp;
    if (vendorProp in builtinStyle) {
      return vendorProp;
    }
  } else {

    for (var i = 0; i < prefixes.length; ++i) {
      vendorProp = prefixes[i] + UpperProp;
      if (vendorProp in builtinStyle) {
        domVendorPrefix = prefixes[i];
        return vendorProp;
      }
    }
  }

  // if support test, not fallback to origin prop name
  if (!isSupportTest) {
    return prop;
  }

}


/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var insertRule = __webpack_require__(374);
var vendorPrefix = __webpack_require__(371)();
var index = 0;

module.exports = function(keyframes) {
  // random name
  var name = 'anim_' + (++index) + (+new Date);
  var css = "@" + vendorPrefix + "keyframes " + name + " {";

  for (var key in keyframes) {
    css += key + " {";

    for (var property in keyframes[key]) {
      var part = ":" + keyframes[key][property] + ";";
      // We do vendor prefix for every property
      css += vendorPrefix + property + part;
      css += property + part;
    }

    css += "}";
  }

  css += "}";

  insertRule(css);

  return name
}


/***/ },

/***/ 374:
/***/ function(module, exports) {

"use strict";
'use strict';

var extraSheet;

module.exports = function(css) {

  if (!extraSheet) {
    // First time, create an extra stylesheet for adding rules
    extraSheet = document.createElement('style');
    document.getElementsByTagName('head')[0].appendChild(extraSheet);
    // Keep reference to actual StyleSheet object (`styleSheet` for IE < 9)
    extraSheet = extraSheet.sheet || extraSheet.styleSheet;
  }

  var index = (extraSheet.cssRules || extraSheet.rules).length;
  extraSheet.insertRule(css, index);

  return extraSheet;
}


/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var React = __webpack_require__(3);
var assign = __webpack_require__(369);
var insertKeyframesRule = __webpack_require__(373);

/**
 * @type {Object}
 */
var keyframes = {
    '0%': {
        transform: 'scale(1)',
        opacity: 1
    },
    '45%': {
        transform: 'scale(0.1)',
        opacity: 0.7
    },
    '80%': {
        transform: 'scale(1)',
        opacity: 1
    }
};

/**
 * @type {String}
 */
var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({
    displayName: 'Loader',

    /**
     * @type {Object}
     */
    propTypes: {
        loading: React.PropTypes.bool,
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },

    /**
     * @return {Object}
     */
    getDefaultProps: function getDefaultProps() {
        return {
            loading: true,
            color: '#ffffff',
            size: '15px',
            margin: '2px'
        };
    },

    /**
     * @return {Object}
     */
    getBallStyle: function getBallStyle() {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            margin: this.props.margin,
            borderRadius: '100%',
            verticalAlign: this.props.verticalAlign
        };
    },

    /**
     * @param  {Number} i
     * @return {Object}
     */
    getAnimationStyle: function getAnimationStyle(i) {
        var animation = [animationName, '0.75s', i * 0.12 + 's', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' ');
        var animationFillMode = 'both';

        return {
            animation: animation,
            animationFillMode: animationFillMode
        };
    },

    /**
     * @param  {Number} i
     * @return {Object}
     */
    getStyle: function getStyle(i) {
        return assign(this.getBallStyle(i), this.getAnimationStyle(i), {
            display: 'inline-block'
        });
    },

    /**
     * @param  {Boolean} loading
     * @return {ReactComponent || null}
     */
    renderLoader: function renderLoader(loading) {
        if (loading) {
            return React.createElement(
                'div',
                { id: this.props.id, className: this.props.className },
                React.createElement('div', { style: this.getStyle(1) }),
                React.createElement('div', { style: this.getStyle(2) }),
                React.createElement('div', { style: this.getStyle(3) })
            );
        }

        return null;
    },

    render: function render() {
        return this.renderLoader(this.props.loading);
    }
});

module.exports = Loader;

/***/ }

});
//# sourceMappingURL=boilerplate.js.map