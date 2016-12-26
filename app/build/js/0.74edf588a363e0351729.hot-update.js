webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import { Router,Route } from 'react-router';
	// import RouterComponent from './component/router/Router.component';
	
	var IndexComponent = function (_React$component) {
	    _inherits(IndexComponent, _React$component);
	
	    function IndexComponent() {
	        _classCallCheck(this, IndexComponent);
	
	        return _possibleConstructorReturn(this, (IndexComponent.__proto__ || Object.getPrototypeOf(IndexComponent)).apply(this, arguments));
	    }
	
	    _createClass(IndexComponent, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'index'
	            );
	        }
	    }]);
	
	    return IndexComponent;
	}(_react2.default.component);
	
	var LoginComponent = function (_React$component2) {
	    _inherits(LoginComponent, _React$component2);
	
	    function LoginComponent() {
	        _classCallCheck(this, LoginComponent);
	
	        return _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).apply(this, arguments));
	    }
	
	    _createClass(LoginComponent, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                'Login'
	            );
	        }
	    }]);
	
	    return LoginComponent;
	}(_react2.default.component);
	
	var RouterComponent = function (_React$component3) {
	    _inherits(RouterComponent, _React$component3);
	
	    function RouterComponent() {
	        _classCallCheck(this, RouterComponent);
	
	        return _possibleConstructorReturn(this, (RouterComponent.__proto__ || Object.getPrototypeOf(RouterComponent)).apply(this, arguments));
	    }
	
	    _createClass(RouterComponent, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                Router,
	                { history: hashHistory },
	                _react2.default.createElement(
	                    Route,
	                    { path: '/', component: LoginComponent },
	                    _react2.default.createElement(Route, { path: '/index', component: IndexComponent })
	                )
	            );
	        }
	    }]);
	
	    return RouterComponent;
	}(_react2.default.component);
	
	_reactDom2.default.render(_react2.default.createElement(RouterComponent, null), document.getElementById('root'));

/***/ }
])
//# sourceMappingURL=0.74edf588a363e0351729.hot-update.js.map