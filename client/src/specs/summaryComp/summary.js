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

    _this.state = {
      buyPerc: null,
      totalRaters: null,
      trigger: false
    };
    return _this;
  }

  _createClass(Summary, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var buyCount = 0;
      this.props.ratings.forEach(function (element) {
        if (element === 'Buy') {
          buyCount++;
        };
      });
      var raterCount = this.props.ratings.length;
      if (!this.state.trigger) {
        this.setState({
          buyPerc: Math.round(buyCount / raterCount * 100),
          totalRaters: raterCount,
          trigger: true
        });
      }
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'summaryComponent' },
        _react2.default.createElement(
          'header',
          { className: 'tagHead' },
          'Analyst Ratings'
        ),
        _react2.default.createElement(_tag2.default, {
          percent: this.state.buyPerc,
          total: this.state.totalRaters
        }),
        _react2.default.createElement(_percentBars2.default, null),
        _react2.default.createElement(_summaryBoxes2.default, null)
      );
    }
  }]);

  return Summary;
}(_react.Component);

exports.default = Summary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvc3VtbWFyeS5qc3giXSwibmFtZXMiOlsiU3VtbWFyeSIsInByb3BzIiwic3RhdGUiLCJidXlQZXJjIiwidG90YWxSYXRlcnMiLCJ0cmlnZ2VyIiwiYnV5Q291bnQiLCJyYXRpbmdzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJyYXRlckNvdW50IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJNYXRoIiwicm91bmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBVSxJQURDO0FBRVhDLG1CQUFjLElBRkg7QUFHWEMsZUFBVTtBQUhDLEtBQWI7QUFGaUI7QUFPbEI7Ozs7eUNBRXFCO0FBQ3BCLFVBQUlDLFdBQVcsQ0FBZjtBQUNBLFdBQUtMLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsT0FBRCxFQUFhO0FBQ3RDLFlBQUlBLFlBQVksS0FBaEIsRUFBdUI7QUFDckJIO0FBQ0Q7QUFDRixPQUpEO0FBS0EsVUFBSUksYUFBYSxLQUFLVCxLQUFMLENBQVdNLE9BQVgsQ0FBbUJJLE1BQXBDO0FBQ0EsVUFBSSxDQUFDLEtBQUtULEtBQUwsQ0FBV0csT0FBaEIsRUFBeUI7QUFDdkIsYUFBS08sUUFBTCxDQUFjO0FBQ1pULG1CQUFVVSxLQUFLQyxLQUFMLENBQVlSLFdBQVdJLFVBQVosR0FBMEIsR0FBckMsQ0FERTtBQUVaTix1QkFBY00sVUFGRjtBQUdaTCxtQkFBVTtBQUhFLFNBQWQ7QUFLRDtBQUNGOztBQUVEOzs7OzZCQUNVO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBUyxJQUFHLGtCQUFaO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxTQUFsQjtBQUFBO0FBQUEsU0FERjtBQUlFLHNDQUFDLGFBQUQ7QUFDRSxtQkFBUyxLQUFLSCxLQUFMLENBQVdDLE9BRHRCO0FBRUUsaUJBQU8sS0FBS0QsS0FBTCxDQUFXRTtBQUZwQixVQUpGO0FBUUUsc0NBQUMscUJBQUQsT0FSRjtBQVVFLHNDQUFDLHNCQUFEO0FBVkYsT0FERjtBQWVEOzs7O0VBNUNtQlcsZ0I7O2tCQStDUGYsTyIsImZpbGUiOiJzdW1tYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWcgZnJvbSAnLi90YWcnO1xuaW1wb3J0IFBlcmNlbnRCYXJzIGZyb20gJy4vcGVyY2VudEJhcnMnO1xuaW1wb3J0IFN1bW1hcnlCb3hlcyBmcm9tICcuL3N1bW1hcnlCb3hlcyc7XG5cbmNsYXNzIFN1bW1hcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYnV5UGVyYyA6IG51bGwsXG4gICAgICB0b3RhbFJhdGVycyA6IG51bGwsXG4gICAgICB0cmlnZ2VyIDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIGxldCBidXlDb3VudCA9IDA7XG4gICAgdGhpcy5wcm9wcy5yYXRpbmdzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSAnQnV5Jykge1xuICAgICAgICBidXlDb3VudCsrXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGxldCByYXRlckNvdW50ID0gdGhpcy5wcm9wcy5yYXRpbmdzLmxlbmd0aDtcbiAgICBpZiAoIXRoaXMuc3RhdGUudHJpZ2dlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgICBidXlQZXJjIDogTWF0aC5yb3VuZCgoYnV5Q291bnQgLyByYXRlckNvdW50KSAqIDEwMCksXG4gICAgICAgIHRvdGFsUmF0ZXJzIDogcmF0ZXJDb3VudCxcbiAgICAgICAgdHJpZ2dlciA6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbmRlcnMgZW50aXJlIGVhcm5pbmdzIHNlY3Rpb24gd2l0aCBZQXhpcywgRGF0YVBvaW50cywgWEF4aXMsIGFuZCBEZXNjcmlwdGlvbnMgYXMgc3ViY29tcG9uZW50c1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBpZD1cInN1bW1hcnlDb21wb25lbnRcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0YWdIZWFkXCI+XG4gICAgICAgICAgQW5hbHlzdCBSYXRpbmdzXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8VGFnXG4gICAgICAgICAgcGVyY2VudD17dGhpcy5zdGF0ZS5idXlQZXJjfVxuICAgICAgICAgIHRvdGFsPXt0aGlzLnN0YXRlLnRvdGFsUmF0ZXJzfVxuICAgICAgICAvPlxuICAgICAgICA8UGVyY2VudEJhcnNcbiAgICAgICAgLz5cbiAgICAgICAgPFN1bW1hcnlCb3hlc1xuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5OyJdfQ==