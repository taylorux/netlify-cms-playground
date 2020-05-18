"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NetlifyCmsEditorComponentPill = void 0;
var pill = {
  // Internal id of the component
  id: "pill",
  // Visible label
  label: "Pill",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{
    name: "text",
    label: "Text",
    widget: "string"
  }, {
    name: "bgColor",
    label: "Background Color",
    widget: "string",
    "default": "#F1E9F2"
  }, {
    label: "Text Color",
    name: "textColor",
    widget: "string",
    "default": "black"
  }, {
    label: "Border Color",
    name: "borderColor",
    widget: "string",
    "default": "#92509B"
  }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^{{< Pill text="(.*)" bgColor="(.*)" textColor="(.*)" borderColor="(.*)" >}}$/,
  // Function to extract data elements from the regexp match
  fromBlock: function fromBlock(match) {
    return match && {
      text: match[1],
      bgColor: match[2],
      textColor: match[3],
      borderColor: match[4]
    };
  },
  toBlock: function toBlock(obj) {
    return "{{< Pill text=\"".concat(obj.text, "\" bgColor=\"").concat(obj.bgColor, "\" textColor=\"").concat(obj.textColor, "\" borderColor=\"").concat(obj.borderColor, "\" >}}");
  },
  // Preview output for this component. Can either be a string or a React component (component gives better render performance)
  toPreview: function toPreview(obj) {
    return "<div\n      style=\" \n        background-color:".concat(obj.bgColor, ";\n        border:1px solid ").concat(obj.borderColor, ";\n        color:").concat(obj.textColor, ";\n        text-align:center;\n        font-size:0.75em;\n        display:inline-block;\n        vertical-align:middle;\n        font-weight:500;  \n        border-radius:10rem;\n        padding:2px 10px;\n        margin-right:10px;\n      \"\n    >\n      ").concat(obj.text, "\n    </div>");
  }
};
var NetlifyCmsEditorComponentPill = pill;
exports.NetlifyCmsEditorComponentPill = NetlifyCmsEditorComponentPill;
var _default = pill;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwaWxsIiwiaWQiLCJsYWJlbCIsImZpZWxkcyIsIm5hbWUiLCJ3aWRnZXQiLCJwYXR0ZXJuIiwiZnJvbUJsb2NrIiwibWF0Y2giLCJ0ZXh0IiwiYmdDb2xvciIsInRleHRDb2xvciIsImJvcmRlckNvbG9yIiwidG9CbG9jayIsIm9iaiIsInRvUHJldmlldyIsIk5ldGxpZnlDbXNFZGl0b3JDb21wb25lbnRQaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUc7QUFDWDtBQUNBQyxFQUFBQSxFQUFFLEVBQUUsTUFGTztBQUdYO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxNQUpJO0FBS1g7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRUMsSUFBQUEsSUFBSSxFQUFFLE1BRFI7QUFFRUYsSUFBQUEsS0FBSyxFQUFFLE1BRlQ7QUFHRUcsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FETSxFQU1OO0FBQ0VELElBQUFBLElBQUksRUFBRSxTQURSO0FBRUVGLElBQUFBLEtBQUssRUFBRSxrQkFGVDtBQUdFRyxJQUFBQSxNQUFNLEVBQUUsUUFIVjtBQUlFO0FBSkYsR0FOTSxFQVlOO0FBQ0VILElBQUFBLEtBQUssRUFBRSxZQURUO0FBRUVFLElBQUFBLElBQUksRUFBRSxXQUZSO0FBR0VDLElBQUFBLE1BQU0sRUFBRSxRQUhWO0FBSUU7QUFKRixHQVpNLEVBa0JOO0FBQ0VILElBQUFBLEtBQUssRUFBRSxjQURUO0FBRUVFLElBQUFBLElBQUksRUFBRSxhQUZSO0FBR0VDLElBQUFBLE1BQU0sRUFBRSxRQUhWO0FBSUU7QUFKRixHQWxCTSxDQU5HO0FBK0JYO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRSwrRUFoQ0U7QUFpQ1g7QUFDQUMsRUFBQUEsU0FBUyxFQUFFLG1CQUFBQyxLQUFLO0FBQUEsV0FDZEEsS0FBSyxJQUFJO0FBQ1BDLE1BQUFBLElBQUksRUFBRUQsS0FBSyxDQUFDLENBQUQsQ0FESjtBQUVQRSxNQUFBQSxPQUFPLEVBQUVGLEtBQUssQ0FBQyxDQUFELENBRlA7QUFHUEcsTUFBQUEsU0FBUyxFQUFFSCxLQUFLLENBQUMsQ0FBRCxDQUhUO0FBSVBJLE1BQUFBLFdBQVcsRUFBRUosS0FBSyxDQUFDLENBQUQ7QUFKWCxLQURLO0FBQUEsR0FsQ0w7QUF5Q1hLLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLHFDQUEwQkEsR0FBRyxDQUFDTCxJQUE5QiwwQkFBa0RLLEdBQUcsQ0FBQ0osT0FBdEQsNEJBQStFSSxHQUFHLENBQUNILFNBQW5GLDhCQUFnSEcsR0FBRyxDQUFDRixXQUFwSDtBQUNELEdBM0NVO0FBNENYO0FBQ0FHLEVBQUFBLFNBQVMsRUFBRSxtQkFBU0QsR0FBVCxFQUFjO0FBQ3ZCLHFFQUV1QkEsR0FBRyxDQUFDSixPQUYzQix5Q0FHdUJJLEdBQUcsQ0FBQ0YsV0FIM0IsOEJBSVlFLEdBQUcsQ0FBQ0gsU0FKaEIsOFFBZUlHLEdBQUcsQ0FBQ0wsSUFmUjtBQWlCRDtBQS9EVSxDQUFiO0FBa0VPLElBQU1PLDZCQUE2QixHQUFHaEIsSUFBdEM7O2VBQ1FBLEkiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwaWxsID0ge1xuICAvLyBJbnRlcm5hbCBpZCBvZiB0aGUgY29tcG9uZW50XG4gIGlkOiBcInBpbGxcIixcbiAgLy8gVmlzaWJsZSBsYWJlbFxuICBsYWJlbDogXCJQaWxsXCIsXG4gIC8vIEZpZWxkcyB0aGUgdXNlciBuZWVkIHRvIGZpbGwgb3V0IHdoZW4gYWRkaW5nIGFuIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnRcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJ0ZXh0XCIsXG4gICAgICBsYWJlbDogXCJUZXh0XCIsXG4gICAgICB3aWRnZXQ6IFwic3RyaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImJnQ29sb3JcIixcbiAgICAgIGxhYmVsOiBcIkJhY2tncm91bmQgQ29sb3JcIixcbiAgICAgIHdpZGdldDogXCJzdHJpbmdcIixcbiAgICAgIGRlZmF1bHQ6IGAjRjFFOUYyYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlRleHQgQ29sb3JcIixcbiAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsXG4gICAgICB3aWRnZXQ6IFwic3RyaW5nXCIsXG4gICAgICBkZWZhdWx0OiBgYmxhY2tgLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQm9yZGVyIENvbG9yXCIsXG4gICAgICBuYW1lOiBcImJvcmRlckNvbG9yXCIsXG4gICAgICB3aWRnZXQ6IFwic3RyaW5nXCIsXG4gICAgICBkZWZhdWx0OiBgIzkyNTA5QmAsXG4gICAgfSxcbiAgXSxcbiAgLy8gUGF0dGVybiB0byBpZGVudGlmeSBhIGJsb2NrIGFzIGJlaW5nIGFuIGluc3RhbmNlIG9mIHRoaXMgY29tcG9uZW50XG4gIHBhdHRlcm46IC9ee3s8IFBpbGwgdGV4dD1cIiguKilcIiBiZ0NvbG9yPVwiKC4qKVwiIHRleHRDb2xvcj1cIiguKilcIiBib3JkZXJDb2xvcj1cIiguKilcIiA+fX0kLyxcbiAgLy8gRnVuY3Rpb24gdG8gZXh0cmFjdCBkYXRhIGVsZW1lbnRzIGZyb20gdGhlIHJlZ2V4cCBtYXRjaFxuICBmcm9tQmxvY2s6IG1hdGNoID0+XG4gICAgbWF0Y2ggJiYge1xuICAgICAgdGV4dDogbWF0Y2hbMV0sXG4gICAgICBiZ0NvbG9yOiBtYXRjaFsyXSxcbiAgICAgIHRleHRDb2xvcjogbWF0Y2hbM10sXG4gICAgICBib3JkZXJDb2xvcjogbWF0Y2hbNF0sXG4gICAgfSxcbiAgdG9CbG9jazogZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGB7ezwgUGlsbCB0ZXh0PVxcXCIke29iai50ZXh0fVxcXCIgYmdDb2xvcj1cXFwiJHtvYmouYmdDb2xvcn1cXFwiIHRleHRDb2xvcj1cXFwiJHtvYmoudGV4dENvbG9yfVxcXCIgYm9yZGVyQ29sb3I9XFxcIiR7b2JqLmJvcmRlckNvbG9yfVxcXCIgPn19YFxuICB9LFxuICAvLyBQcmV2aWV3IG91dHB1dCBmb3IgdGhpcyBjb21wb25lbnQuIENhbiBlaXRoZXIgYmUgYSBzdHJpbmcgb3IgYSBSZWFjdCBjb21wb25lbnQgKGNvbXBvbmVudCBnaXZlcyBiZXR0ZXIgcmVuZGVyIHBlcmZvcm1hbmNlKVxuICB0b1ByZXZpZXc6IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBgPGRpdlxuICAgICAgc3R5bGU9XCIgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JHtvYmouYmdDb2xvcn07XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgJHtvYmouYm9yZGVyQ29sb3J9O1xuICAgICAgICBjb2xvcjoke29iai50ZXh0Q29sb3J9O1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOjAuNzVlbTtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwOyAgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTByZW07XG4gICAgICAgIHBhZGRpbmc6MnB4IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgICAgXCJcbiAgICA+XG4gICAgICAke29iai50ZXh0fVxuICAgIDwvZGl2PmBcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBOZXRsaWZ5Q21zRWRpdG9yQ29tcG9uZW50UGlsbCA9IHBpbGw7XG5leHBvcnQgZGVmYXVsdCBwaWxsO1xuIl19