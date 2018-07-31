'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SummaryBox = function (_Component) {
  _inherits(SummaryBox, _Component);

  function SummaryBox(props) {
    _classCallCheck(this, SummaryBox);

    var _this = _possibleConstructorReturn(this, (SummaryBox.__proto__ || Object.getPrototypeOf(SummaryBox)).call(this, props));

    _this.clickHandler = _this.clickedReadMore.bind(_this);
    _this.state = {
      head: 'Summary',
      showCondensed: true
    };
    return _this;
  }

  _createClass(SummaryBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var head = void 0;
      if (this.props.ind === 0) {
        head = 'Buy';
      } else {
        head = 'Sell';
      }
      this.setState({
        head: head + ' Summary'
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.showCondensed) {
        (0, _jquery2.default)('#fade_' + this.props.ind).css({ "overflow": "hidden", "height": "45px" });
        (0, _jquery2.default)('#summaryBox_' + this.props.ind).css("height", "160.56px");
        var toppx = void 0;
        if (this.props.ind === 0) {
          (0, _jquery2.default)('#summaryPositionControl_1').css("top", "0px");
          toppx = '16px';
        } else {
          toppx = '-195px';
        };
        (0, _jquery2.default)('#summaryTail_' + this.props.ind).css("top", toppx);
      } else {
        var heightDiff = void 0;
        // heightBefore = $(`#fade_${this.props.ind}`).css
        (0, _jquery2.default)('#fade_' + this.props.ind).css({ "overflow": "visible", "height": "auto" });

        heightDiff = this.heightDiff('#fade_' + this.props.ind);
        console.log(heightDiff);
        this.addHeight('#summaryBox_' + this.props.ind, heightDiff);
        this.addTop('#summaryTail_' + this.props.ind, heightDiff);
        if (this.props.ind === 0) {
          this.addTop('#summaryPositionControl_1', '-' + heightDiff);
        }
      }
    }
  }, {
    key: 'heightDiff',
    value: function heightDiff(identifier) {
      var after = (0, _jquery2.default)(identifier).css('height');
      return String(Number(after.substring(0, after.length - 2)) - 45) + 'px';
    }
  }, {
    key: 'addHeight',
    value: function addHeight(identifier, heightDiff) {
      var height = (0, _jquery2.default)(identifier).css("height");
      var newHeight = String(Number(height.substring(0, height.length - 2)) + Number(heightDiff.substring(0, heightDiff.length - 2))) + 'px';
      (0, _jquery2.default)(identifier).css("height", newHeight);
    }
  }, {
    key: 'addTop',
    value: function addTop(identifier, heightDiff) {
      var top = (0, _jquery2.default)(identifier).css("top");
      var newTop = String(Number(top.substring(0, top.length - 2)) + Number(heightDiff.substring(0, heightDiff.length - 2))) + 'px';
      (0, _jquery2.default)(identifier).css("top", newTop);
    }
  }, {
    key: 'clickedReadMore',
    value: function clickedReadMore(e) {
      e.preventDefault();
      this.setState({ showCondensed: !this.state.showCondensed });
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'summaryPositionControl_' + this.props.ind },
        _react2.default.createElement(
          'div',
          { className: 'summaryTail', id: 'summaryTail_' + this.props.ind },
          _react2.default.createElement(
            'svg',
            { width: '24', height: '20', viewBox: '0 0 24 20' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('path', { d: 'M6.66133815e-15,6.89249489e-14 L24,1.30957403e-12 L3.34939321,18.8768262 L3.34939321,18.8768262 C2.5341158,19.6220755 1.26905894,19.5653065 0.523809649,18.750029 C0.186851616,18.3814084 2.34087955e-13,17.9000574 2.26929586e-13,17.4006358 L6.66133815e-15,6.89249489e-14 Z' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'summaryBox_' + this.props.ind },
          _react2.default.createElement(
            'p',
            { className: 'summaryHead' },
            this.state.head
          ),
          _react2.default.createElement(
            'div',
            { className: 'fade', id: 'fade_' + this.props.ind },
            this.props.summary
          ),
          _react2.default.createElement(
            'a',
            { className: 'readMore', href: '#', onClick: this.clickHandler },
            'Read More'
          ),
          _react2.default.createElement(
            'footer',
            { className: 'summaryFooter' },
            _react2.default.createElement(
              'p',
              null,
              'Morningstar'
            )
          )
        )
      );
    }
  }]);

  return SummaryBox;
}(_react.Component);

