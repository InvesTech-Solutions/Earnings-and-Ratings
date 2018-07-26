'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _yAxisTick = require('./yAxisTick.jsx');

var _yAxisTick2 = _interopRequireDefault(_yAxisTick);

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
    value: function componentDidUpdate() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ylabel' },
        this.props.yRange.map(function (yTick, index) {
          return _react2.default.createElement(_yAxisTick2.default, {
            yValue: yTick,
            ind: index + 1
          });
        })
      );
    }
  }]);

  return YAxis;
}(_react.Component);

exports.default = YAxis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMveUF4aXMuanN4Il0sIm5hbWVzIjpbIllBeGlzIiwicHJvcHMiLCJzdGF0ZSIsInlSYW5nZSIsIm1hcCIsInlUaWNrIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVxQixDQUVyQjs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDRyxhQUFLRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFnQjtBQUNyQyxpQkFDRSw4QkFBQyxtQkFBRDtBQUNFLG9CQUFRRCxLQURWO0FBRUUsaUJBQUtDLFFBQVE7QUFGZixZQURGO0FBTUQsU0FQQTtBQURILE9BREY7QUFZRDs7OztFQXpCaUJDLGdCOztrQkE0QkxQLEsiLCJmaWxlIjoieUF4aXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFlBeGlzVGljayBmcm9tICcuL3lBeGlzVGljay5qc3gnO1xuXG5jbGFzcyBZQXhpcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInlsYWJlbFwiPlxuICAgICAgICB7dGhpcy5wcm9wcy55UmFuZ2UubWFwKCh5VGljaywgaW5kZXgpPT57XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxZQXhpc1RpY2sgXG4gICAgICAgICAgICAgIHlWYWx1ZT17eVRpY2t9XG4gICAgICAgICAgICAgIGluZD17aW5kZXggKyAxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWUF4aXM7Il19