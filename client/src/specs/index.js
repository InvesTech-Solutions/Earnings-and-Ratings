'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _earnings = require('./earnings.jsx');

var _earnings2 = _interopRequireDefault(_earnings);

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
      companyId: null,
      companyName: '',
      companyEstimatedEarnings: [],
      companyActualEarnings: [],
      buySummary: '',
      sellSummary: '',
      ratings: []
    };

    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_earnings2.default, {
          estimatedEarnings: this.state.companyEstimatedEarnings,
          actualEarnings: this.state.companyActualEarnings
        })
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
              that.setState({
                exampleDataLoaded: true,
                companyId: JSON.parse(data.id),
                companyName: data.name,
                companyEstimatedEarnings: JSON.parse(data.esimated),
                companyActualEarnings: JSON.parse(data.actual),
                buySummary: data.bestsummary,
                sellSummary: data.sellsummary,
                ratings: data.raters
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJleGFtcGxlRGF0YUxvYWRlZCIsImNvbXBhbnlJZCIsImNvbXBhbnlOYW1lIiwiY29tcGFueUVzdGltYXRlZEVhcm5pbmdzIiwiY29tcGFueUFjdHVhbEVhcm5pbmdzIiwiYnV5U3VtbWFyeSIsInNlbGxTdW1tYXJ5IiwicmF0aW5ncyIsInRoYXQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIiwiaWQiLCJuYW1lIiwiZXNpbWF0ZWQiLCJhY3R1YWwiLCJiZXN0c3VtbWFyeSIsInNlbGxzdW1tYXJ5IiwicmF0ZXJzIiwiZXJyb3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMseUJBQW1CLEtBRFI7QUFFWEMsaUJBQVcsSUFGQTtBQUdYQyxtQkFBYSxFQUhGO0FBSVhDLGdDQUEwQixFQUpmO0FBS1hDLDZCQUF1QixFQUxaO0FBTVhDLGtCQUFZLEVBTkQ7QUFPWEMsbUJBQWEsRUFQRjtBQVFYQyxlQUFTO0FBUkUsS0FBYjs7QUFGaUI7QUFhbEI7Ozs7NkJBRVM7QUFDUixhQUFRO0FBQUE7QUFBQTtBQUNQLHNDQUFDLGtCQUFEO0FBQ0MsNkJBQW1CLEtBQUtSLEtBQUwsQ0FBV0ksd0JBRC9CO0FBRUMsMEJBQWdCLEtBQUtKLEtBQUwsQ0FBV0s7QUFGNUI7QUFETyxPQUFSO0FBTUQ7Ozt3Q0FFbUI7QUFDbEI7QUFDQSxVQUFJSSxPQUFPLElBQVg7QUFDQUMsdUJBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGdCQURBO0FBRUxDLGNBQU0sS0FGRDtBQUdMQyxxQkFBYSxrQkFIUjtBQUlMQyxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCO0FBQ0FOLDJCQUFFQyxJQUFGLENBQU87QUFDTEMsaUJBQUssYUFEQTtBQUVMQyxrQkFBTSxLQUZEO0FBR0xDLHlCQUFhLGtCQUhSO0FBSUxDLHFCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJDLHNCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQVAsbUJBQUtVLFFBQUwsQ0FBYztBQUNabEIsbUNBQW9CLElBRFI7QUFFWkMsMkJBQVdrQixLQUFLQyxLQUFMLENBQVdMLEtBQUtNLEVBQWhCLENBRkM7QUFHWm5CLDZCQUFhYSxLQUFLTyxJQUhOO0FBSVpuQiwwQ0FBMEJnQixLQUFLQyxLQUFMLENBQVdMLEtBQUtRLFFBQWhCLENBSmQ7QUFLWm5CLHVDQUF1QmUsS0FBS0MsS0FBTCxDQUFXTCxLQUFLUyxNQUFoQixDQUxYO0FBTVpuQiw0QkFBWVUsS0FBS1UsV0FOTDtBQU9abkIsNkJBQWFTLEtBQUtXLFdBUE47QUFRWm5CLHlCQUFTUSxLQUFLWTtBQVJGLGVBQWQ7QUFVRCxhQWhCSTtBQWlCTEMsbUJBQU8sZUFBQ0EsTUFBRCxFQUFXO0FBQ2hCWixzQkFBUUMsR0FBUixDQUFZVyxNQUFaO0FBQ0Q7QUFuQkksV0FBUDtBQXNCRCxTQTVCSTtBQTZCTEEsZUFBTyxlQUFDQSxPQUFELEVBQVc7QUFDaEJaLGtCQUFRQyxHQUFSLENBQVlXLE9BQVo7QUFDRDtBQS9CSSxPQUFQO0FBaUNEOzs7O0VBN0RlQyxnQkFBTUMsUzs7QUFnRXhCQyxtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEVhcm5pbmdzIGZyb20gJy4vZWFybmluZ3MuanN4JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBleGFtcGxlRGF0YUxvYWRlZDogZmFsc2UsXG4gICAgICBjb21wYW55SWQ6IG51bGwsXG4gICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICBjb21wYW55RXN0aW1hdGVkRWFybmluZ3M6IFtdLFxuICAgICAgY29tcGFueUFjdHVhbEVhcm5pbmdzOiBbXSxcbiAgICAgIGJ1eVN1bW1hcnk6ICcnLFxuICAgICAgc2VsbFN1bW1hcnk6ICcnLFxuICAgICAgcmF0aW5nczogW11cbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICA8RWFybmluZ3MgXG4gICAgICBlc3RpbWF0ZWRFYXJuaW5ncz17dGhpcy5zdGF0ZS5jb21wYW55RXN0aW1hdGVkRWFybmluZ3N9XG4gICAgICBhY3R1YWxFYXJuaW5ncz17dGhpcy5zdGF0ZS5jb21wYW55QWN0dWFsRWFybmluZ3N9XG4gICAgLz5cbiAgICA8L2Rpdj4pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBmb3Igbm93LCBzZW5kIGEgcmVxdWVzdCB0byBnZXQgZmFrZSBkYXRhIGZyb20gc2VydmVyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvY3JlYXRlRXhhbXBsZScsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAvLyBvbmNlIGV4YW1wbGUgZGF0YSBjcmVhdGVkLCBkbyBhbm90aGVyIEFKQVggdG8gZ2V0IHRoZSBkYXRhXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiAnL2dldEV4YW1wbGUnLFxuICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgXG4gICAgICAgICAgICAgIGV4YW1wbGVEYXRhTG9hZGVkIDogdHJ1ZSwgXG4gICAgICAgICAgICAgIGNvbXBhbnlJZDogSlNPTi5wYXJzZShkYXRhLmlkKSxcbiAgICAgICAgICAgICAgY29tcGFueU5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgICAgY29tcGFueUVzdGltYXRlZEVhcm5pbmdzOiBKU09OLnBhcnNlKGRhdGEuZXNpbWF0ZWQpLFxuICAgICAgICAgICAgICBjb21wYW55QWN0dWFsRWFybmluZ3M6IEpTT04ucGFyc2UoZGF0YS5hY3R1YWwpLFxuICAgICAgICAgICAgICBidXlTdW1tYXJ5OiBkYXRhLmJlc3RzdW1tYXJ5LFxuICAgICAgICAgICAgICBzZWxsU3VtbWFyeTogZGF0YS5zZWxsc3VtbWFyeSxcbiAgICAgICAgICAgICAgcmF0aW5nczogZGF0YS5yYXRlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl19