module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/feed/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/feed/[slug].js":
/*!******************************!*\
  !*** ./pages/feed/[slug].js ***!
  \******************************/
/*! exports provided: Feed, getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_feed_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/feed.module.css */ "./styles/feed.module.css");
/* harmony import */ var _styles_feed_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_feed_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\RBK\\Desktop\\rbk\\pages\\feed\\[slug].js";

const Feed = ({
  pageNumber,
  articles
}) => {
  console.log(articles, pageNumber);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,
    children: articles.filter(e => !e.title.toLowerCase().includes("watch")).map((e, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.post,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: e.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: e.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), !e.urlToImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://media.gettyimages.com/photos/tunisian-president-zine-elabidine-ben-ali-is-pictured-in-his-palace-picture-id108120822?s=612x612"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 25
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: e.urlToImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 174
      }, undefined)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 8
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 4
  }, undefined);
};
const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1
      }
    };
  }

  const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
    }
  }).then(res => res.json());
  const {
    articles
  } = apiResponse;
  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber)
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ }),

/***/ "./styles/feed.module.css":
/*!********************************!*\
  !*** ./styles/feed.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "feed_main__2Sxz3",
	"post": "feed_post__2Y8ia"
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmVlZC9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2ZlZWQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGZWVkIiwicGFnZU51bWJlciIsImFydGljbGVzIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIm1haW4iLCJmaWx0ZXIiLCJlIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFwIiwiaSIsInBvc3QiLCJkZXNjcmlwdGlvbiIsInVybFRvSW1hZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYWdlQ29udGV4dCIsInF1ZXJ5Iiwic2x1ZyIsInByb3BzIiwiYXBpUmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX05FV1NfS0VZIiwidGhlbiIsInJlcyIsImpzb24iLCJOdW1iZXIiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNPLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLFlBQUQ7QUFBWUM7QUFBWixDQUFELEtBQXlCO0FBQ3pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixFQUFxQkQsVUFBckI7QUFDQSxzQkFDRDtBQUFLLGFBQVMsRUFBRUksOERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSxjQUNLSixRQUFRLENBQUNLLE1BQVQsQ0FBaUJDLENBQUQsSUFBTSxDQUFDQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsV0FBUixHQUFzQkMsUUFBdEIsQ0FBK0IsT0FBL0IsQ0FBdkIsRUFBaUVDLEdBQWpFLENBQXFFLENBQUNKLENBQUQsRUFBR0ssQ0FBSCxrQkFDdEU7QUFBYSxlQUFTLEVBQUVSLDhEQUFNLENBQUNTLElBQS9CO0FBQUEsOEJBQ0M7QUFBQSxrQkFBS04sQ0FBQyxDQUFDQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUFBLGtCQUFJRCxDQUFDLENBQUNPO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxFQUdFLENBQUNQLENBQUMsQ0FBQ1EsVUFBSCxnQkFBZTtBQUFLLFdBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWYsZ0JBQW9LO0FBQUssV0FBRyxFQUFFUixDQUFDLENBQUNRO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIdEs7QUFBQSxPQUFVSCxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREM7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREM7QUFVSCxDQVpNO0FBYUEsTUFBTUksa0JBQWtCLEdBQUcsTUFBTUMsV0FBTixJQUFxQjtBQUNuRCxRQUFNakIsVUFBVSxHQUFHaUIsV0FBVyxDQUFDQyxLQUFaLENBQWtCQyxJQUFyQzs7QUFFQSxNQUFJLENBQUNuQixVQUFELElBQWVBLFVBQVUsR0FBRyxDQUE1QixJQUFpQ0EsVUFBVSxHQUFHLENBQWxELEVBQXFEO0FBQ25ELFdBQU87QUFDTG9CLFdBQUssRUFBRTtBQUNMbkIsZ0JBQVEsRUFBRSxFQURMO0FBRUxELGtCQUFVLEVBQUU7QUFGUDtBQURGLEtBQVA7QUFNRDs7QUFFRCxRQUFNcUIsV0FBVyxHQUFHLE1BQU1DLEtBQUssQ0FDNUIsbUVBQWtFdEIsVUFBVyxFQURqRCxFQUU3QjtBQUNFdUIsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsVUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9CQUFxQjtBQURuRDtBQURYLEdBRjZCLENBQUwsQ0FPeEJDLElBUHdCLENBT25CQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQVBZLENBQTFCO0FBU0EsUUFBTTtBQUFFN0I7QUFBRixNQUFlb0IsV0FBckI7QUFFQSxTQUFPO0FBQ0xELFNBQUssRUFBRTtBQUNMbkIsY0FBUSxFQUFFQSxRQURMO0FBRUxELGdCQUFVLEVBQUUrQixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JoQyxVQUFoQjtBQUZQO0FBREYsR0FBUDtBQU1ELENBN0JJO0FBK0JRRCxtRUFBZixFOzs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSxrRCIsImZpbGUiOiJwYWdlcy9mZWVkL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZmVlZC9bc2x1Z10uanNcIik7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9mZWVkLm1vZHVsZS5jc3MnXHJcbmV4cG9ydCBjb25zdCBGZWVkID0gKHtwYWdlTnVtYmVyLGFydGljbGVzfSk9PntcclxuICAgIGNvbnNvbGUubG9nKGFydGljbGVzLHBhZ2VOdW1iZXIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgIHthcnRpY2xlcy5maWx0ZXIoKGUpPT4gIWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcIndhdGNoXCIpICkubWFwKChlLGkpPT5cclxuICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgICA8aDE+e2UudGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57ZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgeyFlLnVybFRvSW1hZ2UgPzxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS5nZXR0eWltYWdlcy5jb20vcGhvdG9zL3R1bmlzaWFuLXByZXNpZGVudC16aW5lLWVsYWJpZGluZS1iZW4tYWxpLWlzLXBpY3R1cmVkLWluLWhpcy1wYWxhY2UtcGljdHVyZS1pZDEwODEyMDgyMj9zPTYxMng2MTJcIi8+IDo8aW1nIHNyYz17ZS51cmxUb0ltYWdlfS8+fVxyXG4gICAgICAgPC9kaXY+KX1cclxuICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyBwYWdlQ29udGV4dCA9PiB7XHJcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gcGFnZUNvbnRleHQucXVlcnkuc2x1ZztcclxuICBcclxuICAgIGlmICghcGFnZU51bWJlciB8fCBwYWdlTnVtYmVyIDwgMSB8fCBwYWdlTnVtYmVyID4gNSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBhcnRpY2xlczogW10sXHJcbiAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmcGFnZVNpemU9NSZwYWdlPSR7cGFnZU51bWJlcn1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05FV1NfS0VZfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgXHJcbiAgICBjb25zdCB7IGFydGljbGVzIH0gPSBhcGlSZXNwb25zZTtcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgYXJ0aWNsZXM6IGFydGljbGVzLFxyXG4gICAgICAgIHBhZ2VOdW1iZXI6IE51bWJlci5wYXJzZUludChwYWdlTnVtYmVyKSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlZWQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImZlZWRfbWFpbl9fMlN4ejNcIixcblx0XCJwb3N0XCI6IFwiZmVlZF9wb3N0X18yWThpYVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=