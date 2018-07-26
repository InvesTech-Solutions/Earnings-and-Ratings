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

var YAxis = function (_Component) {
  _inherits(YAxis, _Component);

  function YAxis(props) {
    _classCallCheck(this, YAxis);

    var _this = _possibleConstructorReturn(this, (YAxis.__proto__ || Object.getPrototypeOf(YAxis)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(YAxis, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('y connected');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
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
      );
    }
  }]);

  return YAxis;
}(_react.Component);

exports.default = YAxis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMveUF4aXMuanN4Il0sIm5hbWVzIjpbIllBeGlzIiwicHJvcHMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUdNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFcUI7QUFDcEJDLGNBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxLQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUE7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQU0sV0FBVSxLQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUE7QUFERixTQUpGO0FBT0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxLQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUE7QUFERixTQVBGO0FBVUU7QUFBQTtBQUFBLFlBQU0sV0FBVSxLQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUE7QUFERjtBQVZGLE9BREY7QUFnQkQ7Ozs7RUE3QmlCQyxnQjs7a0JBa0NMTCxLIiwiZmlsZSI6InlBeGlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBZQXhpcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIGNvbnNvbGUubG9nKCd5IGNvbm5lY3RlZCcpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInlsYWJlbFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ5LTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInkxXCI+JDEuMDA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ5LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInkyXCI+JDIuMDA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ5LTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInkzXCI+JDMuMDA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ5LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInk0XCI+JDQuMDA8L2Rpdj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKSBcbiAgfVxuXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBZQXhpczsiXX0=