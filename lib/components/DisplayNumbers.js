"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DisplayNumbers;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function DisplayNumbers(_ref) {
  var list = _ref.list;
  var navigate = (0, _reactRouterDom.useNavigate)();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, list.join(', ')), /*#__PURE__*/_react["default"].createElement("input", {
    type: "button",
    value: "Back",
    className: "back",
    onClick: function onClick() {
      navigate('/');
    }
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdFJvdXRlckRvbSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJEaXNwbGF5TnVtYmVycyIsIl9yZWYiLCJsaXN0IiwibmF2aWdhdGUiLCJ1c2VOYXZpZ2F0ZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImpvaW4iLCJ0eXBlIiwidmFsdWUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZXMiOlsiLi4vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL0Rpc3BsYXlOdW1iZXJzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzcGxheU51bWJlcnMoeyBsaXN0IH06IHsgbGlzdDogbnVtYmVyW10gfSkge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+e2xpc3Quam9pbignLCAnKX08L2Rpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgdmFsdWU9XCJCYWNrXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFja1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgbmF2aWdhdGUoJy8nKTsgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLE1BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGVBQUEsR0FBQUQsT0FBQTtBQUErQyxTQUFBRCx1QkFBQUcsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBRWhDLFNBQVNFLGNBQWNBLENBQUFDLElBQUEsRUFBK0I7RUFBQSxJQUE1QkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDM0MsSUFBTUMsUUFBUSxHQUFHLElBQUFDLDJCQUFXLEVBQUMsQ0FBQztFQUM5QixvQkFDRVYsTUFBQSxZQUFBVyxhQUFBLENBQUFYLE1BQUEsWUFBQVksUUFBQSxxQkFDRVosTUFBQSxZQUFBVyxhQUFBLGNBQU1ILElBQUksQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBTyxDQUFDLGVBQzVCYixNQUFBLFlBQUFXLGFBQUE7SUFDRUcsSUFBSSxFQUFDLFFBQVE7SUFDYkMsS0FBSyxFQUFDLE1BQU07SUFDWkMsU0FBUyxFQUFDLE1BQU07SUFDaEJDLE9BQU8sRUFBRSxTQUFBQSxRQUFBLEVBQU07TUFBRVIsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUFFO0VBQUUsQ0FDbkMsQ0FDRCxDQUFDO0FBRVAifQ==