exports.default = SummaryBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvc3VtbWFyeUJveC5qc3giXSwibmFtZXMiOlsiU3VtbWFyeUJveCIsInByb3BzIiwiY2xpY2tIYW5kbGVyIiwiY2xpY2tlZFJlYWRNb3JlIiwiYmluZCIsInN0YXRlIiwiaGVhZCIsInNob3dDb25kZW5zZWQiLCJpbmQiLCJzZXRTdGF0ZSIsImNzcyIsInRvcHB4IiwiaGVpZ2h0RGlmZiIsImNvbnNvbGUiLCJsb2ciLCJhZGRIZWlnaHQiLCJhZGRUb3AiLCJpZGVudGlmaWVyIiwiYWZ0ZXIiLCJTdHJpbmciLCJOdW1iZXIiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJoZWlnaHQiLCJuZXdIZWlnaHQiLCJ0b3AiLCJuZXdUb3AiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdW1tYXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxZQUFMLEdBQW9CLE1BQUtDLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXBCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU8sU0FESTtBQUVYQyxxQkFBZ0I7QUFGTCxLQUFiO0FBSGlCO0FBT2xCOzs7O3dDQUVvQjtBQUNuQixVQUFJRCxhQUFKO0FBQ0EsVUFBRyxLQUFLTCxLQUFMLENBQVdPLEdBQVgsS0FBbUIsQ0FBdEIsRUFBeUI7QUFDdkJGLGVBQU8sS0FBUDtBQUNELE9BRkQsTUFFTztBQUNMQSxlQUFPLE1BQVA7QUFDRDtBQUNELFdBQUtHLFFBQUwsQ0FBYztBQUNaSCxjQUFVQSxJQUFWO0FBRFksT0FBZDtBQUdEOzs7eUNBRXFCO0FBQ3BCLFVBQUksS0FBS0QsS0FBTCxDQUFXRSxhQUFmLEVBQThCO0FBQzVCLHlDQUFXLEtBQUtOLEtBQUwsQ0FBV08sR0FBdEIsRUFBNkJFLEdBQTdCLENB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S0FBS1AsS0FBTCxDQUFXTyxHQUEzRDtBQUNFO0FBQUE7QUFBQSxjQUFLLE9BQU0sSUFBWCxFQUFnQixRQUFPLElBQXZCLEVBQTRCLFNBQVEsV0FBcEM7QUFDRTtBQUFBO0FBQUE7QUFDRSxzREFBTyxHQUFFLGdSQUFUO0FBREY7QUFERjtBQURGLFNBREY7QUFRRTtBQUFBO0FBQUEsWUFBSyxvQkFBa0IsS0FBS1AsS0FBTCxDQUFXTyxHQUFsQztBQUNFO0FBQUE7QUFBQSxjQUFHLFdBQVUsYUFBYjtBQUE0QixpQkFBS0gsS0FBTCxDQUFXQztBQUF2QyxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmLEVBQXNCLGNBQVksS0FBS0wsS0FBTCxDQUFXTyxHQUE3QztBQUNHLGlCQUFLUCxLQUFMLENBQVc0QjtBQURkLFdBRkY7QUFLRTtBQUFBO0FBQUEsY0FBRyxXQUFVLFVBQWIsRUFBd0IsTUFBSyxHQUE3QixFQUFpQyxTQUFTLEtBQUszQixZQUEvQztBQUFBO0FBQUEsV0FMRjtBQVFFO0FBQUE7QUFBQSxjQUFRLFdBQVUsZUFBbEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFSRjtBQVJGLE9BREY7QUF1QkQ7Ozs7RUFoR3NCNEIsZ0I7O2tCQW1HVjlCLFUiLCJmaWxlIjoic3VtbWFyeUJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmNsYXNzIFN1bW1hcnlCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tlZFJlYWRNb3JlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhlYWQgOiAnU3VtbWFyeScsXG4gICAgICBzaG93Q29uZGVuc2VkIDogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBsZXQgaGVhZDtcbiAgICBpZih0aGlzLnByb3BzLmluZCA9PT0gMCkge1xuICAgICAgaGVhZCA9ICdCdXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkID0gJ1NlbGwnO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICBoZWFkIDogYCR7aGVhZH0gU3VtbWFyeWBcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0NvbmRlbnNlZCkge1xuICAgICAgJChgI2ZhZGVfJHt0aGlzLnByb3BzLmluZH1gKS5jc3Moe1wib3ZlcmZsb3dcIiA6IFwiaGlkZGVuXCIsIFwiaGVpZ2h0XCIgOiBcIjQ1cHhcIn0pO1xuICAgICAgJChgI3N1bW1hcnlCb3hfJHt0aGlzLnByb3BzLmluZH1gKS5jc3MoXCJoZWlnaHRcIiwgXCIxNjAuNTZweFwiKTtcbiAgICAgIGxldCB0b3BweDtcbiAgICAgIGlmICh0aGlzLnByb3BzLmluZCA9PT0gMCkge1xuICAgICAgICAkKGAjc3VtbWFyeVBvc2l0aW9uQ29udHJvbF8xYCkuY3NzKFwidG9wXCIsIFwiMHB4XCIpXG4gICAgICAgIHRvcHB4ID0gJzE2cHgnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3BweCA9ICctMTk1cHgnXG4gICAgICB9O1xuICAgICAgJChgI3N1bW1hcnlUYWlsXyR7dGhpcy5wcm9wcy5pbmR9YCkuY3NzKFwidG9wXCIsIHRvcHB4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGhlaWdodERpZmY7XG4gICAgICAvLyBoZWlnaHRCZWZvcmUgPSAkKGAjZmFkZV8ke3RoaXMucHJvcHMuaW5kfWApLmNzc1xuICAgICAgJChgI2ZhZGVfJHt0aGlzLnByb3BzLmluZH1gKS5jc3Moe1wib3ZlcmZsb3dcIiA6IFwidmlzaWJsZVwiLCBcImhlaWdodFwiIDogXCJhdXRvXCJ9KTtcblxuICAgICAgaGVpZ2h0RGlmZiA9IHRoaXMuaGVpZ2h0RGlmZihgI2ZhZGVfJHt0aGlzLnByb3BzLmluZH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGhlaWdodERpZmYpXG4gICAgICB0aGlzLmFkZEhlaWdodChgI3N1bW1hcnlCb3hfJHt0aGlzLnByb3BzLmluZH1gLCBoZWlnaHREaWZmKTtcbiAgICAgIHRoaXMuYWRkVG9wKGAjc3VtbWFyeVRhaWxfJHt0aGlzLnByb3BzLmluZH1gLCBoZWlnaHREaWZmKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmluZCA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkZFRvcChgI3N1bW1hcnlQb3NpdGlvbkNvbnRyb2xfMWAsIGAtJHtoZWlnaHREaWZmfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhlaWdodERpZmYgKGlkZW50aWZpZXIpIHtcbiAgICBsZXQgYWZ0ZXIgPSAkKGlkZW50aWZpZXIpLmNzcygnaGVpZ2h0Jyk7XG4gICAgcmV0dXJuICAoYCR7U3RyaW5nKE51bWJlcihhZnRlci5zdWJzdHJpbmcoMCwgYWZ0ZXIubGVuZ3RoIC0gMikpIC0gNDUpfXB4YCk7XG4gIH1cblxuICBhZGRIZWlnaHQgKGlkZW50aWZpZXIsIGhlaWdodERpZmYpIHtcbiAgICBsZXQgaGVpZ2h0ID0gJChpZGVudGlmaWVyKS5jc3MoXCJoZWlnaHRcIik7XG4gICAgbGV0IG5ld0hlaWdodCA9IGAke1N0cmluZyhOdW1iZXIoaGVpZ2h0LnN1YnN0cmluZygwLCBoZWlnaHQubGVuZ3RoIC0gMikpICsgTnVtYmVyKGhlaWdodERpZmYuc3Vic3RyaW5nKDAsIGhlaWdodERpZmYubGVuZ3RoIC0gMikpKX1weGA7XG4gICAgJChpZGVudGlmaWVyKS5jc3MoXCJoZWlnaHRcIiwgbmV3SGVpZ2h0KTtcbiAgfVxuXG4gIGFkZFRvcCAoaWRlbnRpZmllciwgaGVpZ2h0RGlmZikge1xuICAgIGxldCB0b3AgPSAkKGlkZW50aWZpZXIpLmNzcyhcInRvcFwiKTtcbiAgICBsZXQgbmV3VG9wID0gYCR7U3RyaW5nKE51bWJlcih0b3Auc3Vic3RyaW5nKDAsIHRvcC5sZW5ndGggLSAyKSkgKyBOdW1iZXIoaGVpZ2h0RGlmZi5zdWJzdHJpbmcoMCwgaGVpZ2h0RGlmZi5sZW5ndGggLSAyKSkpfXB4YDtcbiAgICAkKGlkZW50aWZpZXIpLmNzcyhcInRvcFwiLCBuZXdUb3ApO1xuICB9XG5cbiAgY2xpY2tlZFJlYWRNb3JlIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZGVuc2VkIDogIXRoaXMuc3RhdGUuc2hvd0NvbmRlbnNlZCB9KTtcbiAgfVxuXG4gIC8vIHJlbmRlcnMgZW50aXJlIGVhcm5pbmdzIHNlY3Rpb24gd2l0aCBZQXhpcywgRGF0YVBvaW50cywgWEF4aXMsIGFuZCBEZXNjcmlwdGlvbnMgYXMgc3ViY29tcG9uZW50c1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtgc3VtbWFyeVBvc2l0aW9uQ29udHJvbF8ke3RoaXMucHJvcHMuaW5kfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3VtbWFyeVRhaWwnIGlkPXtgc3VtbWFyeVRhaWxfJHt0aGlzLnByb3BzLmluZH1gfT5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjBcIj5cbiAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8cGF0aCAgZD1cIk02LjY2MTMzODE1ZS0xNSw2Ljg5MjQ5NDg5ZS0xNCBMMjQsMS4zMDk1NzQwM2UtMTIgTDMuMzQ5MzkzMjEsMTguODc2ODI2MiBMMy4zNDkzOTMyMSwxOC44NzY4MjYyIEMyLjUzNDExNTgsMTkuNjIyMDc1NSAxLjI2OTA1ODk0LDE5LjU2NTMwNjUgMC41MjM4MDk2NDksMTguNzUwMDI5IEMwLjE4Njg1MTYxNiwxOC4zODE0MDg0IDIuMzQwODc5NTVlLTEzLDE3LjkwMDA1NzQgMi4yNjkyOTU4NmUtMTMsMTcuNDAwNjM1OCBMNi42NjEzMzgxNWUtMTUsNi44OTI0OTQ4OWUtMTQgWlwiPjwvcGF0aD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9e2BzdW1tYXJ5Qm94XyR7dGhpcy5wcm9wcy5pbmR9YH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdW1tYXJ5SGVhZCc+e3RoaXMuc3RhdGUuaGVhZH08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWRlXCIgaWQ9e2BmYWRlXyR7dGhpcy5wcm9wcy5pbmR9YH0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdW1tYXJ5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncmVhZE1vcmUnIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInN1bW1hcnlGb290ZXJcIj5cbiAgICAgICAgICAgIDxwPk1vcm5pbmdzdGFyPC9wPlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5Qm94OyJdfQ==