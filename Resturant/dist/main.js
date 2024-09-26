/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./src/modules.js\");\n\n\nconst content_display = document.getElementById(\"content\");\n\nconst home_div = document.getElementById(\"home\");\nconst menu_div = document.getElementById(\"menu\");\nconst about_div = document.getElementById(\"about\");\n\nfunction InitialReload() {\n    home_div.addEventListener(\"click\", function(){\n        content_display.innerHTML = '';\n        new _modules__WEBPACK_IMPORTED_MODULE_0__.Home(content_display);\n\n    });\n    menu_div.addEventListener(\"click\", function(){\n        content_display.innerHTML = '';\n        new _modules__WEBPACK_IMPORTED_MODULE_0__.Menu(content_display);\n    });\n    about_div.addEventListener(\"click\", function(){\n        content_display.innerHTML = '';\n        new _modules__WEBPACK_IMPORTED_MODULE_0__.AboutUs(content_display);\n    })\n};\nfunction ClearContent(){\n    while(content_display.firstchild){\n        content_display.removeChild(content_display.firstchild);\n    };\n};\nInitialReload();\n\n\n//# sourceURL=webpack://resturant/./src/index.js?");

/***/ }),

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutUs: () => (/* binding */ AboutUs),\n/* harmony export */   Home: () => (/* binding */ Home),\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\nfunction Home(location_) {\n    const text = document.createElement(\"h1\");\n    const button_ = document.createElement(\"button\");\n    text.innerHTML = \"Hahahahhaha\"\n    location_.appendChild(text);\n    location_.appendChild(button_);\n};\n\n\nfunction Menu(location_){\n    const text = document.createElement(\"h1\");\n    const button_ = document.createElement(\"button\");\n    text.innerHTML = \"Leeeee\"\n    location_.appendChild(text);\n    location_.appendChild(button_);\n};\n\nfunction AboutUs(location_){\n    const text = document.createElement(\"h1\");\n    const button_ = document.createElement(\"button\");\n    text.innerHTML = \"Pussy Yat Chin tal\"\n    location_.appendChild(text);\n    location_.appendChild(button_);\n};\n\n//# sourceURL=webpack://resturant/./src/modules.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;