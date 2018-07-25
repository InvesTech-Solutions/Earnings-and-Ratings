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

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      exampleDataLoaded: false,
      exampleData: {}
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
        url: '/createExample',
        type: 'GET',
        contentType: 'application/json',
        success: function success(data) {
          // once example data created, do another AJAX to get the data
          _jquery2.default.ajax({
            url: '/getExample',
            type: 'GET',
            contentType: 'application/json',
            success: function success(data) {
              that.setState({ exampleDataLoaded: true, exampleData: data });
            },
            error: function error(_error) {
              console.log(_error);
            }
          });
        },
        error: function error(_error2) {
          console.log(_error2);
        }
      });
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJleGFtcGxlRGF0YUxvYWRlZCIsImV4YW1wbGVEYXRhIiwidGhhdCIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMseUJBQW1CLEtBRFI7QUFFWEMsbUJBQWE7QUFGRixLQUFiOztBQUZpQjtBQU9sQjs7Ozs2QkFFUztBQUNSLGFBQVE7QUFBQTtBQUFBO0FBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNLE9BQVI7QUFHRDs7O3dDQUVtQjtBQUNsQjtBQUNBLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyx1QkFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsY0FBTSxLQUZEO0FBR0xDLHFCQUFhLGtCQUhSO0FBSUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakI7QUFDQU4sMkJBQUVDLElBQUYsQ0FBTztBQUNMQyxpQkFBSyxhQURBO0FBRUxDLGtCQUFNLEtBRkQ7QUFHTEMseUJBQWEsa0JBSFI7QUFJTEMscUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQlAsbUJBQUtRLFFBQUwsQ0FBYyxFQUFFVixtQkFBb0IsSUFBdEIsRUFBNEJDLGFBQWNRLElBQTFDLEVBQWQ7QUFFRCxhQVBJO0FBUUxFLG1CQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNoQkMsc0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNEO0FBVkksV0FBUDtBQWFELFNBbkJJO0FBb0JMQSxlQUFPLGVBQUNBLE9BQUQsRUFBVztBQUNoQkMsa0JBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNEO0FBdEJJLE9BQVA7QUF3QkQ7Ozs7RUEzQ2VHLGdCQUFNQyxTOztBQThDeEJDLG1CQUFTQyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgZXhhbXBsZURhdGFMb2FkZWQ6IGZhbHNlLFxuICAgICAgZXhhbXBsZURhdGE6IHt9XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoPGRpdj5cbiAgICAgIDxwPnlvPC9wPlxuICAgIDwvZGl2PilcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGZvciBub3csIHNlbmQgYSByZXF1ZXN0IHRvIGdldCBmYWtlIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9jcmVhdGVFeGFtcGxlJyxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIC8vIG9uY2UgZXhhbXBsZSBkYXRhIGNyZWF0ZWQsIGRvIGFub3RoZXIgQUpBWCB0byBnZXQgdGhlIGRhdGFcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6ICcvZ2V0RXhhbXBsZScsXG4gICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7IGV4YW1wbGVEYXRhTG9hZGVkIDogdHJ1ZSwgZXhhbXBsZURhdGEgOiBkYXRhIH0pO1xuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiXX0=