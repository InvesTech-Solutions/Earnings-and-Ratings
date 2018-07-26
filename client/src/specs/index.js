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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJleGFtcGxlRGF0YUxvYWRlZCIsImNvbXBhbnlJZCIsImNvbXBhbnlOYW1lIiwiY29tcGFueUVzdGltYXRlZEVhcm5pbmdzIiwiY29tcGFueUFjdHVhbEVhcm5pbmdzIiwiYnV5U3VtbWFyeSIsInNlbGxTdW1tYXJ5IiwicmF0aW5ncyIsInRoYXQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwic2V0U3RhdGUiLCJKU09OIiwicGFyc2UiLCJpZCIsIm5hbWUiLCJlc2ltYXRlZCIsImFjdHVhbCIsImJlc3RzdW1tYXJ5Iiwic2VsbHN1bW1hcnkiLCJyYXRlcnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMseUJBQW1CLEtBRFI7QUFFWEMsaUJBQVcsSUFGQTtBQUdYQyxtQkFBYSxFQUhGO0FBSVhDLGdDQUEwQixFQUpmO0FBS1hDLDZCQUF1QixFQUxaO0FBTVhDLGtCQUFZLEVBTkQ7QUFPWEMsbUJBQWEsRUFQRjtBQVFYQyxlQUFTO0FBUkUsS0FBYjs7QUFGaUI7QUFhbEI7Ozs7NkJBRVM7QUFDUixhQUFRO0FBQUE7QUFBQTtBQUNQLHNDQUFDLGtCQUFEO0FBQ0MsNkJBQW1CLEtBQUtSLEtBQUwsQ0FBV0ksd0JBRC9CO0FBRUMsMEJBQWdCLEtBQUtKLEtBQUwsQ0FBV0s7QUFGNUI7QUFETyxPQUFSO0FBTUQ7Ozt3Q0FFbUI7QUFDbEI7QUFDQSxVQUFJSSxPQUFPLElBQVg7QUFDQUMsdUJBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGdCQURBO0FBRUxDLGNBQU0sS0FGRDtBQUdMQyxxQkFBYSxrQkFIUjtBQUlMQyxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCO0FBQ0FOLDJCQUFFQyxJQUFGLENBQU87QUFDTEMsaUJBQUssYUFEQTtBQUVMQyxrQkFBTSxLQUZEO0FBR0xDLHlCQUFhLGtCQUhSO0FBSUxDLHFCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJQLG1CQUFLUSxRQUFMLENBQWM7QUFDWmhCLG1DQUFvQixJQURSO0FBRVpDLDJCQUFXZ0IsS0FBS0MsS0FBTCxDQUFXSCxLQUFLSSxFQUFoQixDQUZDO0FBR1pqQiw2QkFBYWEsS0FBS0ssSUFITjtBQUlaakIsMENBQTBCYyxLQUFLQyxLQUFMLENBQVdILEtBQUtNLFFBQWhCLENBSmQ7QUFLWmpCLHVDQUF1QmEsS0FBS0MsS0FBTCxDQUFXSCxLQUFLTyxNQUFoQixDQUxYO0FBTVpqQiw0QkFBWVUsS0FBS1EsV0FOTDtBQU9aakIsNkJBQWFTLEtBQUtTLFdBUE47QUFRWmpCLHlCQUFTUSxLQUFLVTtBQVJGLGVBQWQ7QUFVRCxhQWZJO0FBZ0JMQyxtQkFBTyxlQUFDQSxNQUFELEVBQVc7QUFDaEJDLHNCQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDRDtBQWxCSSxXQUFQO0FBcUJELFNBM0JJO0FBNEJMQSxlQUFPLGVBQUNBLE9BQUQsRUFBVztBQUNoQkMsa0JBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNEO0FBOUJJLE9BQVA7QUFnQ0Q7Ozs7RUE1RGVHLGdCQUFNQyxTOztBQStEeEJDLG1CQUFTQyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgRWFybmluZ3MgZnJvbSAnLi9lYXJuaW5ncy5qc3gnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGV4YW1wbGVEYXRhTG9hZGVkOiBmYWxzZSxcbiAgICAgIGNvbXBhbnlJZDogbnVsbCxcbiAgICAgIGNvbXBhbnlOYW1lOiAnJyxcbiAgICAgIGNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5nczogW10sXG4gICAgICBjb21wYW55QWN0dWFsRWFybmluZ3M6IFtdLFxuICAgICAgYnV5U3VtbWFyeTogJycsXG4gICAgICBzZWxsU3VtbWFyeTogJycsXG4gICAgICByYXRpbmdzOiBbXVxuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgIDxFYXJuaW5ncyBcbiAgICAgIGVzdGltYXRlZEVhcm5pbmdzPXt0aGlzLnN0YXRlLmNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5nc31cbiAgICAgIGFjdHVhbEVhcm5pbmdzPXt0aGlzLnN0YXRlLmNvbXBhbnlBY3R1YWxFYXJuaW5nc31cbiAgICAvPlxuICAgIDwvZGl2PilcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGZvciBub3csIHNlbmQgYSByZXF1ZXN0IHRvIGdldCBmYWtlIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9jcmVhdGVFeGFtcGxlJyxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIC8vIG9uY2UgZXhhbXBsZSBkYXRhIGNyZWF0ZWQsIGRvIGFub3RoZXIgQUpBWCB0byBnZXQgdGhlIGRhdGFcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6ICcvZ2V0RXhhbXBsZScsXG4gICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7IFxuICAgICAgICAgICAgICBleGFtcGxlRGF0YUxvYWRlZCA6IHRydWUsIFxuICAgICAgICAgICAgICBjb21wYW55SWQ6IEpTT04ucGFyc2UoZGF0YS5pZCksXG4gICAgICAgICAgICAgIGNvbXBhbnlOYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgIGNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5nczogSlNPTi5wYXJzZShkYXRhLmVzaW1hdGVkKSxcbiAgICAgICAgICAgICAgY29tcGFueUFjdHVhbEVhcm5pbmdzOiBKU09OLnBhcnNlKGRhdGEuYWN0dWFsKSxcbiAgICAgICAgICAgICAgYnV5U3VtbWFyeTogZGF0YS5iZXN0c3VtbWFyeSxcbiAgICAgICAgICAgICAgc2VsbFN1bW1hcnk6IGRhdGEuc2VsbHN1bW1hcnksXG4gICAgICAgICAgICAgIHJhdGluZ3M6IGRhdGEucmF0ZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdfQ==