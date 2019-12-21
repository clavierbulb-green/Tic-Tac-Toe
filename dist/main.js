/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":root {\\n  --board_side_length: 84vmin;\\n  --backdrop_offset_long: 35vmin;\\n  --backdrop_offset_short: 6vmin;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/* || container div for the game board */\\n.app {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n  overflow: hidden;\\n}\\n\\n/* || The game board */\\n#board {\\n  position: relative;\\n  width: var(--board_side_length);\\n  height: var(--board_side_length);\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-template-rows: 1fr 1fr 1fr;\\n  grid-gap: 5vmin;\\n}\\n\\n/* || Square offset backdrops to appear behind game board */\\n#board::before,\\n#board::after {\\n  position: absolute;\\n  width: var(--board_side_length);\\n  height: var(--board_side_length);\\n  content: \\\"\\\";\\n}\\n\\n#board::before {\\n  z-index: -10;\\n  background-color: rgba(120, 144, 156, 0.7);\\n}\\n\\n#board::after {\\n  z-index: -5;\\n  background-color: rgba(96, 125, 184, 0.5);\\n}\\n\\n@media (orientation: portrait) {\\n  #board::before {\\n    bottom: var(--backdrop_offset_long);\\n    left: var(--backdrop_offset_short);\\n  }\\n\\n  #board::after {\\n    top: var(--backdrop_offset_long);\\n    right: var(--backdrop_offset_short);\\n  }\\n}\\n@media (orientation: landscape) {\\n  #board::before {\\n    bottom: var(--backdrop_offset_short);\\n    right: var(--backdrop_offset_long);\\n  }\\n\\n  #board::after {\\n    top: var(--backdrop_offset_short);\\n    left: var(--backdrop_offset_long);\\n  }\\n}\\n/* || A Square on the game board */\\n#board .square {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: \\\"Source Code Pro\\\", monospace;\\n  text-align: center;\\n  background-color: rgba(254, 250, 250, 0.7);\\n  box-shadow: 0.5vmin 0.5vmin 1vmin rgba(38, 50, 56, 0.6);\\n  opacity: 0.8;\\n  transition: background-color 250ms ease-in-out;\\n}\\n\\n#board .square:hover {\\n  background-color: #fefafa;\\n}\\n\\n/* || Backdrop of letters spelling 'Tic Tac Toe', with each letter appearing\\n* behind a square on the game board */\\n#board .square::before {\\n  position: absolute;\\n  z-index: -1;\\n  font-size: 10vmin;\\n  color: rgba(26, 52, 65, 0.6);\\n  content: \\\"\\\";\\n}\\n\\n#board .square:hover::before {\\n  color: rgba(26, 52, 65, 0.2);\\n}\\n\\n#board .square:first-child::before {\\n  content: \\\"t\\\";\\n  font-weight: bold;\\n}\\n\\n#board .square:nth-child(2)::before {\\n  content: \\\"i\\\";\\n}\\n\\n#board .square:nth-child(3)::before {\\n  content: \\\"c\\\";\\n}\\n\\n#board .square:nth-child(4)::before {\\n  content: \\\"t\\\";\\n}\\n\\n#board .square:nth-child(5)::before {\\n  content: \\\"a\\\";\\n}\\n\\n#board .square:nth-child(6)::before {\\n  content: \\\"c\\\";\\n}\\n\\n#board .square:nth-child(7)::before {\\n  content: \\\"t\\\";\\n}\\n\\n#board .square:nth-child(8)::before {\\n  content: \\\"o\\\";\\n}\\n\\n#board .square:nth-child(9)::before {\\n  content: \\\"e\\\";\\n}\\n\\n/* Capitalize the first letter in each row of the backdrop (i.e. the 'T's in\\n* 'Tic Tac Toe') */\\n#board .square:nth-child(3n+1)::before {\\n  text-transform: uppercase;\\n}\\n\\n/* Bring out a diagonal moving from the upper-left to the lower-right of the board\\n* among the letters in the backdrop (so it looks like a winning set of squares\\n* in Tic Tac Toe */\\n#board .square:nth-child(4n+1)::before {\\n  font-size: 14vmin;\\n  text-decoration: underline;\\n  text-decoration-thickness: 1.5vmin;\\n}\\n\\n/* || A Mark drawn on a square */\\n#board .square .mark {\\n  font-size: 22vmin;\\n  color: rgba(208, 38, 0, 0.9);\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction addModulesToDom(id, list, options) {\n  id = options.base ? id + options.base : id;\n\n  if (!stylesInDom[id]) {\n    stylesInDom[id] = [];\n  }\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var part = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n    var styleInDomById = stylesInDom[id];\n\n    if (styleInDomById[i]) {\n      styleInDomById[i].updater(part);\n    } else {\n      styleInDomById.push({\n        updater: addStyle(part, options)\n      });\n    }\n  }\n\n  for (var j = list.length; j < stylesInDom[id].length; j++) {\n    stylesInDom[id][j].updater();\n  }\n\n  stylesInDom[id].length = list.length;\n\n  if (stylesInDom[id].length === 0) {\n    delete stylesInDom[id];\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (id, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  addModulesToDom(id, list, options);\n  return function update(newList) {\n    addModulesToDom(id, newList || [], options);\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const display = (() => {\n  const DOMBoard = document.getElementById(\"board\");\n\n  const init = () => {\n    /* Populate DOMBoard with empty squares containing blank marks. */\n\n    for (let row = 0; row < 3; row++) {\n      for (let col = 0; col < 3; col++) {\n        let square = document.createElement(\"div\");\n        square.classList.add(\"square\");\n        square.dataset.row = row;\n        square.dataset.col = col;\n\n        let mark = document.createElement(\"span\");\n        mark.classList.add(\"mark\");\n        square.appendChild(mark);\n\n        DOMBoard.appendChild(square);\n      }\n    }\n  }\n\n  const clear = () => {\n    for (let i = 0; i < DOMBoard.children.length; i++) {\n      let square = DOMBoard.children[i];\n      square.firstChild.textContent = \"\";\n    }\n  }\n\n  const render = (board) => {\n    clear();\n    for (let i = 0; i < DOMBoard.children.length; i++) {\n      let square = DOMBoard.children[i];\n      let row = square.dataset.row;\n      let col = square.dataset.col;\n      let marker = board[row][col];\n      square.firstChild.textContent = marker;\n    }\n  }\n\n  return {\n    init,\n    render,\n  }\n})();\n\nmodule.exports = display;\n\n\n//# sourceURL=webpack:///./src/display.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const gameBoard = (() => {\n  const board = [[],[],[]];\n  const mark = (row, column, marker) => {\n    if (!board[row][column]) {\n      board[row][column] = marker;\n    }\n  };\n  const clear = () => {\n    board.forEach(row => {\n      row.length = 0;\n    })\n  }\n  const isFull = () => {\n    return board.flat().length === 9;\n  }\n  return {\n    board,\n    mark,\n    clear,\n    isFull,\n  }\n})();\nmodule.exports = gameBoard;\n\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nconst gameBoard = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\nconst display = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\ndisplay.init()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar id = \"!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss\";\nvar update = api(id, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });