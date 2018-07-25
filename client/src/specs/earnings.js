'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Earnings = function (_Component) {
  _inherits(Earnings, _Component);

  function Earnings(props) {
    _classCallCheck(this, Earnings);

    var _this = _possibleConstructorReturn(this, (Earnings.__proto__ || Object.getPrototypeOf(Earnings)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Earnings, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('dfdfdf');
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
                _react2.default.createElement(
                  'div',
                  { className: 'ylabel' },
                  _react2.default.createElement(
                    'span',
                    { className: 'y-1' },
                    _react2.default.createElement(
                      'div',
                      { className: 'y1' },
                      '$1.00'
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'y-2' },
                    _react2.default.createElement(
                      'div',
                      { className: 'y2' },
                      '$2.00'
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'y-3' },
                    _react2.default.createElement(
                      'div',
                      { className: 'y3' },
                      '$3.00'
                    )
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'y-4' },
                    _react2.default.createElement(
                      'div',
                      { className: 'y4' },
                      '$4.00'
                    )
                  )
                ),
                _react2.default.createElement(
                  'svg',
                  { className: 'xs', width: '560', height: '120' },
                  _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement(
                      'g',
                      { transform: 'translate(0, 58.536585)' },
                      _react2.default.createElement('circle', { r: '7', className: 'circle' })
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'xlabel' },
                  _react2.default.createElement(
                    'span',
                    { className: 'x-1' },
                    _react2.default.createElement(
                      'div',
                      { className: 'x1' },
                      'Q4 2016'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement('div', { classame: 'descDiv' })
      );
    }
  }]);

  return Earnings;
}(_react.Component);

exports.default = Earnings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZWFybmluZ3MuanN4Il0sIm5hbWVzIjpbIkVhcm5pbmdzIiwicHJvcHMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUdNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFcUI7QUFDcEJDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQVMsSUFBRyxtQkFBWjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsY0FBbEI7QUFBQTtBQUFBLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLHdCQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUE7QUFERixtQkFERjtBQUlFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLHdCQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUE7QUFERixtQkFKRjtBQU9FO0FBQUE7QUFBQSxzQkFBTSxXQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLHdCQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUE7QUFERixtQkFQRjtBQVVFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLHdCQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUE7QUFERjtBQVZGLGlCQURGO0FBZUU7QUFBQTtBQUFBLG9CQUFLLFdBQVUsSUFBZixFQUFvQixPQUFNLEtBQTFCLEVBQWdDLFFBQU8sS0FBdkM7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsd0JBQUcsV0FBVSx5QkFBYjtBQUNFLGdFQUFRLEdBQUUsR0FBVixFQUFjLFdBQVUsUUFBeEI7QUFERjtBQURGO0FBREYsaUJBZkY7QUFzQkU7QUFBQTtBQUFBLG9CQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBTSxXQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLHdCQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUE7QUFERjtBQURGO0FBdEJGO0FBREY7QUFERjtBQURGLFNBSkY7QUF5Q0UsK0NBQUssVUFBUyxTQUFkO0FBekNGLE9BREY7QUE4Q0Q7Ozs7RUEzRG9CQyxnQjs7a0JBZ0VSTCxRIiwiZmlsZSI6ImVhcm5pbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBFYXJuaW5ncyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIGNvbnNvbGUubG9nKCdkZmRmZGYnKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gaWQ9XCJlYXJuaW5nc0NvbXBvbmVudFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImVhcm5pbmdzSGVhZFwiPlxuICAgICAgICBFYXJuaW5nc1xuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydERpdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJDaGFydENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF4ZXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInlsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwieS0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieTFcIj4kMS4wMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwieS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieTJcIj4kMi4wMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwieS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieTNcIj4kMy4wMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwieS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieTRcIj4kNC4wMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwieHNcIiB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjEyMFwiPlxuICAgICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLCA1OC41MzY1ODUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSByPVwiN1wiIGNsYXNzTmFtZT1cImNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwieC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICBRNCAyMDE2XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzYW1lPVwiZGVzY0RpdlwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApIFxuICB9XG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVhcm5pbmdzOyJdfQ==