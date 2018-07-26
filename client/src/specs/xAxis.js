'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xAxisTick = require('./xAxisTick.jsx');

var _xAxisTick2 = _interopRequireDefault(_xAxisTick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XAxis = function (_Component) {
  _inherits(XAxis, _Component);

  function XAxis(props) {
    _classCallCheck(this, XAxis);

    var _this = _possibleConstructorReturn(this, (XAxis.__proto__ || Object.getPrototypeOf(XAxis)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(XAxis, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'xlabel' },
        this.props.dates.map(function (date, index) {
          return _react2.default.createElement(_xAxisTick2.default, {
            xValue: date,
            ind: index + 1
          });
        })
      );
    }
  }]);

  return XAxis;
}(_react.Component);

exports.default = XAxis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMveEF4aXMuanN4Il0sIm5hbWVzIjpbIlhBeGlzIiwicHJvcHMiLCJzdGF0ZSIsImRhdGVzIiwibWFwIiwiZGF0ZSIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFcUIsQ0FFckI7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0csYUFBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDckMsaUJBQ0UsOEJBQUMsbUJBQUQ7QUFDRSxvQkFBUUQsSUFEVjtBQUVFLGlCQUFLQyxRQUFRO0FBRmYsWUFERjtBQU1ELFNBUEE7QUFESCxPQURGO0FBWUQ7Ozs7RUF6QmlCQyxnQjs7a0JBNEJMUCxLIiwiZmlsZSI6InhBeGlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBYQXhpc1RpY2sgZnJvbSAnLi94QXhpc1RpY2suanN4JztcblxuY2xhc3MgWEF4aXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcbiAgICBcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGxhYmVsXCI+XG4gICAgICAgIHt0aGlzLnByb3BzLmRhdGVzLm1hcCgoZGF0ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFhBeGlzVGljayBcbiAgICAgICAgICAgICAgeFZhbHVlPXtkYXRlfVxuICAgICAgICAgICAgICBpbmQ9e2luZGV4ICsgMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWEF4aXM7Il19