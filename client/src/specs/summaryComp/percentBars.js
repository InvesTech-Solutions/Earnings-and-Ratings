'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _percentBar = require('./percentBar');

var _percentBar2 = _interopRequireDefault(_percentBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PercentBars = function (_Component) {
  _inherits(PercentBars, _Component);

  function PercentBars(props) {
    _classCallCheck(this, PercentBars);

    var _this = _possibleConstructorReturn(this, (PercentBars.__proto__ || Object.getPrototypeOf(PercentBars)).call(this, props));

    _this.state = {
      suggestions: ['Buy', 'Hold', 'Sell'],
      counts: [],
      trigger: false
    };
    return _this;
  }

  _createClass(PercentBars, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var buyCount = this.props.ratings.reduce(function (accum, element) {
        if (element === 'Buy') {
          return accum + 1;
        }
        return accum;
      }, 0);

      var holdCount = this.props.ratings.reduce(function (accum, element) {
        if (element === 'Hold') {
          return accum + 1;
        }
        return accum;
      }, 0);

      var sellCount = this.props.ratings.reduce(function (accum, element) {
        if (element === 'Sell') {
          return accum + 1;
        }
        return accum;
      }, 0);

      var length = this.props.ratings.length;

      if (this.state.trigger === false) {
        this.setState({ counts: [buyCount, holdCount, sellCount], total: length, trigger: true });
      };
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        this.state.suggestions.map(function (suggestion, index) {
          return _react2.default.createElement(_percentBar2.default, {
            suggestion: suggestion,
            count: _this2.state.counts[index],
            total: _this2.state.total
          });
        })
      );
    }
  }]);

  return PercentBars;
}(_react.Component);

