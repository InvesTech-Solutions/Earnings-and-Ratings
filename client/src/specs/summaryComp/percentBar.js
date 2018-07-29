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
        null,
        _react2.default.createElement(
          'div',
          null,
          this.props.suggestion
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              null,
              this.state.rounded
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', null)
          )
        )
      );
    }
  }]);

  return PercentBar;
}(_react.Component);

exports.default = PercentBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvcGVyY2VudEJhci5qc3giXSwibmFtZXMiOlsiUGVyY2VudEJhciIsInByb3BzIiwic3RhdGUiLCJwZXJjZW50Iiwicm91bmRlZCIsInRyaWdnZXIiLCJjb3VudCIsInRvdGFsIiwiTWF0aCIsInJvdW5kIiwic2V0U3RhdGUiLCJzdWdnZXN0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVUsRUFEQztBQUVYQyxlQUFVLEVBRkM7QUFHWEMsZUFBVTtBQUhDLEtBQWI7QUFGaUI7QUFPbEI7Ozs7eUNBRXFCO0FBQ3BCLFVBQUlGLFVBQWMsS0FBS0YsS0FBTCxDQUFXSyxLQUFYLEdBQW1CLEtBQUtMLEtBQUwsQ0FBV00sS0FBL0IsR0FBd0MsR0FBckQsTUFBSjtBQUNBLFVBQUlILFVBQWFJLEtBQUtDLEtBQUwsQ0FBVyxNQUFNLEtBQUtSLEtBQUwsQ0FBV0ssS0FBakIsR0FBeUIsS0FBS0wsS0FBTCxDQUFXTSxLQUEvQyxDQUFiLE1BQUo7QUFDQSxVQUFJLEtBQUtMLEtBQUwsQ0FBV0csT0FBWCxLQUF1QixLQUF2QixJQUFnQyxLQUFLSixLQUFMLENBQVdNLEtBQVgsR0FBbUIsQ0FBdkQsRUFBMEQ7QUFDeEQsYUFBS0csUUFBTCxDQUFjLEVBQUVQLFNBQVNBLE9BQVgsRUFBb0JDLFNBQVNBLE9BQTdCLEVBQXNDQyxTQUFTLElBQS9DLEVBQWQ7QUFDRDtBQUNGOztBQUVEOzs7OzZCQUNVO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRyxlQUFLSixLQUFMLENBQVdVO0FBRGQsU0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFPLG1CQUFLVCxLQUFMLENBQVdFO0FBQWxCO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBREY7QUFKRjtBQUpGLE9BREY7QUFlRDs7OztFQW5Dc0JRLGdCOztrQkFzQ1ZaLFUiLCJmaWxlIjoicGVyY2VudEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFBlcmNlbnRCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGVyY2VudCA6ICcnLFxuICAgICAgcm91bmRlZCA6ICcnLFxuICAgICAgdHJpZ2dlciA6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcbiAgICBsZXQgcGVyY2VudCA9IGAkeyh0aGlzLnByb3BzLmNvdW50IC8gdGhpcy5wcm9wcy50b3RhbCkgKiAxMDB9JWA7XG4gICAgbGV0IHJvdW5kZWQgPSBgJHtNYXRoLnJvdW5kKDEwMCAqIHRoaXMucHJvcHMuY291bnQgLyB0aGlzLnByb3BzLnRvdGFsKX0lYDtcbiAgICBpZiAodGhpcy5zdGF0ZS50cmlnZ2VyID09PSBmYWxzZSAmJiB0aGlzLnByb3BzLnRvdGFsID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBlcmNlbnQ6IHBlcmNlbnQsIHJvdW5kZWQ6IHJvdW5kZWQsIHRyaWdnZXI6IHRydWUgfSlcbiAgICB9O1xuICB9XG5cbiAgLy8gcmVuZGVycyBlbnRpcmUgZWFybmluZ3Mgc2VjdGlvbiB3aXRoIFlBeGlzLCBEYXRhUG9pbnRzLCBYQXhpcywgYW5kIERlc2NyaXB0aW9ucyBhcyBzdWJjb21wb25lbnRzXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMuc3VnZ2VzdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLnJvdW5kZWR9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJjZW50QmFyOyJdfQ==