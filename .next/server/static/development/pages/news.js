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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
var _ref;



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Import Dependencies

 // Array for dropdown

var options = [{
  value: 'top-headlines?country=ie',
  label: 'top-headlines'
}, (_ref = {
  value: 'business',
  label: 'Business News'
}, _defineProperty(_ref, "value", 'everything?q=technology'), _defineProperty(_ref, "label", 'Tech news'), _ref)]; //
// Define SearchForm Class
//

var SearchForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchForm, _Component);

  // constructor accepts props and initialises state
  function SearchForm(props) {
    var _this;

    _classCallCheck(this, SearchForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formSubmitted", function (event) {
      // Validate input value
      if (event.target.newsSource.value != "") {
        _this.props.setNewsSource(event.target.newsSource.value);
      } // prevent page reload (prevent submit)


      event.preventDefault();
    });

    _this.state = {
      selectedOption: null
    };

    _this.handleChange = function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      console.log("Option selected:", selectedOption);
    };

    return _this;
  } //
  // an event handler for form submit
  //


  _createClass(SearchForm, [{
    key: "render",
    // Render the form
    value: function render() {
      var selectedOption = this.state.selectedOption;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-320147962"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "search",
        className: "jsx-320147962"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.formSubmitted,
        className: "jsx-320147962"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        name: "newsSource",
        placeholder: "News Source name",
        type: "text",
        className: "jsx-320147962"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "jsx-320147962"
      }, "Update News"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "320147962",
        css: "input.jsx-320147962{margin-top:10px;margin-left:100px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTHVrYXNcXERlc2t0b3BcXFdlYkRldkFwcENhLW1hc3RlclxcY29tcG9uZW50c1xcU2VhcmNoRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRW9CLEFBSStCLGdCQUNFLGtCQUNBLGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXEx1a2FzXFxEZXNrdG9wXFxXZWJEZXZBcHBDYS1tYXN0ZXJcXGNvbXBvbmVudHNcXFNlYXJjaEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cblxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuXG5cblxuXG4vLyBBcnJheSBmb3IgZHJvcGRvd25cbmNvbnN0IG9wdGlvbnMgPSBbXG4gIHsgdmFsdWU6ICd0b3AtaGVhZGxpbmVzP2NvdW50cnk9aWUnLCBsYWJlbDogJ3RvcC1oZWFkbGluZXMnICx9LFxuICB7IHZhbHVlOiAnYnVzaW5lc3MnLCBsYWJlbDogJ0J1c2luZXNzIE5ld3MnLFxuICAgIHZhbHVlOiAnZXZlcnl0aGluZz9xPXRlY2hub2xvZ3knICxsYWJlbDogJ1RlY2ggbmV3cycgfVxuXTtcblxuLy9cbi8vIERlZmluZSBTZWFyY2hGb3JtIENsYXNzXG4vL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIGNvbnN0cnVjdG9yIGFjY2VwdHMgcHJvcHMgYW5kIGluaXRpYWxpc2VzIHN0YXRlXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtzZWxlY3RlZE9wdGlvbjogbnVsbH07XG4gXG4gICAgXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSAoc2VsZWN0ZWRPcHRpb24pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb24gfSk7XG4gICAgY29uc29sZS5sb2coYE9wdGlvbiBzZWxlY3RlZDpgLCBzZWxlY3RlZE9wdGlvbik7XG4gIH1cbn1cblxuICAvL1xuICAvLyBhbiBldmVudCBoYW5kbGVyIGZvciBmb3JtIHN1Ym1pdFxuICAvL1xuICBmb3JtU3VibWl0dGVkID0gZXZlbnQgPT4ge1xuICAgIC8vIFZhbGlkYXRlIGlucHV0IHZhbHVlXG4gICAgaWYgKGV2ZW50LnRhcmdldC5uZXdzU291cmNlLnZhbHVlICE9IFwiXCIpIHtcbiAgICAgIHRoaXMucHJvcHMuc2V0TmV3c1NvdXJjZShldmVudC50YXJnZXQubmV3c1NvdXJjZS52YWx1ZSk7XG4gICAgfVxuICAgIC8vIHByZXZlbnQgcGFnZSByZWxvYWQgKHByZXZlbnQgc3VibWl0KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLy8gUmVuZGVyIHRoZSBmb3JtXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7c2VsZWN0ZWRPcHRpb259ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiBTZWFyY2ggSW5wdXQgKi99XG4gICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hcIj5cbiAgICAgICAgICB7LyogTm90ZSBldmVudCBoYW5kbGVyICovfVxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmZvcm1TdWJtaXR0ZWR9PlxuICAgICAgICAgICAgey8qIFRoZSBpbnB1dCBmaWVsZCAqL31cblxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJuZXdzU291cmNlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXdzIFNvdXJjZSBuYW1lXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBCdXR0b24gY2xpY2sgd2lsbCB0cmlnZ2VyIHN1Ym1pdCAqL31cbiAgICAgICAgICAgIDxidXR0b24+VXBkYXRlIE5ld3M8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwMHB4O1xuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICApO1xuICAgIFxuICB9XG59XG4iXX0= */\n/*@ sourceURL=C:\\Users\\Lukas\\Desktop\\WebDevAppCa-master\\components\\SearchForm.js */"
      }));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchForm */ "./components/SearchForm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_7__);


