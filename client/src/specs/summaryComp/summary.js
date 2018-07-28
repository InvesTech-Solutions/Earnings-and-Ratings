'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _percentBars = require('./percentBars');

var _percentBars2 = _interopRequireDefault(_percentBars);

var _summaryBoxes = require('./summaryBoxes');

var _summaryBoxes2 = _interopRequireDefault(_summaryBoxes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summary = function (_Component) {
  _inherits(Summary, _Component);

  function Summary(props) {
    _classCallCheck(this, Summary);

    var _this = _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Summary, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'summaryComponent' },
        _react2.default.createElement(
          'header',
          { className: 'head' },
          'Analyst Ratings'
        ),
        _react2.default.createElement(_tag2.default, null),
        _react2.default.createElement(_percentBars2.default, null),
        _react2.default.createElement(_summaryBoxes2.default, null)
      );
    }
  }]);

  return Summary;
}(_react.Component);

exports.default = Summary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvc3VtbWFyeS5qc3giXSwibmFtZXMiOlsiU3VtbWFyeSIsInByb3BzIiwic3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFcUIsQ0FFckI7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFTLElBQUcsa0JBQVo7QUFDRTtBQUFBO0FBQUEsWUFBUSxXQUFVLE1BQWxCO0FBQUE7QUFBQSxTQURGO0FBSUUsc0NBQUMsYUFBRCxPQUpGO0FBTUUsc0NBQUMscUJBQUQsT0FORjtBQVFFLHNDQUFDLHNCQUFEO0FBUkYsT0FERjtBQWFEOzs7O0VBM0JtQkMsZ0I7O2tCQThCUEgsTyIsImZpbGUiOiJzdW1tYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWcgZnJvbSAnLi90YWcnO1xuaW1wb3J0IFBlcmNlbnRCYXJzIGZyb20gJy4vcGVyY2VudEJhcnMnO1xuaW1wb3J0IFN1bW1hcnlCb3hlcyBmcm9tICcuL3N1bW1hcnlCb3hlcyc7XG5cbmNsYXNzIFN1bW1hcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcblxuICB9XG5cbiAgLy8gcmVuZGVycyBlbnRpcmUgZWFybmluZ3Mgc2VjdGlvbiB3aXRoIFlBeGlzLCBEYXRhUG9pbnRzLCBYQXhpcywgYW5kIERlc2NyaXB0aW9ucyBhcyBzdWJjb21wb25lbnRzXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGlkPVwic3VtbWFyeUNvbXBvbmVudFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICBBbmFseXN0IFJhdGluZ3NcbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxUYWcgXG4gICAgICAgIC8+XG4gICAgICAgIDxQZXJjZW50QmFycyBcbiAgICAgICAgLz5cbiAgICAgICAgPFN1bW1hcnlCb3hlcyBcbiAgICAgICAgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeTsiXX0=