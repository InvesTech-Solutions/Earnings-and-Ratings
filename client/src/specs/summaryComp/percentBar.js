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

var PercentBar = function (_Component) {
  _inherits(PercentBar, _Component);

  function PercentBar(props) {
    _classCallCheck(this, PercentBar);

    var _this = _possibleConstructorReturn(this, (PercentBar.__proto__ || Object.getPrototypeOf(PercentBar)).call(this, props));

    _this.state = {
      percent: '',
      rounded: '',
      trigger: false
    };
    return _this;
  }

  _createClass(PercentBar, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var percent = this.props.count / this.props.total * 100 + '%';
      var rounded = Math.round(100 * this.props.count / this.props.total) + '%';
      if (this.state.trigger === false && this.props.total > 0) {
        this.setState({ percent: percent, rounded: rounded, trigger: true });
      };
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'barRow' },
        _react2.default.createElement(
          'div',
          { className: 'barSuggestion' },
          this.props.suggestion
        ),
        _react2.default.createElement(
          'div',
          { className: 'barContain' },
          _react2.default.createElement(
            'div',
            { className: 'percInBarContain', style: { left: this.state.percent } },
            _react2.default.createElement(
              'span',
              { className: 'percInBar' },
              this.state.rounded
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'wholeBar' },
            _react2.default.createElement('div', { className: 'coloredBar', style: { width: this.state.percent } })
          )
        )
      );
    }
  }]);

  return PercentBar;
}(_react.Component);

exports.default = PercentBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvcGVyY2VudEJhci5qc3giXSwibmFtZXMiOlsiUGVyY2VudEJhciIsInByb3BzIiwic3RhdGUiLCJwZXJjZW50Iiwicm91bmRlZCIsInRyaWdnZXIiLCJjb3VudCIsInRvdGFsIiwiTWF0aCIsInJvdW5kIiwic2V0U3RhdGUiLCJzdWdnZXN0aW9uIiwibGVmdCIsIndpZHRoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVUsRUFEQztBQUVYQyxlQUFVLEVBRkM7QUFHWEMsZUFBVTtBQUhDLEtBQWI7QUFGaUI7QUFPbEI7Ozs7eUNBRXFCO0FBQ3BCLFVBQUlGLFVBQWMsS0FBS0YsS0FBTCxDQUFXSyxLQUFYLEdBQW1CLEtBQUtMLEtBQUwsQ0FBV00sS0FBL0IsR0FBd0MsR0FBckQsTUFBSjtBQUNBLFVBQUlILFVBQWFJLEtBQUtDLEtBQUwsQ0FBVyxNQUFNLEtBQUtSLEtBQUwsQ0FBV0ssS0FBakIsR0FBeUIsS0FBS0wsS0FBTCxDQUFXTSxLQUEvQyxDQUFiLE1BQUo7QUFDQSxVQUFJLEtBQUtMLEtBQUwsQ0FBV0csT0FBWCxLQUF1QixLQUF2QixJQUFnQyxLQUFLSixLQUFMLENBQVdNLEtBQVgsR0FBbUIsQ0FBdkQsRUFBMEQ7QUFDeEQsYUFBS0csUUFBTCxDQUFjLEVBQUVQLFNBQVNBLE9BQVgsRUFBb0JDLFNBQVNBLE9BQTdCLEVBQXNDQyxTQUFTLElBQS9DLEVBQWQ7QUFDRDtBQUNGOztBQUVEOzs7OzZCQUNVO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGVBQWY7QUFDRyxlQUFLSixLQUFMLENBQVdVO0FBRGQsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWYsRUFBa0MsT0FBTyxFQUFDQyxNQUFNLEtBQUtWLEtBQUwsQ0FBV0MsT0FBbEIsRUFBekM7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxXQUFoQjtBQUE2QixtQkFBS0QsS0FBTCxDQUFXRTtBQUF4QztBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDRSxtREFBSyxXQUFVLFlBQWYsRUFBNEIsT0FBTyxFQUFDUyxPQUFPLEtBQUtYLEtBQUwsQ0FBV0MsT0FBbkIsRUFBbkM7QUFERjtBQUpGO0FBSkYsT0FERjtBQWVEOzs7O0VBbkNzQlcsZ0I7O2tCQXNDVmQsVSIsImZpbGUiOiJwZXJjZW50QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUGVyY2VudEJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwZXJjZW50IDogJycsXG4gICAgICByb3VuZGVkIDogJycsXG4gICAgICB0cmlnZ2VyIDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIGxldCBwZXJjZW50ID0gYCR7KHRoaXMucHJvcHMuY291bnQgLyB0aGlzLnByb3BzLnRvdGFsKSAqIDEwMH0lYDtcbiAgICBsZXQgcm91bmRlZCA9IGAke01hdGgucm91bmQoMTAwICogdGhpcy5wcm9wcy5jb3VudCAvIHRoaXMucHJvcHMudG90YWwpfSVgO1xuICAgIGlmICh0aGlzLnN0YXRlLnRyaWdnZXIgPT09IGZhbHNlICYmIHRoaXMucHJvcHMudG90YWwgPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGVyY2VudDogcGVyY2VudCwgcm91bmRlZDogcm91bmRlZCwgdHJpZ2dlcjogdHJ1ZSB9KVxuICAgIH07XG4gIH1cblxuICAvLyByZW5kZXJzIGVudGlyZSBlYXJuaW5ncyBzZWN0aW9uIHdpdGggWUF4aXMsIERhdGFQb2ludHMsIFhBeGlzLCBhbmQgRGVzY3JpcHRpb25zIGFzIHN1YmNvbXBvbmVudHNcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JhclJvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYXJTdWdnZXN0aW9uJz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zdWdnZXN0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhckNvbnRhaW4nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwZXJjSW5CYXJDb250YWluJyBzdHlsZT17e2xlZnQ6IHRoaXMuc3RhdGUucGVyY2VudH19PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwZXJjSW5CYXInPnt0aGlzLnN0YXRlLnJvdW5kZWR9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aG9sZUJhcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sb3JlZEJhcicgc3R5bGU9e3t3aWR0aDogdGhpcy5zdGF0ZS5wZXJjZW50fX0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmNlbnRCYXI7Il19