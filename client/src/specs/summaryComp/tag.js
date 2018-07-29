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
      console.log('mounted');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('updated');
      var total = this.props.total;
      var percent = this.props.percent;
      console.log(total, percent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvdGFnLmpzeCJdLCJuYW1lcyI6WyJUYWciLCJwcm9wcyIsInN0YXRlIiwicGVyY2VudCIsInRvdGFsIiwidHJpZ2dlciIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsRUFERTtBQUVYQyxhQUFPLEVBRkk7QUFHWEMsZUFBUztBQUhFLEtBQWI7QUFGaUI7QUFPbEI7Ozs7d0NBRW9CO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYyxFQUFFRCxTQUFTLEtBQVgsRUFBZDtBQUNBRSxjQUFRQyxHQUFSLENBQVksU0FBWjtBQUNEOzs7eUNBRXFCO0FBQ3BCRCxjQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLFVBQUlKLFFBQVEsS0FBS0gsS0FBTCxDQUFXRyxLQUF2QjtBQUNBLFVBQUlELFVBQVUsS0FBS0YsS0FBTCxDQUFXRSxPQUF6QjtBQUNBSSxjQUFRQyxHQUFSLENBQVlKLEtBQVosRUFBbUJELE9BQW5CO0FBQ0EsVUFBSSxLQUFLRCxLQUFMLENBQVdHLE9BQVgsS0FBdUIsS0FBdkIsSUFBZ0NELFVBQVUsSUFBMUMsSUFBa0RELFlBQVksSUFBbEUsRUFBd0U7QUFDdEUsYUFBS0csUUFBTCxDQUFjLEVBQUVILFNBQVVBLFVBQVUsR0FBdEIsRUFBMkJDLGVBQWNBLEtBQWQsYUFBM0IsRUFBMERDLFNBQVMsSUFBbkUsRUFBZDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsY0FBUjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUixFQUFvQixXQUFVLFlBQTlCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxPQUFNLElBQVgsRUFBZ0IsUUFBTyxJQUF2QixFQUE0QixTQUFRLFdBQXBDLEVBQWdELElBQUcsUUFBbkQ7QUFDRTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxTQUFSLEVBQWtCLGFBQVUsU0FBNUIsRUFBc0MsV0FBVSxrQkFBaEQ7QUFDRSx3REFBTSxJQUFHLE9BQVQsRUFBaUIsR0FBRSwwZEFBbkI7QUFERjtBQURGLGFBREY7QUFBQTtBQU9HLGlCQUFLSCxLQUFMLENBQVdDO0FBUGQsV0FERjtBQVVFO0FBQUE7QUFBQSxjQUFHLFdBQVUsZ0JBQWI7QUFDRyxpQkFBS0QsS0FBTCxDQUFXRTtBQURkO0FBVkY7QUFERixPQURGO0FBa0JEOzs7O0VBN0NlSyxnQjs7a0JBZ0RIVCxHIiwiZmlsZSI6InRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFRhZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwZXJjZW50OiAnJyxcbiAgICAgIHRvdGFsOiAnJyxcbiAgICAgIHRyaWdnZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdHJpZ2dlcjogZmFsc2UgfSlcbiAgICBjb25zb2xlLmxvZygnbW91bnRlZCcpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVkJylcbiAgICBsZXQgdG90YWwgPSB0aGlzLnByb3BzLnRvdGFsO1xuICAgIGxldCBwZXJjZW50ID0gdGhpcy5wcm9wcy5wZXJjZW50O1xuICAgIGNvbnNvbGUubG9nKHRvdGFsLCBwZXJjZW50KVxuICAgIGlmICh0aGlzLnN0YXRlLnRyaWdnZXIgPT09IGZhbHNlICYmIHRvdGFsICE9PSBudWxsICYmIHBlcmNlbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJjZW50IDogcGVyY2VudCArICclJywgdG90YWwgOiBgb2YgJHt0b3RhbH0gcmF0aW5nc2AsIHRyaWdnZXI6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVuZGVycyBlbnRpcmUgZWFybmluZ3Mgc2VjdGlvbiB3aXRoIFlBeGlzLCBEYXRhUG9pbnRzLCBYQXhpcywgYW5kIERlc2NyaXB0aW9ucyBhcyBzdWJjb21wb25lbnRzXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ0YWdDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cInRhZ0NpcmNsZVwiIGNsYXNzTmFtZT1cImNpcmNsZUJhc2VcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGFnQ29udGVudEhlYWRcIj5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGlkPVwidGFnU3ZnXCI+XG4gICAgICAgICAgICAgIDxnIGZpbGw9XCIjNGZjMTg5XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNCAtNClcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBpZD1cInRhZy1hXCIgZD1cIk0yMC45OTk3NSw4IEMyMC40NDc3NSw4IDE5Ljk5OTc1LDcuNTUyIDE5Ljk5OTc1LDcgQzE5Ljk5OTc1LDYuNDQ4IDIwLjQ0Nzc1LDYgMjAuOTk5NzUsNiBDMjEuNTUxNzUsNiAyMS45OTk3NSw2LjQ0OCAyMS45OTk3NSw3IEMyMS45OTk3NSw3LjU1MiAyMS41NTE3NSw4IDIwLjk5OTc1LDggTTIxLjk5OTc1LDQgTDE0LjgyNzc1LDQgQzE0LjI5Nzc1LDQgMTMuNzg4NzUsNC4yMSAxMy40MTM3NSw0LjU4NSBMNC41ODU3NSwxMy40MTQgQzMuODA0NzUsMTQuMTk1IDMuODA0NzUsMTUuNDYxIDQuNTg1NzUsMTYuMjQyIEwxMS43NTY3NSwyMy40MTQgQzEyLjUzNzc1LDI0LjE5NSAxMy44MDQ3NSwyNC4xOTUgMTQuNTg1NzUsMjMuNDE0IEwyMy40MTM3NSwxNC41ODYgQzIzLjc4ODc1LDE0LjIxMSAyMy45OTk3NSwxMy43MDIgMjMuOTk5NzUsMTMuMTcyIEwyMy45OTk3NSw2IEMyMy45OTk3NSw0Ljg5NiAyMy4xMDM3NSw0IDIxLjk5OTc1LDRcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgJnRoaW5zcDtcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBlcmNlbnR9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWdDb250ZW50UGFyYVwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudG90YWx9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWc7Il19