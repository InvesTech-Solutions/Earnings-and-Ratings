'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _earnings = require('./earningsComp/earnings');

var _earnings2 = _interopRequireDefault(_earnings);

var _summary = require('./summaryComp/summary');

var _summary2 = _interopRequireDefault(_summary);

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
              console.log('Failed to access the data base : ', _error);
            }
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_summary2.default, {
          ratings: this.state.ratings
        }),
        _react2.default.createElement(_earnings2.default, {
          estimatedEarnings: this.state.companyEstimatedEarnings,
          actualEarnings: this.state.companyActualEarnings
        })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJjb21wYW55SWQiLCJjb21wYW55TmFtZSIsImNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5ncyIsImNvbXBhbnlBY3R1YWxFYXJuaW5ncyIsImJ1eVN1bW1hcnkiLCJzZWxsU3VtbWFyeSIsInJhdGluZ3MiLCJ0aGF0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIiwiaWQiLCJuYW1lIiwiZXNpbWF0ZWQiLCJhY3R1YWwiLCJiZXN0c3VtbWFyeSIsInNlbGxzdW1tYXJ5IiwicmF0ZXJzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx5QkFBbUIsS0FEUjtBQUVYQyxpQkFBVyxJQUZBO0FBR1hDLG1CQUFhLEVBSEY7QUFJWEMsZ0NBQTBCLEVBSmY7QUFLWEMsNkJBQXVCLEVBTFo7QUFNWEMsa0JBQVksRUFORDtBQU9YQyxtQkFBYSxFQVBGO0FBUVhDLGVBQVM7QUFSRSxLQUFiO0FBRmlCO0FBWWxCOzs7O3dDQUVtQjtBQUNsQjtBQUNBLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyx1QkFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsY0FBTSxLQUZEO0FBR0xDLHFCQUFhLGtCQUhSO0FBSUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakI7QUFDQU4sMkJBQUVDLElBQUYsQ0FBTztBQUNMQyxpQkFBSyxhQURBO0FBRUxDLGtCQUFNLEtBRkQ7QUFHTEMseUJBQWEsa0JBSFI7QUFJTEMscUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQlAsbUJBQUtRLFFBQUwsQ0FBYztBQUNaaEIsbUNBQW9CLElBRFI7QUFFWkMsMkJBQVdnQixLQUFLQyxLQUFMLENBQVdILEtBQUtJLEVBQWhCLENBRkM7QUFHWmpCLDZCQUFhYSxLQUFLSyxJQUhOO0FBSVpqQiwwQ0FBMEJjLEtBQUtDLEtBQUwsQ0FBV0gsS0FBS00sUUFBaEIsQ0FKZDtBQUtaakIsdUNBQXVCYSxLQUFLQyxLQUFMLENBQVdILEtBQUtPLE1BQWhCLENBTFg7QUFNWmpCLDRCQUFZVSxLQUFLUSxXQU5MO0FBT1pqQiw2QkFBYVMsS0FBS1MsV0FQTjtBQVFaakIseUJBQVNRLEtBQUtVO0FBUkYsZUFBZDtBQVVELGFBZkk7QUFnQkxDLG1CQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNoQkMsc0JBQVFDLEdBQVIsQ0FBWSxtQ0FBWixFQUFpREYsTUFBakQ7QUFDRDtBQWxCSSxXQUFQO0FBcUJELFNBM0JJO0FBNEJMQSxlQUFPLGlCQUFNLENBRVo7QUE5QkksT0FBUDtBQWdDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSxzQ0FBQyxpQkFBRDtBQUNFLG1CQUFTLEtBQUszQixLQUFMLENBQVdRO0FBRHRCLFVBREY7QUFJRSxzQ0FBQyxrQkFBRDtBQUNFLDZCQUFtQixLQUFLUixLQUFMLENBQVdJLHdCQURoQztBQUVFLDBCQUFnQixLQUFLSixLQUFMLENBQVdLO0FBRjdCO0FBSkYsT0FERjtBQVVEOzs7O0VBL0RleUIsZ0JBQU1DLFM7O2tCQWtFVGpDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRWFybmluZ3MgZnJvbSAnLi9lYXJuaW5nc0NvbXAvZWFybmluZ3MnO1xuaW1wb3J0IFN1bW1hcnkgZnJvbSAnLi9zdW1tYXJ5Q29tcC9zdW1tYXJ5J1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGV4YW1wbGVEYXRhTG9hZGVkOiBmYWxzZSxcbiAgICAgIGNvbXBhbnlJZDogbnVsbCxcbiAgICAgIGNvbXBhbnlOYW1lOiAnJyxcbiAgICAgIGNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5nczogW10sXG4gICAgICBjb21wYW55QWN0dWFsRWFybmluZ3M6IFtdLFxuICAgICAgYnV5U3VtbWFyeTogJycsXG4gICAgICBzZWxsU3VtbWFyeTogJycsXG4gICAgICByYXRpbmdzOiBbXVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGZvciBub3csIHNlbmQgYSByZXF1ZXN0IHRvIGdldCBmYWtlIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9jcmVhdGVFeGFtcGxlJyxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIC8vIG9uY2UgZXhhbXBsZSBkYXRhIGNyZWF0ZWQsIGRvIGFub3RoZXIgQUpBWCB0byBnZXQgdGhlIGRhdGFcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6ICcvZ2V0RXhhbXBsZScsXG4gICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7IFxuICAgICAgICAgICAgICBleGFtcGxlRGF0YUxvYWRlZCA6IHRydWUsIFxuICAgICAgICAgICAgICBjb21wYW55SWQ6IEpTT04ucGFyc2UoZGF0YS5pZCksXG4gICAgICAgICAgICAgIGNvbXBhbnlOYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgIGNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5nczogSlNPTi5wYXJzZShkYXRhLmVzaW1hdGVkKSxcbiAgICAgICAgICAgICAgY29tcGFueUFjdHVhbEVhcm5pbmdzOiBKU09OLnBhcnNlKGRhdGEuYWN0dWFsKSxcbiAgICAgICAgICAgICAgYnV5U3VtbWFyeTogZGF0YS5iZXN0c3VtbWFyeSxcbiAgICAgICAgICAgICAgc2VsbFN1bW1hcnk6IGRhdGEuc2VsbHN1bW1hcnksXG4gICAgICAgICAgICAgIHJhdGluZ3M6IGRhdGEucmF0ZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gYWNjZXNzIHRoZSBkYXRhIGJhc2UgOiAnLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFN1bW1hcnkgXG4gICAgICAgICAgcmF0aW5ncz17dGhpcy5zdGF0ZS5yYXRpbmdzfVxuICAgICAgICAvPlxuICAgICAgICA8RWFybmluZ3MgXG4gICAgICAgICAgZXN0aW1hdGVkRWFybmluZ3M9e3RoaXMuc3RhdGUuY29tcGFueUVzdGltYXRlZEVhcm5pbmdzfVxuICAgICAgICAgIGFjdHVhbEVhcm5pbmdzPXt0aGlzLnN0YXRlLmNvbXBhbnlBY3R1YWxFYXJuaW5nc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19