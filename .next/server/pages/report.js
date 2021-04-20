module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/report.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fakeData.js":
/*!*********************!*\
  !*** ./fakeData.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = [{
  title: "Tesla",
  description: "Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003 ...",
  img: "https://www.recruter.tn/wp-content/uploads/2019/08/Careers-120.jpg"
}, {
  title: "9ossnet",
  description: "9ossnet allows you to book for tickets from the confort of your house, you do not need to get outside risking your health since the corona panedemic,or you valuable car fuel , get you tickets delivered to your door steps at a click of a button ...",
  img: "https://d3l69s690g8302.cloudfront.net/wp-content/uploads/2017/05/01181207/hotel-booking-app.jpg"
}, {
  title: "Bekhtef",
  description: "You always wanted to get rid of some old stuff you have at home , clothes , broken electronics , dummies, plates whatever , remember things you look at as garbage are treasures for others , make some money by selling used stuff with bekhtef easy simple and will make you rich",
  img: "https://www.springwise.com/wp-content/uploads/2019/06/retail-innovation-upright-labs-seconhand-clothing_1280_1280x750.jpg"
}, {
  title: "Tflix",
  description: "why does Tunisa only have tv series in Ramadhan , well let me give it to you because there is no one encouraging to make some series during the year , with Tflix producers and filmmakers can post there movies or tv series on the platforms and with a low price subscription people can watch them and support the film industry in our country ! Hollywood we are coming ! ",
  img: "https://www.odeon.co.uk/media/bx4hnvbp/super-saver-top-banner.jpg"
}, {
  title: "Tuber",
  description: "Tuber stands for tunisian uber , are'nt you tired of waiting a cab ! fighting over a taxi with some random stranger, getting late at work because there were no taxi around or a bus. Tuber will allow civiliand to be a part of the transportation system in the country allowing them to provide them selves as drivers and get paid for it and with location tracking you will get notified with the closest driver and be able to book and get a ride whenever and whereever you are",
  img: "https://www.itdp.org/wp-content/uploads/2019/05/Traffic-USA-1-e1558632602236.jpg"
}, {
  title: "PetsFinder",
  description: "Don't hate it when you raise a pet for so long and you get attched to it , but someday you forget the door open and boom he flees ! now you need to buy posters and stick them to trees and announcement board, well no more animal lover now you can post in our app and people will provide answers if they can help , we only allow serious people and whom are ready to privide help",
  img: "https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/pets-cats-dogs-adobe-hero.jpg"
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./pages/report.js":
/*!*************************!*\
  !*** ./pages/report.js ***!
  \*************************/
/*! exports provided: Report, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdb_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdb-ui-kit */ "mdb-ui-kit");
/* harmony import */ var mdb_ui_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdb_ui_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fakeData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fakeData.js */ "./fakeData.js");

var _jsxFileName = "C:\\Users\\RBK\\Desktop\\playingwith-nextjs\\pages\\report.js";


console.log(_fakeData_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
const Report = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "reportPage",
    children: _fakeData_js__WEBPACK_IMPORTED_MODULE_2__["default"].map((e, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "myimage",
        src: e.img,
        alt: "..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 1
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "mf",
        children: "\u2B50\u2B50\u2B50\u2B50\u2B50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 1
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "title",
        children: e.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 1
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "description",
        children: e.description.slice(0, 80) + ' ...'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 1
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn",
        children: "Discover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 1
      }, undefined)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Report);

/***/ }),

