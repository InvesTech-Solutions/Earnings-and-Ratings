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

var DataPoints = function (_Component) {
  _inherits(DataPoints, _Component);

  function DataPoints(props) {
    _classCallCheck(this, DataPoints);

    var _this = _possibleConstructorReturn(this, (DataPoints.__proto__ || Object.getPrototypeOf(DataPoints)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(DataPoints, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('data connected');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { className: 'xs', width: '560', height: '120' },
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement(
            'g',
            { transform: 'translate(0, 58.536585)' },
            _react2.default.createElement('circle', { r: '7', className: 'circle' })
          )
        )
      );
    }
  }]);

  return DataPoints;
}(_react.Component);

exports.default = DataPoints;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZGF0YVBvaW50cy5qc3giXSwibmFtZXMiOlsiRGF0YVBvaW50cyIsInByb3BzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFHTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFLbEI7Ozs7eUNBRXFCO0FBQ3BCQyxjQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLElBQWYsRUFBb0IsT0FBTSxLQUExQixFQUFnQyxRQUFPLEtBQXZDO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUcsV0FBVSx5QkFBYjtBQUNFLHNEQUFRLEdBQUUsR0FBVixFQUFjLFdBQVUsUUFBeEI7QUFERjtBQURGO0FBREYsT0FERjtBQVNEOzs7O0VBdEJzQkMsZ0I7O2tCQTJCVkwsVSIsImZpbGUiOiJkYXRhUG9pbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBEYXRhUG9pbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgY29uc29sZS5sb2coJ2RhdGEgY29ubmVjdGVkJylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwieHNcIiB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjEyMFwiPlxuICAgICAgICA8Zz5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwgNTguNTM2NTg1KVwiPlxuICAgICAgICAgICAgPGNpcmNsZSByPVwiN1wiIGNsYXNzTmFtZT1cImNpcmNsZVwiIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICApIFxuICB9XG5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQb2ludHM7Il19