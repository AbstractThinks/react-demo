webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/*!**************************!*\
  !*** ./clock/src/app.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(/*! redux */ 179);
	
	var _reducer = __webpack_require__(/*! ./reducer */ 200);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _reduxLogger = __webpack_require__(/*! redux-logger */ 201);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Counter from './components/Counter'
	
	
	var store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)((0, _reduxLogger2.default)()));
	
	var Counter = function (_Component) {
	  _inherits(Counter, _Component);
	
	  function Counter() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Counter);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.incrementIfOdd = function () {
	      if (_this.props.value % 2 !== 0) {
	        _this.props.onIncrement();
	      }
	    }, _this.incrementAsync = function () {
	      setTimeout(_this.props.onIncrement, 1000);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Counter, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          value = _props.value,
	          onIncrement = _props.onIncrement,
	          onDecrement = _props.onDecrement;
	
	      return _react2.default.createElement(
	        'p',
	        null,
	        'Clicked: ',
	        value,
	        ' times',
	        ' ',
	        _react2.default.createElement(
	          'button',
	          { onClick: onIncrement },
	          '+'
	        ),
	        ' ',
	        _react2.default.createElement(
	          'button',
	          { onClick: onDecrement },
	          '-'
	        ),
	        ' ',
	        _react2.default.createElement(
	          'button',
	          { onClick: this.incrementIfOdd },
	          'Increment if odd'
	        ),
	        ' ',
	        _react2.default.createElement(
	          'button',
	          { onClick: this.incrementAsync },
	          'Increment async'
	        )
	      );
	    }
	  }]);
	
	  return Counter;
	}(_react.Component);
	
	var render = function render() {
	  _reactDom2.default.render(_react2.default.createElement(Counter, {
	    value: store.getState(),
	    onIncrement: function onIncrement() {
	      return store.dispatch({ type: 'INCREMENT' });
	    },
	    onDecrement: function onDecrement() {
	      return store.dispatch({ type: 'DECREMENT' });
	    }
	  }), document.getElementById('root'));
	};
	
	render();
	store.subscribe(render);

/***/ }
])
//# sourceMappingURL=0.5dd4d0f3ffc5b809432a.hot-update.js.map