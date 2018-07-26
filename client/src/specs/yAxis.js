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

var YAxis = function (_Component) {
  _inherits(YAxis, _Component);

  function YAxis(props) {
    _classCallCheck(this, YAxis);

    var _this = _possibleConstructorReturn(this, (YAxis.__proto__ || Object.getPrototypeOf(YAxis)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(YAxis, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "ylabel" },
        _react2.default.createElement(
          "span",
          { className: "y-1" },
          _react2.default.createElement(
            "div",
            { className: "y1" },
            "$1.00"
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "y-2" },
          _react2.default.createElement(
            "div",
            { className: "y2" },
            "$2.00"
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "y-3" },
          _react2.default.createElement(
            "div",
            { className: "y3" },
            "$3.00"
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "y-4" },
          _react2.default.createElement(
            "div",
            { className: "y4" },
            "$4.00"
          )
        )
      );
    }
  }]);

  return YAxis;
}(_react.Component);

exports.default = YAxis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMveUF4aXMuanN4Il0sIm5hbWVzIjpbIllBeGlzIiwicHJvcHMiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVxQixDQUVyQjs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxJQUFmO0FBQUE7QUFBQTtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBTSxXQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxJQUFmO0FBQUE7QUFBQTtBQURGLFNBSkY7QUFPRTtBQUFBO0FBQUEsWUFBTSxXQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxJQUFmO0FBQUE7QUFBQTtBQURGLFNBUEY7QUFVRTtBQUFBO0FBQUEsWUFBTSxXQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxJQUFmO0FBQUE7QUFBQTtBQURGO0FBVkYsT0FERjtBQWdCRDs7OztFQTdCaUJDLGdCOztrQkFnQ0xILEsiLCJmaWxlIjoieUF4aXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBZQXhpcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInlsYWJlbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ5LTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInkxXCI+JDEuMDA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ5LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInkyXCI+JDIuMDA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ5LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInkzXCI+JDMuMDA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ5LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInk0XCI+JDQuMDA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFlBeGlzOyJdfQ==