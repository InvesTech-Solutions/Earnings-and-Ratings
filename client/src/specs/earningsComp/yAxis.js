'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _yAxisTick = require('./yAxisTick.jsx');

var _yAxisTick2 = _interopRequireDefault(_yAxisTick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YAxis = function (_Component) {
  _inherits(YAxis, _Component);

  function YAxis(props) {
    _classCallCheck(this, YAxis);

    return _possibleConstructorReturn(this, (YAxis.__proto__ || Object.getPrototypeOf(YAxis)).call(this, props));
  }

  _createClass(YAxis, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ylabel' },
        this.props.yRange.map(function (yTick, index) {
          return _react2.default.createElement(_yAxisTick2.default, {
            yValue: yTick,
            ind: index + 1
          });
        })
      );
    }
  }]);

  return YAxis;
}(_react.Component);

exports.default = YAxis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL3lBeGlzLmpzeCJdLCJuYW1lcyI6WyJZQXhpcyIsInByb3BzIiwieVJhbmdlIiwibWFwIiwieVRpY2siLCJpbmRleCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5R0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0csYUFBS0EsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBZ0I7QUFDckMsaUJBQ0UsOEJBQUMsbUJBQUQ7QUFDRSxvQkFBUUQsS0FEVjtBQUVFLGlCQUFLQyxRQUFRO0FBRmYsWUFERjtBQU1ELFNBUEE7QUFESCxPQURGO0FBWUQ7Ozs7RUFsQmlCQyxnQjs7a0JBcUJMTixLIiwiZmlsZSI6InlBeGlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBZQXhpc1RpY2sgZnJvbSAnLi95QXhpc1RpY2suanN4JztcblxuY2xhc3MgWUF4aXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwieWxhYmVsXCI+XG4gICAgICAgIHt0aGlzLnByb3BzLnlSYW5nZS5tYXAoKHlUaWNrLCBpbmRleCk9PntcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFlBeGlzVGljayBcbiAgICAgICAgICAgICAgeVZhbHVlPXt5VGlja31cbiAgICAgICAgICAgICAgaW5kPXtpbmRleCArIDF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZQXhpczsiXX0=