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
        _react2.default.createElement("div", { id: "tagCircle" })
      );
    }
  }]);

  return Tag;
}(_react.Component);

exports.default = Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvdGFnLmpzeCJdLCJuYW1lcyI6WyJUYWciLCJwcm9wcyIsInN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFcUIsQ0FFckI7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsY0FBUjtBQUNFLCtDQUFLLElBQUcsV0FBUjtBQURGLE9BREY7QUFNRDs7OztFQXBCZUMsZ0I7O2tCQXVCSEgsRyIsImZpbGUiOiJ0YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBUYWcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcblxuICB9XG5cbiAgLy8gcmVuZGVycyBlbnRpcmUgZWFybmluZ3Mgc2VjdGlvbiB3aXRoIFlBeGlzLCBEYXRhUG9pbnRzLCBYQXhpcywgYW5kIERlc2NyaXB0aW9ucyBhcyBzdWJjb21wb25lbnRzXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ0YWdDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cInRhZ0NpcmNsZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWc7Il19