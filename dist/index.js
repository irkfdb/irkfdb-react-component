'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IrkfdbComponent = function (_React$Component) {
    _inherits(IrkfdbComponent, _React$Component);

    function IrkfdbComponent(props) {
        _classCallCheck(this, IrkfdbComponent);

        var _this = _possibleConstructorReturn(this, (IrkfdbComponent.__proto__ || Object.getPrototypeOf(IrkfdbComponent)).call(this, props));

        _this.state = {
            fact: ''
        };
        return _this;
    }

    _createClass(IrkfdbComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _axios2.default.get('https://api.irkfdb.in/facts/random').then(function (response) {
                var factResponse = response.data.resultSet.data[0].fact;
                _this2.setState({
                    fact: factResponse
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'irkfd-fact-container' },
                _react2.default.createElement(
                    'h3',
                    { className: 'irkfdb-header-h3' },
                    'Rajinikanth Fact:'
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'irkfdb-fact' },
                    this.state.fact
                )
            );
        }
    }]);

    return IrkfdbComponent;
}(_react2.default.Component);

exports.default = IrkfdbComponent;
;