'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xAxis = require('./xAxis.jsx');

var _xAxis2 = _interopRequireDefault(_xAxis);

var _yAxis = require('./yAxis.jsx');

var _yAxis2 = _interopRequireDefault(_yAxis);

var _dataPoints = require('./dataPoints.jsx');

var _dataPoints2 = _interopRequireDefault(_dataPoints);

var _description = require('./description.jsx');

var _description2 = _interopRequireDefault(_description);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Earnings = function (_Component) {
  _inherits(Earnings, _Component);

  function Earnings(props) {
    _classCallCheck(this, Earnings);

    var _this = _possibleConstructorReturn(this, (Earnings.__proto__ || Object.getPrototypeOf(Earnings)).call(this, props));

    _this.state = {
      yRange: [],
      xDates: [],
      control: false
    };
    return _this;
  }

  _createClass(Earnings, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var filtered = this.props.estimatedEarnings.concat(this.props.actualEarnings).filter(function (element) {
        return element[0] === '$';
      });
      var dates = this.props.estimatedEarnings.filter(function (element) {
        return element[0] !== '$';
      });
      var inNumbers = filtered.map(function (element) {
        return Number(element.substring(1));
      });

      var min = Math.min.apply(Math, _toConsumableArray(inNumbers));
      var max = Math.max.apply(Math, _toConsumableArray(inNumbers));
      var interval = (max - min) / 3;
      var yArray = [String(min), String(min + interval), String(min + 2 * interval), String(max)];
      yArray = yArray.map(function (element) {
        if (element[element.length - 3] === '.') {
          return '$' + element;
        }
        if (element[element.length - 2] === '.') {
          return '$' + element + '0';
        };
        if (element.indexOf('.') !== -1) {
          return '$' + element.substring(0, element.indexOf('.') + 3);
        }
        return '$' + element + '.00';
      });
      if (this.state.control === false) {
        this.setState({ yRange: yArray, xDates: dates, control: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'earningsComponent' },
        _react2.default.createElement(
          'header',
          { className: 'earningsHead' },
          'Earnings'
        ),
        _react2.default.createElement(
          'div',
          { className: 'chartDiv' },
          _react2.default.createElement(
            'div',
            { className: 'chartContainer' },
            _react2.default.createElement(
              'div',
              { className: 'innerChartContainer' },
              _react2.default.createElement(
                'div',
                { className: 'axes' },
                _react2.default.createElement(_yAxis2.default, {
                  yRange: this.state.yRange
                }),
                _react2.default.createElement(_dataPoints2.default, {
                  estimate: this.props.estimatedEarnings,
                  actual: this.props.actualEarnings
                }),
                _react2.default.createElement(_xAxis2.default, {
                  dates: this.state.xDates
                })
              )
            )
          )
        ),
        _react2.default.createElement(_description2.default, {
          estimate: this.props.estimatedEarnings,
          actual: this.props.actualEarnings
        })
      );
    }
  }]);

  return Earnings;
}(_react.Component);

