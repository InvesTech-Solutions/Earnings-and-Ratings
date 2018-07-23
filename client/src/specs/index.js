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
              console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJleGFtcGxlRGF0YUxvYWRlZCIsInRoYXQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUNBO0lBQ01BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHlCQUFtQjtBQURSLEtBQWI7O0FBRmlCO0FBTWxCOzs7OzZCQUVTO0FBQ1IsYUFBUTtBQUFBO0FBQUE7QUFDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sT0FBUjtBQUdEOzs7d0NBRW1CO0FBQ2xCO0FBQ0EsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLHVCQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxnQkFEQTtBQUVMQyxjQUFNLEtBRkQ7QUFHTEMscUJBQWEsa0JBSFI7QUFJTEMsaUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQjtBQUNBTiwyQkFBRUMsSUFBRixDQUFPO0FBQ0xDLGlCQUFLLGFBREE7QUFFTEMsa0JBQU0sS0FGRDtBQUdMQyx5QkFBYSxrQkFIUjtBQUlMQyxxQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCQyxzQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0QsYUFOSTtBQU9MRyxtQkFBTyxlQUFDQSxNQUFELEVBQVc7QUFDaEJGLHNCQUFRQyxHQUFSLENBQVlDLE1BQVo7QUFDRDtBQVRJLFdBQVA7QUFZRCxTQWxCSTtBQW1CTEEsZUFBTyxlQUFDQSxPQUFELEVBQVc7QUFDaEJGLGtCQUFRQyxHQUFSLENBQVlDLE9BQVo7QUFDRDtBQXJCSSxPQUFQO0FBdUJEOzs7O0VBekNlQyxnQkFBTUMsUzs7QUE0Q3hCQyxtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gY29uc29sZS5sb2coZGF0YSk7XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGV4YW1wbGVEYXRhTG9hZGVkOiBmYWxzZVxuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8cD55bzwvcD5cbiAgICA8L2Rpdj4pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBmb3Igbm93LCBzZW5kIGEgcmVxdWVzdCB0byBnZXQgZmFrZSBkYXRhIGZyb20gc2VydmVyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvY3JlYXRlRXhhbXBsZScsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAvLyBvbmNlIGV4YW1wbGUgZGF0YSBjcmVhdGVkLCBkbyBhbm90aGVyIEFKQVggdG8gZ2V0IHRoZSBkYXRhXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiAnL2dldEV4YW1wbGUnLFxuICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl19