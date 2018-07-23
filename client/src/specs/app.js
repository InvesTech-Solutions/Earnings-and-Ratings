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
          this.setState({ exampleDataLoaded: true });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJ0aGF0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImVycm9yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUNBO0lBQ01BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHlCQUFtQjtBQURSLEtBQWI7O0FBRmlCO0FBTWxCOzs7OzZCQUVTO0FBQ1IsYUFBUTtBQUFBO0FBQUE7QUFDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sT0FBUjtBQUdEOzs7d0NBRW1CO0FBQ2xCO0FBQ0EsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLHVCQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxPQURBO0FBRUxDLGNBQU0sS0FGRDtBQUdMQyxxQkFBYSxrQkFIUjtBQUlMQyxpQkFBUyxpQkFBU0MsSUFBVCxFQUFlO0FBQ3RCQyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0EsZUFBS0csUUFBTCxDQUFjLEVBQUVYLG1CQUFtQixJQUFyQixFQUFkO0FBRUQsU0FSSTtBQVNMWSxlQUFPLGVBQVNBLE1BQVQsRUFBZ0I7QUFDckJILGtCQUFRQyxHQUFSLENBQVksaUNBQVo7QUFDRDtBQVhJLE9BQVA7QUFhRDs7OztFQS9CZUcsZ0JBQU1DLFM7O0FBa0N4QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBjb25zb2xlLmxvZyhkYXRhKTtcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgZXhhbXBsZURhdGFMb2FkZWQ6IGZhbHNlXG4gICAgfVxuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIDxwPnlvPC9wPlxuICAgIDwvZGl2PilcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGZvciBub3csIHNlbmQgYSByZXF1ZXN0IHRvIGdldCBmYWtlIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9mYWtlJyxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBleGFtcGxlRGF0YUxvYWRlZDogdHJ1ZSB9KTtcblxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbGVkIHRvIGNvbm5lY3QgdG8gdGhlIHNlcnZlcicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8vIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl19