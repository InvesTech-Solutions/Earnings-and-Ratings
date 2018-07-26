'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _earnings = require('./earningsComp/earnings');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJjb21wYW55SWQiLCJjb21wYW55TmFtZSIsImNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5ncyIsImNvbXBhbnlBY3R1YWxFYXJuaW5ncyIsImJ1eVN1bW1hcnkiLCJzZWxsU3VtbWFyeSIsInJhdGluZ3MiLCJ0aGF0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIiwiaWQiLCJuYW1lIiwiZXNpbWF0ZWQiLCJhY3R1YWwiLCJiZXN0c3VtbWFyeSIsInNlbGxzdW1tYXJ5IiwicmF0ZXJzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMseUJBQW1CLEtBRFI7QUFFWEMsaUJBQVcsSUFGQTtBQUdYQyxtQkFBYSxFQUhGO0FBSVhDLGdDQUEwQixFQUpmO0FBS1hDLDZCQUF1QixFQUxaO0FBTVhDLGtCQUFZLEVBTkQ7QUFPWEMsbUJBQWEsRUFQRjtBQVFYQyxlQUFTO0FBUkUsS0FBYjtBQUZpQjtBQVlsQjs7Ozt3Q0FFbUI7QUFDbEI7QUFDQSxVQUFJQyxPQUFPLElBQVg7QUFDQUMsdUJBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGdCQURBO0FBRUxDLGNBQU0sS0FGRDtBQUdMQyxxQkFBYSxrQkFIUjtBQUlMQyxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCO0FBQ0FOLDJCQUFFQyxJQUFGLENBQU87QUFDTEMsaUJBQUssYUFEQTtBQUVMQyxrQkFBTSxLQUZEO0FBR0xDLHlCQUFhLGtCQUhSO0FBSUxDLHFCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJQLG1CQUFLUSxRQUFMLENBQWM7QUFDWmhCLG1DQUFvQixJQURSO0FBRVpDLDJCQUFXZ0IsS0FBS0MsS0FBTCxDQUFXSCxLQUFLSSxFQUFoQixDQUZDO0FBR1pqQiw2QkFBYWEsS0FBS0ssSUFITjtBQUlaakIsMENBQTBCYyxLQUFLQyxLQUFMLENBQVdILEtBQUtNLFFBQWhCLENBSmQ7QUFLWmpCLHVDQUF1QmEsS0FBS0MsS0FBTCxDQUFXSCxLQUFLTyxNQUFoQixDQUxYO0FBTVpqQiw0QkFBWVUsS0FBS1EsV0FOTDtBQU9aakIsNkJBQWFTLEtBQUtTLFdBUE47QUFRWmpCLHlCQUFTUSxLQUFLVTtBQVJGLGVBQWQ7QUFVRCxhQWZJO0FBZ0JMQyxtQkFBTyxlQUFDQSxNQUFELEVBQVc7QUFDaEJDLHNCQUFRQyxHQUFSLENBQVksbUNBQVosRUFBaURGLE1BQWpEO0FBQ0Q7QUFsQkksV0FBUDtBQXFCRCxTQTNCSTtBQTRCTEEsZUFBTyxpQkFBTSxDQUVaO0FBOUJJLE9BQVA7QUFnQ0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usc0NBQUMsa0JBQUQ7QUFDRSw2QkFBbUIsS0FBSzNCLEtBQUwsQ0FBV0ksd0JBRGhDO0FBRUUsMEJBQWdCLEtBQUtKLEtBQUwsQ0FBV0s7QUFGN0I7QUFERixPQURGO0FBT0Q7Ozs7RUE1RGV5QixnQkFBTUMsUzs7a0JBK0RUakMsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVhcm5pbmdzIGZyb20gJy4vZWFybmluZ3NDb21wL2Vhcm5pbmdzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgZXhhbXBsZURhdGFMb2FkZWQ6IGZhbHNlLFxuICAgICAgY29tcGFueUlkOiBudWxsLFxuICAgICAgY29tcGFueU5hbWU6ICcnLFxuICAgICAgY29tcGFueUVzdGltYXRlZEVhcm5pbmdzOiBbXSxcbiAgICAgIGNvbXBhbnlBY3R1YWxFYXJuaW5nczogW10sXG4gICAgICBidXlTdW1tYXJ5OiAnJyxcbiAgICAgIHNlbGxTdW1tYXJ5OiAnJyxcbiAgICAgIHJhdGluZ3M6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gZm9yIG5vdywgc2VuZCBhIHJlcXVlc3QgdG8gZ2V0IGZha2UgZGF0YSBmcm9tIHNlcnZlclxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2NyZWF0ZUV4YW1wbGUnLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgLy8gb25jZSBleGFtcGxlIGRhdGEgY3JlYXRlZCwgZG8gYW5vdGhlciBBSkFYIHRvIGdldCB0aGUgZGF0YVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHVybDogJy9nZXRFeGFtcGxlJyxcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgXG4gICAgICAgICAgICAgIGV4YW1wbGVEYXRhTG9hZGVkIDogdHJ1ZSwgXG4gICAgICAgICAgICAgIGNvbXBhbnlJZDogSlNPTi5wYXJzZShkYXRhLmlkKSxcbiAgICAgICAgICAgICAgY29tcGFueU5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgICAgY29tcGFueUVzdGltYXRlZEVhcm5pbmdzOiBKU09OLnBhcnNlKGRhdGEuZXNpbWF0ZWQpLFxuICAgICAgICAgICAgICBjb21wYW55QWN0dWFsRWFybmluZ3M6IEpTT04ucGFyc2UoZGF0YS5hY3R1YWwpLFxuICAgICAgICAgICAgICBidXlTdW1tYXJ5OiBkYXRhLmJlc3RzdW1tYXJ5LFxuICAgICAgICAgICAgICBzZWxsU3VtbWFyeTogZGF0YS5zZWxsc3VtbWFyeSxcbiAgICAgICAgICAgICAgcmF0aW5nczogZGF0YS5yYXRlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBhY2Nlc3MgdGhlIGRhdGEgYmFzZSA6ICcsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RWFybmluZ3MgXG4gICAgICAgICAgZXN0aW1hdGVkRWFybmluZ3M9e3RoaXMuc3RhdGUuY29tcGFueUVzdGltYXRlZEVhcm5pbmdzfVxuICAgICAgICAgIGFjdHVhbEVhcm5pbmdzPXt0aGlzLnN0YXRlLmNvbXBhbnlBY3R1YWxFYXJuaW5nc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19