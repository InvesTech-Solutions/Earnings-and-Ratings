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
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_percentBars2.default, {
            ratings: this.props.ratings
          }),
          _react2.default.createElement(_summaryBoxes2.default, {
            summaries: [this.props.buySummary, this.props.sellSummary]
          })
        )
      );
    }
  }]);

  return Summary;
}(_react.Component);

exports.default = Summary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvc3VtbWFyeS5qc3giXSwibmFtZXMiOlsiU3VtbWFyeSIsInByb3BzIiwic3RhdGUiLCJidXlQZXJjIiwidG90YWxSYXRlcnMiLCJ0cmlnZ2VyIiwiYnV5Q291bnQiLCJyYXRpbmdzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJyYXRlckNvdW50IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJNYXRoIiwicm91bmQiLCJidXlTdW1tYXJ5Iiwic2VsbFN1bW1hcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBVSxJQURDO0FBRVhDLG1CQUFjLElBRkg7QUFHWEMsZUFBVTtBQUhDLEtBQWI7QUFGaUI7QUFPbEI7Ozs7eUNBRXFCO0FBQ3BCLFVBQUlDLFdBQVcsQ0FBZjtBQUNBLFdBQUtMLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsT0FBRCxFQUFhO0FBQ3RDLFlBQUlBLFlBQVksS0FBaEIsRUFBdUI7QUFDckJIO0FBQ0Q7QUFDRixPQUpEO0FBS0EsVUFBSUksYUFBYSxLQUFLVCxLQUFMLENBQVdNLE9BQVgsQ0FBbUJJLE1BQXBDO0FBQ0EsVUFBSSxDQUFDLEtBQUtULEtBQUwsQ0FBV0csT0FBaEIsRUFBeUI7QUFDdkIsYUFBS08sUUFBTCxDQUFjO0FBQ1pULG1CQUFVVSxLQUFLQyxLQUFMLENBQVlSLFdBQVdJLFVBQVosR0FBMEIsR0FBckMsQ0FERTtBQUVaTix1QkFBY00sVUFGRjtBQUdaTCxtQkFBVTtBQUhFLFNBQWQ7QUFLRDtBQUNGOztBQUVEOzs7OzZCQUNVO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBUyxJQUFHLGtCQUFaO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxTQUFsQjtBQUFBO0FBQUEsU0FERjtBQUlFLHNDQUFDLGFBQUQ7QUFDRSxtQkFBUyxLQUFLSCxLQUFMLENBQVdDLE9BRHRCO0FBRUUsaUJBQU8sS0FBS0QsS0FBTCxDQUFXRTtBQUZwQixVQUpGO0FBUUU7QUFBQTtBQUFBO0FBQ0Usd0NBQUMscUJBQUQ7QUFDRSxxQkFBUyxLQUFLSCxLQUFMLENBQVdNO0FBRHRCLFlBREY7QUFJRSx3Q0FBQyxzQkFBRDtBQUNFLHVCQUFXLENBQUMsS0FBS04sS0FBTCxDQUFXYyxVQUFaLEVBQXdCLEtBQUtkLEtBQUwsQ0FBV2UsV0FBbkM7QUFEYjtBQUpGO0FBUkYsT0FERjtBQW1CRDs7OztFQWhEbUJDLGdCOztrQkFtRFBqQixPIiwiZmlsZSI6InN1bW1hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhZyBmcm9tICcuL3RhZyc7XG5pbXBvcnQgUGVyY2VudEJhcnMgZnJvbSAnLi9wZXJjZW50QmFycyc7XG5pbXBvcnQgU3VtbWFyeUJveGVzIGZyb20gJy4vc3VtbWFyeUJveGVzJztcblxuY2xhc3MgU3VtbWFyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBidXlQZXJjIDogbnVsbCxcbiAgICAgIHRvdGFsUmF0ZXJzIDogbnVsbCxcbiAgICAgIHRyaWdnZXIgOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgbGV0IGJ1eUNvdW50ID0gMDtcbiAgICB0aGlzLnByb3BzLnJhdGluZ3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09ICdCdXknKSB7XG4gICAgICAgIGJ1eUNvdW50KytcbiAgICAgIH07XG4gICAgfSk7XG4gICAgbGV0IHJhdGVyQ291bnQgPSB0aGlzLnByb3BzLnJhdGluZ3MubGVuZ3RoO1xuICAgIGlmICghdGhpcy5zdGF0ZS50cmlnZ2VyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgIGJ1eVBlcmMgOiBNYXRoLnJvdW5kKChidXlDb3VudCAvIHJhdGVyQ291bnQpICogMTAwKSxcbiAgICAgICAgdG90YWxSYXRlcnMgOiByYXRlckNvdW50LFxuICAgICAgICB0cmlnZ2VyIDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVuZGVycyBlbnRpcmUgZWFybmluZ3Mgc2VjdGlvbiB3aXRoIFlBeGlzLCBEYXRhUG9pbnRzLCBYQXhpcywgYW5kIERlc2NyaXB0aW9ucyBhcyBzdWJjb21wb25lbnRzXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGlkPVwic3VtbWFyeUNvbXBvbmVudFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInRhZ0hlYWRcIj5cbiAgICAgICAgICBBbmFseXN0IFJhdGluZ3NcbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxUYWdcbiAgICAgICAgICBwZXJjZW50PXt0aGlzLnN0YXRlLmJ1eVBlcmN9XG4gICAgICAgICAgdG90YWw9e3RoaXMuc3RhdGUudG90YWxSYXRlcnN9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFBlcmNlbnRCYXJzXG4gICAgICAgICAgICByYXRpbmdzPXt0aGlzLnByb3BzLnJhdGluZ3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U3VtbWFyeUJveGVzXG4gICAgICAgICAgICBzdW1tYXJpZXM9e1t0aGlzLnByb3BzLmJ1eVN1bW1hcnksIHRoaXMucHJvcHMuc2VsbFN1bW1hcnldfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5OyJdfQ==