"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XAxisTick = function (_Component) {
  _inherits(XAxisTick, _Component);

  function XAxisTick(props) {
    _classCallCheck(this, XAxisTick);

    var _this = _possibleConstructorReturn(this, (XAxisTick.__proto__ || Object.getPrototypeOf(XAxisTick)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(XAxisTick, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "span",
        { className: "x-" + this.props.ind },
        _react2.default.createElement(
          "div",
          { className: "x" + this.props.ind },
          this.props.xValue
        )
      );
    }
  }]);

  return XAxisTick;
}(_react.Component);

exports.default = XAxisTick;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMveEF4aXNUaWNrLmpzeCJdLCJuYW1lcyI6WyJYQXhpc1RpY2siLCJwcm9wcyIsInN0YXRlIiwiaW5kIiwieFZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW9CLENBRXBCOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVcsT0FBTyxLQUFLRCxLQUFMLENBQVdFLEdBQW5DO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVyxNQUFNLEtBQUtGLEtBQUwsQ0FBV0UsR0FBakM7QUFDRyxlQUFLRixLQUFMLENBQVdHO0FBRGQ7QUFERixPQURGO0FBT0Q7Ozs7RUFwQnFCQyxnQjs7a0JBdUJUTCxTIiwiZmlsZSI6InhBeGlzVGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFhBeGlzVGljayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ4LVwiICsgdGhpcy5wcm9wcy5pbmR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ4XCIgKyB0aGlzLnByb3BzLmluZH0+XG4gICAgICAgICAge3RoaXMucHJvcHMueFZhbHVlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFhBeGlzVGljazsiXX0=