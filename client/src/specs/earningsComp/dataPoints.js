'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataPoint = require('./dataPoint');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2RhdGFQb2ludHMuanN4Il0sIm5hbWVzIjpbIkRhdGFQb2ludHMiLCJwcm9wcyIsInN0YXRlIiwiZXN0aW1hdGUiLCJhY3R1YWwiLCJ0cmlnZ2VyIiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJlbGVtZW50IiwibWFwIiwiZGF0YSIsImluZGV4IiwiTnVtYmVyIiwic3Vic3RyaW5nIiwieVJhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVcsRUFEQTtBQUVYQyxjQUFTLEVBRkU7QUFHWEMsZUFBVTtBQUhDLEtBQWI7QUFGaUI7QUFPbEI7Ozs7eUNBRXFCO0FBQ3BCLFVBQUksS0FBS0gsS0FBTCxDQUFXRyxPQUFYLEtBQXVCLEtBQTNCLEVBQWtDO0FBQ2hDLGFBQUtDLFFBQUwsQ0FBYztBQUNaSCxvQkFBVyxLQUFLRixLQUFMLENBQVdFLFFBQVgsQ0FBb0JJLE1BQXBCLENBQTJCLFVBQUNDLE9BQUQsRUFBYTtBQUFDLG1CQUFPQSxRQUFRLENBQVIsTUFBZSxHQUF0QjtBQUEyQixXQUFwRSxDQURDO0FBRVpKLGtCQUFTLEtBQUtILEtBQUwsQ0FBV0csTUFBWCxDQUFrQkcsTUFBbEIsQ0FBeUIsVUFBQ0MsT0FBRCxFQUFhO0FBQUMsbUJBQU9BLFFBQVEsQ0FBUixNQUFlLEdBQXRCO0FBQTJCLFdBQWxFLENBRkc7QUFHWkgsbUJBQVU7QUFIRSxTQUFkO0FBS0Q7QUFDRjs7OzZCQUVTO0FBQUE7O0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLElBQWYsRUFBb0IsT0FBTSxLQUExQixFQUFnQyxRQUFPLEtBQXZDO0FBQ0csYUFBS0gsS0FBTCxDQUFXQyxRQUFYLENBQW9CTSxHQUFwQixDQUF3QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDeEMsaUJBQ0UsOEJBQUMsbUJBQUQ7QUFDRSwyQkFBZUMsT0FBT0YsS0FBS0csU0FBTCxDQUFlLENBQWYsQ0FBUCxDQURqQjtBQUVFLHlCQUFhRCxPQUFPLE9BQUtWLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQk8sS0FBbEIsRUFBeUJFLFNBQXpCLENBQW1DLENBQW5DLENBQVAsQ0FGZjtBQUdFLG9CQUFRLE9BQUtaLEtBQUwsQ0FBV2EsTUFIckI7QUFJRSxpQkFBS0gsUUFBUTtBQUpmLFlBREY7QUFRRCxTQVRBO0FBREgsT0FERjtBQWNEOzs7O0VBbkNzQkksZ0I7O2tCQXNDVmYsVSIsImZpbGUiOiJkYXRhUG9pbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhUG9pbnQgZnJvbSAnLi9kYXRhUG9pbnQnXG5cbmNsYXNzIERhdGFQb2ludHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXN0aW1hdGUgOiBbXSxcbiAgICAgIGFjdHVhbCA6IFtdLFxuICAgICAgdHJpZ2dlciA6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50cmlnZ2VyID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVzdGltYXRlIDogdGhpcy5wcm9wcy5lc3RpbWF0ZS5maWx0ZXIoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudFswXSA9PT0gJyQnO30pLFxuICAgICAgICBhY3R1YWwgOiB0aGlzLnByb3BzLmFjdHVhbC5maWx0ZXIoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudFswXSA9PT0gJyQnO30pLCBcbiAgICAgICAgdHJpZ2dlciA6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwieHNcIiB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjEyMFwiPlxuICAgICAgICB7dGhpcy5zdGF0ZS5lc3RpbWF0ZS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEYXRhUG9pbnRcbiAgICAgICAgICAgICAgZXN0aW1hdGVQb2ludD17TnVtYmVyKGRhdGEuc3Vic3RyaW5nKDEpKX1cbiAgICAgICAgICAgICAgYWN0dWFsUG9pbnQ9e051bWJlcih0aGlzLnN0YXRlLmFjdHVhbFtpbmRleF0uc3Vic3RyaW5nKDEpKX1cbiAgICAgICAgICAgICAgeVJhbmdlPXt0aGlzLnByb3BzLnlSYW5nZX1cbiAgICAgICAgICAgICAgaW5kPXtpbmRleCArIDF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9zdmc+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUG9pbnRzOyJdfQ==