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
    value: function componentDidUpdate() {
      console.log(this.props.dates);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMveEF4aXMuanN4Il0sIm5hbWVzIjpbIlhBeGlzIiwicHJvcHMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRlcyIsIm1hcCIsImRhdGUiLCJpbmRleCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFLbEI7Ozs7eUNBRXFCO0FBQ3BCQyxjQUFRQyxHQUFSLENBQVksS0FBS0gsS0FBTCxDQUFXSSxLQUF2QjtBQUNEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNHLGFBQUtKLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3JDLGlCQUNFLDhCQUFDLG1CQUFEO0FBQ0Usb0JBQVFELElBRFY7QUFFRSxpQkFBS0MsUUFBUTtBQUZmLFlBREY7QUFNRCxTQVBBO0FBREgsT0FERjtBQVlEOzs7O0VBekJpQkMsZ0I7O2tCQTRCTFQsSyIsImZpbGUiOiJ4QXhpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWEF4aXNUaWNrIGZyb20gJy4veEF4aXNUaWNrLmpzeCc7XG5cbmNsYXNzIFhBeGlzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5kYXRlcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsYWJlbFwiPlxuICAgICAgICB7dGhpcy5wcm9wcy5kYXRlcy5tYXAoKGRhdGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxYQXhpc1RpY2sgXG4gICAgICAgICAgICAgIHhWYWx1ZT17ZGF0ZX1cbiAgICAgICAgICAgICAgaW5kPXtpbmRleCArIDF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFhBeGlzOyJdfQ==