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

    var _this = _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Description, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log(this.props.estimate);
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZGVzY3JpcHRpb24uanN4Il0sIm5hbWVzIjpbIkRlc2NyaXB0aW9uIiwicHJvcHMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlc3RpbWF0ZSIsImxlbmd0aCIsImFjdHVhbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVxQjtBQUNwQkMsY0FBUUMsR0FBUixDQUFZLEtBQUtILEtBQUwsQ0FBV0ksUUFBdkI7QUFDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxPQUFNLElBQVgsRUFBZ0IsUUFBTyxJQUF2QjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLG1CQUFiO0FBQ0Usd0RBQVEsR0FBRSxHQUFWLEVBQWMsTUFBSyxTQUFuQixFQUE2QixXQUFVLFlBQXZDO0FBREY7QUFERixXQURGO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQUE7QUFBQSxXQU5GO0FBU0U7QUFBQTtBQUFBLGNBQUssV0FBVSxTQUFmO0FBQ0csaUJBQUtKLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixLQUFLSixLQUFMLENBQVdJLFFBQVgsQ0FBb0JDLE1BQXBCLEdBQTZCLENBQWpEO0FBREg7QUFURixTQURGO0FBY0U7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssT0FBTSxJQUFYLEVBQWdCLFFBQU8sSUFBdkI7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxtQkFBYjtBQUNFLHdEQUFRLEdBQUUsR0FBVixFQUFjLE1BQUssU0FBbkIsRUFBNkIsV0FBVSxZQUF2QztBQURGO0FBREYsV0FERjtBQU1FO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUFBO0FBQUEsV0FORjtBQVNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUNHLGlCQUFLTCxLQUFMLENBQVdNLE1BQVgsQ0FBa0IsS0FBS04sS0FBTCxDQUFXSSxRQUFYLENBQW9CQyxNQUFwQixHQUE2QixDQUEvQztBQURIO0FBVEY7QUFkRixPQURGO0FBK0JEOzs7O0VBNUN1QkUsZ0I7O2tCQStDWFIsVyIsImZpbGUiOiJkZXNjcmlwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIERlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5lc3RpbWF0ZSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY0RpdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NFc3RcIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0LCAyMClcIj5cbiAgICAgICAgICAgICAgPGNpcmNsZSByPVwiN1wiIGZpbGw9XCIjMTE2QTRDXCIgY2xhc3NOYW1lPVwiZGVzY0NpcmNsZVwiIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjVGV4dFwiPlxuICAgICAgICAgIEVzdGltYXRlZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90VGV4dFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZXN0aW1hdGVbdGhpcy5wcm9wcy5lc3RpbWF0ZS5sZW5ndGggLSAxXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY0FjdFwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCI+XG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQsIDIwKVwiPlxuICAgICAgICAgICAgICA8Y2lyY2xlIHI9XCI3XCIgZmlsbD1cIiMyQkQ4OUVcIiBjbGFzc05hbWU9XCJkZXNjQ2lyY2xlXCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NUZXh0XCI+XG4gICAgICAgICAgQWN0dWFsXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3RUZXh0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3R1YWxbdGhpcy5wcm9wcy5lc3RpbWF0ZS5sZW5ndGggLSAxXX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbjsiXX0=