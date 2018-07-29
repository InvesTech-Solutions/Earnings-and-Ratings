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
          _react2.default.createElement("circle", { r: "7", fill: "#d7f7e7", className: "dataPoint" + this.props.ind + ', estCircle' })
        ),
        _react2.default.createElement(
          "g",
          { transform: "translate(" + 560 * (this.props.ind - 1) / 6 + ", " + (120 - 120 * (this.props.actualPoint - Number(this.props.yRange[0].substring(1))) / (Number(this.props.yRange[3].substring(1)) - Number(this.props.yRange[0].substring(1)))) + ")" },
          _react2.default.createElement("circle", { r: "7", fill: "#4fc189", className: "dataPoint" + this.props.ind + ', actCircle' })
        )
      );
    }
  }]);

  return DataPoint;
}(_react.Component);

exports.default = DataPoint;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2RhdGFQb2ludC5qc3giXSwibmFtZXMiOlsiRGF0YVBvaW50IiwicHJvcHMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ5UmFuZ2UiLCJpbmQiLCJlc3RpbWF0ZVBvaW50IiwiTnVtYmVyIiwic3Vic3RyaW5nIiwiYWN0dWFsUG9pbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt3Q0FFb0I7QUFDbkJDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLSCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBWjtBQUNEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLFdBQVcsZUFBZ0IsT0FBTyxLQUFLSixLQUFMLENBQVdLLEdBQVgsR0FBaUIsQ0FBeEIsSUFBNkIsQ0FBN0MsR0FBa0QsSUFBbEQsSUFBMEQsTUFBTSxPQUFPLEtBQUtMLEtBQUwsQ0FBV00sYUFBWCxHQUEyQkMsT0FBTyxLQUFLUCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJJLFNBQXJCLENBQStCLENBQS9CLENBQVAsQ0FBbEMsS0FBOEVELE9BQU8sS0FBS1AsS0FBTCxDQUFXSSxNQUFYLENBQWtCLENBQWxCLEVBQXFCSSxTQUFyQixDQUErQixDQUEvQixDQUFQLElBQTRDRCxPQUFPLEtBQUtQLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixDQUFsQixFQUFxQkksU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBUCxDQUExSCxDQUFoRSxJQUF3TyxHQUF0UDtBQUNFLG9EQUFRLEdBQUUsR0FBVixFQUFjLE1BQUssU0FBbkIsRUFBNkIsV0FBVyxjQUFjLEtBQUtSLEtBQUwsQ0FBV0ssR0FBekIsR0FBK0IsYUFBdkU7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUcsV0FBVyxlQUFnQixPQUFPLEtBQUtMLEtBQUwsQ0FBV0ssR0FBWCxHQUFpQixDQUF4QixJQUE2QixDQUE3QyxHQUFrRCxJQUFsRCxJQUEwRCxNQUFNLE9BQU8sS0FBS0wsS0FBTCxDQUFXUyxXQUFYLEdBQXlCRixPQUFPLEtBQUtQLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixDQUFsQixFQUFxQkksU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBUCxDQUFoQyxLQUE0RUQsT0FBTyxLQUFLUCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJJLFNBQXJCLENBQStCLENBQS9CLENBQVAsSUFBNENELE9BQU8sS0FBS1AsS0FBTCxDQUFXSSxNQUFYLENBQWtCLENBQWxCLEVBQXFCSSxTQUFyQixDQUErQixDQUEvQixDQUFQLENBQXhILENBQWhFLElBQXNPLEdBQXBQO0FBQ0Usb0RBQVEsR0FBRSxHQUFWLEVBQWMsTUFBSyxTQUFuQixFQUE2QixXQUFXLGNBQWMsS0FBS1IsS0FBTCxDQUFXSyxHQUF6QixHQUErQixhQUF2RTtBQURGO0FBSkYsT0FERjtBQVVEOzs7O0VBdkJxQkssZ0I7O2tCQTBCVFgsUyIsImZpbGUiOiJkYXRhUG9pbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBEYXRhUG9pbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMueVJhbmdlWzBdKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxnPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09e1widHJhbnNsYXRlKFwiICsgKDU2MCAqICh0aGlzLnByb3BzLmluZCAtIDEpIC8gNikgKyBcIiwgXCIgKyAoMTIwIC0gMTIwICogKHRoaXMucHJvcHMuZXN0aW1hdGVQb2ludCAtIE51bWJlcih0aGlzLnByb3BzLnlSYW5nZVswXS5zdWJzdHJpbmcoMSkpKS8oTnVtYmVyKHRoaXMucHJvcHMueVJhbmdlWzNdLnN1YnN0cmluZygxKSkgLSBOdW1iZXIodGhpcy5wcm9wcy55UmFuZ2VbMF0uc3Vic3RyaW5nKDEpKSkpICsgXCIpXCJ9PlxuICAgICAgICAgIDxjaXJjbGUgcj1cIjdcIiBmaWxsPVwiI2Q3ZjdlN1wiIGNsYXNzTmFtZT17XCJkYXRhUG9pbnRcIiArIHRoaXMucHJvcHMuaW5kICsgJywgZXN0Q2lyY2xlJ30gLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09e1widHJhbnNsYXRlKFwiICsgKDU2MCAqICh0aGlzLnByb3BzLmluZCAtIDEpIC8gNikgKyBcIiwgXCIgKyAoMTIwIC0gMTIwICogKHRoaXMucHJvcHMuYWN0dWFsUG9pbnQgLSBOdW1iZXIodGhpcy5wcm9wcy55UmFuZ2VbMF0uc3Vic3RyaW5nKDEpKSkvKE51bWJlcih0aGlzLnByb3BzLnlSYW5nZVszXS5zdWJzdHJpbmcoMSkpIC0gTnVtYmVyKHRoaXMucHJvcHMueVJhbmdlWzBdLnN1YnN0cmluZygxKSkpKSArIFwiKVwifT5cbiAgICAgICAgICA8Y2lyY2xlIHI9XCI3XCIgZmlsbD1cIiM0ZmMxODlcIiBjbGFzc05hbWU9e1wiZGF0YVBvaW50XCIgKyB0aGlzLnByb3BzLmluZCArICcsIGFjdENpcmNsZSd9IC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVBvaW50OyJdfQ==