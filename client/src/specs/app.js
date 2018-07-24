'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
              that.setState({ exampleDataLoaded: true, exampleData: Data });
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

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJleGFtcGxlRGF0YSIsInRoYXQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwic2V0U3RhdGUiLCJEYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMseUJBQW1CLEtBRFI7QUFFWEMsbUJBQWE7QUFGRixLQUFiOztBQUZpQjtBQU9sQjs7Ozs2QkFFUztBQUNSLGFBQVE7QUFBQTtBQUFBO0FBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNLE9BQVI7QUFHRDs7O3dDQUVtQjtBQUNsQjtBQUNBLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyx1QkFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsY0FBTSxLQUZEO0FBR0xDLHFCQUFhLGtCQUhSO0FBSUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakI7QUFDQU4sMkJBQUVDLElBQUYsQ0FBTztBQUNMQyxpQkFBSyxhQURBO0FBRUxDLGtCQUFNLEtBRkQ7QUFHTEMseUJBQWEsa0JBSFI7QUFJTEMscUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQlAsbUJBQUtRLFFBQUwsQ0FBYyxFQUFFVixtQkFBb0IsSUFBdEIsRUFBNEJDLGFBQWNVLElBQTFDLEVBQWQ7QUFFRCxhQVBJO0FBUUxDLG1CQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNoQkMsc0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNEO0FBVkksV0FBUDtBQWFELFNBbkJJO0FBb0JMQSxlQUFPLGVBQUNBLE9BQUQsRUFBVztBQUNoQkMsa0JBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNEO0FBdEJJLE9BQVA7QUF3QkQ7Ozs7RUEzQ2VHLGdCQUFNQyxTOztrQkE4Q1RuQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBleGFtcGxlRGF0YUxvYWRlZDogZmFsc2UsXG4gICAgICBleGFtcGxlRGF0YToge31cbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPHA+eW88L3A+XG4gICAgPC9kaXY+KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gZm9yIG5vdywgc2VuZCBhIHJlcXVlc3QgdG8gZ2V0IGZha2UgZGF0YSBmcm9tIHNlcnZlclxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2NyZWF0ZUV4YW1wbGUnLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgLy8gb25jZSBleGFtcGxlIGRhdGEgY3JlYXRlZCwgZG8gYW5vdGhlciBBSkFYIHRvIGdldCB0aGUgZGF0YVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHVybDogJy9nZXRFeGFtcGxlJyxcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgZXhhbXBsZURhdGFMb2FkZWQgOiB0cnVlLCBleGFtcGxlRGF0YSA6IERhdGEgfSk7XG5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=