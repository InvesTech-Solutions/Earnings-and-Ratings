'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _percentBars = require('./percentBars');

var _percentBars2 = _interopRequireDefault(_percentBars);

var _summaryBoxes = require('./summaryBoxes');

var _summaryBoxes2 = _interopRequireDefault(_summaryBoxes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summary = function (_Component) {
  _inherits(Summary, _Component);

  function Summary(props) {
    _classCallCheck(this, Summary);

    var _this = _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).call(this, props));

    _this.state = {
      buyPerc: null,
      totalRaters: null,
      trigger: false
    };
    return _this;
  }

  _createClass(Summary, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log(this.props.ratings);
      var buyCount = 0;
      this.props.ratings.forEach(function (element) {
        if (element === 'Buy') {
          buyCount++;
        };
      });
      var raterCount = this.props.ratings.length;
      if (!this.state.trigger) {
        this.setState({
          buyPerc: Math.round(buyCount / raterCount * 100),
          totalRaters: raterCount,
          trigger: true
        });
      }
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'summaryComponent' },
        _react2.default.createElement(
          'header',
          { className: 'tagHead' },
          'Analyst Ratings'
        ),
        _react2.default.createElement(_tag2.default, {
          percent: this.state.buyPerc,
          total: this.state.totalRaters
        }),
        _react2.default.createElement(_percentBars2.default, null),
        _react2.default.createElement(_summaryBoxes2.default, null)
      );
    }
  }]);

  return Summary;
}(_react.Component);

exports.default = Summary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvc3VtbWFyeS5qc3giXSwibmFtZXMiOlsiU3VtbWFyeSIsInByb3BzIiwic3RhdGUiLCJidXlQZXJjIiwidG90YWxSYXRlcnMiLCJ0cmlnZ2VyIiwiY29uc29sZSIsImxvZyIsInJhdGluZ3MiLCJidXlDb3VudCIsImZvckVhY2giLCJlbGVtZW50IiwicmF0ZXJDb3VudCIsImxlbmd0aCIsInNldFN0YXRlIiwiTWF0aCIsInJvdW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTzs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVUsSUFEQztBQUVYQyxtQkFBYyxJQUZIO0FBR1hDLGVBQVU7QUFIQyxLQUFiO0FBRmlCO0FBT2xCOzs7O3lDQUVxQjtBQUNwQkMsY0FBUUMsR0FBUixDQUFZLEtBQUtOLEtBQUwsQ0FBV08sT0FBdkI7QUFDQSxVQUFJQyxXQUFXLENBQWY7QUFDQSxXQUFLUixLQUFMLENBQVdPLE9BQVgsQ0FBbUJFLE9BQW5CLENBQTJCLFVBQUNDLE9BQUQsRUFBYTtBQUN0QyxZQUFJQSxZQUFZLEtBQWhCLEVBQXVCO0FBQ3JCRjtBQUNEO0FBQ0YsT0FKRDtBQUtBLFVBQUlHLGFBQWEsS0FBS1gsS0FBTCxDQUFXTyxPQUFYLENBQW1CSyxNQUFwQztBQUNBLFVBQUksQ0FBQyxLQUFLWCxLQUFMLENBQVdHLE9BQWhCLEVBQXlCO0FBQ3ZCLGFBQUtTLFFBQUwsQ0FBYztBQUNaWCxtQkFBVVksS0FBS0MsS0FBTCxDQUFZUCxXQUFXRyxVQUFaLEdBQTBCLEdBQXJDLENBREU7QUFFWlIsdUJBQWNRLFVBRkY7QUFHWlAsbUJBQVU7QUFIRSxTQUFkO0FBS0Q7QUFDRjs7QUFFRDs7Ozs2QkFDVTtBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQVMsSUFBRyxrQkFBWjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsU0FBbEI7QUFBQTtBQUFBLFNBREY7QUFJRSxzQ0FBQyxhQUFEO0FBQ0UsbUJBQVMsS0FBS0gsS0FBTCxDQUFXQyxPQUR0QjtBQUVFLGlCQUFPLEtBQUtELEtBQUwsQ0FBV0U7QUFGcEIsVUFKRjtBQVFFLHNDQUFDLHFCQUFELE9BUkY7QUFVRSxzQ0FBQyxzQkFBRDtBQVZGLE9BREY7QUFlRDs7OztFQTdDbUJhLGdCOztrQkFnRFBqQixPIiwiZmlsZSI6InN1bW1hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhZyBmcm9tICcuL3RhZyc7XG5pbXBvcnQgUGVyY2VudEJhcnMgZnJvbSAnLi9wZXJjZW50QmFycyc7XG5pbXBvcnQgU3VtbWFyeUJveGVzIGZyb20gJy4vc3VtbWFyeUJveGVzJztcblxuY2xhc3MgU3VtbWFyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBidXlQZXJjIDogbnVsbCxcbiAgICAgIHRvdGFsUmF0ZXJzIDogbnVsbCxcbiAgICAgIHRyaWdnZXIgOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5yYXRpbmdzKTtcbiAgICBsZXQgYnV5Q291bnQgPSAwO1xuICAgIHRoaXMucHJvcHMucmF0aW5ncy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gJ0J1eScpIHtcbiAgICAgICAgYnV5Q291bnQrK1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBsZXQgcmF0ZXJDb3VudCA9IHRoaXMucHJvcHMucmF0aW5ncy5sZW5ndGg7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnRyaWdnZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgYnV5UGVyYyA6IE1hdGgucm91bmQoKGJ1eUNvdW50IC8gcmF0ZXJDb3VudCkgKiAxMDApLFxuICAgICAgICB0b3RhbFJhdGVycyA6IHJhdGVyQ291bnQsXG4gICAgICAgIHRyaWdnZXIgOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyByZW5kZXJzIGVudGlyZSBlYXJuaW5ncyBzZWN0aW9uIHdpdGggWUF4aXMsIERhdGFQb2ludHMsIFhBeGlzLCBhbmQgRGVzY3JpcHRpb25zIGFzIHN1YmNvbXBvbmVudHNcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gaWQ9XCJzdW1tYXJ5Q29tcG9uZW50XCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGFnSGVhZFwiPlxuICAgICAgICAgIEFuYWx5c3QgUmF0aW5nc1xuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPFRhZ1xuICAgICAgICAgIHBlcmNlbnQ9e3RoaXMuc3RhdGUuYnV5UGVyY31cbiAgICAgICAgICB0b3RhbD17dGhpcy5zdGF0ZS50b3RhbFJhdGVyc31cbiAgICAgICAgLz5cbiAgICAgICAgPFBlcmNlbnRCYXJzXG4gICAgICAgIC8+XG4gICAgICAgIDxTdW1tYXJ5Qm94ZXNcbiAgICAgICAgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeTsiXX0=