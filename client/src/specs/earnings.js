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
      console.log('dfdfdf');
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
        _react2.default.createElement('div', { classame: 'descDiv' })
      );
    }
  }]);

  return Earnings;
}(_react.Component);

exports.default = Earnings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZWFybmluZ3MuanN4Il0sIm5hbWVzIjpbIkVhcm5pbmdzIiwicHJvcHMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFcUI7QUFDcEJDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQVMsSUFBRyxtQkFBWjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsY0FBbEI7QUFBQTtBQUFBLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxNQUFmO0FBQ0UsOENBQUMsZUFBRCxPQURGO0FBRUUsOENBQUMsb0JBQUQsT0FGRjtBQUdFLDhDQUFDLGVBQUQ7QUFIRjtBQURGO0FBREY7QUFERixTQUpGO0FBZ0JFLCtDQUFLLFVBQVMsU0FBZDtBQWhCRixPQURGO0FBcUJEOzs7O0VBbENvQkMsZ0I7O2tCQXVDUkwsUSIsImZpbGUiOiJlYXJuaW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWEF4aXMgZnJvbSAnLi94QXhpcy5qc3gnO1xuaW1wb3J0IFlBeGlzIGZyb20gJy4veUF4aXMuanN4JztcbmltcG9ydCBEYXRhUG9pbnRzIGZyb20gJy4vZGF0YVBvaW50cy5qc3gnXG5cbmNsYXNzIEVhcm5pbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgY29uc29sZS5sb2coJ2RmZGZkZicpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBpZD1cImVhcm5pbmdzQ29tcG9uZW50XCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZWFybmluZ3NIZWFkXCI+XG4gICAgICAgIEVhcm5pbmdzXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0RGl2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckNoYXJ0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXhlc1wiPlxuICAgICAgICAgICAgICAgIDxZQXhpcyAvPlxuICAgICAgICAgICAgICAgIDxEYXRhUG9pbnRzIC8+XG4gICAgICAgICAgICAgICAgPFhBeGlzIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NhbWU9XCJkZXNjRGl2XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICkgXG4gIH1cblxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWFybmluZ3M7Il19