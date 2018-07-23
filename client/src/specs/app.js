'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log(data);
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      exampleDataLoaded: false
    };

    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'yo'
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // for now, send a request to get fake data from server
      var that = this;
      _jquery2.default.ajax({
        url: '/fake',
        type: 'GET',
        contentType: 'application/json',
        success: function success(data) {
          console.log(data);
        },
        error: function error(_error) {
          console.log('failed to connect to the server');
        }
      });
    }
  }]);

  return App;
}(_react2.default.Component);

// ReactDOM.render(<App />, document.getElementById('app'))
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJ0aGF0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFDQTtJQUNNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx5QkFBbUI7QUFEUixLQUFiOztBQUZpQjtBQU1sQjs7Ozs2QkFFUztBQUNSLGFBQVE7QUFBQTtBQUFBO0FBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNLE9BQVI7QUFHRDs7O3dDQUVtQjtBQUNsQjtBQUNBLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyx1QkFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssT0FEQTtBQUVMQyxjQUFNLEtBRkQ7QUFHTEMscUJBQWEsa0JBSFI7QUFJTEMsaUJBQVMsaUJBQVNDLElBQVQsRUFBZTtBQUN0QkMsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUVELFNBUEk7QUFRTEcsZUFBTyxlQUFTQSxNQUFULEVBQWdCO0FBQ3JCRixrQkFBUUMsR0FBUixDQUFZLGlDQUFaO0FBQ0Q7QUFWSSxPQUFQO0FBWUQ7Ozs7RUE5QmVFLGdCQUFNQyxTOztBQWlDeEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gY29uc29sZS5sb2coZGF0YSk7XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGV4YW1wbGVEYXRhTG9hZGVkOiBmYWxzZVxuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8cD55bzwvcD5cbiAgICA8L2Rpdj4pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBmb3Igbm93LCBzZW5kIGEgcmVxdWVzdCB0byBnZXQgZmFrZSBkYXRhIGZyb20gc2VydmVyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvZmFrZScsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBjb25uZWN0IHRvIHRoZSBzZXJ2ZXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdfQ==