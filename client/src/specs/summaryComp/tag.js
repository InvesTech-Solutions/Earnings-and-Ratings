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

var Tag = function (_Component) {
  _inherits(Tag, _Component);

  function Tag(props) {
    _classCallCheck(this, Tag);

    var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Tag, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "tagContainer" },
        _react2.default.createElement(
          "div",
          { id: "tagCircle", className: "circleBase" },
          _react2.default.createElement(
            "h2",
            { className: "tagContentHead" },
            _react2.default.createElement(
              "svg",
              { width: "20", height: "20", viewBox: "0 0 20 20", id: "tagSvg" },
              _react2.default.createElement(
                "g",
                { fill: "#2BD89E", "fill-rule": "evenodd", transform: "translate(-4 -4)" },
                _react2.default.createElement("path", { id: "tag-a", d: "M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4" })
              )
            ),
            "\u2009",
            this.props.percent + '%'
          ),
          _react2.default.createElement(
            "p",
            { className: "tagContentPara" },
            "of " + this.props.total + " ratings"
          )
        )
      );
    }
  }]);

  return Tag;
}(_react.Component);

exports.default = Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvdGFnLmpzeCJdLCJuYW1lcyI6WyJUYWciLCJwcm9wcyIsInN0YXRlIiwicGVyY2VudCIsInRvdGFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFcUIsQ0FFckI7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsY0FBUjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUixFQUFvQixXQUFVLFlBQTlCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxPQUFNLElBQVgsRUFBZ0IsUUFBTyxJQUF2QixFQUE0QixTQUFRLFdBQXBDLEVBQWdELElBQUcsUUFBbkQ7QUFDRTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxTQUFSLEVBQWtCLGFBQVUsU0FBNUIsRUFBc0MsV0FBVSxrQkFBaEQ7QUFDRSx3REFBTSxJQUFHLE9BQVQsRUFBaUIsR0FBRSwwZEFBbkI7QUFERjtBQURGLGFBREY7QUFBQTtBQU9HLGlCQUFLRCxLQUFMLENBQVdFLE9BQVgsR0FBcUI7QUFQeEIsV0FERjtBQVVFO0FBQUE7QUFBQSxjQUFHLFdBQVUsZ0JBQWI7QUFBQSxvQkFDUyxLQUFLRixLQUFMLENBQVdHLEtBRHBCO0FBQUE7QUFWRjtBQURGLE9BREY7QUFrQkQ7Ozs7RUFoQ2VDLGdCOztrQkFtQ0hMLEciLCJmaWxlIjoidGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgVGFnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG5cbiAgfVxuXG4gIC8vIHJlbmRlcnMgZW50aXJlIGVhcm5pbmdzIHNlY3Rpb24gd2l0aCBZQXhpcywgRGF0YVBvaW50cywgWEF4aXMsIGFuZCBEZXNjcmlwdGlvbnMgYXMgc3ViY29tcG9uZW50c1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwidGFnQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJ0YWdDaXJjbGVcIiBjbGFzc05hbWU9XCJjaXJjbGVCYXNlXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRhZ0NvbnRlbnRIZWFkXCI+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBpZD1cInRhZ1N2Z1wiPlxuICAgICAgICAgICAgICA8ZyBmaWxsPVwiIzJCRDg5RVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQgLTQpXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJ0YWctYVwiIGQ9XCJNMjAuOTk5NzUsOCBDMjAuNDQ3NzUsOCAxOS45OTk3NSw3LjU1MiAxOS45OTk3NSw3IEMxOS45OTk3NSw2LjQ0OCAyMC40NDc3NSw2IDIwLjk5OTc1LDYgQzIxLjU1MTc1LDYgMjEuOTk5NzUsNi40NDggMjEuOTk5NzUsNyBDMjEuOTk5NzUsNy41NTIgMjEuNTUxNzUsOCAyMC45OTk3NSw4IE0yMS45OTk3NSw0IEwxNC44Mjc3NSw0IEMxNC4yOTc3NSw0IDEzLjc4ODc1LDQuMjEgMTMuNDEzNzUsNC41ODUgTDQuNTg1NzUsMTMuNDE0IEMzLjgwNDc1LDE0LjE5NSAzLjgwNDc1LDE1LjQ2MSA0LjU4NTc1LDE2LjI0MiBMMTEuNzU2NzUsMjMuNDE0IEMxMi41Mzc3NSwyNC4xOTUgMTMuODA0NzUsMjQuMTk1IDE0LjU4NTc1LDIzLjQxNCBMMjMuNDEzNzUsMTQuNTg2IEMyMy43ODg3NSwxNC4yMTEgMjMuOTk5NzUsMTMuNzAyIDIzLjk5OTc1LDEzLjE3MiBMMjMuOTk5NzUsNiBDMjMuOTk5NzUsNC44OTYgMjMuMTAzNzUsNCAyMS45OTk3NSw0XCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICZ0aGluc3A7XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5wZXJjZW50ICsgJyUnfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFnQ29udGVudFBhcmFcIj5cbiAgICAgICAgICAgIHtgb2YgJHt0aGlzLnByb3BzLnRvdGFsfSByYXRpbmdzYH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZzsiXX0=