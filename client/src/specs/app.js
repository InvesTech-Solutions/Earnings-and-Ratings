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
          ratings: this.state.ratings,
          buySummary: this.state.buySummary,
          sellSummary: this.state.sellSummary
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_earnings2.default, {
          className: 'earningsBlock',
          estimatedEarnings: this.state.companyEstimatedEarnings,
          actualEarnings: this.state.companyActualEarnings
        })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJjb21wYW55SWQiLCJjb21wYW55TmFtZSIsImNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5ncyIsImNvbXBhbnlBY3R1YWxFYXJuaW5ncyIsImJ1eVN1bW1hcnkiLCJzZWxsU3VtbWFyeSIsInJhdGluZ3MiLCJ0aGF0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIiwiaWQiLCJuYW1lIiwiZXNpbWF0ZWQiLCJhY3R1YWwiLCJiZXN0c3VtbWFyeSIsInNlbGxzdW1tYXJ5IiwicmF0ZXJzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx5QkFBbUIsS0FEUjtBQUVYQyxpQkFBVyxJQUZBO0FBR1hDLG1CQUFhLEVBSEY7QUFJWEMsZ0NBQTBCLEVBSmY7QUFLWEMsNkJBQXVCLEVBTFo7QUFNWEMsa0JBQVksRUFORDtBQU9YQyxtQkFBYSxFQVBGO0FBUVhDLGVBQVM7QUFSRSxLQUFiO0FBRmlCO0FBWWxCOzs7O3dDQUVtQjtBQUNsQjtBQUNBLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyx1QkFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsY0FBTSxLQUZEO0FBR0xDLHFCQUFhLGtCQUhSO0FBSUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakI7QUFDQU4sMkJBQUVDLElBQUYsQ0FBTztBQUNMQyxpQkFBSyxhQURBO0FBRUxDLGtCQUFNLEtBRkQ7QUFHTEMseUJBQWEsa0JBSFI7QUFJTEMscUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQlAsbUJBQUtRLFFBQUwsQ0FBYztBQUNaaEIsbUNBQW9CLElBRFI7QUFFWkMsMkJBQVdnQixLQUFLQyxLQUFMLENBQVdILEtBQUtJLEVBQWhCLENBRkM7QUFHWmpCLDZCQUFhYSxLQUFLSyxJQUhOO0FBSVpqQiwwQ0FBMEJjLEtBQUtDLEtBQUwsQ0FBV0gsS0FBS00sUUFBaEIsQ0FKZDtBQUtaakIsdUNBQXVCYSxLQUFLQyxLQUFMLENBQVdILEtBQUtPLE1BQWhCLENBTFg7QUFNWmpCLDRCQUFZVSxLQUFLUSxXQU5MO0FBT1pqQiw2QkFBYVMsS0FBS1MsV0FQTjtBQVFaakIseUJBQVNRLEtBQUtVO0FBUkYsZUFBZDtBQVVELGFBZkk7QUFnQkxDLG1CQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNoQkMsc0JBQVFDLEdBQVIsQ0FBWSxtQ0FBWixFQUFpREYsTUFBakQ7QUFDRDtBQWxCSSxXQUFQO0FBcUJELFNBM0JJO0FBNEJMQSxlQUFPLGlCQUFNLENBRVo7QUE5QkksT0FBUDtBQWdDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSxzQ0FBQyxpQkFBRDtBQUNFLG1CQUFTLEtBQUszQixLQUFMLENBQVdRLE9BRHRCO0FBRUUsc0JBQVksS0FBS1IsS0FBTCxDQUFXTSxVQUZ6QjtBQUdFLHVCQUFhLEtBQUtOLEtBQUwsQ0FBV087QUFIMUIsVUFERjtBQU1FLGlEQU5GO0FBT0Usc0NBQUMsa0JBQUQ7QUFDRSxxQkFBVSxlQURaO0FBRUUsNkJBQW1CLEtBQUtQLEtBQUwsQ0FBV0ksd0JBRmhDO0FBR0UsMEJBQWdCLEtBQUtKLEtBQUwsQ0FBV0s7QUFIN0I7QUFQRixPQURGO0FBY0Q7Ozs7RUFuRWV5QixnQkFBTUMsUzs7a0JBc0VUakMsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBFYXJuaW5ncyBmcm9tICcuL2Vhcm5pbmdzQ29tcC9lYXJuaW5ncyc7XG5pbXBvcnQgU3VtbWFyeSBmcm9tICcuL3N1bW1hcnlDb21wL3N1bW1hcnknXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgZXhhbXBsZURhdGFMb2FkZWQ6IGZhbHNlLFxuICAgICAgY29tcGFueUlkOiBudWxsLFxuICAgICAgY29tcGFueU5hbWU6ICcnLFxuICAgICAgY29tcGFueUVzdGltYXRlZEVhcm5pbmdzOiBbXSxcbiAgICAgIGNvbXBhbnlBY3R1YWxFYXJuaW5nczogW10sXG4gICAgICBidXlTdW1tYXJ5OiAnJyxcbiAgICAgIHNlbGxTdW1tYXJ5OiAnJyxcbiAgICAgIHJhdGluZ3M6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gZm9yIG5vdywgc2VuZCBhIHJlcXVlc3QgdG8gZ2V0IGZha2UgZGF0YSBmcm9tIHNlcnZlclxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2NyZWF0ZUV4YW1wbGUnLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgLy8gb25jZSBleGFtcGxlIGRhdGEgY3JlYXRlZCwgZG8gYW5vdGhlciBBSkFYIHRvIGdldCB0aGUgZGF0YVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHVybDogJy9nZXRFeGFtcGxlJyxcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgXG4gICAgICAgICAgICAgIGV4YW1wbGVEYXRhTG9hZGVkIDogdHJ1ZSwgXG4gICAgICAgICAgICAgIGNvbXBhbnlJZDogSlNPTi5wYXJzZShkYXRhLmlkKSxcbiAgICAgICAgICAgICAgY29tcGFueU5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgICAgY29tcGFueUVzdGltYXRlZEVhcm5pbmdzOiBKU09OLnBhcnNlKGRhdGEuZXNpbWF0ZWQpLFxuICAgICAgICAgICAgICBjb21wYW55QWN0dWFsRWFybmluZ3M6IEpTT04ucGFyc2UoZGF0YS5hY3R1YWwpLFxuICAgICAgICAgICAgICBidXlTdW1tYXJ5OiBkYXRhLmJlc3RzdW1tYXJ5LFxuICAgICAgICAgICAgICBzZWxsU3VtbWFyeTogZGF0YS5zZWxsc3VtbWFyeSxcbiAgICAgICAgICAgICAgcmF0aW5nczogZGF0YS5yYXRlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBhY2Nlc3MgdGhlIGRhdGEgYmFzZSA6ICcsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U3VtbWFyeSBcbiAgICAgICAgICByYXRpbmdzPXt0aGlzLnN0YXRlLnJhdGluZ3N9XG4gICAgICAgICAgYnV5U3VtbWFyeT17dGhpcy5zdGF0ZS5idXlTdW1tYXJ5fVxuICAgICAgICAgIHNlbGxTdW1tYXJ5PXt0aGlzLnN0YXRlLnNlbGxTdW1tYXJ5fVxuICAgICAgICAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPEVhcm5pbmdzIFxuICAgICAgICAgIGNsYXNzTmFtZT1cImVhcm5pbmdzQmxvY2tcIlxuICAgICAgICAgIGVzdGltYXRlZEVhcm5pbmdzPXt0aGlzLnN0YXRlLmNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5nc31cbiAgICAgICAgICBhY3R1YWxFYXJuaW5ncz17dGhpcy5zdGF0ZS5jb21wYW55QWN0dWFsRWFybmluZ3N9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==