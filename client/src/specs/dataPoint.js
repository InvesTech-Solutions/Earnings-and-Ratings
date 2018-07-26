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

var DataPoint = function (_Component) {
  _inherits(DataPoint, _Component);

  function DataPoint(props) {
    _classCallCheck(this, DataPoint);

    var _this = _possibleConstructorReturn(this, (DataPoint.__proto__ || Object.getPrototypeOf(DataPoint)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(DataPoint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.yRange[0]);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "g",
        null,
        _react2.default.createElement(
          "g",
          { transform: "translate(" + 560 * (this.props.ind - 1) / 6 + ", " + (120 - 120 * (this.props.estimatePoint - Number(this.props.yRange[0].substring(1))) / (Number(this.props.yRange[3].substring(1)) - Number(this.props.yRange[0].substring(1)))) + ")" },
          _react2.default.createElement("circle", { r: "7", fill: "#116A4C", className: "dataPoint" + this.props.ind + ', estCircle' })
        ),
        _react2.default.createElement(
          "g",
          { transform: "translate(" + 560 * (this.props.ind - 1) / 6 + ", " + (120 - 120 * (this.props.actualPoint - Number(this.props.yRange[0].substring(1))) / (Number(this.props.yRange[3].substring(1)) - Number(this.props.yRange[0].substring(1)))) + ")" },
          _react2.default.createElement("circle", { r: "7", fill: "#2BD89E", className: "dataPoint" + this.props.ind + ', actCircle' })
        )
      );
    }
  }]);

  return DataPoint;
}(_react.Component);

exports.default = DataPoint;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZGF0YVBvaW50LmpzeCJdLCJuYW1lcyI6WyJEYXRhUG9pbnQiLCJwcm9wcyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInlSYW5nZSIsImluZCIsImVzdGltYXRlUG9pbnQiLCJOdW1iZXIiLCJzdWJzdHJpbmciLCJhY3R1YWxQb2ludCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCOzs7O3dDQUVvQjtBQUNuQkMsY0FBUUMsR0FBUixDQUFZLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixDQUFsQixDQUFaO0FBQ0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsV0FBVyxlQUFnQixPQUFPLEtBQUtKLEtBQUwsQ0FBV0ssR0FBWCxHQUFpQixDQUF4QixJQUE2QixDQUE3QyxHQUFrRCxJQUFsRCxJQUEwRCxNQUFNLE9BQU8sS0FBS0wsS0FBTCxDQUFXTSxhQUFYLEdBQTJCQyxPQUFPLEtBQUtQLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixDQUFsQixFQUFxQkksU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBUCxDQUFsQyxLQUE4RUQsT0FBTyxLQUFLUCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJJLFNBQXJCLENBQStCLENBQS9CLENBQVAsSUFBNENELE9BQU8sS0FBS1AsS0FBTCxDQUFXSSxNQUFYLENBQWtCLENBQWxCLEVBQXFCSSxTQUFyQixDQUErQixDQUEvQixDQUFQLENBQTFILENBQWhFLElBQXdPLEdBQXRQO0FBQ0Usb0RBQVEsR0FBRSxHQUFWLEVBQWMsTUFBSyxTQUFuQixFQUE2QixXQUFXLGNBQWMsS0FBS1IsS0FBTCxDQUFXSyxHQUF6QixHQUErQixhQUF2RTtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBRyxXQUFXLGVBQWdCLE9BQU8sS0FBS0wsS0FBTCxDQUFXSyxHQUFYLEdBQWlCLENBQXhCLElBQTZCLENBQTdDLEdBQWtELElBQWxELElBQTBELE1BQU0sT0FBTyxLQUFLTCxLQUFMLENBQVdTLFdBQVgsR0FBeUJGLE9BQU8sS0FBS1AsS0FBTCxDQUFXSSxNQUFYLENBQWtCLENBQWxCLEVBQXFCSSxTQUFyQixDQUErQixDQUEvQixDQUFQLENBQWhDLEtBQTRFRCxPQUFPLEtBQUtQLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixDQUFsQixFQUFxQkksU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBUCxJQUE0Q0QsT0FBTyxLQUFLUCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJJLFNBQXJCLENBQStCLENBQS9CLENBQVAsQ0FBeEgsQ0FBaEUsSUFBc08sR0FBcFA7QUFDRSxvREFBUSxHQUFFLEdBQVYsRUFBYyxNQUFLLFNBQW5CLEVBQTZCLFdBQVcsY0FBYyxLQUFLUixLQUFMLENBQVdLLEdBQXpCLEdBQStCLGFBQXZFO0FBREY7QUFKRixPQURGO0FBVUQ7Ozs7RUF2QnFCSyxnQjs7a0JBMEJUWCxTIiwiZmlsZSI6ImRhdGFQb2ludC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIERhdGFQb2ludCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy55UmFuZ2VbMF0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGc+XG4gICAgICAgIDxnIHRyYW5zZm9ybT17XCJ0cmFuc2xhdGUoXCIgKyAoNTYwICogKHRoaXMucHJvcHMuaW5kIC0gMSkgLyA2KSArIFwiLCBcIiArICgxMjAgLSAxMjAgKiAodGhpcy5wcm9wcy5lc3RpbWF0ZVBvaW50IC0gTnVtYmVyKHRoaXMucHJvcHMueVJhbmdlWzBdLnN1YnN0cmluZygxKSkpLyhOdW1iZXIodGhpcy5wcm9wcy55UmFuZ2VbM10uc3Vic3RyaW5nKDEpKSAtIE51bWJlcih0aGlzLnByb3BzLnlSYW5nZVswXS5zdWJzdHJpbmcoMSkpKSkgKyBcIilcIn0+XG4gICAgICAgICAgPGNpcmNsZSByPVwiN1wiIGZpbGw9XCIjMTE2QTRDXCIgY2xhc3NOYW1lPXtcImRhdGFQb2ludFwiICsgdGhpcy5wcm9wcy5pbmQgKyAnLCBlc3RDaXJjbGUnfSAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT17XCJ0cmFuc2xhdGUoXCIgKyAoNTYwICogKHRoaXMucHJvcHMuaW5kIC0gMSkgLyA2KSArIFwiLCBcIiArICgxMjAgLSAxMjAgKiAodGhpcy5wcm9wcy5hY3R1YWxQb2ludCAtIE51bWJlcih0aGlzLnByb3BzLnlSYW5nZVswXS5zdWJzdHJpbmcoMSkpKS8oTnVtYmVyKHRoaXMucHJvcHMueVJhbmdlWzNdLnN1YnN0cmluZygxKSkgLSBOdW1iZXIodGhpcy5wcm9wcy55UmFuZ2VbMF0uc3Vic3RyaW5nKDEpKSkpICsgXCIpXCJ9PlxuICAgICAgICAgIDxjaXJjbGUgcj1cIjdcIiBmaWxsPVwiIzJCRDg5RVwiIGNsYXNzTmFtZT17XCJkYXRhUG9pbnRcIiArIHRoaXMucHJvcHMuaW5kICsgJywgYWN0Q2lyY2xlJ30gLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUG9pbnQ7Il19