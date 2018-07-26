'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataPoint = require('./dataPoint.jsx');

var _dataPoint2 = _interopRequireDefault(_dataPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataPoints = function (_Component) {
  _inherits(DataPoints, _Component);

  function DataPoints(props) {
    _classCallCheck(this, DataPoints);

    var _this = _possibleConstructorReturn(this, (DataPoints.__proto__ || Object.getPrototypeOf(DataPoints)).call(this, props));

    _this.state = {
      estimate: [],
      actual: [],
      trigger: false
    };
    return _this;
  }

  _createClass(DataPoints, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.trigger === false) {
        this.setState({
          estimate: this.props.estimate.filter(function (element) {
            return element[0] === '$';
          }),
          actual: this.props.actual.filter(function (element) {
            return element[0] === '$';
          }),
          trigger: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'svg',
        { className: 'xs', width: '560', height: '120' },
        this.state.estimate.map(function (data, index) {
          return _react2.default.createElement(_dataPoint2.default, {
            estimatePoint: Number(data.substring(1)),
            actualPoint: Number(_this2.state.actual[index].substring(1)),
            yRange: _this2.props.yRange,
            ind: index + 1
          });
        })
      );
    }
  }]);

  return DataPoints;
}(_react.Component);

exports.default = DataPoints;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZGF0YVBvaW50cy5qc3giXSwibmFtZXMiOlsiRGF0YVBvaW50cyIsInByb3BzIiwic3RhdGUiLCJlc3RpbWF0ZSIsImFjdHVhbCIsInRyaWdnZXIiLCJzZXRTdGF0ZSIsImZpbHRlciIsImVsZW1lbnQiLCJtYXAiLCJkYXRhIiwiaW5kZXgiLCJOdW1iZXIiLCJzdWJzdHJpbmciLCJ5UmFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFU7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVyxFQURBO0FBRVhDLGNBQVMsRUFGRTtBQUdYQyxlQUFVO0FBSEMsS0FBYjtBQUZpQjtBQU9sQjs7Ozt5Q0FFcUI7QUFDcEIsVUFBSSxLQUFLSCxLQUFMLENBQVdHLE9BQVgsS0FBdUIsS0FBM0IsRUFBa0M7QUFDaEMsYUFBS0MsUUFBTCxDQUFjO0FBQ1pILG9CQUFXLEtBQUtGLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkksTUFBcEIsQ0FBMkIsVUFBQ0MsT0FBRCxFQUFhO0FBQUMsbUJBQU9BLFFBQVEsQ0FBUixNQUFlLEdBQXRCO0FBQTJCLFdBQXBFLENBREM7QUFFWkosa0JBQVMsS0FBS0gsS0FBTCxDQUFXRyxNQUFYLENBQWtCRyxNQUFsQixDQUF5QixVQUFDQyxPQUFELEVBQWE7QUFBQyxtQkFBT0EsUUFBUSxDQUFSLE1BQWUsR0FBdEI7QUFBMkIsV0FBbEUsQ0FGRztBQUdaSCxtQkFBVTtBQUhFLFNBQWQ7QUFLRDtBQUNGOzs7NkJBRVM7QUFBQTs7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsSUFBZixFQUFvQixPQUFNLEtBQTFCLEVBQWdDLFFBQU8sS0FBdkM7QUFDRyxhQUFLSCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JNLEdBQXBCLENBQXdCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxpQkFDRSw4QkFBQyxtQkFBRDtBQUNFLDJCQUFlQyxPQUFPRixLQUFLRyxTQUFMLENBQWUsQ0FBZixDQUFQLENBRGpCO0FBRUUseUJBQWFELE9BQU8sT0FBS1YsS0FBTCxDQUFXRSxNQUFYLENBQWtCTyxLQUFsQixFQUF5QkUsU0FBekIsQ0FBbUMsQ0FBbkMsQ0FBUCxDQUZmO0FBR0Usb0JBQVEsT0FBS1osS0FBTCxDQUFXYSxNQUhyQjtBQUlFLGlCQUFLSCxRQUFRO0FBSmYsWUFERjtBQVFELFNBVEE7QUFESCxPQURGO0FBY0Q7Ozs7RUFuQ3NCSSxnQjs7a0JBc0NWZixVIiwiZmlsZSI6ImRhdGFQb2ludHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGFQb2ludCBmcm9tICcuL2RhdGFQb2ludC5qc3gnXG5cbmNsYXNzIERhdGFQb2ludHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXN0aW1hdGUgOiBbXSxcbiAgICAgIGFjdHVhbCA6IFtdLFxuICAgICAgdHJpZ2dlciA6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50cmlnZ2VyID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVzdGltYXRlIDogdGhpcy5wcm9wcy5lc3RpbWF0ZS5maWx0ZXIoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudFswXSA9PT0gJyQnO30pLFxuICAgICAgICBhY3R1YWwgOiB0aGlzLnByb3BzLmFjdHVhbC5maWx0ZXIoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudFswXSA9PT0gJyQnO30pLCBcbiAgICAgICAgdHJpZ2dlciA6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwieHNcIiB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjEyMFwiPlxuICAgICAgICB7dGhpcy5zdGF0ZS5lc3RpbWF0ZS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEYXRhUG9pbnRcbiAgICAgICAgICAgICAgZXN0aW1hdGVQb2ludD17TnVtYmVyKGRhdGEuc3Vic3RyaW5nKDEpKX1cbiAgICAgICAgICAgICAgYWN0dWFsUG9pbnQ9e051bWJlcih0aGlzLnN0YXRlLmFjdHVhbFtpbmRleF0uc3Vic3RyaW5nKDEpKX1cbiAgICAgICAgICAgICAgeVJhbmdlPXt0aGlzLnByb3BzLnlSYW5nZX1cbiAgICAgICAgICAgICAgaW5kPXtpbmRleCArIDF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9zdmc+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUG9pbnRzOyJdfQ==