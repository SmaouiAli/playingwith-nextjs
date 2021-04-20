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
    className: _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [console.log(view), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      children: "logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return router.push('/');
      },
      children: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return router.push('/feed/1');
      },
      children: "Feed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return router.push('/eom');
      },
      children: "EOM"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return window.location.href = 'https://www.youtube.com/watch?v=xtItzwYG6oQ&ab_channel=PortEXE';
      },
      children: "Twitter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: function onClick() {
        return router.push('/descrip');
      },
      children: "test "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return setView(!view);
        },
        children: "Outcomes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
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
          lineNumber: 21,
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
          lineNumber: 25,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 27
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29sYmFyLmpzIl0sIm5hbWVzIjpbIlRvb2xiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3Iiwic3R5bGVzIiwibWFpbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZHJvcCIsIm9wdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFJO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHVCLGtCQUVDQyxzREFBUSxDQUFDLElBQUQsQ0FGVDtBQUFBLE1BRWhCQyxJQUZnQjtBQUFBLE1BRVZDLE9BRlU7O0FBS3ZCLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxpRUFBTSxDQUFDQyxJQUF2QjtBQUFBLGVBQ0tDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaLENBREwsZUFFSTtBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSTtBQUFLLGFBQU8sRUFBRTtBQUFBLGVBQUtILE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLEdBQVosQ0FBTDtBQUFBLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUssYUFBTyxFQUFFO0FBQUEsZUFBS1QsTUFBTSxDQUFDUyxJQUFQLENBQVksU0FBWixDQUFMO0FBQUEsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBS0k7QUFBSyxhQUFPLEVBQUU7QUFBQSxlQUFLVCxNQUFNLENBQUNTLElBQVAsQ0FBWSxNQUFaLENBQUw7QUFBQSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFNSTtBQUFLLGFBQU8sRUFBRTtBQUFBLGVBQUtDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBc0IsZ0VBQTNCO0FBQUEsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBT0k7QUFBSyxhQUFPLEVBQUU7QUFBQSxlQUFLWixNQUFNLENBQUNTLElBQVAsQ0FBWSxVQUFaLENBQUw7QUFBQSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFRSTtBQUFBLDhCQUNBO0FBQU0sZUFBTyxFQUFFO0FBQUEsaUJBQUlMLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVg7QUFBQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsRUFFSyxDQUFDQSxJQUFELGlCQUFTO0FBQUssaUJBQVMsRUFBRUUsaUVBQU0sQ0FBQ1EsSUFBdkI7QUFBQSxnQ0FDVjtBQUFJLFlBQUUsRUFBRVIsaUVBQU0sQ0FBQ1MsR0FBZjtBQUFtQixpQkFBTyxFQUFFLG1CQUFLO0FBQzdCZCxrQkFBTSxDQUFDUyxJQUFQLENBQVksV0FBWjtBQUNBTCxtQkFBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUNQLFdBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFUsZUFLVjtBQUFJLFlBQUUsRUFBRUUsaUVBQU0sQ0FBQ1MsR0FBZjtBQUFtQixpQkFBTyxFQUFFLG1CQUFLO0FBQzdCZCxrQkFBTSxDQUFDUyxJQUFQLENBQVksU0FBWjtBQUNBTCxtQkFBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUNQLFdBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkosZUFxQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0QkgsQ0FqQ007O0dBQU1KLE87VUFDTUUscUQ7OztLQURORixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTZjYzNhMGRiOWMwOTUwOWQ5NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Rvb2xiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGNvbnN0IFRvb2xiYXIgPSAoKT0+e1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKHZpZXcpfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPmxvZ288L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKCcvJyl9PkhvbWU8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKCcvZmVlZC8xJyl9PkZlZWQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKCcvZW9tJyl9PkVPTTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXh0SXR6d1lHNm9RJmFiX2NoYW5uZWw9UG9ydEVYRScgfT5Ud2l0dGVyPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiByb3V0ZXIucHVzaCgnL2Rlc2NyaXAnKX0+dGVzdCA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9eygpPT5zZXRWaWV3KCF2aWV3KX0gPk91dGNvbWVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7IXZpZXcgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wfT5cclxuICAgICAgICAgICAgICAgIDxoMyBpZD17c3R5bGVzLm9wdH1vbkNsaWNrPXsoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2plY3RzJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3KCF2aWV3KVxyXG4gICAgICAgICAgICB9fT5TdHVkZW50cyBwcm9qZWN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDMgaWQ9e3N0eWxlcy5vcHR9b25DbGljaz17KCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9yZXBvcnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXcoIXZpZXcpXHJcbiAgICAgICAgICAgIH19Pk91dGNvbWVzIFJlcG9ydDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PmxvZ288L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==