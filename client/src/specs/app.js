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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJjb21wYW55SWQiLCJjb21wYW55TmFtZSIsImNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5ncyIsImNvbXBhbnlBY3R1YWxFYXJuaW5ncyIsImJ1eVN1bW1hcnkiLCJzZWxsU3VtbWFyeSIsInJhdGluZ3MiLCJ0aGF0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIkpTT04iLCJwYXJzZSIsImlkIiwibmFtZSIsImVzaW1hdGVkIiwiYWN0dWFsIiwiYmVzdHN1bW1hcnkiLCJzZWxsc3VtbWFyeSIsInJhdGVycyIsImVycm9yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx5QkFBbUIsS0FEUjtBQUVYQyxpQkFBVyxJQUZBO0FBR1hDLG1CQUFhLEVBSEY7QUFJWEMsZ0NBQTBCLEVBSmY7QUFLWEMsNkJBQXVCLEVBTFo7QUFNWEMsa0JBQVksRUFORDtBQU9YQyxtQkFBYSxFQVBGO0FBUVhDLGVBQVM7QUFSRSxLQUFiO0FBRmlCO0FBWWxCOzs7O3dDQUVtQjtBQUNsQjtBQUNBLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyx1QkFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEMsY0FBTSxLQUZEO0FBR0xDLHFCQUFhLGtCQUhSO0FBSUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakI7QUFDQU4sMkJBQUVDLElBQUYsQ0FBTztBQUNMQyxpQkFBSyxhQURBO0FBRUxDLGtCQUFNLEtBRkQ7QUFHTEMseUJBQWEsa0JBSFI7QUFJTEMscUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQkMsc0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBUCxtQkFBS1UsUUFBTCxDQUFjO0FBQ1psQixtQ0FBb0IsSUFEUjtBQUVaQywyQkFBV2tCLEtBQUtDLEtBQUwsQ0FBV0wsS0FBS00sRUFBaEIsQ0FGQztBQUdabkIsNkJBQWFhLEtBQUtPLElBSE47QUFJWm5CLDBDQUEwQmdCLEtBQUtDLEtBQUwsQ0FBV0wsS0FBS1EsUUFBaEIsQ0FKZDtBQUtabkIsdUNBQXVCZSxLQUFLQyxLQUFMLENBQVdMLEtBQUtTLE1BQWhCLENBTFg7QUFNWm5CLDRCQUFZVSxLQUFLVSxXQU5MO0FBT1puQiw2QkFBYVMsS0FBS1csV0FQTjtBQVFabkIseUJBQVNRLEtBQUtZO0FBUkYsZUFBZDtBQVVELGFBaEJJO0FBaUJMQyxtQkFBTyxlQUFDQSxNQUFELEVBQVc7QUFDaEJaLHNCQUFRQyxHQUFSLENBQVksbUNBQVosRUFBaURXLE1BQWpEO0FBQ0Q7QUFuQkksV0FBUDtBQXNCRCxTQTVCSTtBQTZCTEEsZUFBTyxpQkFBTSxDQUVaO0FBL0JJLE9BQVA7QUFpQ0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usc0NBQUMsaUJBQUQ7QUFDRSxtQkFBUyxLQUFLN0IsS0FBTCxDQUFXUTtBQUR0QixVQURGO0FBSUUsc0NBQUMsa0JBQUQ7QUFDRSw2QkFBbUIsS0FBS1IsS0FBTCxDQUFXSSx3QkFEaEM7QUFFRSwwQkFBZ0IsS0FBS0osS0FBTCxDQUFXSztBQUY3QjtBQUpGLE9BREY7QUFVRDs7OztFQWhFZXlCLGdCQUFNQyxTOztrQkFtRVRqQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IEVhcm5pbmdzIGZyb20gJy4vZWFybmluZ3NDb21wL2Vhcm5pbmdzJztcbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4vc3VtbWFyeUNvbXAvc3VtbWFyeSdcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBleGFtcGxlRGF0YUxvYWRlZDogZmFsc2UsXG4gICAgICBjb21wYW55SWQ6IG51bGwsXG4gICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICBjb21wYW55RXN0aW1hdGVkRWFybmluZ3M6IFtdLFxuICAgICAgY29tcGFueUFjdHVhbEVhcm5pbmdzOiBbXSxcbiAgICAgIGJ1eVN1bW1hcnk6ICcnLFxuICAgICAgc2VsbFN1bW1hcnk6ICcnLFxuICAgICAgcmF0aW5nczogW11cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBmb3Igbm93LCBzZW5kIGEgcmVxdWVzdCB0byBnZXQgZmFrZSBkYXRhIGZyb20gc2VydmVyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvY3JlYXRlRXhhbXBsZScsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAvLyBvbmNlIGV4YW1wbGUgZGF0YSBjcmVhdGVkLCBkbyBhbm90aGVyIEFKQVggdG8gZ2V0IHRoZSBkYXRhXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiAnL2dldEV4YW1wbGUnLFxuICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7IFxuICAgICAgICAgICAgICBleGFtcGxlRGF0YUxvYWRlZCA6IHRydWUsIFxuICAgICAgICAgICAgICBjb21wYW55SWQ6IEpTT04ucGFyc2UoZGF0YS5pZCksXG4gICAgICAgICAgICAgIGNvbXBhbnlOYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgIGNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5nczogSlNPTi5wYXJzZShkYXRhLmVzaW1hdGVkKSxcbiAgICAgICAgICAgICAgY29tcGFueUFjdHVhbEVhcm5pbmdzOiBKU09OLnBhcnNlKGRhdGEuYWN0dWFsKSxcbiAgICAgICAgICAgICAgYnV5U3VtbWFyeTogZGF0YS5iZXN0c3VtbWFyeSxcbiAgICAgICAgICAgICAgc2VsbFN1bW1hcnk6IGRhdGEuc2VsbHN1bW1hcnksXG4gICAgICAgICAgICAgIHJhdGluZ3M6IGRhdGEucmF0ZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gYWNjZXNzIHRoZSBkYXRhIGJhc2UgOiAnLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFN1bW1hcnkgXG4gICAgICAgICAgcmF0aW5ncz17dGhpcy5zdGF0ZS5yYXRpbmdzfVxuICAgICAgICAvPlxuICAgICAgICA8RWFybmluZ3MgXG4gICAgICAgICAgZXN0aW1hdGVkRWFybmluZ3M9e3RoaXMuc3RhdGUuY29tcGFueUVzdGltYXRlZEVhcm5pbmdzfVxuICAgICAgICAgIGFjdHVhbEVhcm5pbmdzPXt0aGlzLnN0YXRlLmNvbXBhbnlBY3R1YWxFYXJuaW5nc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19