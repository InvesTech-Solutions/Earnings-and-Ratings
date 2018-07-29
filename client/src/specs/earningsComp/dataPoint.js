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

    return _possibleConstructorReturn(this, (DataPoint.__proto__ || Object.getPrototypeOf(DataPoint)).call(this, props));
  }

  _createClass(DataPoint, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2RhdGFQb2ludC5qc3giXSwibmFtZXMiOlsiRGF0YVBvaW50IiwicHJvcHMiLCJpbmQiLCJlc3RpbWF0ZVBvaW50IiwiTnVtYmVyIiwieVJhbmdlIiwic3Vic3RyaW5nIiwiYWN0dWFsUG9pbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxXQUFXLGVBQWdCLE9BQU8sS0FBS0EsS0FBTCxDQUFXQyxHQUFYLEdBQWlCLENBQXhCLElBQTZCLENBQTdDLEdBQWtELElBQWxELElBQTBELE1BQU0sT0FBTyxLQUFLRCxLQUFMLENBQVdFLGFBQVgsR0FBMkJDLE9BQU8sS0FBS0gsS0FBTCxDQUFXSSxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxTQUFyQixDQUErQixDQUEvQixDQUFQLENBQWxDLEtBQThFRixPQUFPLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixDQUFsQixFQUFxQkMsU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBUCxJQUE0Q0YsT0FBTyxLQUFLSCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJDLFNBQXJCLENBQStCLENBQS9CLENBQVAsQ0FBMUgsQ0FBaEUsSUFBd08sR0FBdFA7QUFDRSxvREFBUSxHQUFFLEdBQVYsRUFBYyxNQUFLLFNBQW5CLEVBQTZCLFdBQVcsY0FBYyxLQUFLTCxLQUFMLENBQVdDLEdBQXpCLEdBQStCLGFBQXZFO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFHLFdBQVcsZUFBZ0IsT0FBTyxLQUFLRCxLQUFMLENBQVdDLEdBQVgsR0FBaUIsQ0FBeEIsSUFBNkIsQ0FBN0MsR0FBa0QsSUFBbEQsSUFBMEQsTUFBTSxPQUFPLEtBQUtELEtBQUwsQ0FBV00sV0FBWCxHQUF5QkgsT0FBTyxLQUFLSCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJDLFNBQXJCLENBQStCLENBQS9CLENBQVAsQ0FBaEMsS0FBNEVGLE9BQU8sS0FBS0gsS0FBTCxDQUFXSSxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxTQUFyQixDQUErQixDQUEvQixDQUFQLElBQTRDRixPQUFPLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixDQUFsQixFQUFxQkMsU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBUCxDQUF4SCxDQUFoRSxJQUFzTyxHQUFwUDtBQUNFLG9EQUFRLEdBQUUsR0FBVixFQUFjLE1BQUssU0FBbkIsRUFBNkIsV0FBVyxjQUFjLEtBQUtMLEtBQUwsQ0FBV0MsR0FBekIsR0FBK0IsYUFBdkU7QUFERjtBQUpGLE9BREY7QUFVRDs7OztFQWhCcUJNLGdCOztrQkFtQlRSLFMiLCJmaWxlIjoiZGF0YVBvaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRGF0YVBvaW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxnPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09e1widHJhbnNsYXRlKFwiICsgKDU2MCAqICh0aGlzLnByb3BzLmluZCAtIDEpIC8gNikgKyBcIiwgXCIgKyAoMTIwIC0gMTIwICogKHRoaXMucHJvcHMuZXN0aW1hdGVQb2ludCAtIE51bWJlcih0aGlzLnByb3BzLnlSYW5nZVswXS5zdWJzdHJpbmcoMSkpKS8oTnVtYmVyKHRoaXMucHJvcHMueVJhbmdlWzNdLnN1YnN0cmluZygxKSkgLSBOdW1iZXIodGhpcy5wcm9wcy55UmFuZ2VbMF0uc3Vic3RyaW5nKDEpKSkpICsgXCIpXCJ9PlxuICAgICAgICAgIDxjaXJjbGUgcj1cIjdcIiBmaWxsPVwiI2Q3ZjdlN1wiIGNsYXNzTmFtZT17XCJkYXRhUG9pbnRcIiArIHRoaXMucHJvcHMuaW5kICsgJywgZXN0Q2lyY2xlJ30gLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09e1widHJhbnNsYXRlKFwiICsgKDU2MCAqICh0aGlzLnByb3BzLmluZCAtIDEpIC8gNikgKyBcIiwgXCIgKyAoMTIwIC0gMTIwICogKHRoaXMucHJvcHMuYWN0dWFsUG9pbnQgLSBOdW1iZXIodGhpcy5wcm9wcy55UmFuZ2VbMF0uc3Vic3RyaW5nKDEpKSkvKE51bWJlcih0aGlzLnByb3BzLnlSYW5nZVszXS5zdWJzdHJpbmcoMSkpIC0gTnVtYmVyKHRoaXMucHJvcHMueVJhbmdlWzBdLnN1YnN0cmluZygxKSkpKSArIFwiKVwifT5cbiAgICAgICAgICA8Y2lyY2xlIHI9XCI3XCIgZmlsbD1cIiM0ZmMxODlcIiBjbGFzc05hbWU9e1wiZGF0YVBvaW50XCIgKyB0aGlzLnByb3BzLmluZCArICcsIGFjdENpcmNsZSd9IC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVBvaW50OyJdfQ==