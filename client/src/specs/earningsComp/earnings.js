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
      // process data to create arrays used for y-axis (min to max, length of 4) and x-axis (quarterlies)
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
      // set a controller to prevent infinite looping of setState
      if (this.state.control === false) {
        this.setState({ yRange: yArray, xDates: dates, control: true });
      }
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

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
                  actual: this.props.actualEarnings,
                  yRange: this.state.yRange
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2Vhcm5pbmdzLmpzeCJdLCJuYW1lcyI6WyJFYXJuaW5ncyIsInByb3BzIiwic3RhdGUiLCJ5UmFuZ2UiLCJ4RGF0ZXMiLCJjb250cm9sIiwiZmlsdGVyZWQiLCJlc3RpbWF0ZWRFYXJuaW5ncyIsImNvbmNhdCIsImFjdHVhbEVhcm5pbmdzIiwiZmlsdGVyIiwiZWxlbWVudCIsImRhdGVzIiwiaW5OdW1iZXJzIiwibWFwIiwiTnVtYmVyIiwic3Vic3RyaW5nIiwibWluIiwiTWF0aCIsIm1heCIsImludGVydmFsIiwieUFycmF5IiwiU3RyaW5nIiwibGVuZ3RoIiwiaW5kZXhPZiIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFTLEVBREU7QUFFWEMsY0FBUyxFQUZFO0FBR1hDLGVBQVU7QUFIQyxLQUFiO0FBRmlCO0FBT2xCOzs7O3lDQUVxQjtBQUNwQjtBQUNBLFVBQUlDLFdBQVcsS0FBS0wsS0FBTCxDQUFXTSxpQkFBWCxDQUE2QkMsTUFBN0IsQ0FBb0MsS0FBS1AsS0FBTCxDQUFXUSxjQUEvQyxFQUErREMsTUFBL0QsQ0FBc0UsVUFBQ0MsT0FBRCxFQUFhO0FBQ2hHLGVBQU9BLFFBQVEsQ0FBUixNQUFlLEdBQXRCO0FBQ0QsT0FGYyxDQUFmO0FBR0EsVUFBSUMsUUFBUSxLQUFLWCxLQUFMLENBQVdNLGlCQUFYLENBQTZCRyxNQUE3QixDQUFvQyxVQUFDQyxPQUFELEVBQWE7QUFDM0QsZUFBT0EsUUFBUSxDQUFSLE1BQWUsR0FBdEI7QUFDRCxPQUZXLENBQVo7QUFHQSxVQUFJRSxZQUFZUCxTQUFTUSxHQUFULENBQWEsVUFBQ0gsT0FBRCxFQUFhO0FBQ3hDLGVBQU9JLE9BQU9KLFFBQVFLLFNBQVIsQ0FBa0IsQ0FBbEIsQ0FBUCxDQUFQO0FBQ0QsT0FGZSxDQUFoQjtBQUdBLFVBQUlDLE1BQU1DLEtBQUtELEdBQUwsZ0NBQVlKLFNBQVosRUFBVjtBQUNBLFVBQUlNLE1BQU1ELEtBQUtDLEdBQUwsZ0NBQVlOLFNBQVosRUFBVjtBQUNBLFVBQUlPLFdBQVcsQ0FBQ0QsTUFBTUYsR0FBUCxJQUFjLENBQTdCO0FBQ0EsVUFBSUksU0FBUyxDQUFDQyxPQUFPTCxHQUFQLENBQUQsRUFBY0ssT0FBT0wsTUFBTUcsUUFBYixDQUFkLEVBQXNDRSxPQUFPTCxNQUFNLElBQUlHLFFBQWpCLENBQXRDLEVBQWtFRSxPQUFPSCxHQUFQLENBQWxFLENBQWI7QUFDQUUsZUFBU0EsT0FBT1AsR0FBUCxDQUFXLFVBQUNILE9BQUQsRUFBYTtBQUMvQixZQUFHQSxRQUFRQSxRQUFRWSxNQUFSLEdBQWlCLENBQXpCLE1BQWdDLEdBQW5DLEVBQXdDO0FBQ3RDLGlCQUFPLE1BQU1aLE9BQWI7QUFDRDtBQUNELFlBQUlBLFFBQVFBLFFBQVFZLE1BQVIsR0FBaUIsQ0FBekIsTUFBZ0MsR0FBcEMsRUFBeUM7QUFDdkMsaUJBQU8sTUFBTVosT0FBTixHQUFnQixHQUF2QjtBQUNEO0FBQ0QsWUFBSUEsUUFBUWEsT0FBUixDQUFnQixHQUFoQixNQUF5QixDQUFDLENBQTlCLEVBQWlDO0FBQy9CLGlCQUFPLE1BQU1iLFFBQVFLLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJMLFFBQVFhLE9BQVIsQ0FBZ0IsR0FBaEIsSUFBdUIsQ0FBNUMsQ0FBYjtBQUNEO0FBQ0QsZUFBTyxNQUFNYixPQUFOLEdBQWdCLEtBQXZCO0FBQ0QsT0FYUSxDQUFUO0FBWUE7QUFDQSxVQUFHLEtBQUtULEtBQUwsQ0FBV0csT0FBWCxLQUF1QixLQUExQixFQUFpQztBQUMvQixhQUFLb0IsUUFBTCxDQUFjLEVBQUN0QixRQUFTa0IsTUFBVixFQUFrQmpCLFFBQVNRLEtBQTNCLEVBQWtDUCxTQUFVLElBQTVDLEVBQWQ7QUFDRDtBQUNGOztBQUVEOzs7OzZCQUNVO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBUyxJQUFHLG1CQUFaO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxjQUFsQjtBQUFBO0FBQUEsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE1BQWY7QUFDRSw4Q0FBQyxlQUFEO0FBQ0UsMEJBQVEsS0FBS0gsS0FBTCxDQUFXQztBQURyQixrQkFERjtBQUlFLDhDQUFDLG9CQUFEO0FBQ0UsNEJBQVUsS0FBS0YsS0FBTCxDQUFXTSxpQkFEdkI7QUFFRSwwQkFBUSxLQUFLTixLQUFMLENBQVdRLGNBRnJCO0FBR0UsMEJBQVEsS0FBS1AsS0FBTCxDQUFXQztBQUhyQixrQkFKRjtBQVNFLDhDQUFDLGVBQUQ7QUFDRSx5QkFBTyxLQUFLRCxLQUFMLENBQVdFO0FBRHBCO0FBVEY7QUFERjtBQURGO0FBREYsU0FKRjtBQXVCRSxzQ0FBQyxxQkFBRDtBQUNFLG9CQUFVLEtBQUtILEtBQUwsQ0FBV00saUJBRHZCO0FBRUUsa0JBQVEsS0FBS04sS0FBTCxDQUFXUTtBQUZyQjtBQXZCRixPQURGO0FBOEJEOzs7O0VBM0VvQmlCLGdCOztrQkFnRlIxQixRIiwiZmlsZSI6ImVhcm5pbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBYQXhpcyBmcm9tICcuL3hBeGlzLmpzeCc7XG5pbXBvcnQgWUF4aXMgZnJvbSAnLi95QXhpcy5qc3gnO1xuaW1wb3J0IERhdGFQb2ludHMgZnJvbSAnLi9kYXRhUG9pbnRzLmpzeCdcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL2Rlc2NyaXB0aW9uLmpzeCdcblxuY2xhc3MgRWFybmluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgeVJhbmdlIDogW10sXG4gICAgICB4RGF0ZXMgOiBbXSxcbiAgICAgIGNvbnRyb2wgOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgLy8gcHJvY2VzcyBkYXRhIHRvIGNyZWF0ZSBhcnJheXMgdXNlZCBmb3IgeS1heGlzIChtaW4gdG8gbWF4LCBsZW5ndGggb2YgNCkgYW5kIHgtYXhpcyAocXVhcnRlcmxpZXMpXG4gICAgbGV0IGZpbHRlcmVkID0gdGhpcy5wcm9wcy5lc3RpbWF0ZWRFYXJuaW5ncy5jb25jYXQodGhpcy5wcm9wcy5hY3R1YWxFYXJuaW5ncykuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudFswXSA9PT0gJyQnO1xuICAgIH0pO1xuICAgIGxldCBkYXRlcyA9IHRoaXMucHJvcHMuZXN0aW1hdGVkRWFybmluZ3MuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudFswXSAhPT0gJyQnO1xuICAgIH0pO1xuICAgIGxldCBpbk51bWJlcnMgPSBmaWx0ZXJlZC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBOdW1iZXIoZWxlbWVudC5zdWJzdHJpbmcoMSkpO1xuICAgIH0pO1xuICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi5pbk51bWJlcnMpO1xuICAgIGxldCBtYXggPSBNYXRoLm1heCguLi5pbk51bWJlcnMpO1xuICAgIGxldCBpbnRlcnZhbCA9IChtYXggLSBtaW4pIC8gMztcbiAgICBsZXQgeUFycmF5ID0gW1N0cmluZyhtaW4pLCBTdHJpbmcobWluICsgaW50ZXJ2YWwpLCBTdHJpbmcobWluICsgMiAqIGludGVydmFsKSwgU3RyaW5nKG1heCldO1xuICAgIHlBcnJheSA9IHlBcnJheS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmKGVsZW1lbnRbZWxlbWVudC5sZW5ndGggLSAzXSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiAnJCcgKyBlbGVtZW50O1xuICAgICAgfSBcbiAgICAgIGlmIChlbGVtZW50W2VsZW1lbnQubGVuZ3RoIC0gMl0gPT09ICcuJykge1xuICAgICAgICByZXR1cm4gJyQnICsgZWxlbWVudCArICcwJztcbiAgICAgIH07XG4gICAgICBpZiAoZWxlbWVudC5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnJCcgKyBlbGVtZW50LnN1YnN0cmluZygwLCBlbGVtZW50LmluZGV4T2YoJy4nKSArIDMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICckJyArIGVsZW1lbnQgKyAnLjAwJ1xuICAgIH0pO1xuICAgIC8vIHNldCBhIGNvbnRyb2xsZXIgdG8gcHJldmVudCBpbmZpbml0ZSBsb29waW5nIG9mIHNldFN0YXRlXG4gICAgaWYodGhpcy5zdGF0ZS5jb250cm9sID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7eVJhbmdlIDogeUFycmF5LCB4RGF0ZXMgOiBkYXRlcywgY29udHJvbCA6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICAvLyByZW5kZXJzIGVudGlyZSBlYXJuaW5ncyBzZWN0aW9uIHdpdGggWUF4aXMsIERhdGFQb2ludHMsIFhBeGlzLCBhbmQgRGVzY3JpcHRpb25zIGFzIHN1YmNvbXBvbmVudHNcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gaWQ9XCJlYXJuaW5nc0NvbXBvbmVudFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImVhcm5pbmdzSGVhZFwiPlxuICAgICAgICBFYXJuaW5nc1xuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydERpdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJDaGFydENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF4ZXNcIj5cbiAgICAgICAgICAgICAgICA8WUF4aXMgXG4gICAgICAgICAgICAgICAgICB5UmFuZ2U9e3RoaXMuc3RhdGUueVJhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERhdGFQb2ludHMgXG4gICAgICAgICAgICAgICAgICBlc3RpbWF0ZT17dGhpcy5wcm9wcy5lc3RpbWF0ZWRFYXJuaW5nc31cbiAgICAgICAgICAgICAgICAgIGFjdHVhbD17dGhpcy5wcm9wcy5hY3R1YWxFYXJuaW5nc31cbiAgICAgICAgICAgICAgICAgIHlSYW5nZT17dGhpcy5zdGF0ZS55UmFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8WEF4aXMgXG4gICAgICAgICAgICAgICAgICBkYXRlcz17dGhpcy5zdGF0ZS54RGF0ZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEZXNjcmlwdGlvbiBcbiAgICAgICAgICBlc3RpbWF0ZT17dGhpcy5wcm9wcy5lc3RpbWF0ZWRFYXJuaW5nc31cbiAgICAgICAgICBhY3R1YWw9e3RoaXMucHJvcHMuYWN0dWFsRWFybmluZ3N9XG4gICAgICAgIC8+IFxuICAgICAgPC9zZWN0aW9uPlxuICAgICkgXG4gIH1cblxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWFybmluZ3M7Il19