/***/ "mdb-ui-kit":
/*!*****************************!*\
  !*** external "mdb-ui-kit" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdb-ui-kit");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZmFrZURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVwb3J0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1kYi11aS1raXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltZyIsImNvbnNvbGUiLCJsb2ciLCJSZXBvcnQiLCJwcm9wcyIsIm1hcCIsImUiLCJpIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQSxNQUFNQSxJQUFJLEdBQUcsQ0FDYjtBQUNBQyxPQUFLLEVBQUMsT0FETjtBQUVBQyxhQUFXLEVBQUMsNEtBRlo7QUFHQUMsS0FBRyxFQUFDO0FBSEosQ0FEYSxFQU1iO0FBQ0FGLE9BQUssRUFBQyxTQUROO0FBRUFDLGFBQVcsRUFBQyx5UEFGWjtBQUdBQyxLQUFHLEVBQUM7QUFISixDQU5hLEVBV2I7QUFDQUYsT0FBSyxFQUFDLFNBRE47QUFFQUMsYUFBVyxFQUFDLHFSQUZaO0FBR0FDLEtBQUcsRUFBQztBQUhKLENBWGEsRUFnQmI7QUFDQUYsT0FBSyxFQUFDLE9BRE47QUFFQUMsYUFBVyxFQUFDLGtYQUZaO0FBR0FDLEtBQUcsRUFBQztBQUhKLENBaEJhLEVBcUJiO0FBQ0FGLE9BQUssRUFBQyxPQUROO0FBRUFDLGFBQVcsRUFBQywwZEFGWjtBQUdBQyxLQUFHLEVBQUM7QUFISixDQXJCYSxFQTBCYjtBQUNBRixPQUFLLEVBQUMsWUFETjtBQUVBQyxhQUFXLEVBQUMsMFhBRlo7QUFHQUMsS0FBRyxFQUFDO0FBSEosQ0ExQmEsQ0FBYjtBQWdDZUgsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQUksT0FBTyxDQUFDQyxHQUFSLENBQVlMLG9EQUFaO0FBQ08sTUFBTU0sTUFBTSxHQUFJQyxLQUFELElBQVc7QUFDN0Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLGNBVVBQLG9EQUFJLENBQUNRLEdBQUwsQ0FBUyxDQUFDQyxDQUFELEVBQUdDLENBQUgsa0JBQU87QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNqQjtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUF5QixXQUFHLEVBQUVELENBQUMsQ0FBQ04sR0FBaEM7QUFBcUMsV0FBRyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGlCLGVBRWpCO0FBQU0saUJBQVMsRUFBQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGaUIsZUFHakI7QUFBTSxpQkFBUyxFQUFDLE9BQWhCO0FBQUEsa0JBQXlCTSxDQUFDLENBQUNSO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSGlCLGVBSWpCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUEsa0JBQTRCUSxDQUFDLENBQUNQLFdBQUYsQ0FBY1MsS0FBZCxDQUFvQixDQUFwQixFQUFzQixFQUF0QixJQUE0QjtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUppQixlQUtqQjtBQUFRLGlCQUFTLEVBQUMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTGlCO0FBQUEsT0FBMkJELENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWhCO0FBVk87QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBcUJILENBdEJNO0FBMEJRSixxRUFBZixFOzs7Ozs7Ozs7OztBQzlCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9yZXBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3JlcG9ydC5qc1wiKTtcbiIsImNvbnN0IGRhdGEgPSBbXHJcbntcclxudGl0bGU6XCJUZXNsYVwiLFxyXG5kZXNjcmlwdGlvbjpcIkVsb24gTXVzayBpcyBhIFNvdXRoIEFmcmljYW4tYm9ybiBBbWVyaWNhbiBlbnRyZXByZW5ldXIgYW5kIGJ1c2luZXNzbWFuIHdobyBmb3VuZGVkIFguY29tIGluIDE5OTkgKHdoaWNoIGxhdGVyIGJlY2FtZSBQYXlQYWwpLCBTcGFjZVggaW4gMjAwMiBhbmQgVGVzbGEgTW90b3JzIGluIDIwMDMgLi4uXCIsXHJcbmltZzpcImh0dHBzOi8vd3d3LnJlY3J1dGVyLnRuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA4L0NhcmVlcnMtMTIwLmpwZ1wiXHJcbn0sXHJcbntcclxudGl0bGU6XCI5b3NzbmV0XCIsXHJcbmRlc2NyaXB0aW9uOlwiOW9zc25ldCBhbGxvd3MgeW91IHRvIGJvb2sgZm9yIHRpY2tldHMgZnJvbSB0aGUgY29uZm9ydCBvZiB5b3VyIGhvdXNlLCB5b3UgZG8gbm90IG5lZWQgdG8gZ2V0IG91dHNpZGUgcmlza2luZyB5b3VyIGhlYWx0aCBzaW5jZSB0aGUgY29yb25hIHBhbmVkZW1pYyxvciB5b3UgdmFsdWFibGUgY2FyIGZ1ZWwgLCBnZXQgeW91IHRpY2tldHMgZGVsaXZlcmVkIHRvIHlvdXIgZG9vciBzdGVwcyBhdCBhIGNsaWNrIG9mIGEgYnV0dG9uIC4uLlwiLFxyXG5pbWc6XCJodHRwczovL2QzbDY5czY5MGc4MzAyLmNsb3VkZnJvbnQubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA1LzAxMTgxMjA3L2hvdGVsLWJvb2tpbmctYXBwLmpwZ1wiXHJcbn0sXHJcbntcclxudGl0bGU6XCJCZWtodGVmXCIsXHJcbmRlc2NyaXB0aW9uOlwiWW91IGFsd2F5cyB3YW50ZWQgdG8gZ2V0IHJpZCBvZiBzb21lIG9sZCBzdHVmZiB5b3UgaGF2ZSBhdCBob21lICwgY2xvdGhlcyAsIGJyb2tlbiBlbGVjdHJvbmljcyAsIGR1bW1pZXMsIHBsYXRlcyB3aGF0ZXZlciAsIHJlbWVtYmVyIHRoaW5ncyB5b3UgbG9vayBhdCBhcyBnYXJiYWdlIGFyZSB0cmVhc3VyZXMgZm9yIG90aGVycyAsIG1ha2Ugc29tZSBtb25leSBieSBzZWxsaW5nIHVzZWQgc3R1ZmYgd2l0aCBiZWtodGVmIGVhc3kgc2ltcGxlIGFuZCB3aWxsIG1ha2UgeW91IHJpY2hcIixcclxuaW1nOlwiaHR0cHM6Ly93d3cuc3ByaW5nd2lzZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDYvcmV0YWlsLWlubm92YXRpb24tdXByaWdodC1sYWJzLXNlY29uaGFuZC1jbG90aGluZ18xMjgwXzEyODB4NzUwLmpwZ1wiXHJcbn0sXHJcbntcclxudGl0bGU6XCJUZmxpeFwiLFxyXG5kZXNjcmlwdGlvbjpcIndoeSBkb2VzIFR1bmlzYSBvbmx5IGhhdmUgdHYgc2VyaWVzIGluIFJhbWFkaGFuICwgd2VsbCBsZXQgbWUgZ2l2ZSBpdCB0byB5b3UgYmVjYXVzZSB0aGVyZSBpcyBubyBvbmUgZW5jb3VyYWdpbmcgdG8gbWFrZSBzb21lIHNlcmllcyBkdXJpbmcgdGhlIHllYXIgLCB3aXRoIFRmbGl4IHByb2R1Y2VycyBhbmQgZmlsbW1ha2VycyBjYW4gcG9zdCB0aGVyZSBtb3ZpZXMgb3IgdHYgc2VyaWVzIG9uIHRoZSBwbGF0Zm9ybXMgYW5kIHdpdGggYSBsb3cgcHJpY2Ugc3Vic2NyaXB0aW9uIHBlb3BsZSBjYW4gd2F0Y2ggdGhlbSBhbmQgc3VwcG9ydCB0aGUgZmlsbSBpbmR1c3RyeSBpbiBvdXIgY291bnRyeSAhIEhvbGx5d29vZCB3ZSBhcmUgY29taW5nICEgXCIsXHJcbmltZzpcImh0dHBzOi8vd3d3Lm9kZW9uLmNvLnVrL21lZGlhL2J4NGhudmJwL3N1cGVyLXNhdmVyLXRvcC1iYW5uZXIuanBnXCJcclxufSxcclxue1xyXG50aXRsZTpcIlR1YmVyXCIsXHJcbmRlc2NyaXB0aW9uOlwiVHViZXIgc3RhbmRzIGZvciB0dW5pc2lhbiB1YmVyICwgYXJlJ250IHlvdSB0aXJlZCBvZiB3YWl0aW5nIGEgY2FiICEgZmlnaHRpbmcgb3ZlciBhIHRheGkgd2l0aCBzb21lIHJhbmRvbSBzdHJhbmdlciwgZ2V0dGluZyBsYXRlIGF0IHdvcmsgYmVjYXVzZSB0aGVyZSB3ZXJlIG5vIHRheGkgYXJvdW5kIG9yIGEgYnVzLiBUdWJlciB3aWxsIGFsbG93IGNpdmlsaWFuZCB0byBiZSBhIHBhcnQgb2YgdGhlIHRyYW5zcG9ydGF0aW9uIHN5c3RlbSBpbiB0aGUgY291bnRyeSBhbGxvd2luZyB0aGVtIHRvIHByb3ZpZGUgdGhlbSBzZWx2ZXMgYXMgZHJpdmVycyBhbmQgZ2V0IHBhaWQgZm9yIGl0IGFuZCB3aXRoIGxvY2F0aW9uIHRyYWNraW5nIHlvdSB3aWxsIGdldCBub3RpZmllZCB3aXRoIHRoZSBjbG9zZXN0IGRyaXZlciBhbmQgYmUgYWJsZSB0byBib29rIGFuZCBnZXQgYSByaWRlIHdoZW5ldmVyIGFuZCB3aGVyZWV2ZXIgeW91IGFyZVwiLFxyXG5pbWc6XCJodHRwczovL3d3dy5pdGRwLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9UcmFmZmljLVVTQS0xLWUxNTU4NjMyNjAyMjM2LmpwZ1wiXHJcbn0sXHJcbntcclxudGl0bGU6XCJQZXRzRmluZGVyXCIsXHJcbmRlc2NyaXB0aW9uOlwiRG9uJ3QgaGF0ZSBpdCB3aGVuIHlvdSByYWlzZSBhIHBldCBmb3Igc28gbG9uZyBhbmQgeW91IGdldCBhdHRjaGVkIHRvIGl0ICwgYnV0IHNvbWVkYXkgeW91IGZvcmdldCB0aGUgZG9vciBvcGVuIGFuZCBib29tIGhlIGZsZWVzICEgbm93IHlvdSBuZWVkIHRvIGJ1eSBwb3N0ZXJzIGFuZCBzdGljayB0aGVtIHRvIHRyZWVzIGFuZCBhbm5vdW5jZW1lbnQgYm9hcmQsIHdlbGwgbm8gbW9yZSBhbmltYWwgbG92ZXIgbm93IHlvdSBjYW4gcG9zdCBpbiBvdXIgYXBwIGFuZCBwZW9wbGUgd2lsbCBwcm92aWRlIGFuc3dlcnMgaWYgdGhleSBjYW4gaGVscCAsIHdlIG9ubHkgYWxsb3cgc2VyaW91cyBwZW9wbGUgYW5kIHdob20gYXJlIHJlYWR5IHRvIHByaXZpZGUgaGVscFwiLFxyXG5pbWc6XCJodHRwczovL2Nkbi50dGd0bWVkaWEuY29tL3Zpc3VhbHMvQ29tcHV0ZXJXZWVrbHkvSGVybyUyMEltYWdlcy9wZXRzLWNhdHMtZG9ncy1hZG9iZS1oZXJvLmpwZ1wiXHJcbn1cclxuXTtcclxuZXhwb3J0IGRlZmF1bHQgZGF0YTsiLCJcclxuaW1wb3J0ICogYXMgbWRiIGZyb20gJ21kYi11aS1raXQnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9mYWtlRGF0YS5qcydcclxuY29uc29sZS5sb2coZGF0YSk7XHJcbmV4cG9ydCBjb25zdCBSZXBvcnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvcnRQYWdlXCI+XHJcbiAgICAgICAgICAgXHJcbiAgXHJcbnsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuPGltZyBjbGFzc05hbWU9XCJteWltYWdlXCIgc3JjPVwiaHR0cHM6Ly93d3cucmVjcnV0ZXIudG4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDgvQ2FyZWVycy0xMjAuanBnXCIgYWx0PVwiLi4uXCIvPlxyXG48c3BhbiBjbGFzc05hbWU9XCJtZlwiPvCfpJPwn6ST8J+kkzwvc3Bhbj5cclxuPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5UZXNsYTwvc3Bhbj5cclxuPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5FbG9uIE11c2sgaXMgYSBTb3V0aCBBZnJpY2FuLWJvcm4gQW1lcmljYW4gZW50cmVwcmVuZXVyIGFuZCBidXNpbmVzc21hbiB3aG8gZm91bmRlZCBYLmNvbSBpbiAxOTk5ICh3aGljaCBsYXRlciBiZWNhbWUgUGF5UGFsKSwgU3BhY2VYIGluIDIwMDIgYW5kIFRlc2xhIE1vdG9ycyBpbiAyMDAzIC4uLjwvcD5cclxuPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5EaXNjb3ZlcjwvYnV0dG9uPlxyXG48L2Rpdj4gKi99XHJcbntkYXRhLm1hcCgoZSxpKT0+PGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtpfT5cclxuPGltZyBjbGFzc05hbWU9XCJteWltYWdlXCIgc3JjPXtlLmltZ30gYWx0PVwiLi4uXCIvPlxyXG48c3BhbiBjbGFzc05hbWU9XCJtZlwiPuKtkOKtkOKtkOKtkOKtkDwvc3Bhbj5cclxuPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj57ZS50aXRsZX08L3NwYW4+XHJcbjxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2UuZGVzY3JpcHRpb24uc2xpY2UoMCw4MCkgKyAnIC4uLid9PC9wPlxyXG48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPkRpc2NvdmVyPC9idXR0b24+XHJcbjwvZGl2PlxyXG4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWRiLXVpLWtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==