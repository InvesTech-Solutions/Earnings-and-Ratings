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

var DataPoints = function (_Component) {
  _inherits(DataPoints, _Component);

  function DataPoints(props) {
    _classCallCheck(this, DataPoints);

    var _this = _possibleConstructorReturn(this, (DataPoints.__proto__ || Object.getPrototypeOf(DataPoints)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(DataPoints, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { className: "xs", width: "560", height: "120" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement(
            "g",
            { transform: "translate(0, 58.536585)" },
            _react2.default.createElement("circle", { r: "7", className: "dataPoint" })
          )
        )
      );
    }
  }]);

  return DataPoints;
}(_react.Component);

exports.default = DataPoints;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZGF0YVBvaW50cy5qc3giXSwibmFtZXMiOlsiRGF0YVBvaW50cyIsInByb3BzIiwic3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFcUIsQ0FFckI7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxJQUFmLEVBQW9CLE9BQU0sS0FBMUIsRUFBZ0MsUUFBTyxLQUF2QztBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFHLFdBQVUseUJBQWI7QUFDRSxzREFBUSxHQUFFLEdBQVYsRUFBYyxXQUFVLFdBQXhCO0FBREY7QUFERjtBQURGLE9BREY7QUFTRDs7OztFQXRCc0JDLGdCOztrQkF5QlZILFUiLCJmaWxlIjoiZGF0YVBvaW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIERhdGFQb2ludHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcblxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ4c1wiIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMTIwXCI+XG4gICAgICAgIDxnPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLCA1OC41MzY1ODUpXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIHI9XCI3XCIgY2xhc3NOYW1lPVwiZGF0YVBvaW50XCIgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUG9pbnRzOyJdfQ==