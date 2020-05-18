"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PillView = function PillView(_ref) {
  var pill = _ref.pill,
      bgColor = _ref.bgColor,
      borderColor = _ref.borderColor,
      textColor = _ref.textColor;
  return _react["default"].createElement("div", {
    id: "cmsEdtiorComponentPill",
    style: {
      backgroundColor: bgColor,
      border: "1px solid ".concat(borderColor),
      color: textColor,
      textAlign: "center",
      fontSize: "0.75em ",
      display: "inline-block",
      verticalAlign: "middle",
      fontWeight: 500,
      borderRadius: "10rem",
      padding: "2px 10px",
      marginRight: "10px"
    }
  }, pill);
};

PillView.propTypes = {
  pill: _propTypes["default"].string.isRequired,
  bgColor: _propTypes["default"].string.isRequired,
  borderColor: _propTypes["default"].string.isRequired,
  textColor: _propTypes["default"].string.isRequired
};
var _default = PillView;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9waWxsLXZpZXcuanMiXSwibmFtZXMiOlsiUGlsbFZpZXciLCJwaWxsIiwiYmdDb2xvciIsImJvcmRlckNvbG9yIiwidGV4dENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQStDO0FBQUEsTUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztBQUFBLE1BQXRDQyxPQUFzQyxRQUF0Q0EsT0FBc0M7QUFBQSxNQUE3QkMsV0FBNkIsUUFBN0JBLFdBQTZCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUM5RCxTQUNFO0FBQ0EsSUFBQSxFQUFFLEVBQUMsd0JBREg7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxlQUFlLEVBQUVILE9BRFo7QUFFTEksTUFBQUEsTUFBTSxzQkFBZUgsV0FBZixDQUZEO0FBR0xJLE1BQUFBLEtBQUssRUFBRUgsU0FIRjtBQUlMSSxNQUFBQSxTQUFTLEVBQUUsUUFKTjtBQUtMQyxNQUFBQSxRQUFRLEVBQUUsU0FMTDtBQU1MQyxNQUFBQSxPQUFPLEVBQUUsY0FOSjtBQU9MQyxNQUFBQSxhQUFhLEVBQUUsUUFQVjtBQVFMQyxNQUFBQSxVQUFVLEVBQUUsR0FSUDtBQVNMQyxNQUFBQSxZQUFZLEVBQUUsT0FUVDtBQVVMQyxNQUFBQSxPQUFPLEVBQUUsVUFWSjtBQVdMQyxNQUFBQSxXQUFXLEVBQUU7QUFYUjtBQUZULEtBZ0JHZCxJQWhCSCxDQURGO0FBb0JELENBckJEOztBQXVCQUQsUUFBUSxDQUFDZ0IsU0FBVCxHQUFxQjtBQUNuQmYsRUFBQUEsSUFBSSxFQUFFZ0Isc0JBQVVDLE1BQVYsQ0FBaUJDLFVBREo7QUFFbkJqQixFQUFBQSxPQUFPLEVBQUVlLHNCQUFVQyxNQUFWLENBQWlCQyxVQUZQO0FBR25CaEIsRUFBQUEsV0FBVyxFQUFFYyxzQkFBVUMsTUFBVixDQUFpQkMsVUFIWDtBQUluQmYsRUFBQUEsU0FBUyxFQUFFYSxzQkFBVUMsTUFBVixDQUFpQkM7QUFKVCxDQUFyQjtlQU9lbkIsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY29uc3QgUGlsbFZpZXcgPSAoeyBwaWxsLCBiZ0NvbG9yLCBib3JkZXJDb2xvciwgdGV4dENvbG9yIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgaWQ9XCJjbXNFZHRpb3JDb21wb25lbnRQaWxsXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYmdDb2xvcixcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YCxcbiAgICAgICAgY29sb3I6IHRleHRDb2xvcixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBmb250U2l6ZTogXCIwLjc1ZW0gXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcmVtXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMnB4IDEwcHhcIixcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwaWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGlsbFZpZXcucHJvcFR5cGVzID0ge1xuICBwaWxsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJnQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYm9yZGVyQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGV4dENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBpbGxWaWV3O1xuIl19