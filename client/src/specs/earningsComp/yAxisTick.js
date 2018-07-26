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

var YAxisTick = function (_Component) {
  _inherits(YAxisTick, _Component);

  function YAxisTick(props) {
    _classCallCheck(this, YAxisTick);

    return _possibleConstructorReturn(this, (YAxisTick.__proto__ || Object.getPrototypeOf(YAxisTick)).call(this, props));
  }

  _createClass(YAxisTick, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "span",
        { className: "y-" + this.props.ind },
        _react2.default.createElement(
          "div",
          { className: "y" + this.props.ind },
          this.props.yValue
        )
      );
    }
  }]);

  return YAxisTick;
}(_react.Component);

exports.default = YAxisTick;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL3lBeGlzVGljay5qc3giXSwibmFtZXMiOlsiWUF4aXNUaWNrIiwicHJvcHMiLCJpbmQiLCJ5VmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFXLE9BQU8sS0FBS0EsS0FBTCxDQUFXQyxHQUFuQztBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVcsTUFBTSxLQUFLRCxLQUFMLENBQVdDLEdBQWpDO0FBQXVDLGVBQUtELEtBQUwsQ0FBV0U7QUFBbEQ7QUFERixPQURGO0FBS0Q7Ozs7RUFYcUJDLGdCOztrQkFjVEosUyIsImZpbGUiOiJ5QXhpc1RpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBZQXhpc1RpY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJ5LVwiICsgdGhpcy5wcm9wcy5pbmR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ5XCIgKyB0aGlzLnByb3BzLmluZH0+e3RoaXMucHJvcHMueVZhbHVlfTwvZGl2PlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWUF4aXNUaWNrOyJdfQ==