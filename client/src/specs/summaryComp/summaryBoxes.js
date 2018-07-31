'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _summaryBox = require('./summaryBox');

var _summaryBox2 = _interopRequireDefault(_summaryBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SummaryBoxes = function (_Component) {
  _inherits(SummaryBoxes, _Component);

  function SummaryBoxes(props) {
    _classCallCheck(this, SummaryBoxes);

    return _possibleConstructorReturn(this, (SummaryBoxes.__proto__ || Object.getPrototypeOf(SummaryBoxes)).call(this, props));
  }

  _createClass(SummaryBoxes, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'summaryBoxes' },
        this.props.summaries.map(function (summary, index) {
          return _react2.default.createElement(_summaryBox2.default, {
            summary: summary,
            ind: index
          });
        })
      );
    }
  }]);

  return SummaryBoxes;
}(_react.Component);

exports.default = SummaryBoxes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvc3VtbWFyeUJveGVzLmpzeCJdLCJuYW1lcyI6WyJTdW1tYXJ5Qm94ZXMiLCJwcm9wcyIsInN1bW1hcmllcyIsIm1hcCIsInN1bW1hcnkiLCJpbmRleCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1SEFDWEEsS0FEVztBQUVsQjs7Ozt5Q0FFcUIsQ0FDckI7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsY0FBZjtBQUNHLGFBQUtBLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQzVDLGlCQUNFLDhCQUFDLG9CQUFEO0FBQ0UscUJBQVNELE9BRFg7QUFFRSxpQkFBS0M7QUFGUCxZQURGO0FBTUQsU0FQQTtBQURILE9BREY7QUFZRDs7OztFQXRCd0JDLGdCOztrQkF5QlpOLFkiLCJmaWxlIjoic3VtbWFyeUJveGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdW1tYXJ5Qm94IGZyb20gJy4vc3VtbWFyeUJveCc7XG5cbmNsYXNzIFN1bW1hcnlCb3hlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcbiAgfVxuXG4gIC8vIHJlbmRlcnMgZW50aXJlIGVhcm5pbmdzIHNlY3Rpb24gd2l0aCBZQXhpcywgRGF0YVBvaW50cywgWEF4aXMsIGFuZCBEZXNjcmlwdGlvbnMgYXMgc3ViY29tcG9uZW50c1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3VtbWFyeUJveGVzJz5cbiAgICAgICAge3RoaXMucHJvcHMuc3VtbWFyaWVzLm1hcCgoc3VtbWFyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4oICBcbiAgICAgICAgICAgIDxTdW1tYXJ5Qm94XG4gICAgICAgICAgICAgIHN1bW1hcnk9e3N1bW1hcnl9XG4gICAgICAgICAgICAgIGluZD17aW5kZXh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeUJveGVzOyJdfQ==