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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return router.push('/feed/1');
        },
        children: "Feed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return router.push('/eom');
        },
        children: "EOM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return window.location.href = 'https://www.youtube.com/watch?v=xtItzwYG6oQ&ab_channel=PortEXE';
        },
        children: "Twitter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return router.push('/descrip');
        },
        children: "test "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            return setView(!view);
          },
          children: "Outcomes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
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
            lineNumber: 24,
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
            lineNumber: 28,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 27
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29sYmFyLmpzIl0sIm5hbWVzIjpbIlRvb2xiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3Iiwic3R5bGVzIiwibG9nbyIsIm1haW4iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRyb3AiLCJvcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBSTtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR1QixrQkFFQ0Msc0RBQVEsQ0FBQyxJQUFELENBRlQ7QUFBQSxNQUVoQkMsSUFGZ0I7QUFBQSxNQUVWQyxPQUZVOztBQUt2QixzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQyxpRUFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxTQUFHO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0E7QUFBSyxlQUFTLEVBQUVELGlFQUFNLENBQUNFLElBQXZCO0FBQUEsaUJBQ0tDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaLENBREwsZUFHSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFLSCxNQUFNLENBQUNVLElBQVAsQ0FBWSxHQUFaLENBQUw7QUFBQSxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFLVixNQUFNLENBQUNVLElBQVAsQ0FBWSxTQUFaLENBQUw7QUFBQSxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFLVixNQUFNLENBQUNVLElBQVAsQ0FBWSxNQUFaLENBQUw7QUFBQSxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFNSTtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFLQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXNCLGdFQUEzQjtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JO0FBQUssZUFBTyxFQUFFO0FBQUEsaUJBQUtiLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLFVBQVosQ0FBTDtBQUFBLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixlQVFJO0FBQUEsZ0NBQ0E7QUFBTSxpQkFBTyxFQUFFO0FBQUEsbUJBQUlOLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVg7QUFBQSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLEVBRUssQ0FBQ0EsSUFBRCxpQkFBUztBQUFLLG1CQUFTLEVBQUVFLGlFQUFNLENBQUNTLElBQXZCO0FBQUEsa0NBQ1Y7QUFBSSxjQUFFLEVBQUVULGlFQUFNLENBQUNVLEdBQWY7QUFBbUIsbUJBQU8sRUFBRSxtQkFBSztBQUM3QmYsb0JBQU0sQ0FBQ1UsSUFBUCxDQUFZLFdBQVo7QUFDQU4scUJBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDUCxhQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVLGVBS1Y7QUFBSSxjQUFFLEVBQUVFLGlFQUFNLENBQUNVLEdBQWY7QUFBbUIsbUJBQU8sRUFBRSxtQkFBSztBQUM3QmYsb0JBQU0sQ0FBQ1UsSUFBUCxDQUFZLFNBQVo7QUFDQU4scUJBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDUCxhQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlDSCxDQXRDTTs7R0FBTUosTztVQUNNRSxxRDs7O0tBRE5GLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMjNhZGRhM2RjMjIyZDRmMzljOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9vbGJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgY29uc3QgVG9vbGJhciA9ICgpPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PmxvZ288L2Rpdj5cclxuICAgICAgICAgICAgPGltZyBzcmMvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh2aWV3KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIucHVzaCgnLycpfT5Ib21lPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIucHVzaCgnL2ZlZWQvMScpfT5GZWVkPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIucHVzaCgnL2VvbScpfT5FT008L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0naHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj14dEl0endZRzZvUSZhYl9jaGFubmVsPVBvcnRFWEUnIH0+VHdpdHRlcjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy9kZXNjcmlwJyl9PnRlc3QgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8ZGl2ICBvbkNsaWNrPXsoKT0+c2V0Vmlldyghdmlldyl9ID5PdXRjb21lczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyF2aWV3ICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcH0+XHJcbiAgICAgICAgICAgICAgICA8aDMgaWQ9e3N0eWxlcy5vcHR9b25DbGljaz17KCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9qZWN0cycpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlldyghdmlldylcclxuICAgICAgICAgICAgfX0+U3R1ZGVudHMgcHJvamVjdHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzIGlkPXtzdHlsZXMub3B0fW9uQ2xpY2s9eygpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcmVwb3J0JylcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3KCF2aWV3KVxyXG4gICAgICAgICAgICB9fT5PdXRjb21lcyBSZXBvcnQ8L2gzPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==