var _ref;



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Passing from child to parent
// https://www.robinwieruch.de/react-pass-props-to-component/#react-props
//
// Imports
//
// This is the Link API
 // Import fetch library

 // mport SearchForm Component



 //(free version) API key from  https://newsapi.org/
// Get your own key!

var apiKey = 'c1b73b50268e4a0fab20976201d64abf';
 // Initial News source

var defaultNewsSource = 'the-irish-times';
var options = [{
  value: 'top-headlines?country=ie',
  label: 'top-headlines'
}, (_ref = {
  value: 'business',
  label: 'Business News'
}, _defineProperty(_ref, "value", 'everything?q=technology'), _defineProperty(_ref, "label", 'Tech news'), _ref)]; //
// async method fetches and returns data from a url
//

function getNews(_x) {
  return _getNews.apply(this, arguments);
} //
//  The News page defined as an ES6 Class
//


function _getNews() {
  _getNews = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url);

          case 3:
            res = _context3.sent;
            _context3.next = 6;
            return res.json();

          case 6:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));
  return _getNews.apply(this, arguments);
}

var News =
/*#__PURE__*/
function (_React$Component) {
  _inherits(News, _React$Component);

  // Constructor
  // Recieve props and initialise state properties
  function News(props) {
    var _this;

    _classCallCheck(this, News);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(News).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setNewsSource", function (input) {
      _this.setState({
        newsSource: input,
        url: "https://newsapi.org/v2/everything?q=".concat(input, "&apiKey=").concat(apiKey)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchNewsAPI", function (event) {
      _this.setState({
        newsSource: "".concat(event.target.innerText),
        url: "https://newsapi.org/v2/everything?q=".concat(event.target.innerText, "&apiKey=").concat(apiKey)
      });

      console.log(_this.state.url);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formatDate", function (input) {
      var date = new Date(input);
      var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
      var day = week[date.getDay()];
      var month = months[date.getMonth()];
      var year = date.getFullYear();
      var hours = date.getHours();
      var mins = date.getMinutes().toString().padStart(2, '0');
      var secs = date.getSeconds();
      var output = "".concat(day, " ").concat(month, " ").concat(year, " ").concat(hours, ":").concat(mins, " ").concat(secs, "s");
      return output.toString();
    });

    _this.state = {
      newsSource: "",
      url: "",
      articles: [],
      selectedOption: null
    };

    _this.handleChange = function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      console.log("Option selected:", selectedOption);
    };

    return _this;
  } // This function is passed to the SearchForm and used the get the value entered
  // This value will be used to generate the api url


  _createClass(News, [{
    key: "render",
    //
    // render() method generates the page
    //
    value: function render() {
      var _this2 = this;

      // if state.articles is empty copy props to it
      if (this.state.articles.length == 0) {
        this.state.articles = this.props.articles;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-968356718"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SearchForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        setNewsSource: this.setNewsSource
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "jsx-968356718" + " " + "newsMenu"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "jsx-968356718"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?country=ie",
        className: "jsx-968356718"
      }, "Top Headlines Ireland")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "jsx-968356718"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?country=ie&category=business",
        className: "jsx-968356718"
      }, "Business News Ireland")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "jsx-968356718"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "everything?q=technology",
        className: "jsx-968356718"
      }, "Technology News")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "jsx-968356718"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        onClick: this.searchNewsAPI,
        name: "top-headlines?country=ie&category=weather",
        className: "jsx-968356718"
      }, "Weather in Ireland"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "jsx-968356718"
      }, this.state.newsSource.split("-").join(" ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-968356718"
      }, this.state.articles.map(function (article, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
          key: index,
          className: "jsx-968356718"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          className: "jsx-968356718"
        }, article.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "jsx-968356718" + " " + "author"
        }, article.author, _this2.formatDate(article.publishedAt)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: article.urlToImage,
          alt: "article image",
          className: "jsx-968356718" + " " + "img-article"
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "jsx-968356718"
        }, article.description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "jsx-968356718"
        }, article.content), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "jsx-968356718"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          as: "/article/".concat(index),
          href: "/article?id=".concat(index)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "jsx-968356718"
        }, "Read More"))));
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "968356718",
        css: "section.jsx-968356718{max-width:1485px;border:1px solid gray;background-color:rgb(240,248,255);padding:1em;margin-top:10px;margin-left:36px;margin-right:36px;text-align:center;}.author.jsx-968356718{font-style:italic;font-size:0.8em;}.img-article.jsx-968356718{max-width:50%;}.newsMenu.jsx-968356718{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0;margin-top:20px;margin-left:30em;}.newsMenu.jsx-968356718 li.jsx-968356718{display:inline-table;padding-left:20px;}.newsMenu.jsx-968356718 li.jsx-968356718 a.jsx-968356718{font-size:1em;color:blue;display:block;-webkit-text-decoration:none;text-decoration:none;}.newsMenu.jsx-968356718 li.jsx-968356718 a.jsx-968356718:hover{color:rgb(255,187,0);-webkit-text-decoration:underline;text-decoration:underline;}.dropdown.jsx-968356718 .dropbtn.jsx-968356718{font-size:16px;border:none;outline:none;color:white;padding:14px 16px;background-color:inherit;margin:0;}.navbar.jsx-968356718 a.jsx-968356718:hover,.dropdown.jsx-968356718:hover .dropbtn.jsx-968356718{background-color:red;}.dropdown-content.jsx-968356718{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;}.dropdown-content.jsx-968356718 a.jsx-968356718{float:none;color:black;padding:12px 16px;-webkit-text-decoration:none;text-decoration:none;display:block;text-align:left;}.dropdown-content.jsx-968356718 a.jsx-968356718:hover{background-color:#ddd;}.dropdown.jsx-968356718:hover .dropdown-content.jsx-968356718{display:block;}.newsMenu.jsx-968356718{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0;margin-top:20px;margin-left:30em;}.newsMenu.jsx-968356718 li.jsx-968356718{display:inline-table;padding-left:20px;}.newsMenu.jsx-968356718 li.jsx-968356718 a.jsx-968356718{font-size:1em;color:blue;display:block;-webkit-text-decoration:none;text-decoration:none;}.newsMenu.jsx-968356718 li.jsx-968356718 a.jsx-968356718:hover{color:rgb(255,187,0);-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTHVrYXNcXERlc2t0b3BcXFdlYkRldkFwcENhLW1hc3RlclxccGFnZXNcXG5ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0lvQixBQUlpQyxBQVdFLEFBSUosQUFJSCxBQVFRLEFBS1AsQUFPUyxBQVFSLEFBWU0sQUFLUixBQVVGLEFBVVcsQUFLUixBQUdELEFBUVEsQUFLUCxBQU9TLFdBckNYLEVBVk0sQ0FqRGxCLEFBaUJXLEFBeURiLEFBZ0JhLENBMURDLEVBL0NZLENBV04sR0FnQkEsQUFZUSxBQW9CNUIsQUF5Q29CLEFBWVEsQ0E1QjVCLENBVG9CLEVBMUNKLEFBeUVBLEVBMURELElBaUJZLEdBckR6QixLQVhzQyxBQTJCeEMsQUFNdUIsQUFtRXZCLEFBTXVCLENBMURULENBMkJTLFdBMUJILElBZ0JGLGNBZlMsRUFnQm1CLENBakU5QixDQWlCSyxBQXlFQSxPQXBEckIsQUF5RUEsSUE5R29CLElBZ0NwQixBQXlFQSxFQS9CZ0IsSUF4QkwsTUFqRFUsR0FrRHJCLENBd0JrQixXQVZOLEVBL0RVLEdBMEV0QixLQVZBLFVBL0RzQixPQWNYLEFBeUVBLFNBeEVDLEFBeUVBLEVBdkZWLFFBZWdCLEFBeUVBLGdCQXhFQyxBQXlFQSxpQkF4RW5CLEFBeUVBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTHVrYXNcXERlc2t0b3BcXFdlYkRldkFwcENhLW1hc3RlclxccGFnZXNcXG5ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYXNzaW5nIGZyb20gY2hpbGQgdG8gcGFyZW50XG4vLyBodHRwczovL3d3dy5yb2JpbndpZXJ1Y2guZGUvcmVhY3QtcGFzcy1wcm9wcy10by1jb21wb25lbnQvI3JlYWN0LXByb3BzXG5cbi8vXG4vLyBJbXBvcnRzXG4vL1xuXG4vLyBUaGlzIGlzIHRoZSBMaW5rIEFQSVxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gSW1wb3J0IGZldGNoIGxpYnJhcnlcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuLy8gbXBvcnQgU2VhcmNoRm9ybSBDb21wb25lbnRcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRm9ybSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuLy8oZnJlZSB2ZXJzaW9uKSBBUEkga2V5IGZyb20gIGh0dHBzOi8vbmV3c2FwaS5vcmcvXG4vLyBHZXQgeW91ciBvd24ga2V5IVxuY29uc3QgYXBpS2V5ID0gJ2MxYjczYjUwMjY4ZTRhMGZhYjIwOTc2MjAxZDY0YWJmJztcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1kcm9wZG93bidcbi8vIEluaXRpYWwgTmV3cyBzb3VyY2VcbmNvbnN0IGRlZmF1bHROZXdzU291cmNlID0gJ3RoZS1pcmlzaC10aW1lcyc7XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG4gIHsgdmFsdWU6ICd0b3AtaGVhZGxpbmVzP2NvdW50cnk9aWUnLCBsYWJlbDogJ3RvcC1oZWFkbGluZXMnICx9LFxuICB7IHZhbHVlOiAnYnVzaW5lc3MnLCBsYWJlbDogJ0J1c2luZXNzIE5ld3MnLFxuICAgIHZhbHVlOiAnZXZlcnl0aGluZz9xPXRlY2hub2xvZ3knICxsYWJlbDogJ1RlY2ggbmV3cycgfVxuXTtcblxuXG5cbi8vXG4vLyBhc3luYyBtZXRob2QgZmV0Y2hlcyBhbmQgcmV0dXJucyBkYXRhIGZyb20gYSB1cmxcbi8vXG5hc3luYyBmdW5jdGlvbiBnZXROZXdzKHVybCkge1xuXG4gIC8vIHRyeSBmZXRjaCBhbmQgY2F0Y2ggYW55IGVycm9yc1xuICB0cnkge1xuICAgIC8vIE1ha2UgYXN5bmMgY2FsbFxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgLy8gZ2V0IGpzb24gZGF0YSB3aGVuIGl0IGFycml2ZXNcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAvLyByZXR1cm4ganNvbiBkYXRhXG4gICAgcmV0dXJuIChkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyByZXR1cm4gZXJyb3IgaWYgaXQgb2NjdXJzXG4gICAgcmV0dXJuIChlcnJvcik7XG4gIH1cbn1cblxuLy9cbi8vICBUaGUgTmV3cyBwYWdlIGRlZmluZWQgYXMgYW4gRVM2IENsYXNzXG4vL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gQ29uc3RydWN0b3JcbiAgLy8gUmVjaWV2ZSBwcm9wcyBhbmQgaW5pdGlhbGlzZSBzdGF0ZSBwcm9wZXJ0aWVzXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5ld3NTb3VyY2U6IFwiXCIsXG4gICAgICB1cmw6IFwiXCIsXG4gICAgICBhcnRpY2xlczogW10sXG4gICAgICBzZWxlY3RlZE9wdGlvbjogbnVsbFxuICAgIH1cbiAgICBcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IChzZWxlY3RlZE9wdGlvbikgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkT3B0aW9uIH0pO1xuICAgICAgY29uc29sZS5sb2coYE9wdGlvbiBzZWxlY3RlZDpgLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgfVxuXG5cbiAgfVxuICBcbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gdGhlIFNlYXJjaEZvcm0gYW5kIHVzZWQgdGhlIGdldCB0aGUgdmFsdWUgZW50ZXJlZFxuICAvLyBUaGlzIHZhbHVlIHdpbGwgYmUgdXNlZCB0byBnZW5lcmF0ZSB0aGUgYXBpIHVybFxuICBzZXROZXdzU291cmNlID0gKGlucHV0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdzU291cmNlOiBpbnB1dCxcbiAgICAgIHVybDogYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPSR7aW5wdXR9JmFwaUtleT0ke2FwaUtleX1gXG4gICAgfSlcbiAgfVxuXG4gXG4gIHNlYXJjaE5ld3NBUEkgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld3NTb3VyY2U6IGAke2V2ZW50LnRhcmdldC5pbm5lclRleHR9YCxcbiAgICAgIHVybDogYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPSR7ZXZlbnQudGFyZ2V0LmlubmVyVGV4dH0mYXBpS2V5PSR7YXBpS2V5fWBcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXJsKTtcbiAgfVxuXG4gIC8vXG4gIC8vIHJlbmRlcigpIG1ldGhvZCBnZW5lcmF0ZXMgdGhlIHBhZ2VcbiAgLy9cbiAgcmVuZGVyKCkge1xuXG4gICAgLy8gaWYgc3RhdGUuYXJ0aWNsZXMgaXMgZW1wdHkgY29weSBwcm9wcyB0byBpdFxuICAgIGlmICh0aGlzLnN0YXRlLmFydGljbGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnN0YXRlLmFydGljbGVzID0gdGhpcy5wcm9wcy5hcnRpY2xlcztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgXG4gICAgICAgIHsgfVxuICAgICAgICB7IH1cbiAgICAgICAgPFNlYXJjaEZvcm0gc2V0TmV3c1NvdXJjZT17dGhpcy5zZXROZXdzU291cmNlfSAvPlxuICAgICAgIFxuICAgICAgICB7fVxuICAgIFxuICAgIFxuICAgICAgXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuZXdzTWVudVwiPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoTmV3c0FQSX0gbmFtZT1cInRvcC1oZWFkbGluZXM/Y291bnRyeT1pZVwiPlRvcCBIZWFkbGluZXMgSXJlbGFuZDwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoTmV3c0FQSX0gbmFtZT1cInRvcC1oZWFkbGluZXM/Y291bnRyeT1pZSZjYXRlZ29yeT1idXNpbmVzc1wiPkJ1c2luZXNzIE5ld3MgSXJlbGFuZDwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoTmV3c0FQSX0gbmFtZT1cImV2ZXJ5dGhpbmc/cT10ZWNobm9sb2d5XCI+VGVjaG5vbG9neSBOZXdzPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5zZWFyY2hOZXdzQVBJfSBuYW1lPVwidG9wLWhlYWRsaW5lcz9jb3VudHJ5PWllJmNhdGVnb3J5PXdlYXRoZXJcIj5XZWF0aGVyIGluIElyZWxhbmQ8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIFxuICAgXG5cbiAgIFxuICAgXG4gICAgICAgIHsgLyogRGlzcGxheSBhIHRpdGxlIGJhc2VkIG9uIHNvdXJjZSAqL31cbiAgICAgICAgPGgzPnt0aGlzLnN0YXRlLm5ld3NTb3VyY2Uuc3BsaXQoXCItXCIpLmpvaW4oXCIgXCIpfTwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyAvKiBJdGVyYXRlIHRocm91Z2ggYXJ0aWNsZXMgdXNpbmcgQXJyYXkgbWFwKSAqL31cbiAgICAgICAgICB7IC8qIERpc3BsYXkgYXV0aG9yLCBwdWJsaXNoZWRBdCwgaW1hZ2UsIGRlc2NyaXB0aW9uLCBhbmQgY29udGVudCAqL31cbiAgICAgICAgICB7IC8qIGZvciBlYWNoIHN0b3J5LiBBbHNvIGEgbGluayBmb3IgbW9yZS4uICovfVxuICAgICAgICAgIHsgLyogdGhlIG1hcCBpbmRleCBwcm9wZXJ0eSBnaXZlcyB0aGUgcG9zaXRpb24gaW4gdGhlIGFycmF5IGZvciBlYWNoIGFydGljbGUgLSBzZWUgdGhlIGxpbmsgYmVsb3cgKi99XG4gICAgICAgICAge3RoaXMuc3RhdGUuYXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHNlY3Rpb24ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdXRob3JcIj57YXJ0aWNsZS5hdXRob3J9e3RoaXMuZm9ybWF0RGF0ZSggYXJ0aWNsZS5wdWJsaXNoZWRBdCl9PC9wPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17YXJ0aWNsZS51cmxUb0ltYWdlfSBhbHQ9XCJhcnRpY2xlIGltYWdlXCIgY2xhc3NOYW1lPVwiaW1nLWFydGljbGVcIj48L2ltZz5cbiAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgPHA+PExpbmsgYXM9e2AvYXJ0aWNsZS8ke2luZGV4fWB9IGhyZWY9e2AvYXJ0aWNsZT9pZD0ke2luZGV4fWB9PjxhPlJlYWQgTW9yZTwvYT48L0xpbms+PC9wPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC8qIENTUyBmb3IgdGhpcyBwYWdlICovXG4gICAgICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDoxNDg1cHg7ICBcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0OCwgMjU1KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltZy1hcnRpY2xlIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV3c01lbnUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld3NNZW51IGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXdzTWVudSBsaSBhIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV3c01lbnUgbGkgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAxODcsIDApO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICAuZHJvcGRvd24gLmRyb3BidG4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgbWFyZ2luOiAwOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIC5uYXZiYXIgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV3c01lbnUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld3NNZW51IGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gXG4gICAgICAgICAgICAubmV3c01lbnUgbGkgYSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgIC5uZXdzTWVudSBsaSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDE4NywgMCk7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4gICAgXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocmVzcG9uc2UpIHtcbiAgICBjb25zdCBkZWZhdWx0VXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9zb3VyY2VzPSR7ZGVmYXVsdE5ld3NTb3VyY2V9JmFwaUtleT0ke2FwaUtleX1gO1xuXG4gICAgLy8gR2V0IG5ld3MgZGF0YSBmcm9tIHRoZSBhcGkgdXJsXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldE5ld3MoZGVmYXVsdFVybCk7XG5cbiAgICAvLyBJZiB0aGUgcmVzdWx0IGNvbnRhaW5zIGFuZCBhcnRpY2xlcyBhcnJheSB0aGVuIGl0IGlzIGdvb2Qgc28gcmV0dXJuIGFydGljbGVzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5hcnRpY2xlcykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFydGljbGVzOiBkYXRhLmFydGljbGVzXG4gICAgICB9XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSBpdCBjb250YWlucyBhbiBlcnJvciwgbG9nIGFuZCByZWRpcmVjdCB0byBlcnJvciBwYWdlIChzdGF0dXMgY29kZSA0MDApXG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGRhdGEpXG4gICBcbiAgICB9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblxuICAgIC8vIENoZWNrIGlmIG5ld3NTb3VyY2UgdXJsIGhhcyBjaGFuZ2VkIHRvIGF2b2lkIHVuZWNlc3NhcnkgdXBkYXRlcyBcbiAgICBpZiAodGhpcy5zdGF0ZS51cmwgIT09IHByZXZTdGF0ZS51cmwpIHtcblxuICAgICAgLy8gVXNlIGFwaSB1cmwgKGZyb20gc3RhdGUpIHRvIGZldGNoIGRhdGEgYW5kIGNhbGwgZ2V0TmV3cygpXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TmV3cyh0aGlzLnN0YXRlLnVybCk7XG5cbiAgICAgIC8vIElmIHRoZSByZXN1bHQgY29udGFpbnMgYW5kIGFydGljbGVzIGFycmF5IHRoZW4gaXQgaXMgZ29vZCBzbyB1cGRhdGUgYXJ0aWNsZXNcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuYXJ0aWNsZXMpKSB7XG4gICAgICAgIC8vIFN0b3JlIGFydGljbGVzIGluIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUuYXJ0aWNsZXMgPSBkYXRhLmFydGljbGVzO1xuICAgICAgICAvLyBGb3JjZSBwYWdlIHVwZGF0ZSBieSBjaGFuZ2luZyBzdGF0ZSAobWFrZSBzdXJlIGl0IGhhcHBlbnMhKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIGl0IGNvbnRhaW5zIGFuIGVycm9yLCBsb2cgYW5kIHJlZGlyZWN0IHRvIGVycm9yIHBhZ2UgKHN0YXR1cyBjb2RlIDQwMClcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpXG4gICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9IC8vIEVuZCBjb21wb25lbnREaWRVcGRhdGVcblxuICBmb3JtYXREYXRlID0gKGlucHV0KSA9PiB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShpbnB1dCk7XG4gICAgdmFyIHdlZWsgPSBuZXcgQXJyYXkoJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5Jyk7XG4gICAgdmFyIG1vbnRocyA9IG5ldyBBcnJheSgnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywnQXVndXN0JywnU2VwdGVtYmVyJywnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcicpO1xuICAgIHZhciBkYXkgID0gd2Vla1tkYXRlLmdldERheSgpXTtcbiAgICBsZXQgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsJzAnKTtcbiAgICBsZXQgc2VjcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgXG4gICAgbGV0IG91dHB1dCA9ICBgJHtkYXl9ICR7bW9udGh9ICR7eWVhcn0gJHtob3Vyc306JHttaW5zfSAke3NlY3N9c2A7XG5cbiAgIFxuICAgcmV0dXJuIG91dHB1dC50b1N0cmluZygpO1xuICB9XG5cbn0gXG5cblxuIl19 */\n/*@ sourceURL=C:\\Users\\Lukas\\Desktop\\WebDevAppCa-master\\pages\\news.js */"
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(prevProps, prevState) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.state.url !== prevState.url)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return getNews(this.state.url);

              case 3:
                data = _context.sent;

                // If the result contains and articles array then it is good so update articles
                if (Array.isArray(data.articles)) {
                  // Store articles in state
                  this.state.articles = data.articles; // Force page update by changing state (make sure it happens!)

                  this.setState(this.state);
                } // Otherwise it contains an error, log and redirect to error page (status code 400)
                else {
                    console.error(data);
                  }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate(_x2, _x3) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }() // End componentDidUpdate

  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(response) {
        var defaultUrl, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                defaultUrl = "https://newsapi.org/v2/top-headlines?sources=".concat(defaultNewsSource, "&apiKey=").concat(apiKey); // Get news data from the api url

                _context2.next = 3;
                return getNews(defaultUrl);

              case 3:
                data = _context2.sent;

                if (!Array.isArray(data.articles)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", {
                  articles: data.articles
                });

              case 8:
                console.error(data);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x4) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/news.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/news.js */"./pages/news.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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

/***/ "react-dropdown":
/*!*********************************!*\
  !*** external "react-dropdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

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
//# sourceMappingURL=news.js.map