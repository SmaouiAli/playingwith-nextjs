webpackHotUpdate_N_E("pages/report",{

/***/ "./pages/report.js":
/*!*************************!*\
  !*** ./pages/report.js ***!
  \*************************/
/*! exports provided: Report, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdb_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdb-ui-kit */ "./node_modules/mdb-ui-kit/js/mdb.min.js");
/* harmony import */ var mdb_ui_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdb_ui_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fakeData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fakeData.js */ "./fakeData.js");


var _jsxFileName = "C:\\Users\\RBK\\Desktop\\rbk\\pages\\report.js",
    _this = undefined;



console.log(_fakeData_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
var Report = function Report(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "reportPage",
    children: _fakeData_js__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (e, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "myimage",
          src: e.img,
          alt: "..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 1
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "mf",
          children: "\uD83E\uDD13\uD83E\uDD13\uD83E\uDD13"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 1
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "title",
          children: e.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 1
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "description",
          children: e.description.slice(0, 120) + ' ...'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 1
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn",
          children: "Discover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 1
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};
_c = Report;
/* harmony default export */ __webpack_exports__["default"] = (Report);

var _c;

$RefreshReg$(_c, "Report");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVwb3J0LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiUmVwb3J0IiwicHJvcHMiLCJtYXAiLCJlIiwiaSIsImltZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9EQUFaO0FBQ08sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCLHNCQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSxjQVVQRixvREFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsMEJBQU87QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDakI7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBeUIsYUFBRyxFQUFFRCxDQUFDLENBQUNFLEdBQWhDO0FBQXFDLGFBQUcsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQixlQUVqQjtBQUFNLG1CQUFTLEVBQUMsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmlCLGVBR2pCO0FBQU0sbUJBQVMsRUFBQyxPQUFoQjtBQUFBLG9CQUF5QkYsQ0FBQyxDQUFDRztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhpQixlQUlqQjtBQUFHLG1CQUFTLEVBQUMsYUFBYjtBQUFBLG9CQUE0QkgsQ0FBQyxDQUFDSSxXQUFGLENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBc0IsR0FBdEIsSUFBNkI7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKaUIsZUFLakI7QUFBUSxtQkFBUyxFQUFDLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxpQjtBQUFBLFNBQTJCSixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFBQSxLQUFUO0FBVk87QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUJILENBdEJNO0tBQU1KLE07QUEwQkVBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlcG9ydC4xMThkMjVkMjk5YjFhMTZmMGRiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAqIGFzIG1kYiBmcm9tICdtZGItdWkta2l0JztcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZmFrZURhdGEuanMnXHJcbmNvbnNvbGUubG9nKGRhdGEpO1xyXG5leHBvcnQgY29uc3QgUmVwb3J0ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3J0UGFnZVwiPlxyXG4gICAgICAgICAgIFxyXG4gIFxyXG57LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbjxpbWcgY2xhc3NOYW1lPVwibXlpbWFnZVwiIHNyYz1cImh0dHBzOi8vd3d3LnJlY3J1dGVyLnRuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L0NhcmVlcnMtMTIwLmpwZ1wiIGFsdD1cIi4uLlwiLz5cclxuPHNwYW4gY2xhc3NOYW1lPVwibWZcIj7wn6ST8J+kk/CfpJM8L3NwYW4+XHJcbjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VGVzbGE8L3NwYW4+XHJcbjxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+RWxvbiBNdXNrIGlzIGEgU291dGggQWZyaWNhbi1ib3JuIEFtZXJpY2FuIGVudHJlcHJlbmV1ciBhbmQgYnVzaW5lc3NtYW4gd2hvIGZvdW5kZWQgWC5jb20gaW4gMTk5OSAod2hpY2ggbGF0ZXIgYmVjYW1lIFBheVBhbCksIFNwYWNlWCBpbiAyMDAyIGFuZCBUZXNsYSBNb3RvcnMgaW4gMjAwMyAuLi48L3A+XHJcbjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+RGlzY292ZXI8L2J1dHRvbj5cclxuPC9kaXY+ICovfVxyXG57ZGF0YS5tYXAoKGUsaSk9PjxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17aX0+XHJcbjxpbWcgY2xhc3NOYW1lPVwibXlpbWFnZVwiIHNyYz17ZS5pbWd9IGFsdD1cIi4uLlwiLz5cclxuPHNwYW4gY2xhc3NOYW1lPVwibWZcIj7wn6ST8J+kk/CfpJM8L3NwYW4+XHJcbjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e2UudGl0bGV9PC9zcGFuPlxyXG48cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntlLmRlc2NyaXB0aW9uLnNsaWNlKDAsMTIwKSArICcgLi4uJ308L3A+XHJcbjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+RGlzY292ZXI8L2J1dHRvbj5cclxuPC9kaXY+XHJcbil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9