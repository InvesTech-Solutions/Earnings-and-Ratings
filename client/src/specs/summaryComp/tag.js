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

var Tag = function (_Component) {
  _inherits(Tag, _Component);

  function Tag(props) {
    _classCallCheck(this, Tag);

    var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

    _this.state = {
      percent: '',
      total: '',
      trigger: false
    };
    return _this;
  }

  _createClass(Tag, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ trigger: false });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var total = this.props.total;
      var percent = this.props.percent;
      if (this.state.trigger === false && total !== null && percent !== null) {
        this.setState({ percent: percent + '%', total: 'of ' + total + ' ratings', trigger: true });
      }
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'tagContainer' },
        _react2.default.createElement(
          'div',
          { id: 'tagCircle', className: 'circleBase' },
          _react2.default.createElement(
            'h2',
            { className: 'tagContentHead' },
            _react2.default.createElement(
              'svg',
              { width: '20', height: '20', viewBox: '0 0 20 20', id: 'tagSvg' },
              _react2.default.createElement(
                'g',
                { fill: '#4fc189', 'fill-rule': 'evenodd', transform: 'translate(-4 -4)' },
                _react2.default.createElement('path', { id: 'tag-a', d: 'M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4' })
              )
            ),
            '\u2009',
            this.state.percent
          ),
          _react2.default.createElement(
            'p',
            { className: 'tagContentPara' },
            this.state.total
          )
        )
      );
    }
  }]);

  return Tag;
}(_react.Component);

exports.default = Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvdGFnLmpzeCJdLCJuYW1lcyI6WyJUYWciLCJwcm9wcyIsInN0YXRlIiwicGVyY2VudCIsInRvdGFsIiwidHJpZ2dlciIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxFQURFO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxlQUFTO0FBSEUsS0FBYjtBQUZpQjtBQU9sQjs7Ozt3Q0FFb0I7QUFDbkIsV0FBS0MsUUFBTCxDQUFjLEVBQUVELFNBQVMsS0FBWCxFQUFkO0FBQ0Q7Ozt5Q0FFcUI7QUFDcEIsVUFBSUQsUUFBUSxLQUFLSCxLQUFMLENBQVdHLEtBQXZCO0FBQ0EsVUFBSUQsVUFBVSxLQUFLRixLQUFMLENBQVdFLE9BQXpCO0FBQ0EsVUFBSSxLQUFLRCxLQUFMLENBQVdHLE9BQVgsS0FBdUIsS0FBdkIsSUFBZ0NELFVBQVUsSUFBMUMsSUFBa0RELFlBQVksSUFBbEUsRUFBd0U7QUFDdEUsYUFBS0csUUFBTCxDQUFjLEVBQUVILFNBQVVBLFVBQVUsR0FBdEIsRUFBMkJDLGVBQWNBLEtBQWQsYUFBM0IsRUFBMERDLFNBQVMsSUFBbkUsRUFBZDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsY0FBUjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUixFQUFvQixXQUFVLFlBQTlCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxPQUFNLElBQVgsRUFBZ0IsUUFBTyxJQUF2QixFQUE0QixTQUFRLFdBQXBDLEVBQWdELElBQUcsUUFBbkQ7QUFDRTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxTQUFSLEVBQWtCLGFBQVUsU0FBNUIsRUFBc0MsV0FBVSxrQkFBaEQ7QUFDRSx3REFBTSxJQUFHLE9BQVQsRUFBaUIsR0FBRSwwZEFBbkI7QUFERjtBQURGLGFBREY7QUFBQTtBQU9HLGlCQUFLSCxLQUFMLENBQVdDO0FBUGQsV0FERjtBQVVFO0FBQUE7QUFBQSxjQUFHLFdBQVUsZ0JBQWI7QUFDRyxpQkFBS0QsS0FBTCxDQUFXRTtBQURkO0FBVkY7QUFERixPQURGO0FBa0JEOzs7O0VBMUNlRyxnQjs7a0JBNkNIUCxHIiwiZmlsZSI6InRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFRhZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwZXJjZW50OiAnJyxcbiAgICAgIHRvdGFsOiAnJyxcbiAgICAgIHRyaWdnZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdHJpZ2dlcjogZmFsc2UgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgbGV0IHRvdGFsID0gdGhpcy5wcm9wcy50b3RhbDtcbiAgICBsZXQgcGVyY2VudCA9IHRoaXMucHJvcHMucGVyY2VudDtcbiAgICBpZiAodGhpcy5zdGF0ZS50cmlnZ2VyID09PSBmYWxzZSAmJiB0b3RhbCAhPT0gbnVsbCAmJiBwZXJjZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGVyY2VudCA6IHBlcmNlbnQgKyAnJScsIHRvdGFsIDogYG9mICR7dG90YWx9IHJhdGluZ3NgLCB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbmRlcnMgZW50aXJlIGVhcm5pbmdzIHNlY3Rpb24gd2l0aCBZQXhpcywgRGF0YVBvaW50cywgWEF4aXMsIGFuZCBEZXNjcmlwdGlvbnMgYXMgc3ViY29tcG9uZW50c1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwidGFnQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJ0YWdDaXJjbGVcIiBjbGFzc05hbWU9XCJjaXJjbGVCYXNlXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRhZ0NvbnRlbnRIZWFkXCI+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBpZD1cInRhZ1N2Z1wiPlxuICAgICAgICAgICAgICA8ZyBmaWxsPVwiIzRmYzE4OVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQgLTQpXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJ0YWctYVwiIGQ9XCJNMjAuOTk5NzUsOCBDMjAuNDQ3NzUsOCAxOS45OTk3NSw3LjU1MiAxOS45OTk3NSw3IEMxOS45OTk3NSw2LjQ0OCAyMC40NDc3NSw2IDIwLjk5OTc1LDYgQzIxLjU1MTc1LDYgMjEuOTk5NzUsNi40NDggMjEuOTk5NzUsNyBDMjEuOTk5NzUsNy41NTIgMjEuNTUxNzUsOCAyMC45OTk3NSw4IE0yMS45OTk3NSw0IEwxNC44Mjc3NSw0IEMxNC4yOTc3NSw0IDEzLjc4ODc1LDQuMjEgMTMuNDEzNzUsNC41ODUgTDQuNTg1NzUsMTMuNDE0IEMzLjgwNDc1LDE0LjE5NSAzLjgwNDc1LDE1LjQ2MSA0LjU4NTc1LDE2LjI0MiBMMTEuNzU2NzUsMjMuNDE0IEMxMi41Mzc3NSwyNC4xOTUgMTMuODA0NzUsMjQuMTk1IDE0LjU4NTc1LDIzLjQxNCBMMjMuNDEzNzUsMTQuNTg2IEMyMy43ODg3NSwxNC4yMTEgMjMuOTk5NzUsMTMuNzAyIDIzLjk5OTc1LDEzLjE3MiBMMjMuOTk5NzUsNiBDMjMuOTk5NzUsNC44OTYgMjMuMTAzNzUsNCAyMS45OTk3NSw0XCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICZ0aGluc3A7XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wZXJjZW50fVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGFnQ29udGVudFBhcmFcIj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvdGFsfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnOyJdfQ==