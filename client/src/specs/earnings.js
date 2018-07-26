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
      control: false
    };
    return _this;
  }

  _createClass(Earnings, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log(this.props);
      var filtered = this.props.estimatedEarnings.concat(this.props.actualEarnings).filter(function (element) {
        return element[0] === '$';
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
        this.setState({ yRange: yArray, control: true });
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
                  estimate: this.props.estimatedEarnings,
                  actual: this.props.actualEarnings
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZWFybmluZ3MuanN4Il0sIm5hbWVzIjpbIkVhcm5pbmdzIiwicHJvcHMiLCJzdGF0ZSIsInlSYW5nZSIsImNvbnRyb2wiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWQiLCJlc3RpbWF0ZWRFYXJuaW5ncyIsImNvbmNhdCIsImFjdHVhbEVhcm5pbmdzIiwiZmlsdGVyIiwiZWxlbWVudCIsImluTnVtYmVycyIsIm1hcCIsIk51bWJlciIsInN1YnN0cmluZyIsIm1pbiIsIk1hdGgiLCJtYXgiLCJpbnRlcnZhbCIsInlBcnJheSIsIlN0cmluZyIsImxlbmd0aCIsImluZGV4T2YiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUyxFQURFO0FBRVhDLGVBQVU7QUFGQyxLQUFiO0FBRmlCO0FBTWxCOzs7O3lDQUVxQjtBQUNwQkMsY0FBUUMsR0FBUixDQUFZLEtBQUtMLEtBQWpCO0FBQ0EsVUFBSU0sV0FBVyxLQUFLTixLQUFMLENBQVdPLGlCQUFYLENBQTZCQyxNQUE3QixDQUFvQyxLQUFLUixLQUFMLENBQVdTLGNBQS9DLEVBQStEQyxNQUEvRCxDQUFzRSxVQUFDQyxPQUFELEVBQWE7QUFDaEcsZUFBT0EsUUFBUSxDQUFSLE1BQWUsR0FBdEI7QUFDRCxPQUZjLENBQWY7QUFHQSxVQUFJQyxZQUFZTixTQUFTTyxHQUFULENBQWEsVUFBQ0YsT0FBRCxFQUFhO0FBQ3hDLGVBQU9HLE9BQU9ILFFBQVFJLFNBQVIsQ0FBa0IsQ0FBbEIsQ0FBUCxDQUFQO0FBQ0QsT0FGZSxDQUFoQjs7QUFJQSxVQUFJQyxNQUFNQyxLQUFLRCxHQUFMLGdDQUFZSixTQUFaLEVBQVY7QUFDQSxVQUFJTSxNQUFNRCxLQUFLQyxHQUFMLGdDQUFZTixTQUFaLEVBQVY7QUFDQSxVQUFJTyxXQUFXLENBQUNELE1BQU1GLEdBQVAsSUFBYyxDQUE3QjtBQUNBLFVBQUlJLFNBQVMsQ0FBQ0MsT0FBT0wsR0FBUCxDQUFELEVBQWNLLE9BQU9MLE1BQU1HLFFBQWIsQ0FBZCxFQUFzQ0UsT0FBT0wsTUFBTSxJQUFJRyxRQUFqQixDQUF0QyxFQUFrRUUsT0FBT0gsR0FBUCxDQUFsRSxDQUFiO0FBQ0FFLGVBQVNBLE9BQU9QLEdBQVAsQ0FBVyxVQUFDRixPQUFELEVBQWE7QUFDL0IsWUFBR0EsUUFBUUEsUUFBUVcsTUFBUixHQUFpQixDQUF6QixNQUFnQyxHQUFuQyxFQUF3QztBQUN0QyxpQkFBTyxNQUFNWCxPQUFiO0FBQ0Q7QUFDRCxZQUFJQSxRQUFRQSxRQUFRVyxNQUFSLEdBQWlCLENBQXpCLE1BQWdDLEdBQXBDLEVBQXlDO0FBQ3ZDLGlCQUFPLE1BQU1YLE9BQU4sR0FBZ0IsR0FBdkI7QUFDRDtBQUNELFlBQUlBLFFBQVFZLE9BQVIsQ0FBZ0IsR0FBaEIsTUFBeUIsQ0FBQyxDQUE5QixFQUFpQztBQUMvQixpQkFBTyxNQUFNWixRQUFRSSxTQUFSLENBQWtCLENBQWxCLEVBQXFCSixRQUFRWSxPQUFSLENBQWdCLEdBQWhCLElBQXVCLENBQTVDLENBQWI7QUFDRDtBQUNELGVBQU8sTUFBTVosT0FBTixHQUFnQixLQUF2QjtBQUNELE9BWFEsQ0FBVDtBQVlBLFVBQUcsS0FBS1YsS0FBTCxDQUFXRSxPQUFYLEtBQXVCLEtBQTFCLEVBQWlDO0FBQy9CLGFBQUtxQixRQUFMLENBQWMsRUFBQ3RCLFFBQVNrQixNQUFWLEVBQWtCakIsU0FBVSxJQUE1QixFQUFkO0FBQ0Q7QUFDRjs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBUyxJQUFHLG1CQUFaO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxjQUFsQjtBQUFBO0FBQUEsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE1BQWY7QUFDRSw4Q0FBQyxlQUFEO0FBQ0UsMEJBQVEsS0FBS0YsS0FBTCxDQUFXQztBQURyQixrQkFERjtBQUlFLDhDQUFDLG9CQUFEO0FBQ0UsNEJBQVUsS0FBS0YsS0FBTCxDQUFXTyxpQkFEdkI7QUFFRSwwQkFBUSxLQUFLUCxLQUFMLENBQVdTO0FBRnJCLGtCQUpGO0FBUUUsOENBQUMsZUFBRDtBQUNFLDRCQUFVLEtBQUtULEtBQUwsQ0FBV08saUJBRHZCO0FBRUUsMEJBQVEsS0FBS1AsS0FBTCxDQUFXUztBQUZyQjtBQVJGO0FBREY7QUFERjtBQURGLFNBSkY7QUF1QkUsc0NBQUMscUJBQUQ7QUFDRSxvQkFBVSxLQUFLVCxLQUFMLENBQVdPLGlCQUR2QjtBQUVFLGtCQUFRLEtBQUtQLEtBQUwsQ0FBV1M7QUFGckI7QUF2QkYsT0FERjtBQThCRDs7OztFQXRFb0JnQixnQjs7a0JBMkVSMUIsUSIsImZpbGUiOiJlYXJuaW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWEF4aXMgZnJvbSAnLi94QXhpcy5qc3gnO1xuaW1wb3J0IFlBeGlzIGZyb20gJy4veUF4aXMuanN4JztcbmltcG9ydCBEYXRhUG9pbnRzIGZyb20gJy4vZGF0YVBvaW50cy5qc3gnXG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi9kZXNjcmlwdGlvbi5qc3gnXG5cbmNsYXNzIEVhcm5pbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHlSYW5nZSA6IFtdLFxuICAgICAgY29udHJvbCA6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgIGxldCBmaWx0ZXJlZCA9IHRoaXMucHJvcHMuZXN0aW1hdGVkRWFybmluZ3MuY29uY2F0KHRoaXMucHJvcHMuYWN0dWFsRWFybmluZ3MpLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnRbMF0gPT09ICckJztcbiAgICB9KTtcbiAgICBsZXQgaW5OdW1iZXJzID0gZmlsdGVyZWQubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gTnVtYmVyKGVsZW1lbnQuc3Vic3RyaW5nKDEpKTtcbiAgICB9KTtcblxuICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi5pbk51bWJlcnMpO1xuICAgIGxldCBtYXggPSBNYXRoLm1heCguLi5pbk51bWJlcnMpO1xuICAgIGxldCBpbnRlcnZhbCA9IChtYXggLSBtaW4pIC8gMztcbiAgICBsZXQgeUFycmF5ID0gW1N0cmluZyhtaW4pLCBTdHJpbmcobWluICsgaW50ZXJ2YWwpLCBTdHJpbmcobWluICsgMiAqIGludGVydmFsKSwgU3RyaW5nKG1heCldO1xuICAgIHlBcnJheSA9IHlBcnJheS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmKGVsZW1lbnRbZWxlbWVudC5sZW5ndGggLSAzXSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiAnJCcgKyBlbGVtZW50O1xuICAgICAgfSBcbiAgICAgIGlmIChlbGVtZW50W2VsZW1lbnQubGVuZ3RoIC0gMl0gPT09ICcuJykge1xuICAgICAgICByZXR1cm4gJyQnICsgZWxlbWVudCArICcwJztcbiAgICAgIH07XG4gICAgICBpZiAoZWxlbWVudC5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnJCcgKyBlbGVtZW50LnN1YnN0cmluZygwLCBlbGVtZW50LmluZGV4T2YoJy4nKSArIDMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICckJyArIGVsZW1lbnQgKyAnLjAwJ1xuICAgIH0pO1xuICAgIGlmKHRoaXMuc3RhdGUuY29udHJvbCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3lSYW5nZSA6IHlBcnJheSwgY29udHJvbCA6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBpZD1cImVhcm5pbmdzQ29tcG9uZW50XCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZWFybmluZ3NIZWFkXCI+XG4gICAgICAgIEVhcm5pbmdzXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0RGl2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckNoYXJ0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXhlc1wiPlxuICAgICAgICAgICAgICAgIDxZQXhpcyBcbiAgICAgICAgICAgICAgICAgIHlSYW5nZT17dGhpcy5zdGF0ZS55UmFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGF0YVBvaW50cyBcbiAgICAgICAgICAgICAgICAgIGVzdGltYXRlPXt0aGlzLnByb3BzLmVzdGltYXRlZEVhcm5pbmdzfVxuICAgICAgICAgICAgICAgICAgYWN0dWFsPXt0aGlzLnByb3BzLmFjdHVhbEVhcm5pbmdzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFhBeGlzIFxuICAgICAgICAgICAgICAgICAgZXN0aW1hdGU9e3RoaXMucHJvcHMuZXN0aW1hdGVkRWFybmluZ3N9XG4gICAgICAgICAgICAgICAgICBhY3R1YWw9e3RoaXMucHJvcHMuYWN0dWFsRWFybmluZ3N9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEZXNjcmlwdGlvbiBcbiAgICAgICAgICBlc3RpbWF0ZT17dGhpcy5wcm9wcy5lc3RpbWF0ZWRFYXJuaW5nc31cbiAgICAgICAgICBhY3R1YWw9e3RoaXMucHJvcHMuYWN0dWFsRWFybmluZ3N9XG4gICAgICAgIC8+IFxuICAgICAgPC9zZWN0aW9uPlxuICAgICkgXG4gIH1cblxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWFybmluZ3M7Il19