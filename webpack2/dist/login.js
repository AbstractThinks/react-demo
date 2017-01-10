webpackJsonp([1],{

/***/ 366:
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

var _reactRouter = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animaConfig = [{ opacity: [1, 0], translateY: [0, 50] }, { opacity: [1, 0], translateY: [0, -50] }];

var LoginComponent = function (_React$Component) {
    _inherits(LoginComponent, _React$Component);

    function LoginComponent(props) {
        _classCallCheck(this, LoginComponent);

        return _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call(this, props));
    }

    _createClass(LoginComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'login',
        value: function login() {
            _reactRouter.hashHistory.push('boilerplate');
        }
    }, {
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
                        { className: 'container height_full' },
                        _react2.default.createElement(
                            'form',
                            { className: 'ycf-login_form height_full' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    'Email address'
                                ),
                                _react2.default.createElement('input', { type: 'email', className: 'form-control', placeholder: 'Enter email' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    'Password'
                                ),
                                _react2.default.createElement('input', { type: 'password', className: 'form-control', placeholder: 'Password' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'a',
                                    { onClick: this.login.bind(this), className: 'btn btn-default' },
                                    '\u767B\u5F55'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

exports.default = LoginComponent;

/***/ }

});
//# sourceMappingURL=login.js.map