exports.default = Earnings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZWFybmluZ3MuanN4Il0sIm5hbWVzIjpbIkVhcm5pbmdzIiwicHJvcHMiLCJzdGF0ZSIsInlSYW5nZSIsInhEYXRlcyIsImNvbnRyb2wiLCJmaWx0ZXJlZCIsImVzdGltYXRlZEVhcm5pbmdzIiwiY29uY2F0IiwiYWN0dWFsRWFybmluZ3MiLCJmaWx0ZXIiLCJlbGVtZW50IiwiZGF0ZXMiLCJpbk51bWJlcnMiLCJtYXAiLCJOdW1iZXIiLCJzdWJzdHJpbmciLCJtaW4iLCJNYXRoIiwibWF4IiwiaW50ZXJ2YWwiLCJ5QXJyYXkiLCJTdHJpbmciLCJsZW5ndGgiLCJpbmRleE9mIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVMsRUFERTtBQUVYQyxjQUFTLEVBRkU7QUFHWEMsZUFBVTtBQUhDLEtBQWI7QUFGaUI7QUFPbEI7Ozs7eUNBRXFCO0FBQ3BCLFVBQUlDLFdBQVcsS0FBS0wsS0FBTCxDQUFXTSxpQkFBWCxDQUE2QkMsTUFBN0IsQ0FBb0MsS0FBS1AsS0FBTCxDQUFXUSxjQUEvQyxFQUErREMsTUFBL0QsQ0FBc0UsVUFBQ0MsT0FBRCxFQUFhO0FBQ2hHLGVBQU9BLFFBQVEsQ0FBUixNQUFlLEdBQXRCO0FBQ0QsT0FGYyxDQUFmO0FBR0EsVUFBSUMsUUFBUSxLQUFLWCxLQUFMLENBQVdNLGlCQUFYLENBQTZCRyxNQUE3QixDQUFvQyxVQUFDQyxPQUFELEVBQWE7QUFDM0QsZUFBT0EsUUFBUSxDQUFSLE1BQWUsR0FBdEI7QUFDRCxPQUZXLENBQVo7QUFHQSxVQUFJRSxZQUFZUCxTQUFTUSxHQUFULENBQWEsVUFBQ0gsT0FBRCxFQUFhO0FBQ3hDLGVBQU9JLE9BQU9KLFFBQVFLLFNBQVIsQ0FBa0IsQ0FBbEIsQ0FBUCxDQUFQO0FBQ0QsT0FGZSxDQUFoQjs7QUFJQSxVQUFJQyxNQUFNQyxLQUFLRCxHQUFMLGdDQUFZSixTQUFaLEVBQVY7QUFDQSxVQUFJTSxNQUFNRCxLQUFLQyxHQUFMLGdDQUFZTixTQUFaLEVBQVY7QUFDQSxVQUFJTyxXQUFXLENBQUNELE1BQU1GLEdBQVAsSUFBYyxDQUE3QjtBQUNBLFVBQUlJLFNBQVMsQ0FBQ0MsT0FBT0wsR0FBUCxDQUFELEVBQWNLLE9BQU9MLE1BQU1HLFFBQWIsQ0FBZCxFQUFzQ0UsT0FBT0wsTUFBTSxJQUFJRyxRQUFqQixDQUF0QyxFQUFrRUUsT0FBT0gsR0FBUCxDQUFsRSxDQUFiO0FBQ0FFLGVBQVNBLE9BQU9QLEdBQVAsQ0FBVyxVQUFDSCxPQUFELEVBQWE7QUFDL0IsWUFBR0EsUUFBUUEsUUFBUVksTUFBUixHQUFpQixDQUF6QixNQUFnQyxHQUFuQyxFQUF3QztBQUN0QyxpQkFBTyxNQUFNWixPQUFiO0FBQ0Q7QUFDRCxZQUFJQSxRQUFRQSxRQUFRWSxNQUFSLEdBQWlCLENBQXpCLE1BQWdDLEdBQXBDLEVBQXlDO0FBQ3ZDLGlCQUFPLE1BQU1aLE9BQU4sR0FBZ0IsR0FBdkI7QUFDRDtBQUNELFlBQUlBLFFBQVFhLE9BQVIsQ0FBZ0IsR0FBaEIsTUFBeUIsQ0FBQyxDQUE5QixFQUFpQztBQUMvQixpQkFBTyxNQUFNYixRQUFRSyxTQUFSLENBQWtCLENBQWxCLEVBQXFCTCxRQUFRYSxPQUFSLENBQWdCLEdBQWhCLElBQXVCLENBQTVDLENBQWI7QUFDRDtBQUNELGVBQU8sTUFBTWIsT0FBTixHQUFnQixLQUF2QjtBQUNELE9BWFEsQ0FBVDtBQVlBLFVBQUcsS0FBS1QsS0FBTCxDQUFXRyxPQUFYLEtBQXVCLEtBQTFCLEVBQWlDO0FBQy9CLGFBQUtvQixRQUFMLENBQWMsRUFBQ3RCLFFBQVNrQixNQUFWLEVBQWtCakIsUUFBU1EsS0FBM0IsRUFBa0NQLFNBQVUsSUFBNUMsRUFBZDtBQUNEO0FBQ0Y7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQVMsSUFBRyxtQkFBWjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsY0FBbEI7QUFBQTtBQUFBLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxNQUFmO0FBQ0UsOENBQUMsZUFBRDtBQUNFLDBCQUFRLEtBQUtILEtBQUwsQ0FBV0M7QUFEckIsa0JBREY7QUFJRSw4Q0FBQyxvQkFBRDtBQUNFLDRCQUFVLEtBQUtGLEtBQUwsQ0FBV00saUJBRHZCO0FBRUUsMEJBQVEsS0FBS04sS0FBTCxDQUFXUTtBQUZyQixrQkFKRjtBQVFFLDhDQUFDLGVBQUQ7QUFDRSx5QkFBTyxLQUFLUCxLQUFMLENBQVdFO0FBRHBCO0FBUkY7QUFERjtBQURGO0FBREYsU0FKRjtBQXNCRSxzQ0FBQyxxQkFBRDtBQUNFLG9CQUFVLEtBQUtILEtBQUwsQ0FBV00saUJBRHZCO0FBRUUsa0JBQVEsS0FBS04sS0FBTCxDQUFXUTtBQUZyQjtBQXRCRixPQURGO0FBNkJEOzs7O0VBeEVvQmlCLGdCOztrQkE2RVIxQixRIiwiZmlsZSI6ImVhcm5pbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBYQXhpcyBmcm9tICcuL3hBeGlzLmpzeCc7XG5pbXBvcnQgWUF4aXMgZnJvbSAnLi95QXhpcy5qc3gnO1xuaW1wb3J0IERhdGFQb2ludHMgZnJvbSAnLi9kYXRhUG9pbnRzLmpzeCdcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL2Rlc2NyaXB0aW9uLmpzeCdcblxuY2xhc3MgRWFybmluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgeVJhbmdlIDogW10sXG4gICAgICB4RGF0ZXMgOiBbXSxcbiAgICAgIGNvbnRyb2wgOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgbGV0IGZpbHRlcmVkID0gdGhpcy5wcm9wcy5lc3RpbWF0ZWRFYXJuaW5ncy5jb25jYXQodGhpcy5wcm9wcy5hY3R1YWxFYXJuaW5ncykuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudFswXSA9PT0gJyQnO1xuICAgIH0pO1xuICAgIGxldCBkYXRlcyA9IHRoaXMucHJvcHMuZXN0aW1hdGVkRWFybmluZ3MuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudFswXSAhPT0gJyQnO1xuICAgIH0pO1xuICAgIGxldCBpbk51bWJlcnMgPSBmaWx0ZXJlZC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBOdW1iZXIoZWxlbWVudC5zdWJzdHJpbmcoMSkpO1xuICAgIH0pO1xuXG4gICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLmluTnVtYmVycyk7XG4gICAgbGV0IG1heCA9IE1hdGgubWF4KC4uLmluTnVtYmVycyk7XG4gICAgbGV0IGludGVydmFsID0gKG1heCAtIG1pbikgLyAzO1xuICAgIGxldCB5QXJyYXkgPSBbU3RyaW5nKG1pbiksIFN0cmluZyhtaW4gKyBpbnRlcnZhbCksIFN0cmluZyhtaW4gKyAyICogaW50ZXJ2YWwpLCBTdHJpbmcobWF4KV07XG4gICAgeUFycmF5ID0geUFycmF5Lm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYoZWxlbWVudFtlbGVtZW50Lmxlbmd0aCAtIDNdID09PSAnLicpIHtcbiAgICAgICAgcmV0dXJuICckJyArIGVsZW1lbnQ7XG4gICAgICB9IFxuICAgICAgaWYgKGVsZW1lbnRbZWxlbWVudC5sZW5ndGggLSAyXSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiAnJCcgKyBlbGVtZW50ICsgJzAnO1xuICAgICAgfTtcbiAgICAgIGlmIChlbGVtZW50LmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICckJyArIGVsZW1lbnQuc3Vic3RyaW5nKDAsIGVsZW1lbnQuaW5kZXhPZignLicpICsgMyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyQnICsgZWxlbWVudCArICcuMDAnXG4gICAgfSk7XG4gICAgaWYodGhpcy5zdGF0ZS5jb250cm9sID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7eVJhbmdlIDogeUFycmF5LCB4RGF0ZXMgOiBkYXRlcywgY29udHJvbCA6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBpZD1cImVhcm5pbmdzQ29tcG9uZW50XCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZWFybmluZ3NIZWFkXCI+XG4gICAgICAgIEVhcm5pbmdzXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0RGl2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckNoYXJ0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXhlc1wiPlxuICAgICAgICAgICAgICAgIDxZQXhpcyBcbiAgICAgICAgICAgICAgICAgIHlSYW5nZT17dGhpcy5zdGF0ZS55UmFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGF0YVBvaW50cyBcbiAgICAgICAgICAgICAgICAgIGVzdGltYXRlPXt0aGlzLnByb3BzLmVzdGltYXRlZEVhcm5pbmdzfVxuICAgICAgICAgICAgICAgICAgYWN0dWFsPXt0aGlzLnByb3BzLmFjdHVhbEVhcm5pbmdzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFhBeGlzIFxuICAgICAgICAgICAgICAgICAgZGF0ZXM9e3RoaXMuc3RhdGUueERhdGVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RGVzY3JpcHRpb24gXG4gICAgICAgICAgZXN0aW1hdGU9e3RoaXMucHJvcHMuZXN0aW1hdGVkRWFybmluZ3N9XG4gICAgICAgICAgYWN0dWFsPXt0aGlzLnByb3BzLmFjdHVhbEVhcm5pbmdzfVxuICAgICAgICAvPiBcbiAgICAgIDwvc2VjdGlvbj5cbiAgICApIFxuICB9XG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVhcm5pbmdzOyJdfQ==