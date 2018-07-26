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

var YAxisTick = function (_Component) {
  _inherits(YAxisTick, _Component);

  function YAxisTick(props) {
    _classCallCheck(this, YAxisTick);

    var _this = _possibleConstructorReturn(this, (YAxisTick.__proto__ || Object.getPrototypeOf(YAxisTick)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(YAxisTick, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('dfdf', this.props.key);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: "y-" + this.props.ind },
        _react2.default.createElement(
          'div',
          { className: "y" + this.props.ind },
          this.props.yValue
        )
      );
    }
  }]);

  return YAxisTick;
}(_react.Component);

exports.default = YAxisTick;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMveUF4aXNUaWNrLmpzeCJdLCJuYW1lcyI6WyJZQXhpc1RpY2siLCJwcm9wcyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImtleSIsImluZCIsInlWYWx1ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCOzs7O3dDQUVvQjtBQUNuQkMsY0FBUUMsR0FBUixDQUFZLE1BQVosRUFBb0IsS0FBS0gsS0FBTCxDQUFXSSxHQUEvQjtBQUNEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVcsT0FBTyxLQUFLSixLQUFMLENBQVdLLEdBQW5DO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVyxNQUFNLEtBQUtMLEtBQUwsQ0FBV0ssR0FBakM7QUFBdUMsZUFBS0wsS0FBTCxDQUFXTTtBQUFsRDtBQURGLE9BREY7QUFLRDs7OztFQWxCcUJDLGdCOztrQkFxQlRSLFMiLCJmaWxlIjoieUF4aXNUaWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgWUF4aXNUaWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zb2xlLmxvZygnZGZkZicsIHRoaXMucHJvcHMua2V5KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInktXCIgKyB0aGlzLnByb3BzLmluZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInlcIiArIHRoaXMucHJvcHMuaW5kfT57dGhpcy5wcm9wcy55VmFsdWV9PC9kaXY+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZQXhpc1RpY2s7Il19