exports.default = PercentBars;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvcGVyY2VudEJhcnMuanN4Il0sIm5hbWVzIjpbIlBlcmNlbnRCYXJzIiwicHJvcHMiLCJzdGF0ZSIsInN1Z2dlc3Rpb25zIiwiY291bnRzIiwidHJpZ2dlciIsImJ1eUNvdW50IiwicmF0aW5ncyIsInJlZHVjZSIsImFjY3VtIiwiZWxlbWVudCIsImhvbGRDb3VudCIsInNlbGxDb3VudCIsImxlbmd0aCIsInNldFN0YXRlIiwidG90YWwiLCJtYXAiLCJzdWdnZXN0aW9uIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLENBREY7QUFFWEMsY0FBUSxFQUZHO0FBR1hDLGVBQVM7QUFIRSxLQUFiO0FBRmlCO0FBT2xCOzs7O3lDQUVxQjtBQUNwQixVQUFJQyxXQUFXLEtBQUtMLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkMsTUFBbkIsQ0FBMEIsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQzNELFlBQUlBLFlBQVksS0FBaEIsRUFBdUI7QUFDckIsaUJBQU9ELFFBQVEsQ0FBZjtBQUNEO0FBQ0QsZUFBT0EsS0FBUDtBQUNELE9BTGMsRUFLWixDQUxZLENBQWY7O0FBT0EsVUFBSUUsWUFBWSxLQUFLVixLQUFMLENBQVdNLE9BQVgsQ0FBbUJDLE1BQW5CLENBQTBCLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUM1RCxZQUFJQSxZQUFZLE1BQWhCLEVBQXdCO0FBQ3RCLGlCQUFPRCxRQUFRLENBQWY7QUFDRDtBQUNELGVBQU9BLEtBQVA7QUFDRCxPQUxlLEVBS2IsQ0FMYSxDQUFoQjs7QUFPQSxVQUFJRyxZQUFZLEtBQUtYLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkMsTUFBbkIsQ0FBMEIsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQzVELFlBQUlBLFlBQVksTUFBaEIsRUFBd0I7QUFDdEIsaUJBQU9ELFFBQVEsQ0FBZjtBQUNEO0FBQ0QsZUFBT0EsS0FBUDtBQUNELE9BTGUsRUFLYixDQUxhLENBQWhCOztBQU9BLFVBQUlJLFNBQVMsS0FBS1osS0FBTCxDQUFXTSxPQUFYLENBQW1CTSxNQUFoQzs7QUFFQSxVQUFJLEtBQUtYLEtBQUwsQ0FBV0csT0FBWCxLQUF1QixLQUEzQixFQUFrQztBQUNoQyxhQUFLUyxRQUFMLENBQWMsRUFBRVYsUUFBUSxDQUFDRSxRQUFELEVBQVdLLFNBQVgsRUFBc0JDLFNBQXRCLENBQVYsRUFBNENHLE9BQU9GLE1BQW5ELEVBQTJEUixTQUFTLElBQXBFLEVBQWQ7QUFDRDtBQUNGOztBQUVEOzs7OzZCQUNVO0FBQUE7O0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRyxhQUFLSCxLQUFMLENBQVdDLFdBQVgsQ0FBdUJhLEdBQXZCLENBQTJCLFVBQUNDLFVBQUQsRUFBYUMsS0FBYixFQUF1QjtBQUNqRCxpQkFDRSw4QkFBQyxvQkFBRDtBQUNFLHdCQUFZRCxVQURkO0FBRUUsbUJBQU8sT0FBS2YsS0FBTCxDQUFXRSxNQUFYLENBQWtCYyxLQUFsQixDQUZUO0FBR0UsbUJBQU8sT0FBS2hCLEtBQUwsQ0FBV2E7QUFIcEIsWUFERjtBQU9ELFNBUkE7QUFESCxPQURGO0FBYUQ7Ozs7RUF0RHVCSSxnQjs7a0JBeURYbkIsVyIsImZpbGUiOiJwZXJjZW50QmFycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGVyY2VudEJhciBmcm9tICcuL3BlcmNlbnRCYXInO1xuXG5jbGFzcyBQZXJjZW50QmFycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWdnZXN0aW9uczogWydCdXknLCAnSG9sZCcsICdTZWxsJ10sXG4gICAgICBjb3VudHM6IFtdLFxuICAgICAgdHJpZ2dlcjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIGxldCBidXlDb3VudCA9IHRoaXMucHJvcHMucmF0aW5ncy5yZWR1Y2UoKGFjY3VtLCBlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gJ0J1eScpIHtcbiAgICAgICAgcmV0dXJuIGFjY3VtICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LCAwKTtcblxuICAgIGxldCBob2xkQ291bnQgPSB0aGlzLnByb3BzLnJhdGluZ3MucmVkdWNlKChhY2N1bSwgZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09ICdIb2xkJykge1xuICAgICAgICByZXR1cm4gYWNjdW0gKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtO1xuICAgIH0sIDApO1xuXG4gICAgbGV0IHNlbGxDb3VudCA9IHRoaXMucHJvcHMucmF0aW5ncy5yZWR1Y2UoKGFjY3VtLCBlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gJ1NlbGwnKSB7XG4gICAgICAgIHJldHVybiBhY2N1bSArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW07XG4gICAgfSwgMCk7XG5cbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5wcm9wcy5yYXRpbmdzLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLnN0YXRlLnRyaWdnZXIgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRzOiBbYnV5Q291bnQsIGhvbGRDb3VudCwgc2VsbENvdW50XSwgdG90YWw6IGxlbmd0aCwgdHJpZ2dlcjogdHJ1ZSB9KTtcbiAgICB9O1xuICB9XG5cbiAgLy8gcmVuZGVycyBlbnRpcmUgZWFybmluZ3Mgc2VjdGlvbiB3aXRoIFlBeGlzLCBEYXRhUG9pbnRzLCBYQXhpcywgYW5kIERlc2NyaXB0aW9ucyBhcyBzdWJjb21wb25lbnRzXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBlcmNlbnRCYXJcbiAgICAgICAgICAgICAgc3VnZ2VzdGlvbj17c3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgY291bnQ9e3RoaXMuc3RhdGUuY291bnRzW2luZGV4XX1cbiAgICAgICAgICAgICAgdG90YWw9e3RoaXMuc3RhdGUudG90YWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmNlbnRCYXJzOyJdfQ==