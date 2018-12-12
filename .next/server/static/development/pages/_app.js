module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// Footer component
var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1571318411"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-1571318411"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1571318411"
  }, "contact information: info@newssite.com")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1571318411",
    css: "footer.jsx-1571318411{background-color:#a19f9f;max-width:100%%;font-size:0.8em;text-align:center;color:#a19f9f;clear:both;margin-right:36px;margin-left:36px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTHVrYXNcXERlc2t0b3BcXFdlYkRldkFwcENhLW1hc3RlclxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1vQixBQUkwQyx5QkFDVCxnQkFDQSxnQkFDRSxrQkFDSixjQUNILFdBQ00sa0JBQ0QsaUJBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTHVrYXNcXERlc2t0b3BcXFdlYkRldkFwcENhLW1hc3RlclxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9vdGVyIGNvbXBvbmVudFxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8cD5jb250YWN0IGluZm9ybWF0aW9uOiBpbmZvQG5ld3NzaXRlLmNvbTwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ExOWY5ZjtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTE5ZjlmO1xuICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDozNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj4gXG4gKVxuIFxuIGV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0= */\n/*@ sourceURL=C:\\Users\\Lukas\\Desktop\\WebDevAppCa-master\\components\\Footer.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1139344092"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1139344092"
  }, "Lukas Meiliunas X00139670"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1139344092",
    css: ".jsx-1139344092{font-family:\"BOLD\";color:#535151;padding:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTHVrYXNcXERlc2t0b3BcXFdlYkRldkFwcENhLW1hc3RlclxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9vQixBQUlvQyxtQkFDTCxjQUNELGFBQ0ksa0JBSXpCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTHVrYXNcXERlc2t0b3BcXFdlYkRldkFwcENhLW1hc3RlclxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgPGgyPkx1a2FzIE1laWxpdW5hcyBYMDAxMzk2NzA8L2gyPlxuICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgIGgye31cbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJCT0xEXCI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1MzUxNTE7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj4gXG4gKVxuIFxuIGV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\Users\\Lukas\\Desktop\\WebDevAppCa-master\\components\\Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

// This component is is used to customise the HTML head section


var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/style.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "My Website"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3687847312"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3687847312"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3687847312"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3687847312"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3687847312"
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3687847312"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/news"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3687847312"
  }, "News"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3687847312"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/business"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3687847312"
  }, "Business"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3687847312"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sport"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3687847312"
  }, "Sport"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3687847312"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/weather"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3687847312"
  }, "Weather"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3687847312",
    css: "nav.jsx-3687847312{max-width:1485px;background:rgb(240,248,255);border:1px solid #ccc;border-right:none;margin-left:36px;margin-right:36px;}nav.jsx-3687847312 ul.jsx-3687847312{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0;}nav.jsx-3687847312 ul.jsx-3687847312 li.jsx-3687847312{list-style:none;float:left;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;text-align:center;border-left:1px solid #fff;border-right:1px solid #ccc;}nav.jsx-3687847312 ul.jsx-3687847312 li.jsx-3687847312:first-child{border-left:none;}nav.jsx-3687847312 ul.jsx-3687847312 li.jsx-3687847312 a.jsx-3687847312{font-size:0.8em;display:block;-webkit-text-decoration:none;text-decoration:none;color:black;padding:5px 0;}nav.jsx-3687847312 ul.jsx-3687847312 li.jsx-3687847312:hover{background:rgb(240,248,255);}nav.jsx-3687847312 ul.jsx-3687847312 li.jsx-3687847312 a.jsx-3687847312:hover{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTHVrYXNcXERlc2t0b3BcXFdlYkRldkFwcENhLW1hc3RlclxcY29tcG9uZW50c1xcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCbUIsQUFHNkIsQUFVSCxBQU9HLEFBVUMsQUFJRCxBQVFjLEFBR2xCLFlBQ2hCLElBekJlLEFBY0csQ0EvQmdCLEFBMkJsQyxVQVRnQixDQXFCaEIsRUFQeUIsZUEvQkMsc0JBQ0osT0FRQyxNQXVCUCxLQTlCSSxPQStCRixNQWZJLElBZkQsSUErQnJCLFVBZitCLElBZi9CLHVCQU1hLEFBVW1CLFNBVGxCLFVBQ2QsU0FVQSIsImZpbGUiOiJDOlxcVXNlcnNcXEx1a2FzXFxEZXNrdG9wXFxXZWJEZXZBcHBDYS1tYXN0ZXJcXGNvbXBvbmVudHNcXE5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gICA8ZGl2PlxuICAgICAgIDxuYXY+XG4gICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2luZGV4XCI+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL25ld3NcIj48YT5OZXdzPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvYnVzaW5lc3NcIj48YT5CdXNpbmVzczwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Nwb3J0XCI+PGE+U3BvcnQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi93ZWF0aGVyXCI+PGE+V2VhdGhlcjwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgPC91bD5cbiAgICAgICA8L25hdj5cbiAgICAgICB7LyogRGVmaW5lIGNzcyBmb3IgdGhpcyBwYWdlIG9yIGNvbXBvbmVudCAqL31cbiAgICAgICB7LyogTm90ZSBiYWNrIHRpY2tzIGBgIHN1cnJvdW5kaW5nIGNzcyBhcmUgcmVxdWlyZWQgKi99XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOjE0ODVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDI0OCwgMjU1KTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDozNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjM2cHg7XG4gICAgICAgIH1cblxuXG4gICAgICAgIG5hdiB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYgdWwgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcblxuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHVsIGxpIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYgdWwgbGk6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjQ4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIG5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgIDwvZGl2PiBcbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Lukas\\Desktop\\WebDevAppCa-master\\components\\Nav.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import page components




 // Build the page template from components

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Pageprops
// 
// Import App and Container dependencies
 // Import the Page component

 // Define the custom App - a class which extents the default App

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      // Compent will be the page content
      // e.g. index or about
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return (// Container contains page content
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps)))
      );
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map