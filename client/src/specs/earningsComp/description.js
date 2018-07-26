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

var Description = function (_Component) {
  _inherits(Description, _Component);

  function Description(props) {
    _classCallCheck(this, Description);

    return _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).call(this, props));
  }

  _createClass(Description, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "descDiv" },
        _react2.default.createElement(
          "div",
          { className: "descEst" },
          _react2.default.createElement(
            "svg",
            { width: "28", height: "28" },
            _react2.default.createElement(
              "g",
              { transform: "translate(14, 20)" },
              _react2.default.createElement("circle", { r: "7", fill: "#116A4C", className: "descCircle" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "descText" },
            "Estimated"
          ),
          _react2.default.createElement(
            "div",
            { className: "botText" },
            this.props.estimate[this.props.estimate.length - 1]
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "descAct" },
          _react2.default.createElement(
            "svg",
            { width: "28", height: "28" },
            _react2.default.createElement(
              "g",
              { transform: "translate(14, 20)" },
              _react2.default.createElement("circle", { r: "7", fill: "#2BD89E", className: "descCircle" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "descText" },
            "Actual"
          ),
          _react2.default.createElement(
            "div",
            { className: "botText" },
            this.props.actual[this.props.estimate.length - 1]
          )
        )
      );
    }
  }]);

  return Description;
}(_react.Component);

exports.default = Description;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2Rlc2NyaXB0aW9uLmpzeCJdLCJuYW1lcyI6WyJEZXNjcmlwdGlvbiIsInByb3BzIiwiZXN0aW1hdGUiLCJsZW5ndGgiLCJhY3R1YWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFIQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxPQUFNLElBQVgsRUFBZ0IsUUFBTyxJQUF2QjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLG1CQUFiO0FBQ0Usd0RBQVEsR0FBRSxHQUFWLEVBQWMsTUFBSyxTQUFuQixFQUE2QixXQUFVLFlBQXZDO0FBREY7QUFERixXQURGO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQUE7QUFBQSxXQU5GO0FBU0U7QUFBQTtBQUFBLGNBQUssV0FBVSxTQUFmO0FBQ0csaUJBQUtBLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixLQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLE1BQXBCLEdBQTZCLENBQWpEO0FBREg7QUFURixTQURGO0FBY0U7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssT0FBTSxJQUFYLEVBQWdCLFFBQU8sSUFBdkI7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxtQkFBYjtBQUNFLHdEQUFRLEdBQUUsR0FBVixFQUFjLE1BQUssU0FBbkIsRUFBNkIsV0FBVSxZQUF2QztBQURGO0FBREYsV0FERjtBQU1FO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUFBO0FBQUEsV0FORjtBQVNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUNHLGlCQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0IsS0FBS0gsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxNQUFwQixHQUE2QixDQUEvQztBQURIO0FBVEY7QUFkRixPQURGO0FBK0JEOzs7O0VBckN1QkUsZ0I7O2tCQXdDWEwsVyIsImZpbGUiOiJkZXNjcmlwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIERlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NEaXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjRXN0XCI+XG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMjhcIj5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNCwgMjApXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjdcIiBmaWxsPVwiIzExNkE0Q1wiIGNsYXNzTmFtZT1cImRlc2NDaXJjbGVcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1RleHRcIj5cbiAgICAgICAgICBFc3RpbWF0ZWRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdFRleHRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmVzdGltYXRlW3RoaXMucHJvcHMuZXN0aW1hdGUubGVuZ3RoIC0gMV19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NBY3RcIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0LCAyMClcIj5cbiAgICAgICAgICAgICAgPGNpcmNsZSByPVwiN1wiIGZpbGw9XCIjMkJEODlFXCIgY2xhc3NOYW1lPVwiZGVzY0NpcmNsZVwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjVGV4dFwiPlxuICAgICAgICAgIEFjdHVhbFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90VGV4dFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0dWFsW3RoaXMucHJvcHMuZXN0aW1hdGUubGVuZ3RoIC0gMV19XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb247Il19