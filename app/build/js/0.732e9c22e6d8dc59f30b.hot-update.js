webpackHotUpdate(0,{

/***/ 179:
/*!***************************************************!*\
  !*** ./src/component/router/Router.component.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 180);
	
	var _Login = __webpack_require__(/*! ../login/Login.component */ 235);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Index = __webpack_require__(/*! ../index/Index.component */ 236);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RouterComponent = function (_React$component) {
	    _inherits(RouterComponent, _React$component);
	
	    function RouterComponent() {
	        _classCallCheck(this, RouterComponent);
	
	        return _possibleConstructorReturn(this, (RouterComponent.__proto__ || Object.getPrototypeOf(RouterComponent)).apply(this, arguments));
	    }
	
	    _createClass(RouterComponent, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _reactRouter.Router,
	                { history: hashHistory },
	                _react2.default.createElement(
	                    Route,
	                    { path: '/', component: _Login2.default },
	                    _react2.default.createElement(Route, { path: '/index', component: _Index2.default })
	                )
	            );
	        }
	    }]);
	
	    return RouterComponent;
	}(_react2.default.component);
	
	exports.default = RouterComponent;

/***/ }

})
//# sourceMappingURL=0.732e9c22e6d8dc59f30b.hot-update.js.map