'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xAxisTick = require('./xAxisTick');

var _xAxisTick2 = _interopRequireDefault(_xAxisTick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XAxis = function (_Component) {
  _inherits(XAxis, _Component);

  function XAxis(props) {
    _classCallCheck(this, XAxis);

    return _possibleConstructorReturn(this, (XAxis.__proto__ || Object.getPrototypeOf(XAxis)).call(this, props));
  }

  _createClass(XAxis, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL3hBeGlzLmpzeCJdLCJuYW1lcyI6WyJYQXhpcyIsInByb3BzIiwiZGF0ZXMiLCJtYXAiLCJkYXRlIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUdBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNHLGFBQUtBLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3JDLGlCQUNFLDhCQUFDLG1CQUFEO0FBQ0Usb0JBQVFELElBRFY7QUFFRSxpQkFBS0MsUUFBUTtBQUZmLFlBREY7QUFNRCxTQVBBO0FBREgsT0FERjtBQVlEOzs7O0VBbEJpQkMsZ0I7O2tCQXFCTE4sSyIsImZpbGUiOiJ4QXhpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWEF4aXNUaWNrIGZyb20gJy4veEF4aXNUaWNrJztcblxuY2xhc3MgWEF4aXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bGFiZWxcIj5cbiAgICAgICAge3RoaXMucHJvcHMuZGF0ZXMubWFwKChkYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8WEF4aXNUaWNrIFxuICAgICAgICAgICAgICB4VmFsdWU9e2RhdGV9XG4gICAgICAgICAgICAgIGluZD17aW5kZXggKyAxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBYQXhpczsiXX0=