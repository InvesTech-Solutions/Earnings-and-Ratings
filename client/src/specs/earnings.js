'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xAxis = require('./xAxis.jsx');

var _xAxis2 = _interopRequireDefault(_xAxis);

var _yAxis = require('./yAxis.jsx');

var _yAxis2 = _interopRequireDefault(_yAxis);

var _dataPoints = require('./dataPoints.jsx');

var _dataPoints2 = _interopRequireDefault(_dataPoints);

var _description = require('./description.jsx');

var _description2 = _interopRequireDefault(_description);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Earnings = function (_Component) {
  _inherits(Earnings, _Component);

  function Earnings(props) {
    _classCallCheck(this, Earnings);

    var _this = _possibleConstructorReturn(this, (Earnings.__proto__ || Object.getPrototypeOf(Earnings)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Earnings, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'earningsComponent' },
        _react2.default.createElement(
          'header',
          { className: 'earningsHead' },
          'Earnings'
        ),
        _react2.default.createElement(
          'div',
          { className: 'chartDiv' },
          _react2.default.createElement(
            'div',
            { className: 'chartContainer' },
            _react2.default.createElement(
              'div',
              { className: 'innerChartContainer' },
              _react2.default.createElement(
                'div',
                { className: 'axes' },
                _react2.default.createElement(_yAxis2.default, null),
                _react2.default.createElement(_dataPoints2.default, null),
                _react2.default.createElement(_xAxis2.default, null)
              )
            )
          )
        ),
        _react2.default.createElement(_description2.default, {
          estimate: this.props.estimatedEarnings,
          actual: this.props.actualEarnings
        })
      );
    }
  }]);

  return Earnings;
}(_react.Component);

exports.default = Earnings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZWFybmluZ3MuanN4Il0sIm5hbWVzIjpbIkVhcm5pbmdzIiwicHJvcHMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlc3RpbWF0ZWRFYXJuaW5ncyIsImFjdHVhbEVhcm5pbmdzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFcUI7QUFDcEJDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLSCxLQUFqQjtBQUNEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFTLElBQUcsbUJBQVo7QUFDRTtBQUFBO0FBQUEsWUFBUSxXQUFVLGNBQWxCO0FBQUE7QUFBQSxTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsTUFBZjtBQUNFLDhDQUFDLGVBQUQsT0FERjtBQUVFLDhDQUFDLG9CQUFELE9BRkY7QUFHRSw4Q0FBQyxlQUFEO0FBSEY7QUFERjtBQURGO0FBREYsU0FKRjtBQWVFLHNDQUFDLHFCQUFEO0FBQ0Usb0JBQVUsS0FBS0EsS0FBTCxDQUFXSSxpQkFEdkI7QUFFRSxrQkFBUSxLQUFLSixLQUFMLENBQVdLO0FBRnJCO0FBZkYsT0FERjtBQXNCRDs7OztFQW5Db0JDLGdCOztrQkF3Q1JQLFEiLCJmaWxlIjoiZWFybmluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFhBeGlzIGZyb20gJy4veEF4aXMuanN4JztcbmltcG9ydCBZQXhpcyBmcm9tICcuL3lBeGlzLmpzeCc7XG5pbXBvcnQgRGF0YVBvaW50cyBmcm9tICcuL2RhdGFQb2ludHMuanN4J1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4vZGVzY3JpcHRpb24uanN4J1xuXG5jbGFzcyBFYXJuaW5ncyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBpZD1cImVhcm5pbmdzQ29tcG9uZW50XCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZWFybmluZ3NIZWFkXCI+XG4gICAgICAgIEVhcm5pbmdzXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0RGl2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckNoYXJ0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXhlc1wiPlxuICAgICAgICAgICAgICAgIDxZQXhpcyAvPlxuICAgICAgICAgICAgICAgIDxEYXRhUG9pbnRzIC8+XG4gICAgICAgICAgICAgICAgPFhBeGlzIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RGVzY3JpcHRpb24gXG4gICAgICAgICAgZXN0aW1hdGU9e3RoaXMucHJvcHMuZXN0aW1hdGVkRWFybmluZ3N9XG4gICAgICAgICAgYWN0dWFsPXt0aGlzLnByb3BzLmFjdHVhbEVhcm5pbmdzfVxuICAgICAgICAvPiBcbiAgICAgIDwvc2VjdGlvbj5cbiAgICApIFxuICB9XG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVhcm5pbmdzOyJdfQ==