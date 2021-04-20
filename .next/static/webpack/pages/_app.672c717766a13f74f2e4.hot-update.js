webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/toolbar.js":
/*!*******************************!*\
  !*** ./components/toolbar.js ***!
  \*******************************/
/*! exports provided: Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Toolbar.module.css */ "./styles/Toolbar.module.css");
/* harmony import */ var _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\RBK\\Desktop\\rbk\\components\\toolbar.js",
    _this = undefined,
    _s = $RefreshSig$();




var Toolbar = function Toolbar() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      view = _useState[0],
      setView = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
      children: "logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: [console.log(view), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return router.push('/');
        },
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return router.push('/feed/1');
        },
        children: "Feed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return router.push('/eom');
        },
        children: "EOM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return window.location.href = 'https://www.youtube.com/watch?v=xtItzwYG6oQ&ab_channel=PortEXE';
        },
        children: "Twitter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return router.push('/descrip');
        },
        children: "test "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return setView(!view);
          },
          children: "Outcomes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, _this), !view && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.drop,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            id: _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.opt,
            onClick: function onClick() {
              router.push('/projects');
              setView(!view);
            },
            children: "Students projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            id: _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.opt,
            onClick: function onClick() {
              router.push('/report');
              setView(!view);
            },
            children: "Outcomes Report"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_s(Toolbar, "iLCCk6EP31AVCyav8uHwzQEg2m4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Toolbar;

var _c;

$RefreshReg$(_c, "Toolbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29sYmFyLmpzIl0sIm5hbWVzIjpbIlRvb2xiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3Iiwic3R5bGVzIiwibG9nbyIsIm1haW4iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRyb3AiLCJvcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBSTtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR1QixrQkFFQ0Msc0RBQVEsQ0FBQyxJQUFELENBRlQ7QUFBQSxNQUVoQkMsSUFGZ0I7QUFBQSxNQUVWQyxPQUZVOztBQUt2QixzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQyxpRUFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUE7QUFBSyxlQUFTLEVBQUVELGlFQUFNLENBQUNFLElBQXZCO0FBQUEsaUJBQ0tDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaLENBREwsZUFHSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFLSCxNQUFNLENBQUNVLElBQVAsQ0FBWSxHQUFaLENBQUw7QUFBQSxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFLVixNQUFNLENBQUNVLElBQVAsQ0FBWSxTQUFaLENBQUw7QUFBQSxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFLVixNQUFNLENBQUNVLElBQVAsQ0FBWSxNQUFaLENBQUw7QUFBQSxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFNSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFLQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXNCLGdFQUEzQjtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JO0FBQUssZUFBTyxFQUFFO0FBQUEsaUJBQUtiLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLFVBQVosQ0FBTDtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixlQVFJO0FBQUEsZ0NBQ0E7QUFBTSxpQkFBTyxFQUFFO0FBQUEsbUJBQUlOLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVg7QUFBQSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLEVBRUssQ0FBQ0EsSUFBRCxpQkFBUztBQUFLLG1CQUFTLEVBQUVFLGlFQUFNLENBQUNTLElBQXZCO0FBQUEsa0NBQ1Y7QUFBSSxjQUFFLEVBQUVULGlFQUFNLENBQUNVLEdBQWY7QUFBbUIsbUJBQU8sRUFBRSxtQkFBSztBQUM3QmYsb0JBQU0sQ0FBQ1UsSUFBUCxDQUFZLFdBQVo7QUFDQU4scUJBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDUCxhQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVLGVBS1Y7QUFBSSxjQUFFLEVBQUVFLGlFQUFNLENBQUNVLEdBQWY7QUFBbUIsbUJBQU8sRUFBRSxtQkFBSztBQUM3QmYsb0JBQU0sQ0FBQ1UsSUFBUCxDQUFZLFNBQVo7QUFDQU4scUJBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDUCxhQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdDSCxDQXJDTTs7R0FBTUosTztVQUNNRSxxRDs7O0tBRE5GLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NzJjNzE3NzY2YTEzZjc0ZjJlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9vbGJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgVG9vbGJhciA9ICgpPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PmxvZ288L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICB7Y29uc29sZS5sb2codmlldyl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy8nKX0+SG9tZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy9mZWVkLzEnKX0+RmVlZDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy9lb20nKX0+RU9NPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9eHRJdHp3WUc2b1EmYWJfY2hhbm5lbD1Qb3J0RVhFJyB9PlR3aXR0ZXI8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKCcvZGVzY3JpcCcpfT50ZXN0IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPGRpdiAgb25DbGljaz17KCk9PnNldFZpZXcoIXZpZXcpfSA+T3V0Y29tZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHshdmlldyAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3B9PlxyXG4gICAgICAgICAgICAgICAgPGgzIGlkPXtzdHlsZXMub3B0fW9uQ2xpY2s9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcHJvamVjdHMnKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXcoIXZpZXcpXHJcbiAgICAgICAgICAgIH19PlN0dWRlbnRzIHByb2plY3RzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMyBpZD17c3R5bGVzLm9wdH1vbkNsaWNrPXsoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3JlcG9ydCcpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlldyghdmlldylcclxuICAgICAgICAgICAgfX0+T3V0Y29tZXMgUmVwb3J0PC9oMz5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=